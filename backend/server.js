// server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connectDB = require("./db"); // MongoDB connection
const User = require("./models/User");
const Appointment = require("./models/Appointment");
const Contact = require("./models/Contact");
const FAQQuestion = require("./models/FAQQuestion");
const auth = require("./middleware/auth");

const app = express();
app.use(cors());
app.use(express.json());

// ---- Connect to MongoDB ----
connectDB();

// ---- Test Route ----
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// ---- REGISTER ----
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || name.length < 3)
      return res.status(400).json({ message: "Name too short" });

    if (!email || !/^\S+@\S+\.\S+$/.test(email))
      return res.status(400).json({ message: "Invalid email" });

    if (!password || password.length < 6)
      return res.status(400).json({ message: "Password too short" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    res.json({ message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---- LOGIN ----
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "secret123",
      { expiresIn: "1h" }
    );

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---- APPOINTMENT ----
app.post("/api/appointments", auth, async (req, res) => {
  try {
    const appointment = await Appointment.create({ user: req.user._id, ...req.body });
    res.json({ message: "Appointment booked", appointment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---- CONTACT ----
app.post("/api/contact", auth, async (req, res) => {
  try {
    const contact = await Contact.create({ user: req.user._id, ...req.body });
    res.json({ message: "Message sent", contact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---- FAQ QUESTION (PUBLIC) ----
app.post("/api/faq", async (req, res) => {
  try {
    const { email, question } = req.body;

    if (!question || question.length < 15)
      return res.status(400).json({ message: "Question must be at least 15 characters long" });

    if (question.length > 500)
      return res.status(400).json({ message: "Question is too long (max 500 characters)" });

    if (email && !/^\S+@\S+\.\S+$/.test(email))
      return res.status(400).json({ message: "Invalid email format" });

    const faq = await FAQQuestion.create({ email, question });

    res.status(201).json({ message: "Your question has been submitted successfully!", faq });
  } catch (err) {
    console.error("FAQ Submission Error:", err);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});
// ---- Start Server ----
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`Backend running at http://localhost:${PORT}`);
});