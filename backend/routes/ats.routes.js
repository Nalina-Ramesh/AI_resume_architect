const express = require("express");
const router = express.Router();

const { analyzeATS } = require("../controllers/ats.controller");

router.post("/", analyzeATS);

module.exports = router;

