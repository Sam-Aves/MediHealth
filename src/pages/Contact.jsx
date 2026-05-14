import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import contactImg from "../assets/img/contact.jpg"; 
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Redirect if user not logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to send a message");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Please login to send a message");
    navigate("/login");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (res.ok) {
      // --- NEW STYLIZED SUCCESS TOAST ---
      toast.success(data.message || "Message sent successfully!", {
        position: "top-center",
        style: {
          minWidth: "350px",
          padding: "18px 28px",
          fontSize: "17px",
          borderRadius: "16px",
          background: "#4ade80",   // Green like appointment success
          color: "#000",
          fontWeight: "bold",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        },
        icon: "✅",
        duration: 4000
      });

      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } else {
      toast.error(data.message || "Failed to send message");
    }
  } catch (err) {
    toast.error("Server error. Try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="min-h-screen bg-base-100 dark:bg-base-900 py-28 px-6 relative overflow-hidden">
      <Toaster position="top-right" />

      {/* Background Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary font-medium tracking-wide mb-6">
            Contact Us
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Let’s Get in Touch
          </h1>

          <p className="max-w-2xl mx-auto text-base-content/70 text-lg">
            Have a question, concern, or feedback? We’re here to help you every step of the way.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-base-200 dark:bg-base-800 rounded-2xl shadow-xl p-10 relative overflow-hidden"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full input input-bordered rounded-lg ${errors.name && "border-error"}`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full input input-bordered rounded-lg ${errors.email && "border-error"}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`w-full input input-bordered rounded-lg ${errors.subject && "border-error"}`}
                  placeholder="Subject of your message"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full textarea textarea-bordered rounded-lg ${errors.message && "border-error"}`}
                  placeholder="Write your message here..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className={`btn btn-primary w-full text-lg ${loading ? "loading" : ""}`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={contactImg}
                alt="Contact"
                className="w-full h-[480px] object-cover"
              />
            </div>

            {/* Floating Info */}
            <div className="absolute -bottom-8 left-8 right-8 bg-base-100 dark:bg-base-900 rounded-xl shadow-lg p-6 flex justify-around animate-fade-in-up">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" />
                <span className="text-sm">support@medicare.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" />
                <span className="text-sm">+880 1234 567890</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 text-2xl font-semibold">
            <MapPin className="text-primary" />
            Our Location
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-base-300">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps?q=23.8103,90.4125&z=15&output=embed"
              className="w-full h-[420px] transition-transform duration-700 hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-base-content/60 text-sm">
            📍 This location is marked for demonstration purposes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
