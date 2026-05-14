// src/components/PageTemplate.jsx
import { motion } from "framer-motion";

const PageTemplate = ({ title, children, bgClass = "bg-base-100" }) => {
  return (
    <div className={`${bgClass} py-24 px-6`}>
      <motion.h1
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {title}
      </motion.h1>
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default PageTemplate;
