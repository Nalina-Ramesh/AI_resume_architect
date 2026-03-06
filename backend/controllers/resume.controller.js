const Resume = require("../models/resumes");
const extractResumeText = require("../utils/extractResumetext");
const generatePDF = require("../utils/generatepdf");
const resumeTemplate = require("../utils/resumetemplate");
const fs = require("fs");

/* =========================================
   UPLOAD RESUME
========================================= */

const uploadResume = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({ message: "No resume uploaded" });
    }

    const { jobDescription } = req.body;

    if (!jobDescription) {
      return res.status(400).json({ message: "Job Description is required" });
    }

    const filePath = req.file.path;
    const fileType = req.file.mimetype;

    /* ===== EXTRACT TEXT FROM RESUME ===== */

    const resumeText = await extractResumeText(filePath, fileType);

    if (!resumeText) {
      return res.status(400).json({ message: "Could not extract resume text" });
    }

    /* ===== SAVE TO DATABASE ===== */

    const newResume = new Resume({
      user: req.user,
      resumeText: resumeText,
      jobDescription: jobDescription
    });

    await newResume.save();

    /* ===== DELETE FILE FROM SERVER ===== */

    fs.unlinkSync(filePath);

    res.status(200).json({
      message: "Resume uploaded and processed successfully 🚀",
      resume: newResume
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while uploading resume" });
  }
};


/* =========================================
   GENERATE & DOWNLOAD PDF
========================================= */

const generateResumePDF = async (req, res) => {
  try {

    const { id } = req.params;
    const { template = "classic" } = req.query;

    /* ===== FIND RESUME ===== */

    const resume = await Resume.findById(id);

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found"
      });
    }

    /* ===== USE OPTIMIZED RESUME OR ORIGINAL ===== */

    const resumeContent =
      resume.optimizedContent && resume.optimizedContent.trim() !== ""
        ? resume.optimizedContent
        : resume.resumeText;

    /* ===== CONVERT TEXT TO HTML TEMPLATE ===== */

    const html = resumeTemplate(resumeContent, template);

    /* ===== GENERATE PDF ===== */

    const pdfBuffer = await generatePDF(html);

    /* ===== SEND PDF TO USER ===== */

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=resume-${template}.pdf`,
      "Content-Length": pdfBuffer.length
    });

    res.send(pdfBuffer);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error generating resume PDF"
    });
  }
};


/* =========================================
   EXPORT CONTROLLERS
========================================= */

module.exports = {
  uploadResume,
  generateResumePDF
};
