const express = require("express");
const router = express.Router();

const { uploadResume, generateResumePDF } = require("../controllers/resume.controller");

const authMiddleware = require("../middleware/authmiddleware");
const upload = require("../middleware/multer.middleware");

/* upload resume */

router.post("/upload", authMiddleware, upload.single("resume"), uploadResume);

/* generate pdf */

router.get("/generate-pdf/:id", authMiddleware, generateResumePDF);

module.exports = router;