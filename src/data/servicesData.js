// src/data/servicesData.js
import { FaHeart, FaBrain, FaMicroscope, FaStethoscope, FaSyringe, FaSpa, FaHospital, FaRibbon } from "react-icons/fa";

export const departments = [
  {
    id: "cardiology",
    name: "Cardiology",
    description: "Heart and vascular diagnostics, monitoring, and treatment.",
    icon: FaHeart,
    services: [
      { name: "ECG & Heart Monitoring", details: "Continuous and resting ECG monitoring for rhythm abnormalities." },
      { name: "Echocardiography", details: "Ultrasound imaging to assess heart structure and blood flow." },
      { name: "Cardiac Stress Testing", details: "Evaluates heart function during controlled physical exertion." },
      { name: "Hypertension Management", details: "Long-term blood pressure diagnosis and treatment plans." }
    ]
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Diagnosis and treatment of nervous system disorders.",
    icon: FaBrain,
    services: [
      { name: "EEG Monitoring", details: "Electrical activity analysis of the brain." },
      { name: "Stroke Risk Assessment", details: "Early detection and prevention strategies for stroke." },
      { name: "Migraine & Headache Clinic", details: "Specialized care for chronic and acute headaches." },
      { name: "Neuroimaging Review", details: "Professional evaluation of MRI and CT scans." }
    ]
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description: "Comprehensive healthcare for infants, children, and adolescents.",
    icon: FaStethoscope,
    services: [
      { name: "Child Wellness Exams", details: "Routine check-ups and developmental assessments." },
      { name: "Vaccinations", details: "Complete immunization schedules for children." },
      { name: "Pediatric Nutrition", details: "Dietary guidance for healthy growth and development." },
      { name: "Growth & Development Monitoring", details: "Tracking physical and mental milestones." }
    ]
  },
  {
    id: "diagnostics",
    name: "Diagnostics & Laboratory",
    description: "Advanced clinical testing and imaging services.",
    icon: FaMicroscope,
    services: [
      { name: "Blood & Biochemistry Tests", details: "Comprehensive blood profiling and metabolic analysis." },
      { name: "Histopathology", details: "Microscopic examination of tissues for diagnosis." },
      { name: "Cytology", details: "Cellular analysis for early disease detection." },
      { name: "Radiology Services", details: "X-ray, CT, and ultrasound imaging." }
    ]
  },
  {
    id: "medicine",
    name: "Internal Medicine",
    description: "Diagnosis and management of adult diseases.",
    icon: FaSyringe,
    services: [
      { name: "Diabetes Management", details: "Monitoring and treatment plans for diabetes patients." },
      { name: "Hypertension Care", details: "Long-term blood pressure management." },
      { name: "Chronic Disease Management", details: "Support for ongoing medical conditions." },
      { name: "Routine Checkups", details: "Regular health assessments for adults." }
    ]
  },
  {
    id: "dermatology",
    name: "Dermatology",
    description: "Treatment of skin, hair, and nail conditions.",
    icon: FaSpa,
    services: [
      { name: "Acne Treatment", details: "Medical and cosmetic management of acne." },
      { name: "Eczema & Psoriasis Care", details: "Treatment for chronic skin conditions." },
      { name: "Skin Cancer Screening", details: "Early detection and prevention strategies." },
      { name: "Cosmetic Dermatology", details: "Skin rejuvenation and anti-aging procedures." }
    ]
  },
  {
    id: "surgical",
    name: "Surgical Services",
    description: "Pre-operative, operative, and post-operative care.",
    icon: FaHospital,
    services: [
      { name: "General Surgery", details: "Routine and complex surgical procedures." },
      { name: "Minimally Invasive Surgery", details: "Laparoscopic and low-impact surgical techniques." },
      { name: "Post-Surgical Rehabilitation", details: "Recovery planning and physical rehabilitation." }
    ]
  },
  {
    id: "oncology",
    name: "Oncology",
    description: "Diagnosis and treatment of cancer and tumors.",
    icon: FaRibbon,
    services: [
      { name: "Chemotherapy", details: "Cancer treatment using chemical agents." },
      { name: "Radiation Therapy", details: "High-energy radiation treatment for tumors." },
      { name: "Cancer Screening", details: "Early detection for multiple cancer types." },
      { name: "Oncology Consultations", details: "Specialist guidance and treatment planning." }
    ]
  }
];
