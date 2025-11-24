import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "../../assets/images/banners/banner1.png";
import banner2 from "../../assets/images/banners/banner2.jpg";
import banner3 from "../../assets/images/banners/banner3.png";

const slides = [
  {
    id: 0,
    hasContent: true,
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
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background image fills the hero */}
      <div className="absolute inset-0">
        <img
          src={activeSlide.image}
          alt={activeSlide.title || "JPR hero banner"}
          className="h-full w-full object-fit"
        />
      </div>

      {/* Content overlay – only on first slide */}
      {activeSlide.hasContent && (
        <div className="relative z-10 flex items-center min-h-screen px-8 lg:px-20 py-12">
          <div className="max-w-2xl text-white space-y-6">
            {/* Badge */}
            <div className="inline-block bg-white px-5 py-2 shadow-md">
              <p className="text-primary font-semibold text-xl tracking-tight">
                {activeSlide.titleBadge}
              </p>
            </div>

            {/* Main title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {activeSlide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/90 max-w-xl">
              {activeSlide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button className="px-7 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary/90 transition">
                Explore Our Work
              </button>
              <button className="px-7 py-3 bg-white text-primary font-semibold rounded-md shadow-md hover:bg-white/90 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dots (bottom left) */}
      <div className="absolute bottom-7 left-10 flex gap-3 z-10">
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

      {/* Arrows (bottom right) */}
      <div className="absolute bottom-6 right-10 flex gap-3 z-10">
        <button
          onClick={() => goTo(activeIndex - 1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-primary shadow-md hover:bg-white transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => goTo(activeIndex + 1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-primary shadow-md hover:bg-white transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
