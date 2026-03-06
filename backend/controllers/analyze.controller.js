const generatePDF = require("../utils/generatepdf");
const resumeTemplate = require("../utils/resumetemplate");
const Resume = require("../models/resumes");

const generateResumePDF = async (req, res) => {

  try {

    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    const resumeContent =
      resume.optimizedContent && resume.optimizedContent.trim() !== ""
        ? resume.optimizedContent
        : resume.resumeText;

    const html = resumeTemplate(resumeContent);

    const pdfBuffer = await generatePDF(html);

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=resume.pdf",
      "Content-Length": pdfBuffer.length
    });

    res.send(pdfBuffer);

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "PDF generation failed" });

  }

};

module.exports = { generateResumePDF };
