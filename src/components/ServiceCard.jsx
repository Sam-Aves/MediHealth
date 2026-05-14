// src/components/ServiceCard.jsx
import { motion } from "framer-motion";

const ServiceCard = ({ title, desc, icon: Icon, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative rounded-3xl overflow-hidden shadow-2xl bg-base-100 cursor-pointer"
    >
      {/* Image */}
      {image && (
        <div className="relative h-60 overflow-hidden rounded-3xl">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-3xl" />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6 text-center">
        {Icon && (
          <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Icon className="w-7 h-7" />
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-base-content/70 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
