const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    resumeText: {
      type: String,
      required: true,
    },

    jobDescription: {
      type: String,
      required: true,
    },

    optimizedContent: {
      type: String,
      default: "",
    },

    atsScore: {
      type: Number,
      default: 0,
    },

    feedback: {
      type: String,
      default: "",
    },

    missingKeywords: {
      type: [String],
      default: [],
    },

    generatedLatex: {
      type: String,
      default: "",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);