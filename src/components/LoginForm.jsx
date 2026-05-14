import { useState } from "react";
import { User, Lock, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import loginImage from "../assets/img/loginpage.webp";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const notifySuccess = (msg) =>
    toast.success(msg, {
      position: "top-center",
      style: {
        minWidth: "350px",
        padding: "18px 28px",
        fontSize: "17px",
        borderRadius: "16px",
        background: "#4ade80",
        color: "#000",
        fontWeight: "bold",
      },
      duration: 3000,
      icon: "✅",
    });

  const notifyError = (msg) =>
    toast.error(msg, {
      position: "top-center",
      style: {
        minWidth: "350px",
        padding: "18px 28px",
        fontSize: "17px",
        borderRadius: "16px",
        background: "#f87171",
        color: "#000",
        fontWeight: "bold",
      },
      duration: 3000,
      icon: "❌",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        notifySuccess("Login successful!");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Update navbar
        window.dispatchEvent(new Event("user-change"));

        // Redirect to Home
        navigate("/");
      } else {
        notifyError(data.message || "Invalid credentials");
      }
    } catch (err) {
      notifyError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 dark:bg-base-900 transition-colors duration-500">
      <Toaster containerStyle={{ top: "80px" }} />
      <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden">

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-base-100/90 dark:bg-base-200/60 backdrop-blur-md p-10 flex flex-col justify-center transition-colors duration-500"
        >
          <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Welcome Back
          </h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="relative">
              <User className="absolute top-3 left-3 w-5 h-5 text-primary/70" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="input input-bordered w-full pl-10 focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute top-3 left-3 w-5 h-5 text-primary/70" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="input input-bordered w-full pl-10 focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className={`w-full bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-xl font-semibold shadow-lg ${
                loading ? "loading" : ""
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </motion.button>

            <p className="text-center text-sm mt-2 text-base-content/70">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-primary font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>

            <p className="text-center mt-4 text-primary font-semibold hover:underline flex justify-center items-center gap-1 cursor-pointer">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 inline" /> Back to Home
              </Link>
            </p>
          </form>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default LoginForm;
