import { motion } from "framer-motion";

const DoctorCard = ({ name, specialization, img }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateX: 3, rotateY: 3 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-base-100 shadow-2xl rounded-3xl overflow-hidden cursor-pointer flex flex-col items-center text-center p-6"
    >
      <div className="relative w-32 h-32 mb-4">
        <img
          src={img}
          alt={name}
          className="rounded-full w-full h-full object-cover border-4 border-primary shadow-lg"
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-base-content/70 mb-4">{specialization}</p>
      <div className="flex gap-4">
        <a href="/appointment" className="btn btn-primary btn-sm">
          Book Appointment
        </a>
        <a href={`/doctors/${name.replace(/\s+/g, "-").toLowerCase()}`} className="btn btn-outline btn-sm">
          Details
        </a>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
