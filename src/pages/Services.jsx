import { useState } from "react";
import { departments } from "../data/servicesData";
import DepartmentSidebar from "../components/DepartmentSidebar";
import ServiceList from "../components/ServiceList";
import { motion } from "framer-motion";

const Services = () => {
  const [activeDept, setActiveDept] = useState(departments[0].id);
  const currentDepartment = departments.find((d) => d.id === activeDept);

  return (
    <>
      {/* HERO */}
      <section className="py-24 bg-gradient-to-r from-primary via-secondary to-primary text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Our Medical Services
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 w-32 bg-white rounded-full mx-auto mb-6 origin-left"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg text-white/80"
        >
          Explore our wide range of clinical departments and specialized healthcare solutions.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
          <DepartmentSidebar
            departments={departments}
            activeId={activeDept}
            onSelect={setActiveDept}
          />
          <ServiceList department={currentDepartment} />
        </div>
      </section>
    </>
  );
};

export default Services;
