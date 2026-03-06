const express = require("express");
const router = express.Router();

const { generateResumePDF } = require("../controllers/analyze.controller");

router.get("/generate-pdf/:id", generateResumePDF);

module.exports = router;