import { useState } from "react"; 
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import axios from "axios"; // for API calls

const faqCategories = [
  {
    title: "Appointments",
    accent: "from-primary to-secondary",
    faqs: [
      { id: "a1", q: "How can I book an appointment?", a: "You can book an appointment via the Appointment page or directly from a doctor’s profile." },
      { id: "a2", q: "Can I choose a specific doctor?", a: "Yes. You can select a doctor while booking based on specialization and availability." },
      { id: "a3", q: "Can I reschedule or cancel my appointment?", a: "Appointments can be rescheduled or cancelled from your dashboard up to 24 hours before." },
      { id: "a4", q: "Do I receive a confirmation?", a: "Yes, you’ll receive an email and dashboard confirmation after booking." }
    ]
  },
  {
    title: "Doctors & Consultation",
    accent: "from-emerald-400 to-teal-500",
    faqs: [
      { id: "d1", q: "How qualified are your doctors?", a: "All our doctors are certified professionals with verified credentials and experience." },
      { id: "d2", q: "Do you provide emergency services?", a: "Yes, we provide 24/7 emergency services at our facilities." },
      { id: "d3", q: "Can I consult online?", a: "Online consultations are planned and will be available soon." },
      { id: "d4", q: "How do I contact a doctor directly?", a: "You can message or book a consultation through the doctor’s profile." }
    ]
  },
  {
    title: "Insurance & Payments",
    accent: "from-indigo-400 to-purple-500",
    faqs: [
      { id: "i1", q: "What insurance providers do you accept?", a: "We accept most major insurance providers. Please contact support for details." },
      { id: "i2", q: "Do you offer installment plans?", a: "Yes, flexible payment options are available for select services." },
      { id: "i3", q: "Is online payment secure?", a: "Absolutely. We use encrypted and secure payment gateways." }
    ]
  },
  {
    title: "Accounts & Security",
    accent: "from-orange-400 to-rose-500",
    faqs: [
      { id: "s1", q: "Do I need an account to book?", a: "Yes, an account is required to manage appointments and records." },
      { id: "s2", q: "Is my medical data safe?", a: "Your data is encrypted and stored securely following medical privacy standards." },
      { id: "s3", q: "Can I update my profile later?", a: "Yes, profile information can be edited anytime from your dashboard." }
    ]
  }
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // New states for form submission
  const [emailInput, setEmailInput] = useState("");
  const [questionInput, setQuestionInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const categories = ["All", ...faqCategories.map(c => c.title)];

  const filteredCategories = faqCategories
    .filter(cat => activeCategory === "All" || cat.title === activeCategory)
    .map(cat => ({
      ...cat,
      faqs: cat.faqs.filter(f =>
        f.q.toLowerCase().includes(search.toLowerCase())
      )
    }))
    .filter(cat => cat.faqs.length > 0);

  // Submit FAQ to backend
  const handleSubmit = async () => {
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await axios.post("http://localhost:5000/api/faq", {
        email: emailInput,
        question: questionInput,
      });
      setSuccessMsg(res.data.message);
      setEmailInput("");
      setQuestionInput("");
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 py-28 px-6 relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h1>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border rounded-lg bg-base-200/70 dark:bg-base-900/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm ${activeCategory === cat ? "btn-primary" : "btn-outline"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Sections */}
        {filteredCategories.map((cat, index) => (
          <motion.section
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${cat.accent}`} />
              <h2 className="text-3xl font-semibold">{cat.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cat.faqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  whileHover={{ y: -6, rotateX: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-base-200/70 backdrop-blur-md rounded-2xl shadow-xl border border-base-300 overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === faq.id ? null : faq.id)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left font-semibold text-lg"
                  >
                    {faq.q}
                    <motion.span animate={{ rotate: open === faq.id ? 180 : 0 }}>
                      <ChevronDown className="w-5 h-5 text-primary" />
                    </motion.span>
                  </button>

                  {open === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="px-6 pb-6 text-base-content/70"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Submit Question */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="max-w-3xl mx-auto bg-base-200/70 backdrop-blur-md rounded-2xl shadow-xl border border-base-300 p-8">
            <h3 className="text-3xl font-semibold mb-6 text-center">
              Didn’t find your question?
            </h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email (optional)"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="input input-bordered w-full"
              />
              <textarea
                rows={4}
                placeholder="Write your question here..."
                value={questionInput}
                onChange={(e) => setQuestionInput(e.target.value)}
                className="textarea textarea-bordered w-full"
              />
              <button
                className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                Submit Question
              </button>
              {successMsg && <p className="text-green-500 mt-2">{successMsg}</p>}
              {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default FAQ;