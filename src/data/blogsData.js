// src/data/blogsData.js
import nutrition1 from "../assets/img/nutrition11.jpg";
import nutrition2 from "../assets/img/nutrition44.jpg";
import nutrition3 from "../assets/img/nutrition33.jpg";

import symptoms1 from "../assets/img/symptoms6.jpg";
import symptoms2 from "../assets/img/symptoms5.jpg";
import symptoms3 from "../assets/img/symptoms4.jpg";

import discoveries1 from "../assets/img/lab2.jpg";
import discoveries2 from "../assets/img/discoveries4.jpg";
import discoveries3 from "../assets/img/lab3.jpg";

export const allBlogs = {
  nutrition: [
    {
      id: "nutrition1",
      title: "Nutrition & Immunity: What Science Actually Supports",
      img: nutrition1,
      author: "Dr. Ayesha Rahman",
      role: "Clinical Nutritionist",
      readTime: "6 min read",
      content: `
Scientific evidence consistently shows that immune function is influenced by long-term dietary patterns rather than individual foods or supplements.

Adequate intake of micronutrients such as zinc, vitamin D, and antioxidants supports immune regulation, while chronic consumption of ultra-processed foods is associated with increased inflammation.

Clinical nutrition focuses on dietary consistency, metabolic balance, and gut health rather than short-term dietary trends or “immune-boosting” claims.
`
,
    },
    {
      id: "nutrition2",
      title: "Why Gut Health Is Central to Overall Well-Being",
      img: nutrition2,
      author: "Dr. Samir Hasan",
      role: "Gastroenterology Researcher",
      readTime: "5 min read",
      content: `
The gut microbiome plays a central role in immune modulation, metabolic regulation, and neurological signaling.

Reduced microbial diversity has been linked to inflammatory disorders, insulin resistance, and impaired immune responses. Diets rich in fiber and plant-based nutrients promote microbiome stability.

Modern medical research increasingly treats gut health as a foundational determinant of systemic health rather than an isolated concern.
`,
    },
    {
      id: "nutrition3",
      title: "Nutrition Myths Doctors Are Tired of Hearing",
      img: nutrition3,
      author: "Dr. Nabila Chowdhury",
      role: "Internal Medicine Specialist",
      readTime: "4 min read",
      content: `
Many popular nutrition trends lack clinical validation and may contribute to nutrient deficiencies or metabolic stress.

Practices such as extreme detox regimens and prolonged fasting are often promoted without evidence of long-term benefit. Medical guidance emphasizes balance, adequacy, and personalization.

Evidence-based nutrition prioritizes sustainability and physiological needs over viral health claims.
`,
    },
  ],

  symptoms: [
    {
      id: "symptoms1",
      title: "Symptoms Doctors Say You Should Never Ignore",
      img: symptoms1,
      author: "Dr. Farhan Malik",
      role: "Emergency Medicine Consultant",
      readTime: "6 min read",
      content: `
Certain symptoms warrant prompt medical evaluation due to their association with serious underlying conditions.

Persistent chest discomfort, neurological changes, unexplained weight loss, or progressive shortness of breath should not be dismissed. Early diagnosis significantly improves clinical outcomes.

Healthcare professionals stress timely assessment over self-monitoring when warning signs persist.
`,
    },
    {
      id: "symptoms2",
      title: "Understanding Fatigue: When Tiredness Isn’t Normal",
      img: symptoms2,
      author: "Dr. Reema Siddiqui",
      role: "Physician & Sleep Specialist",
      readTime: "5 min read",
      content: `
Chronic fatigue differs from routine tiredness and often reflects underlying physiological or medical causes.

Conditions such as anemia, thyroid dysfunction, sleep disorders, and chronic inflammation frequently present with persistent exhaustion. Clinical evaluation is essential for accurate diagnosis.

Addressing fatigue requires identifying root causes rather than relying solely on lifestyle adjustments.
`,
    },
    {
      id: "symptoms3",
      title: "Why Self-Diagnosis Can Be Dangerous",
      img: symptoms3,
      author: "Dr. Imran Hossain",
      role: "Public Health Advisor",
      readTime: "4 min read",
      content: `
Self-diagnosis using online tools may lead to delayed treatment or misinterpretation of symptoms.

Medical conditions often present with overlapping signs that require clinical judgment, testing, and contextual evaluation. Inaccurate conclusions can increase anxiety or mask serious illness.

Professional medical assessment remains critical for safe and effective care.
`,
    },
  ],

  discoveries: [
    {
      id: "discoveries1",
      title: "How AI Is Reshaping Modern Diagnostics",
      img: discoveries1,
      author: "Dr. Elena Park",
      role: "Medical AI Researcher",
      readTime: "6 min read",
      content: `
Artificial intelligence is increasingly integrated into diagnostic workflows to enhance accuracy and efficiency.

Applications include radiological analysis, pattern recognition, and predictive risk modeling. Clinical oversight remains essential to ensure appropriate interpretation.

AI functions as a decision-support tool, augmenting — not replacing — medical expertise.
`,
    },
    {
      id: "discoveries2",
      title: "Telemedicine: What Changed After the Pandemic",
      img: discoveries2,
      author: "Dr. Kamal Uddin",
      role: "Health Systems Analyst",
      readTime: "5 min read",
      content: `
The rapid expansion of telemedicine transformed healthcare accessibility and service delivery.

While remote consultations improved reach and continuity of care, challenges persist in quality assurance, regulatory standards, and digital inclusion.

Healthcare systems are now refining hybrid models that balance in-person and virtual care.

Ongoing research emphasizes the need for standardized clinical protocols, secure data infrastructure, and physician training to ensure telemedicine delivers outcomes comparable to traditional care.
`,
    },
    {
      id: "discoveries3",
      title: "Why Preventive Medicine Is Gaining Momentum",
      img: discoveries3,
      author: "Dr. Sofia Mendes",
      role: "Preventive Medicine Specialist",
      readTime: "4 min read",
      content: `
Preventive medicine emphasizes early intervention to reduce disease burden and long-term healthcare costs.

Screening programs, lifestyle modification, and population-level health strategies improve outcomes across chronic conditions. Prevention shifts focus from treatment to risk reduction.

Modern healthcare increasingly recognizes prevention as a clinical priority rather than an optional approach.
`,
    },
  ],
};

export const categories = ["nutrition", "symptoms", "discoveries"];