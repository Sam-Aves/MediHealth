const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  doctor: { type: String, required: true },
  department: { type: String, required: true },
  service: { type: String, required: true },
  slot: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  priority: { type: String, enum: ["normal","emergency"], default: "normal" },
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
