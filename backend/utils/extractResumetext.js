const fs = require("fs");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");

async function extractResumeText(filePath, fileType) {
  try {

    let text = "";

    /* ===== PDF FILE ===== */

    if (fileType === "application/pdf") {
      const dataBuffer = fs.readFileSync(filePath);

      const data = await pdfParse(dataBuffer);

      text = data.text;
    }

    /* ===== DOCX FILE ===== */

    if (
      fileType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const result = await mammoth.extractRawText({ path: filePath });
      text = result.value;
    }

    return text;

  } catch (error) {

    console.error("Resume text extraction error:", error);
    throw new Error("Failed to extract resume text");

  }
}

module.exports = extractResumeText;