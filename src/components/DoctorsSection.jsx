import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import { doctors } from "../data/doctors";

const DoctorsSection = () => {
  const doctorsRef = useRef(null);

  // Auto-scroll carousel
  useEffect(() => {
    const carousel = doctorsRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const cardWidth = 360; // width of each card + gap
    const interval = setInterval(() => {
      scrollAmount += cardWidth;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      }
      carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">Meet Our Doctors</h2>

        {/* Doctors carousel */}
        <div
          ref={doctorsRef}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-4"
        >
          {doctors.map((doc) => (
            <div key={doc.id} className="flex-shrink-0 w-80">
              <DoctorCard {...doc} />
            </div>
          ))}
        </div>

        {/* View More link */}
        <div className="text-center mt-12">
          <Link
            to="/doctors"
            className="inline-flex items-center text-primary font-semibold hover:underline text-lg"
          >
            View More Doctors <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
