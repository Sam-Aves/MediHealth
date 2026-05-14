import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { departments } from "../data/servicesData";

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Brand & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MediCare
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto md:mx-0">
            Trusted digital healthcare platform delivering expert medical services with modern technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Our Departments</h3>
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {departments.map((dept) => (
                <li key={dept.id} className="flex items-center gap-2 group">
                  <dept.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-all" />
                  <Link
                    to="/services"
                    className="text-slate-300 hover:text-white text-sm transition-all"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {["Home", "Doctors", "Blog", "Contact", "FAQ"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-slate-300 hover:text-white text-sm transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms & Conditions", "Disclaimer"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-slate-300 hover:text-white text-sm transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, color: "#4da6ff" }}
                  className="text-slate-400 hover:text-medical-400 transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-slate-500 text-sm pt-6 border-t border-slate-800">
          <p>© 2025 MediCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;