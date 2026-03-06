const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authmiddleware");
const { chatWithAssistant } = require("../controllers/chat.controller");

router.post("/", authMiddleware, chatWithAssistant);

module.exports = router;

