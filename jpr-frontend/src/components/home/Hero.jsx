import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

import banner1 from "../../assets/images/banners/banner1.jpg";
import banner2 from "../../assets/images/banners/banner2.png";
import banner3 from "../../assets/images/banners/banner3.jpg";
import banner4 from "../../assets/images/banners/banner4.JPG";
import banner5 from "../../assets/images/banners/banner5.jpg";
import banner6 from "../../assets/images/banners/banner6.png";
import banner7 from "../../assets/images/banners/banner7.jpg";

const slides = [
  { id: 0, image: banner1, caption: "Pioneering In-Depth Crash Investigations In India." },
  { id: 1, image: banner2, caption: "Crash Analysis" },
  { id: 2, image: banner3, caption: "Pushing for data-driven decision making" },
  { id: 3, image: banner4, caption: "Award winning change makers" },
  { id: 4, image: banner5, caption: "Preparing next-gen for a safer tomorrow" },
  { id: 5, image: banner6, caption: "Road Safety Engineering" },
  { id: 6, image: banner7, caption: "Capacity Building" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => {
    const total = slides.length;
    setActiveIndex(((index % total) + total) % total);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(activeIndex + 1);
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen overflow-hidden bg-black">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <img
          src={activeSlide.image}
          alt="Hero Banner"
          className="h-full w-full object-cover object-top"
        />

        {/* Vignette + bottom-focused overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/6 to-black/6" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] md:h-[35%] lg:h-[30%] bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Caption block (bottom-aligned) */}
      {activeSlide.caption && (
        <div className="relative z-30">
          <div className="relative mx-auto flex min-h-[55vh] md:min-h-screen max-w-7xl items-end px-6 pb-10 lg:px-12 lg:pb-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 max-w-2xl"
            >
              <h2 className="text-xl sm:text-2xl lg:text-[1.6rem] font-semibold leading-tight">
                <span className="text-white">{activeSlide.caption}</span>
              </h2>

              <p className="text-sm text-slate-200/90 max-w-md"></p>
            </motion.div>
          </div>
        </div>
      )}

      {/* Dots */}
      <div className="absolute bottom-8 sm:bottom-10 left-6 sm:left-10 flex gap-3 z-40">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goTo(index)}
            className={`h-2.5 w-2.5 rounded-full border transition ${
              index === activeIndex
                ? "bg-primary border-primary"
                : "bg-white/60 border-white/80"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute bottom-8 sm:bottom-10 right-6 sm:right-10 flex gap-3 z-40">
        <button
          onClick={() => goTo(activeIndex - 1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-primary shadow-md hover:bg-primary transition hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => goTo(activeIndex + 1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-primary shadow-md hover:bg-primary hover:text-white transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

{/* Modern Scroll Cue */}
<button
  type="button"
  onClick={() => {
    const target = document.getElementById("main-content");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 text-[11px] tracking-wide text-white hover:text-white transition"
>
  <ChevronDown className="h-10 w-10 animate-bounce" />
  <span>Scroll to learn more</span>
</button>

    </section>
  );
}
