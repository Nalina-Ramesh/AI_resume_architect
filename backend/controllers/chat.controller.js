const { GoogleGenerativeAI } = require("@google/generative-ai");

const buildSystemPrompt = () => `You are CareerForge AI, a concise assistant for resume, ATS, and job-application help.
Give practical, actionable suggestions with bullets when appropriate.
Do not add markdown headings unless requested.`;

const fallbackReply = (message) => {
  const text = String(message || "").trim();
  if (!text) {
    return "Tell me your target role and I will suggest ATS-focused improvements.";
  }

  return [
    "Here is a quick ATS-focused improvement plan:",
    "- Start bullets with strong action verbs.",
    "- Add measurable outcomes (%, $, time saved, growth).",
    "- Mirror 5–8 keywords from the job description.",
    "- Keep each bullet one clear achievement.",
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

    const prompt = `${buildSystemPrompt()}\n\nConversation:\n${compactHistory}\nUser: ${message}\nAssistant:`;

    const result = await model.generateContent(prompt);
    const reply = result?.response?.text?.() || fallbackReply(message);

    return res.status(200).json({ reply, provider: "gemini" });
  } catch (error) {
    console.error(error);
    return res.status(200).json({ reply: fallbackReply(req.body?.message), provider: "fallback" });
  }
};

module.exports = { chatWithAssistant };

