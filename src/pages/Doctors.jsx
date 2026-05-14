import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { doctorsData } from "../data/doctorsData";
import { useSearchParams, useNavigate } from "react-router-dom";

const departments = [
  { id: "all", label: "All Departments" },
  { id: "cardiology", label: "Cardiology" },
  { id: "neurology", label: "Neurology" },
  { id: "medicine", label: "Medicine" },
  { id: "pediatrics", label: "Pediatrics" },
  { id: "diagnostics", label: "Diagnostics" },
  { id: "dermatology", label: "Dermatology" },
  { id: "oncology", label: "Oncology" },
  { id: "surgical", label: "Surgical" },
];

export default function Doctors() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const profileRef = useRef(null);

  const [activeDept, setActiveDept] = useState("all");
  const [activeDoctor, setActiveDoctor] = useState(null);

  const filteredDoctors =
    activeDept === "all"
      ? doctorsData
      : doctorsData.filter((d) => d.department === activeDept);

  useEffect(() => {
    const departmentFromUrl = searchParams.get("department");
    const doctorId = searchParams.get("doctor");

    if (departmentFromUrl) setActiveDept(departmentFromUrl);

    if (doctorId) {
      const doctor = doctorsData.find((d) => d.id === doctorId);
      if (!doctor) return;
      setActiveDoctor(doctor);
      setActiveDept(doctor.department);
    }
  }, [searchParams]);

  useEffect(() => {
    if (filteredDoctors.length === 0) {
      setActiveDoctor(null);
      return;
    }
    if (!activeDoctor || (activeDept !== "all" && activeDoctor.department !== activeDept)) {
      setActiveDoctor(filteredDoctors[0]);
    }
  }, [activeDept, filteredDoctors]);

  useEffect(() => {
    if (!activeDoctor || !profileRef.current) return;
    profileRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeDoctor]);

  return (
    <section className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
      
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Our Medical Specialists
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto my-6 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-base-content/70 text-lg"
        >
          Browse certified doctors by department. View expertise, availability, and book appointments seamlessly.
        </motion.p>
      </motion.div>

      {/* DEPARTMENTS FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {departments.map((dep) => (
          <motion.button
            key={dep.id}
            onClick={() => setActiveDept(dep.id)}
            whileHover={{ scale: 1.05 }}
            className={`btn btn-sm rounded-full transition-all ${
              activeDept === dep.id
                ? "btn-primary bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                : "btn-outline"
            }`}
          >
            {dep.label}
          </motion.button>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* DOCTOR LIST */}
        <motion.div layout className="space-y-4 max-h-[80vh] overflow-y-auto pr-2">
          {filteredDoctors.map((doc) => (
            <motion.button
              key={doc.id}
              layout
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
              onClick={() => setActiveDoctor(doc)}
              className={`w-full text-left p-5 rounded-2xl border backdrop-blur-lg transition-all flex gap-4 items-center ${
                activeDoctor?.id === doc.id
                  ? "bg-primary/10 border-primary shadow-lg"
                  : "bg-base-100 border-base-300 hover:shadow-md"
              }`}
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold">{doc.name}</h3>
                <p className="text-sm text-base-content/60">{doc.title}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* DOCTOR DETAILS */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {activeDoctor && (
              <motion.div
                ref={profileRef}
                key={activeDoctor.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35 }}
                className="bg-base-100 border border-base-300 rounded-3xl p-8 shadow-xl sticky top-24"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* IMAGE */}
                  <motion.img
                    src={activeDoctor.image}
                    alt={activeDoctor.name}
                    className="w-full md:w-56 h-56 md:h-64 rounded-2xl object-cover flex-shrink-0"
                    whileHover={{ scale: 1.03 }}
                  />

                  {/* INFO */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold">{activeDoctor.name}</h2>
                      <p className="text-primary font-medium text-lg">{activeDoctor.title}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div>
                        <strong>Specialization:</strong>
                        <p>{activeDoctor.profile.specialization}</p>
                      </div>
                      <div>
                        <strong>Experience:</strong>
                        <p>{activeDoctor.profile.experienceYears} years</p>
                      </div>
                      <div>
                        <strong>Languages:</strong>
                        <p>{activeDoctor.profile.languages.join(", ")}</p>
                      </div>
                      <div>
                        <strong>Consultation Fee:</strong>
                        <p>৳ {activeDoctor.consultationFee}</p>
                      </div>
                    </div>

                    <div className="bg-base-200 p-4 rounded-xl">
                      <h4 className="font-semibold mb-2">Education</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {activeDoctor.education.map((edu, i) => (
                          <li key={i}>
                            {edu.degree} — {edu.institution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-base-200 p-4 rounded-xl">
                      <h4 className="font-semibold mb-2">Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeDoctor.services.map((service) => (
                          <span key={service} className="badge badge-outline">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      className="btn btn-primary w-full mt-4"
                      onClick={() =>
                        navigate(
                          `/appointment?doctor=${activeDoctor.id}&department=${activeDoctor.department}`
                        )
                      }
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
