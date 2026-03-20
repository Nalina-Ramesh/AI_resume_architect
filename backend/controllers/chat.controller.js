const { GoogleGenerativeAI } = require("@google/generative-ai");

const buildSystemPrompt = () => `You are CareerForge AI, a concise assistant for resume, ATS, and job-application help.
Give practical, actionable suggestions with bullets when appropriate.
Do not add markdown headings unless requested.
Always answer the user's exact question first, and avoid generic templates.
If details are missing, state assumptions in one line, then provide the best possible answer.
When useful, include a short example tailored to the asked role/topic.`;

const normalize = (value) => String(value || "").trim().toLowerCase();

const classifyIntent = (message) => {
  const text = normalize(message);
  if (!text) return "empty";
  if (/(cover\s*letter|letter\s*for\s*job)/i.test(text)) return "cover_letter";
  if (/(ats|applicant\s*tracking|keyword|score)/i.test(text)) return "ats";
  if (/(rewrite|bullet|experience|summary|resume|cv)/i.test(text)) return "resume";
  if (/(interview|tell\s*me\s*about\s*yourself|strength|weakness)/i.test(text)) return "interview";
  return "general";
};

const fallbackReply = (message) => {
  const text = String(message || "").trim();
  const intent = classifyIntent(text);

  if (!text) {
    return "Tell me your target role and I will suggest ATS-focused improvements.";
  }

  if (intent === "ats") {
    return [
      `For your question: "${text}"`,
      "Use this ATS-specific checklist:",
      "- Match exact job-title and skill keywords from the JD.",
      "- Add measurable impact in experience bullets.",
      "- Keep formatting simple (no tables/graphics in core resume).",
      "- Place top-matching skills in the first half of the resume.",
    ].join("\n");
  }

  if (intent === "resume") {
    return [
      `For your question: "${text}"`,
      "Resume-focused improvement approach:",
      "- Rewrite each bullet as: Action + Context + Result.",
      "- Prioritize role-relevant projects/skills first.",
      "- Remove vague lines and keep achievements specific.",
      "- Share one bullet here and I can rewrite it precisely.",
    ].join("\n");
  }

  if (intent === "cover_letter") {
    return [
      `For your question: "${text}"`,
      "Cover letter structure you can use:",
      "- Opening: role + why this company.",
      "- Middle: 2 achievements aligned with job needs.",
      "- Closing: clear value proposition + call to action.",
      "- Share job title and 2 achievements for a tailored draft.",
    ].join("\n");
  }

  if (intent === "interview") {
    return [
      `For your question: "${text}"`,
      "Interview-ready response pattern:",
      "- Use STAR (Situation, Task, Action, Result).",
      "- Keep answers 45–90 seconds.",
      "- Add one quantified outcome in each example.",
      "- I can draft a model answer if you share the role.",
    ].join("\n");
  }

  return [
    `For your question: "${text}"`,
    "I can help with resume tailoring, ATS optimization, cover letters, and interview prep.",
    "Share your target role (and optionally a job description) for a precise answer.",
  ].join("\n");
};

const chatWithAssistant = async (req, res) => {
  try {
    const { message = "", history = [] } = req.body || {};

    if (!String(message).trim()) {
      return res.status(400).json({ message: "message is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(200).json({ reply: fallbackReply(message), provider: "fallback" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const compactHistory = Array.isArray(history)
      ? history
          .slice(-8)
          .map((item) => `${item?.role === "user" ? "User" : "Assistant"}: ${item?.text || ""}`)
          .join("\n")
      : "";

    const prompt = `${buildSystemPrompt()}\n\nConversation:\n${compactHistory}\nUser Question: ${message}\nAssistant (answer this exact question directly):`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.5,
        topP: 0.9,
        maxOutputTokens: 600,
      },
    });

    const replyText = result?.response?.text?.();
    const reply = normalize(replyText) ? replyText : fallbackReply(message);

    return res.status(200).json({ reply, provider: "gemini" });
  } catch (error) {
    console.error(error);
    return res.status(200).json({ reply: fallbackReply(req.body?.message), provider: "fallback" });
  }
};

module.exports = { chatWithAssistant };

