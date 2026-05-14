import { motion } from "framer-motion";
import ServiceItem from "./ServiceItem";

const ServiceList = ({ department }) => {
  return (
    <section className="flex-1">
      <header className="mb-12">
        <motion.h2
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {department.name}
        </motion.h2>

        <motion.p
          className="text-base-content/70 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {department.description}
        </motion.p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {department.services.map((service, i) => (
          <ServiceItem
            key={service.id}
            service={service}
            icon={department.icon}
            departmentId={department.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
