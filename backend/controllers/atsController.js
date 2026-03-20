export const atsScore = async (req, res) => {

    try {
    
    const { resumeText, jobDescription } = req.body;
    
    if(!resumeText || !jobDescription){
    return res.status(400).json({error:"Missing resume or job description"});
    }
    
    const cleanText = (text) => {
    return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter(word => word.length > 2);
    };
    
    const resumeWords = cleanText(resumeText);
    const jobWords = cleanText(jobDescription);
    
    const jobKeywords = [...new Set(jobWords)];
    
    let matchedKeywords = [];
    let missingKeywords = [];
    
    jobKeywords.forEach(word => {
    
    if(resumeWords.includes(word)){
    matchedKeywords.push(word);
    }else{
    missingKeywords.push(word);
    }
    
    });
    
    const score = Math.round((matchedKeywords.length / jobKeywords.length) * 100);
    
    res.json({
    score,
    matchedKeywords,
    missingKeywords,
    totalKeywords: jobKeywords.length
    });
    
    } catch (error) {
    
    res.status(500).json(error);
    
    }
    
    };