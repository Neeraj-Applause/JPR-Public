import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import banner1 from "../../assets/images/banners/banner1.png"; // desktop hero
import banner2 from "../../assets/images/banners/banner2.jpg";
import banner3 from "../../assets/images/banners/banner3.png";
import bannerMiddle from "../../assets/images/banners/mobile/banner1-mobile.png";

const slides = [
  {
    id: 0,
    hasContent: true,
    mobileGradient: true, // <-- enable gradient for mobile
    titleBadge: "14 Years of",
    title: "In-Depth Indian Crash Data",
    subtitle:
      "Advancing Road Safety Through Scientific Research And Real World Crash Investigations",
    image: banner1,
  },
  {
    id: 1,
    hasContent: false,
    image: banner2,
  },
  {
    id: 2,
    hasContent: false,
    image: banner3,
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
    <section className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden bg-black">
      {/* Background Layer */}
      <div className="absolute inset-0">
        {/* FIRST SLIDE — mobile gradient instead of image */}
        {activeSlide.id === 0 ? (
          <>
            {/* Mobile: gradient only */}
            <div className="block md:hidden h-full w-full bg-gradient-to-br from-[#201D1E] to-[#A01E21]"></div>

            {/* Desktop: first banner should FIT */}
            <img
              src={activeSlide.image}
              alt="Hero Banner"
              className={`hidden md:block h-full w-full ${
                activeSlide.id === 0
                  ? "object-fit bg-black"
                  : "object-cover"
              }`}
            />
          </>
        ) : (
          // Other slides use normal image
          <img
            src={activeSlide.image}
            alt="Hero Banner"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Content overlay – only on first slide */}
      {activeSlide.hasContent && (
        <div className="relative z-10 flex items-start min-h-screen px-4 sm:px-8 lg:px-20 sm:pt-20 pb-6">
          <div className="max-w-2xl text-white space-y-3 sm:space-y-5 text-center lg:text-left mt-24">
            {/* Badge */}
            <div className="inline-block bg-white px-4 py-1.5 sm:px-5 sm:py-2 shadow-md">
              <p className="text-primary font-semibold text-sm sm:text-lg tracking-tight">
                {activeSlide.titleBadge}
              </p>
            </div>

            {/* Main title */}
            <h1
              className="
          text-2xl
          sm:text-4xl
          lg:text-4xl
          font-bold leading-tight
        "
            >
              {activeSlide.title}
            </h1>

            {/* Subtitle */}
            <p
              className="
          text-xs
          sm:text-base
          lg:text-lg
          text-white/90 max-w-xl mx-auto lg:mx-0
        "
            >
              {activeSlide.subtitle}
            </p>

            {/* MIDDLE GRAPHIC — ONLY Mobile */}
            <div className="flex justify-center pt-4 md:hidden">
              <img
                src={bannerMiddle}
                alt="Crash Analysis Diagram"
                className="w-100 sm:w-100 mx-auto"
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-6">
              <button
                className="
            px-4 py-2     
            sm:px-6 sm:py-3
            bg-primary text-white text-sm sm:text-base
            font-semibold rounded-md shadow-md hover:bg-primary/90 transition
          "
              >
                Explore Our Work
              </button>

              <button
                className="
            px-4 py-2
            sm:px-6 sm:py-3
            bg-white text-primary text-sm sm:text-base
            font-semibold rounded-md shadow-md hover:bg-white/90 transition
          "
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dots */}
      <div className="absolute bottom-7 left-6 sm:left-10 flex gap-3 z-10">
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
      <div className="absolute bottom-6 right-6 sm:right-10 flex gap-3 z-10">
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
    </section>
  );
}
