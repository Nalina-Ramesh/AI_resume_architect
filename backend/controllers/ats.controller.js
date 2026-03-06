const natural = require("natural");
const sw = require("stopword");
const cosineSimilarity = require("cosine-similarity");

const tokenizer = new natural.WordTokenizer();

function preprocess(text) {
  let tokens = tokenizer.tokenize(String(text || "").toLowerCase());
  tokens = sw.removeStopwords(tokens);
  return tokens;
}

function vectorize(tokens, vocabulary) {
  return vocabulary.map((word) => tokens.filter((t) => t === word).length);
}

function calculateATS(resumeText, jobDescription) {
  const resumeTokens = preprocess(resumeText);
  const jdTokens = preprocess(jobDescription);

  const vocabulary = [...new Set([...resumeTokens, ...jdTokens])];

  const resumeVector = vectorize(resumeTokens, vocabulary);
  const jdVector = vectorize(jdTokens, vocabulary);

  const similarity = vocabulary.length
    ? cosineSimilarity(resumeVector, jdVector)
    : 0;

  const atsScore = Number((similarity * 100).toFixed(2));

  const matchedKeywords = [...new Set(resumeTokens.filter((word) => jdTokens.includes(word)))].filter(
    (word) => word.length > 2
  );

  const missingKeywords = [...new Set(jdTokens.filter((word) => !resumeTokens.includes(word)))].filter(
    (word) => word.length > 2
  );

  return {
    score: Math.round(atsScore),
    atsScore,
    matchedKeywords: matchedKeywords.slice(0, 10),
    missingKeywords: missingKeywords.slice(0, 10),
    matchedCount: matchedKeywords.length,
    totalKeywords: [...new Set(jdTokens.filter((word) => word.length > 2))].length,
  };
}

const analyzeATS = (req, res) => {
  try {
    const { resumeText = "", jobDescription = "" } = req.body;

    if (!resumeText.trim() || !jobDescription.trim()) {
      return res.status(400).json({
        message: "Resume and job description are required",
      });
    }

    const result = calculateATS(resumeText, jobDescription);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error analyzing ATS score" });
  }
};

module.exports = { analyzeATS, calculateATS };

