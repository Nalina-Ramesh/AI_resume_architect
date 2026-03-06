require("dotenv").config();


const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/authmiddleware");
const Resume = require("./models/resumes");
const app = express();

app.use(cors());
app.use(express.json());



/* ===== API ROUTES ===== */

app.use("/api/resume", require("./routes/resume.routes.js"));
app.use("/api/auth", require("./routes/user.routes"));
app.use("/api/analyze", require("./routes/analyze.routes"));
app.use("/api/ats", require("./routes/ats.routes"));
app.use("/api/chat", require("./routes/chat.routes"));

/* ===== LOGIN ROUTE ===== */

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id,email:user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful 🚀",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ===== RESUME BUILDER SAVE ROUTE ===== */

app.post("/api/resume", authMiddleware, async (req, res) => {
  try {
    const {
      fullName,
      headline,
      email,
      phone,
      location,
      summary,
      experience,
      education,
      skills,
      projects,
      jobDescription,
    } = req.body;

    const resumeText = [
      `FULL_NAME: ${fullName || ""}`,
      `HEADLINE: ${headline || ""}`,
      `EMAIL: ${email || ""}`,
      `PHONE: ${phone || ""}`,
      `LOCATION: ${location || ""}`,
      "SUMMARY:",
      summary || "",
      "EXPERIENCE:",
      experience || "",
      "EDUCATION:",
      education || "",
      "SKILLS:",
      skills || "",
      "PROJECTS:",
      projects || "",
    ].join("\n");

    const savedResume = await Resume.create({
      user: req.user,
      resumeText: resumeText || "Resume draft",
      jobDescription: jobDescription || "General application",
    });

    res.status(201).json({
      message: "Resume saved successfully",
      resume: savedResume,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while saving resume" });
  }
});

/* ===== BACKWARD-COMPAT AUTH ROUTE ===== */

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful 🚀",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ===== GEMINI SETUP ===== */

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get("/test-gemini", async (req, res) => {
  try {
    console.log("Gemini Api Controller")
    const model = 
    genAI.getGenerativeModel({ model: "gemini-2.5-flash"});
    console.log("Gemini Api Controller called")
    const result = await model.generateContent("Say hello like a resume expert.");
    const response = result.response.text();

    res.json({ reply: response });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gemini connection failed" });
  }
});

/* ===== ROOT ROUTE ===== */

app.get("/", (req, res) => {
  res.send("CareerForge Pro Backend Running 🚀");
});

app.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user).select("username email");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Profile accessed successfully",
      user: {
        id: user._id,
        username: user.username,
        name: user.username,
        fullName: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user).select("username email");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Profile accessed successfully",
      user: {
        id: user._id,
        username: user.username,
        name: user.username,
        fullName: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ===== GET ALL RESUMES OF USER ===== */

app.get("/my-resumes", authMiddleware, async (req, res) => {
  try {

    const resumes = await Resume.find({ user: req.user });

    res.json(resumes);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/my-resumes", authMiddleware, async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user });
    res.json(resumes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully "))
  .catch((err) => console.error("MongoDB Connection Error ", err));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
