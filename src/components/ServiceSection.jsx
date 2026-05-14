// src/components/ServicesSection.jsx
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="py-32 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Explore our wide range of healthcare services, delivered with cutting-edge technology and expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="btn btn-primary px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
