import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceItem = ({ service, icon: Icon, departmentId }) => {
  const navigate = useNavigate();

  const handleBrowseDoctors = () => {
    navigate(`/doctors?department=${departmentId}`);
  };

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="border border-base-300 rounded-2xl p-6 bg-base-100 h-full flex flex-col hover:border-primary transition-all duration-300"
    >
      {Icon && <Icon className="text-3xl text-primary mb-4" />}
      <h4 className="text-xl font-semibold mb-2">{service.name}</h4>
      <p className="text-base-content/70 mb-6">{service.details}</p>
      <button className="btn btn-primary btn-sm mt-auto" onClick={handleBrowseDoctors}>
        Browse Doctors →
      </button>
    </motion.div>
  );
};

export default ServiceItem;
