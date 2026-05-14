import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero1 from "../assets/img/hero1.jpg";
import hero2 from "../assets/img/hero2.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-base-100 to-base-200 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl leading-tight">
            Digital Healthcare <br />
            <span className="text-primary">You Can Trust</span>
          </h1>

          <p className="text-lg text-base-content/70 max-w-xl">
            MediHealth connects you with expert doctors, modern diagnostics,
            and reliable healthcare — all in one digital platform.
          </p>

          <div className="flex gap-4">
            <Link to="/services" className="btn btn-primary px-8">
              Explore Services
            </Link>
            <Link to="/doctors" className="btn btn-outline px-8">
              Find Doctors
            </Link>
          </div>

          <div className="pt-6 text-sm text-base-content/60">
            Trusted by <span className="font-semibold text-primary">10,000+</span> patients
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className="relative h-[420px] hidden md:block">
          <img
            src={hero1}
            className="absolute top-0 left-10 w-72 rounded-3xl shadow-xl animate-float"
          />
          <img
            src={hero2}
            className="absolute bottom-0 right-0 w-64 rounded-3xl shadow-xl animate-float"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
