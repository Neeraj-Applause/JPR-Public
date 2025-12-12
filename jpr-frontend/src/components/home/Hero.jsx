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
import banner8 from "../../assets/images/banners/banner8.jpg";
import banner31 from "../../assets/images/banners/banner31.jpg";
import banner32 from "../../assets/images/banners/banner32.jpg";

/* BannerCollage — place this where you used BannerCollage previously */
const BannerCollage = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center z-30">

      {/* Visible gradient background using your brand colors */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(158,27,50,0.65) 0%, rgba(158,27,50,0.45) 100%)",
          backdropFilter: "blur(6px)",
        }}
      />

      <div className="relative w-full max-w-6xl px-6 py-10 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* Left card */}
          <motion.div
            initial={{ rotate: -4, scale: 0.985 }}
            whileHover={{ rotate: -1, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="relative rounded-2xl overflow-hidden shadow-[0_28px_60px_rgba(2,6,23,0.5)] border border-white/6 bg-transparent"
            style={{ transformOrigin: "center" }}
          >
            <img
  src={banner31}
  alt="Founder 1"
  className="w-full h-[70vh] md:h-[78vh] object-cover object-top block"
  draggable={false}
/>

            {/* subtle translucent overlay so text/dots remain readable,
                but low enough opacity so the gradient shows around the cards */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            
            {/* thin highlight edge to separate card from background */}
            <div className="absolute top-4 left-4 right-4 h-[2px] bg-white/6 rounded" />
          </motion.div>

          {/* Right card overlapping slightly for depth */}
          <motion.div
            initial={{ rotate: 4, scale: 0.985 }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.02 }}
            className="relative -mt-8 md:mt-6 rounded-2xl overflow-hidden shadow-[0_32px_70px_rgba(2,6,23,0.55)] border border-white/6 bg-transparent"
            style={{ zIndex: 6 }}
          >
           <img
  src={banner32}
  alt="Founder 2"
  className="w-full h-[70vh] md:h-[78vh] object-cover object-center block"
  draggable={false}
/>

            <div className="absolute inset-0 bg-black/16 pointer-events-none" />
            <div className="absolute bottom-4 left-6 text-white/40 text-xs pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </div>
  );
};


const slides = [
  {
    id: 0,
    image: banner1,
    caption: "Pioneers of In-depth/scientific crash investigations in India",
  },
  {
    id: 1,
    image: banner2,
    caption: "Crash analysis to identify contributing factors to a crash",
  },
  { 
  id: 2, 
  image: BannerCollage,   // <-- using collage instead of a static image
  caption: "Promoting data driven decision making"
},


  { id: 3, image: banner4, caption: "Awards & Recognitions" },
  {
    id: 5,
    image: banner6,
    caption: "Road Safety Audits & Blackspot mitigation services ",
  },
  {
    id: 6,
    image: banner7,
    caption: "Capacity building for Govt departments & traffic police",
  },
  {
    id: 7,
    image: banner8,
    caption: "Team Outing – JPRI team at Kutch-Gujarat – Nov 2025",
  },

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
       {typeof activeSlide.image === "function" ? (
  <activeSlide.image />
) : (
  <img
    src={activeSlide.image}
    alt="Hero Banner"
    className="h-full w-full object-cover object-top"
  />
)}


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
              <h2 className="font-semibold leading-tight">
                <span
                  className="
      block
      text-white
      whitespace-nowrap
      overflow
      max-w-full
     text-[16px] sm:text-xs md:text-md lg:text-lg


    "
                >
                  {activeSlide.caption}
                </span>
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
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex-col items-center gap-1 text-[11px] tracking-wide text-white hover:text-white transition"
      >
        {/* move arrow up a bit, text stays */}
        <ChevronDown className="h-10 w-10 animate-bounce relative -top-6 text-white/80" />
        <span>Scroll to learn more</span>
      </button>
    </section>
  );
}
