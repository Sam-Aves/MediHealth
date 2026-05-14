import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-base-100 dark:bg-base-900 rounded-3xl shadow-xl overflow-hidden border border-base-300 hover:border-primary transition"
    >
      {/* IMAGE */}
      <div className="relative h-56">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold">{doctor.name}</h3>
          <p className="text-sm opacity-90">{doctor.specialization}</p>
        </div>
      </div>

      {/* INFO */}
      <div className="p-6 space-y-3">
        <p className="text-sm text-base-content/70">
          <span className="font-semibold">Experience:</span>{" "}
          {doctor.experience}
        </p>

        <p className="text-sm text-base-content/70 line-clamp-2">
          <span className="font-semibold">Services:</span>{" "}
          {doctor.services.join(", ")}
        </p>

        {/* ACTIONS */}
        <div className="flex gap-3 pt-4">
          <Link
            to={`/doctors/${doctor.id}`}
            className="btn btn-outline btn-sm flex-1"
          >
            View Profile
          </Link>
          <Link
            to={`/appointment?doctor=${doctor.id}`}
            className="btn btn-primary btn-sm flex-1"
          >
            Book
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
