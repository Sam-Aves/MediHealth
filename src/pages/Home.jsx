import Hero from "../components/Hero";
import { services } from "../data/services";
import { doctors } from "../data/doctors";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import blog1 from "../assets/img/blog1.jpg";
import blog2 from "../assets/img/blog2.jpg";
import blog5 from "../assets/img/blog5.jpg";
import review1 from "../assets/img/review1.jpg";
import review2 from "../assets/img/review2.jpg";
import review3 from "../assets/img/review3.jpg";
import review4 from "../assets/img/review4.jpg";

import contact from "../assets/img/contact.jpg";
import appointment from "../assets/img/appointment.jpg";
import Chatbox from "../components/Chatbox";

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (id) => setOpenFaq(openFaq === id ? null : id);

  const faqs = [
    { id: 1, question: "How can I book an appointment?", answer: "You can book an appointment using our appointment section or by clicking the 'Book Appointment' button on the doctor's card." },
    { id: 2, question: "Do you provide emergency services?", answer: "Yes, we provide 24/7 emergency services at our medical facilities." },
    { id: 3, question: "Can I consult online?", answer: "Currently, appointments are in-person. Online consultation features will be coming soon." },
    { id: 4, question: "What insurance do you accept?", answer: "We accept most major health insurance providers. Please contact us for specifics." },
    { id: 5, question: "How do I contact a doctor directly?", answer: "You can view the doctor's details and use the provided contact options or book an appointment for consultation." },
  ];

  const blogs = [
  {
    id: 1,
    title: "Nutrition & Immunity: What Research Really Says",
    snippet:
      "Doctors and nutrition experts break down how diet actually influences immunity — beyond common myths and trends.",
    img: blog1,
    link: "/blog?category=nutrition",
  },
  {
    id: 2,
    title: "Symptoms Doctors Say You Shouldn’t Ignore",
    snippet:
      "Medical professionals explain which symptoms matter, when to wait, and when to seek immediate care.",
    img: blog2,
    link: "/blog?category=symptoms",
  },
  {
    id: 3,
    title: "Medical Discoveries Changing Healthcare Today",
    snippet:
      "A look at recent breakthroughs and innovations that are reshaping modern medicine.",
    img: blog5,
    link: "/blog?category=discoveries",
  },
];


  // Auto-scroll for doctors
  const doctorsRef = useRef(null);
  useEffect(() => {
    const carousel = doctorsRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const itemWidth = 400; // card width + gap
    const interval = setInterval(() => {
      scrollAmount += itemWidth;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
      carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { id: 1, text: "MediCare has been incredible! The doctors are very professional and attentive.", author: "Sarah J.", img: review1 },
    { id: 2, text: "Highly recommend! My experience was seamless and caring.", author: "Michael B.", img: review2 },
    { id: 3, text: "Professional and friendly staff. They made me feel safe and heard.", author: "Sergio K.", img: review3 },
    { id: 4, text: "Top-notch service and compassionate care.", author: "David L.", img: review4 },
  ];

  // Auto-scroll for testimonials
  const testimonialRef = useRef(null);
  useEffect(() => {
    const carousel = testimonialRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const itemWidth = 450; // card width + gap
    const interval = setInterval(() => {
      scrollAmount += itemWidth;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
      carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-base-100 font-sans relative">

      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <section className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05, y: -6, rotateX: 2, rotateY: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer relative bg-base-100"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-center text-white">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center text-primary font-semibold hover:underline text-lg">
              View More Services <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

     {/* DOCTORS */}
<section className="py-24 bg-base-100">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-5xl font-bold text-center mb-16">Meet Our Doctors</h2>

    {/* Carousel */}
    <div ref={doctorsRef} className="flex gap-8 overflow-x-auto scroll-smooth pb-4">
      {doctors.map((doc) => (
        <motion.div
          key={doc.id}
          whileHover={{ scale: 1.05, y: -6, rotateX: 2, rotateY: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex-shrink-0 w-96 h-96 rounded-3xl shadow-2xl overflow-hidden relative cursor-pointer"
        >
          <img
            src={doc.img}
            alt={doc.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-center text-white">
            <h3 className="text-xl font-bold">{doc.name}</h3>
            <p className="text-base-content/90 text-sm">{doc.specialization}</p>
            <div className="flex justify-center gap-3 mt-2">
              <Link
                className="btn btn-primary btn-sm"
                to={`/appointment?doctor=${doc.id}&department=${doc.department}&service=${encodeURIComponent(doc.services[0])}`}
              >
                Book
              </Link>
             <a
              href={`/doctors?doctor=${doc.id}`} 
              className="btn btn-outline btn-sm"
            >
              Details
            </a>

            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="text-center mt-12">
      <Link to="/doctors" className="inline-flex items-center text-primary font-semibold hover:underline text-lg">
        View All Doctors <span className="ml-2">→</span>
      </Link>
    </div>
  </div>
</section>


      {/* BLOG */}
      <section className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Health Articles</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-3xl shadow-2xl overflow-hidden relative cursor-pointer"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-center text-white">
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <p className="text-sm">{blog.snippet}</p>
                  <Link to={blog.link} className="btn btn-primary mt-4 px-6 py-2">Read More</Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center text-primary font-semibold hover:underline text-lg">
              View All Articles <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">What Our Patients Say</h2>

          <div ref={testimonialRef} className="flex gap-12 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex-shrink-0 w-96 md:w-[450px] flex flex-col md:flex-row gap-6 bg-base-200 rounded-3xl shadow-2xl p-6 snap-start"
              >
                <img
                  src={t.img}
                  alt={t.author}
                  className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full flex-shrink-0 self-center md:self-start"
                />
                <div className="text-lg italic relative flex-1">
                  <span className="absolute -top-6 -left-4 text-6xl text-primary/20">“</span>
                  {t.text}
                  <span className="block mt-4 font-semibold text-primary">— {t.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={appointment} alt="Appointment" className="rounded-3xl shadow-2xl w-full" />
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-6">Book an Appointment</h2>
            <p className="text-base-content/70 mb-6">
              Schedule a consultation with our expert doctors and get personalized medical guidance.
            </p>
            <Link to="/appointment" className="btn btn-primary px-10 py-4 text-lg">Book Now →</Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-base-content/70 mb-4">Reach us for any queries, support, or assistance.</p>
            <p className="text-base-content/70 mb-2"><strong>Phone:</strong> +880 123 456 789</p>
            <p className="text-base-content/70 mb-2"><strong>Email:</strong> info@medicare.com</p>
            <p className="text-base-content/70 mb-4"><strong>Address:</strong> 123 Healthcare Ave, Dhaka, Bangladesh</p>
            <Link to="/contact" className="btn btn-primary px-10 py-4 text-lg mt-4">Contact Us →</Link>
          </div>
          <div>
            <img src={contact} alt="Contact" className="rounded-3xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-base-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.slice(0, 4).map((faq) => (
              <div key={faq.id} className="border border-gray-300 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-lg bg-base-200 hover:bg-base-300 transition"
                >
                  {faq.question}
                  <span>{openFaq === faq.id ? "-" : "+"}</span>
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 py-4 text-base-content/70 bg-base-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/faq" className="inline-flex items-center text-primary font-semibold hover:underline text-lg">
              View All FAQs <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CHATBOX */}
      <Chatbox />

    </div>
  );
};

export default Home;
