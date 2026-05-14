const mongoose = require("mongoose");

const faqQuestionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false, // made optional
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    question: {
      type: String,
      required: true,
      minlength: 15,
      maxlength: 500,
    },
    status: {
      type: String,
      enum: ["pending", "answered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FAQQuestion", faqQuestionSchema);