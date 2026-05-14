import { useState, useEffect } from "react";
import { doctorsData } from "../data/doctorsData";
import { departments } from "../data/servicesData";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

const AppointmentPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [availableDoctors, setAvailableDoctors] = useState(doctorsData);
  const [availableServices, setAvailableServices] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to book an appointment");
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const doctorId = searchParams.get("doctor");
    const deptId = searchParams.get("department");
    const serviceName = searchParams.get("service");

    if (doctorId) {
      const doctor = doctorsData.find(d => d.id === doctorId);
      if (!doctor) return;
      setSelectedDoctor(doctor);
      setSelectedDepartment(doctor.department);
      setAvailableServices(doctor.services);
      setAvailableSlots(doctor.availability?.slots || []);
      setSelectedService(serviceName || "");
      setSelectedSlot("");
    } else {
      if (deptId) setSelectedDepartment(deptId);
      if (serviceName) setSelectedService(serviceName);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = doctorsData;
    if (selectedDepartment) filtered = filtered.filter(d => d.department === selectedDepartment);
    if (selectedService) filtered = filtered.filter(d => d.services.includes(selectedService));
    setAvailableDoctors(filtered);

    if (selectedDoctor && !filtered.some(d => d.id === selectedDoctor.id)) {
      setSelectedDoctor(null);
      setAvailableServices([]);
      setAvailableSlots([]);
      setSelectedSlot("");
    }
  }, [selectedDepartment, selectedService]);

  useEffect(() => {
    if (!selectedDoctor) return;
    setSelectedDepartment(selectedDoctor.department);
    setAvailableServices(selectedDoctor.services);
    setAvailableSlots(selectedDoctor.availability?.slots || []);
    setSelectedService("");
    setSelectedSlot("");
  }, [selectedDoctor]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const contact = e.target.contact.value.trim();
    const emergency = e.target.emergency?.checked || false;

    // --- VALIDATIONS ---
    if (!selectedDoctor || !selectedService || !selectedSlot) {
      return toast.error("Please select doctor, service, and time slot");
    }
    if (!name) return toast.error("Name is required");
    if (!email.match(/^\S+@\S+\.\S+$/)) return toast.error("Invalid email");
    if (!contact.match(/^[0-9]{10,14}$/)) return toast.error("Contact number must be 10–14 digits");

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to book an appointment");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          doctor: selectedDoctor.name,
          department: selectedDepartment,
          service: selectedService,
          slot: selectedSlot,
          name,
          email,
          contact,
          emergency
        })
      });

      const data = await res.json();

      if (res.ok) {
        // --- SUCCESS TOAST (styled like registration) ---
        toast.success(data.message || "Appointment booked successfully!", {
          position: "top-center",
          style: {
            minWidth: "350px",
            padding: "18px 28px",
            fontSize: "17px",
            borderRadius: "16px",
            background: "#4ade80",
            color: "#000",
            fontWeight: "bold",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          },
          icon: "✅",
          duration: 4000
        });

        // Reset form (but keep form visible for multiple bookings)
        setSelectedDoctor(null);
        setSelectedDepartment("");
        setSelectedService("");
        setSelectedSlot("");
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.contact.value = "";
        e.target.emergency.checked = false;

      } else {
        toast.error(data.message || "Failed to book appointment");
      }
    } catch (err) {
      toast.error("Server error. Try again.");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Toaster position="top-right" />

      {/* HERO */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 pt-12 md:pt-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Book Your Appointment
        </h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto my-4 origin-left" />
        <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
          Select a department, doctor, and service to schedule your visit.
        </p>
      </motion.div>

      {/* FORM CARD */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-base-100 dark:bg-base-900 rounded-3xl shadow-xl p-8 md:p-12 space-y-6 backdrop-blur-md border border-base-300/20">

        {/* Department */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <label className="font-semibold dark:text-gray-200">Department</label>
          <select
            value={selectedDepartment}
            onChange={e => setSelectedDepartment(e.target.value)}
            className="w-full mt-2 p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-primary transition"
          >
            <option value="">Select Department</option>
            {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
        </motion.div>

        {/* Doctor */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <label className="font-semibold dark:text-gray-200">Doctor</label>
          <select
            value={selectedDoctor?.id || ""}
            onChange={e => setSelectedDoctor(doctorsData.find(d => d.id === e.target.value))}
            className="w-full mt-2 p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-primary transition"
          >
            <option value="">Select Doctor</option>
            {availableDoctors.map(d => (
              <option key={d.id} value={d.id}>{d.name} — {d.title}</option>
            ))}
          </select>
        </motion.div>

        {/* Service */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <label className="font-semibold dark:text-gray-200">Service</label>
          <select
            value={selectedService}
            onChange={e => setSelectedService(e.target.value)}
            disabled={!availableServices.length}
            className="w-full mt-2 p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-primary transition"
          >
            <option value="">Select Service</option>
            {availableServices.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </motion.div>

        {/* Time Slots */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <label className="font-semibold dark:text-gray-200">Time Slot</label>
          <div className="flex flex-wrap gap-3 mt-2">
            <AnimatePresence>
              {availableSlots.map(slot => (
                <motion.button
                  key={slot}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSlot(slot)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    selectedSlot === slot
                      ? "bg-gradient-to-r from-primary to-secondary text-white"
                      : "hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"
                  }`}
                >
                  {slot}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* User Info Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Your Name" required className="w-full p-3 border rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary transition" />
          <input name="email" type="email" placeholder="Email" required className="w-full p-3 border rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary transition" />
          <input name="contact" placeholder="Contact Number" required className="w-full p-3 border rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary transition" />
          <label className="flex items-center gap-2">
            <input type="checkbox" name="emergency" className="checkbox checkbox-primary" />
            <span className="text-sm">Mark as Emergency</span>
          </label>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-xl font-semibold shadow-lg">
            Book Appointment
          </motion.button>
        </form>

      </motion.div>
    </div>
  );
};

export default AppointmentPage;
