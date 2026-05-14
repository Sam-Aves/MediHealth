import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";
import doc3 from "../assets/img/doc3.jpg";
import doc4 from "../assets/img/doc4.jpg";
import doc5 from "../assets/img/doc5.jpg";
import doc6 from "../assets/img/doc6.jpg";
import doc7 from "../assets/img/doc7.jpg";
import doc8 from "../assets/img/doc16.jpg";
import doc9 from "../assets/img/doc9.jpg";
import doc10 from "../assets/img/doc10.jpg";
import doc11 from "../assets/img/doc11.jpg";
import doc12 from "../assets/img/doc12.jpg";
import doc13 from "../assets/img/doc17.jpg";
import doc14 from "../assets/img/doc14.jpg";
import doc15 from "../assets/img/doc15.jpg";
import doc16 from "../assets/img/doc13.jpg";
import doc17 from "../assets/img/doc18.jpg";
import doc18 from "../assets/img/doc19.jpg";
import doc19 from "../assets/img/doc20.jpg";
import doc20 from "../assets/img/doc21.jpg";

export const doctorsData = [
  {
    id: "doc-01",
    name: "Dr. Sarah Ahmed",
    department: "cardiology",
    title: "Senior Consultant Cardiologist",
    profile: {
      specialization: "Cardiology & Heart Failure",
      experienceYears: 12,
      languages: ["English", "Bengali"],
    },
    education: [
      { degree: "MBBS", institution: "Dhaka Medical College" },
      { degree: "FCPS (Cardiology)", institution: "BCPS, Bangladesh" },
    ],
    services: ["ECG & Heart Monitoring", "Echocardiography", "Hypertension Care"],
    availability: { days: ["Sun", "Tue", "Thu"], slots: ["10:00", "11:00", "12:00"] },
    consultationFee: 1500,
    image: doc2,
  },

  {
    id: "doc-02",
    name: "Dr. John Miller",
    department: "neurology",
    title: "Consultant Neurologist",
    profile: {
      specialization: "Neurology & Stroke Care",
      experienceYears: 15,
      languages: ["English"],
    },
    education: [
      { degree: "MBBS", institution: "University of London" },
      { degree: "MD (Neurology)", institution: "King’s College Hospital" },
    ],
    services: ["EEG Monitoring", "Stroke Risk Assessment", "Migraine Clinic"],
    availability: { days: ["Mon", "Wed"], slots: ["09:00", "10:30", "12:00"] },
    consultationFee: 1800,
    image: doc1,
  },

  {
    id: "doc-03",
    name: "Dr. Ayesha Khan",
    department: "pediatrics",
    title: "Consultant Pediatrician",
    profile: {
      specialization: "Child Health & Vaccination",
      experienceYears: 10,
      languages: ["English", "Bengali"],
    },
    education: [
      { degree: "MBBS", institution: "Chittagong Medical College" },
      { degree: "DCH", institution: "Institute of Child Health" },
    ],
    services: ["Child Wellness Exams", "Vaccinations", "Growth Monitoring"],
    availability: { days: ["Sun", "Mon", "Thu"], slots: ["10:00", "11:30", "14:00"] },
    consultationFee: 1200,
    image: doc7,
  },

  {
    id: "doc-04",
    name: "Dr. David Lee",
    department: "surgical",
    title: "Orthopedic Surgeon",
    profile: {
      specialization: "Orthopedics & Joint Surgery",
      experienceYears: 18,
      languages: ["English"],
    },
    education: [
      { degree: "MBBS", institution: "University of Melbourne" },
      { degree: "MS (Orthopedics)", institution: "Royal Melbourne Hospital" },
    ],
    services: ["Joint Replacement", "Post-Surgical Rehab"],
    availability: { days: ["Tue", "Fri"], slots: ["11:00", "13:00", "16:00"] },
    consultationFee: 2000,
    image: doc5,
  },

  {
    id: "doc-05",
    name: "Dr. Emma Wilson",
    department: "dermatology",
    title: "Consultant Dermatologist",
    profile: {
      specialization: "Skin & Cosmetic Dermatology",
      experienceYears: 9,
      languages: ["English"],
    },
    education: [
      { degree: "MBBS", institution: "University of Manchester" },
      { degree: "DDVL", institution: "Royal College of Dermatologists" },
    ],
    services: ["Acne Treatment", "Skin Allergy Care", "Skin Cancer Screening"],
    availability: { days: ["Mon", "Wed", "Sat"], slots: ["10:00", "12:00", "15:00"] },
    consultationFee: 1400,
    image: doc4,
  },

  {
    id: "doc-06",
    name: "Dr. Omar Rahman",
    department: "medicine",
    title: "Internal Medicine Specialist",
    profile: {
      specialization: "Diabetes & Hypertension",
      experienceYears: 14,
      languages: ["English", "Bengali"],
    },
    education: [
      { degree: "MBBS", institution: "Rajshahi Medical College" },
      { degree: "MD (Medicine)", institution: "BSMMU" },
    ],
    services: ["Diabetes Management", "Routine Checkups"],
    availability: { days: ["Sun", "Tue", "Thu"], slots: ["09:30", "11:00", "14:30"] },
    consultationFee: 1300,
    image: doc6,
  },

  {
    id: "doc-07",
    name: "Dr. James Hartley",
    department: "diagnostics",
    title: "Gastroenterology Consultant",
    profile: {
      specialization: "Digestive & Liver Disorders",
      experienceYears: 16,
      languages: ["English"],
    },
    education: [
      { degree: "MBBS", institution: "University of Leeds" },
      { degree: "MD (Gastroenterology)", institution: "NHS UK" },
    ],
    services: ["Endoscopy", "Digestive Health Analysis"],
    availability: { days: ["Mon", "Thu"], slots: ["10:00", "12:30", "15:00"] },
    consultationFee: 1700,
    image: doc3,
  },

  {
    id: "doc-08",
    name: "Dr. Ahmed Raza",
    department: "medicine",
    title: "Endocrinology Specialist",
    profile: {
      specialization: "Hormonal & Metabolic Disorders",
      experienceYears: 11,
      languages: ["English", "Urdu"],
    },
    education: [
      { degree: "MBBS", institution: "Dow Medical College" },
      { degree: "MD (Endocrinology)", institution: "AKU" },
    ],
    services: ["Diabetes Care", "Thyroid Disorders"],
    availability: { days: ["Tue", "Wed", "Sat"], slots: ["10:30", "13:00", "16:00"] },
    consultationFee: 1600,
    image: doc8,
  },

  {
    id: "doc-09",
    name: "Dr. Nadia Karim",
    department: "oncology",
    title: "Consultant Oncologist",
    profile: {
      specialization: "Cancer Diagnosis & Treatment",
      experienceYears: 13,
      languages: ["English", "Bengali"],
    },
    education: [
      { degree: "MBBS", institution: "Dhaka Medical College" },
      { degree: "MD (Oncology)", institution: "National Cancer Institute" },
    ],
    services: ["Cancer Screening", "Chemotherapy Planning"],
    availability: { days: ["Sun", "Wed"], slots: ["11:00", "14:00"] },
    consultationFee: 2200,
    image: doc9,
  },

  {
    id: "doc-10",
    name: "Dr. Sofia Mendez",
    department: "cardiology",
    title: "Interventional Cardiologist",
    profile: {
      specialization: "Cardiac Procedures & Imaging",
      experienceYears: 17,
      languages: ["English", "Spanish"],
    },
    education: [
      { degree: "MBBS", institution: "University of Madrid" },
      { degree: "FCPS", institution: "European Cardiology Board" },
    ],
    services: ["Cardiac Stress Testing", "Angiography"],
    availability: { days: ["Mon", "Thu"], slots: ["09:00", "11:00"] },
    consultationFee: 2000,
    image: doc10,
  },

  {
    id: "doc-11",
    name: "Dr. Lucy Chen",
    department: "neurology",
    title: "Sleep & Neuro Specialist",
    profile: {
      specialization: "Sleep Disorders & EEG",
      experienceYears: 8,
      languages: ["English", "Mandarin"],
    },
    education: [
      { degree: "MBBS", institution: "Peking University" },
      { degree: "MD (Neurology)", institution: "Johns Hopkins University" },
    ],
    services: ["Sleep Disorder Assessment", "EEG Monitoring"],
    availability: { days: ["Tue", "Fri"], slots: ["10:00", "12:00"] },
    consultationFee: 1500,
    image: doc11,
  },

  {
    id: "doc-12",
    name: "Dr. Tina Woods",
    department: "medicine",
    title: "Public Health Physician",
    profile: {
      specialization: "Preventive & Community Medicine",
      experienceYears: 10,
      languages: ["English"],
    },
    education: [
      { degree: "MBBS", institution: "University of Sydney" },
      { degree: "MPH", institution: "Harvard University" },
    ],
    services: ["Preventive Care", "Health Screening"],
    availability: { days: ["Sun", "Thu"], slots: ["11:30", "15:00"] },
    consultationFee: 1200,
    image: doc12,
  },

  {
    id: "doc-13",
    name: "Dr. Mohammad Azam",
    department: "medicine",
    title: "Preventive Medicine Specialist",
    profile: {
      specialization: "Lifestyle & Risk Prevention",
      experienceYears: 9,
      languages: ["English", "Bengali"],
    },
    education: [
      { degree: "MD (Preventive Medicine)", institution: "BSMMU" },
    ],
    services: ["Lifestyle Counseling", "Preventive Screening"],
    availability: { days: ["Mon", "Wed"], slots: ["10:00", "13:00"] },
    consultationFee: 1100,
    image: doc13,
  },

  {
    id: "doc-14",
    name: "Dr. Kamal Uddin",
    department: "diagnostics",
    title: "Radiology Consultant",
    profile: {
      specialization: "Medical Imaging & Radiology",
      experienceYears: 14,
      languages: ["English", "Bengali"],
    },
    education: [
      { degree: "MBBS", institution: "Sylhet Medical College" },
      { degree: "MD (Radiology)", institution: "BSMMU" },
    ],
    services: ["CT Scan Review", "MRI Diagnostics"],
    availability: { days: ["Tue", "Sat"], slots: ["09:30", "12:00"] },
    consultationFee: 1700,
    image: doc14,
  },

  {
    id: "doc-15",
    name: "Dr. Elena Park",
    department: "diagnostics",
    title: "Medical AI Research Consultant",
    profile: {
      specialization: "AI Diagnostics & Clinical Data",
      experienceYears: 7,
      languages: ["English", "Korean"],
    },
    education: [
      { degree: "MD", institution: "Seoul National University" },
      { degree: "PhD", institution: "MIT" },
    ],
    services: ["AI-Based Diagnosis", "Clinical Data Review"],
    availability: { days: ["Wed", "Fri"], slots: ["11:00", "14:30"] },
    consultationFee: 2500,
    image: doc15,
  },
  {
  id: "doc-16",
  name: "Dr. Sameer Sheikh",
  department: "pediatrics",
  title: "Senior Pediatric Consultant",
  profile: {
    specialization: "Child Growth & Nutrition",
    experienceYears: 11,
    languages: ["English", "Bengali"],
  },
  education: [
    { degree: "MBBS", institution: "Rajshahi Medical College" },
    { degree: "MD (Pediatrics)", institution: "BSMMU" },
  ],
  services: ["Child Wellness Exams", "Pediatric Nutrition"],
  availability: { days: ["Mon", "Thu"], slots: ["10:00", "13:00"] },
  consultationFee: 1300,
  image: doc16,
},

{
  id: "doc-17",
  name: "Dr. Jenna Smith",
  department: "surgical",
  title: "General & Laparoscopic Surgeon",
  profile: {
    specialization: "Minimally Invasive Surgery",
    experienceYears: 14,
    languages: ["English", "Bengali"],
  },
  education: [
    { degree: "MBBS", institution: "University of Sydney" },
    { degree: "MS (Surgery)", institution: "BSMMU" },
  ],
  services: ["General Surgery", "Minimally Invasive Surgery"],
  availability: { days: ["Sun", "Wed"], slots: ["11:00", "15:00"] },
  consultationFee: 2100,
  image: doc17,
},

{
  id: "doc-18",
  name: "Dr. Fiona Taylor",
  department: "dermatology",
  title: "Clinical Dermatologist",
  profile: {
    specialization: "Skin Allergy & Chronic Conditions",
    experienceYears: 8,
    languages: ["English"],
  },
  education: [
    { degree: "MBBS", institution: "University of Oxford" },
    { degree: "DDVL", institution: "BCPS" },
  ],
  services: ["Eczema & Psoriasis Care", "Skin Allergy Care"],
  availability: { days: ["Tue", "Sat"], slots: ["10:30", "14:00"] },
  consultationFee: 1400,
  image: doc18,
},

{
  id: "doc-19",
  name: "Dr. Adam Miller",
  department: "diagnostics",
  title: "Clinical Diagnostics Consultant",
  profile: {
    specialization: "Laboratory Medicine & Cytology",
    experienceYears: 12,
    languages: ["English", "Italian"],
  },
  education: [
    { degree: "MBBS", institution: "University of Oxford" },
    { degree: "MD (Pathology)", institution: "BSMMU" },
  ],
  services: ["Blood & Biochemistry Tests", "Cytology"],
  availability: { days: ["Mon", "Thu"], slots: ["09:00", "12:00"] },
  consultationFee: 1600,
  image: doc19,
},

{
  id: "doc-20",
  name: "Dr. Emily Carter",
  department: "oncology",
  title: "Assistant Consultant Oncologist",
  profile: {
    specialization: "Cancer Screening & Follow-up Care",
    experienceYears: 7,
    languages: ["English", "Dutch"],
  },
  education: [
    { degree: "MBBS", institution: "University of Sydney" },
    { degree: "MD (Oncology)", institution: "NICRH" },
  ],
  services: ["Cancer Screening", "Oncology Consultations"],
  availability: { days: ["Tue", "Fri"], slots: ["11:00", "14:00"] },
  consultationFee: 1800,
  image: doc20,
},

];
