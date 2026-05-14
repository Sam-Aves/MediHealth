// src/data/services.js
import Cardiology from "../assets/img/Cardiology.jpg";
import Neurology from "../assets/img/Neurology.jpg";
import Pediatrics from "../assets/img/Pediatrics1.jpg";
import Surgery from "../assets/img/Surgery.jpg";
import Medicine from "../assets/img/Medicine.jpg";
import Dermatology from "../assets/img/Dermatology.jpg";

import { HeartPulse, Brain, Baby, Scissors, Stethoscope, Sparkles } from "lucide-react";

export const services = [
  { id: 1, title: "Cardiology", desc: "Advanced heart care.", icon: HeartPulse, image: Cardiology },
  { id: 2, title: "Neurology", desc: "Brain & nerve treatments.", icon: Brain, image: Neurology },
  { id: 3, title: "Pediatrics", desc: "Healthcare for children.", icon: Baby, image: Pediatrics },
  { id: 4, title: "Surgery", desc: "Safe surgical procedures.", icon: Scissors, image: Surgery },
  { id: 5, title: "General Medicine", desc: "Primary care.", icon: Stethoscope, image: Medicine },
  { id: 6, title: "Dermatology", desc: "Skin & cosmetic treatments.", icon: Sparkles, image: Dermatology },
];
