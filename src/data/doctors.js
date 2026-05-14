import { doctorsData } from "./doctorsData";

export const doctors = doctorsData.slice(0, 8).map(doc => ({
  id: doc.id,
  name: doc.name,
  department: doc.department,
  specialization: doc.title, // for home page card display
  services: doc.services,
  img: doc.image,
}));
