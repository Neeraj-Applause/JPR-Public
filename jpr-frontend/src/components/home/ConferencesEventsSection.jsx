import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import e1image1 from "../../assets/images/events/event1.jpg";
import e1image2 from "../../assets/images/events/event11.jpg";
import e2image1 from "../../assets/images/events/event2.png";
import e3image1 from "../../assets/images/events/event3.jpg";
import e3image2 from "../../assets/images/events/event31.jpg";

const events = [
  {
    id: 1,
    title: "69th AAAM Conference – Indianapolis, USA",
    date: "October 7–10, 2025",
    location: "Indianapolis, USA",
    tag: "Conference",
    icon: CalendarDays,
    images: [
      e1image1,
      e1image2,
    ],
    description:
      "JPRI represented RASSI at the 69th AAAM Conference held in Indianapolis, USA, from 7–10 October 2025. Ms. Jeya Padmanaban (President & Founder) and Mr. Pradeep Jaswani (COO, JPRI) attended. The LMIC panel, represented by JPRI/Pradeep, highlighted the work being done under the RASSI initiative, including methodologies related to crash investigation, reconstruction, injury analysis, and the use of RASSI data by members and policymakers (BNCAP).",
  },
  {
    id: 2,
    title: "Training on Scientific Crash Investigation – Srinagar",
    date: "September 26, 2025",
    location: "Srinagar, India",
    tag: "Training",
    icon: CalendarDays,
    images: [
      e2image1,
    ],
    description:
      'Mr. Sanjay Baladaniya, Senior Automotive Injury Analyst at JP Research India Pvt. Ltd. (JPRI), conducted a training session on “Scientific Crash Investigations” in Srinagar on 26 September 2025. Organized by the Asian Institute of Transport Development (AITD), New Delhi, the training emphasized accurate crash data collection, on-scene investigation methodology, vehicle speed estimation, and classification of crash causation factors and injuries using the Haddon Matrix.',
  },
  {
    id: 3,
    title:
      "Road Safety Awareness Program for School Children & Bus Drivers – Bengaluru",
    date: "August 18–23, 2025",
    location: "Bengaluru, India",
    tag: "Awareness Program",
    icon: MapPin,
    images: [
      e3image1,
      e3image2,
    ],
    description:
      "Mr. Sanjay Baladaniya, Senior Automotive Injury Analyst at JPRI, conducted a series of road safety awareness sessions for school children and bus drivers in Bengaluru from 18–23 August 2025. The week-long program was organized by the Safety Research Foundation as part of Bosch’s BRACE (Road Safety Awareness and Community Engagement) initiative. Sessions were conducted across multiple schools, focusing on safe road-crossing practices, correct use of helmets and seat belts, and the impact of vision obstruction in heavy vehicles.",
  },
];

function EventCard({ event }) {
  const Icon = event.icon;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const hasMultipleImages = event.images && event.images.length > 1;

  const goToImage = (index) => {
    const total = event.images.length;
    const next = ((index % total) + total) % total;
    setActiveImageIndex(next);
  };

  const currentImage = event.images[activeImageIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="bg-secondary rounded-2xl overflow-hidden shadow-xl shadow-black/30 border border-slate-800/80 hover:border-primary/60 hover:bg-slate-900 backdrop-blur-sm transition-all duration-300 group flex flex-col"
    >
      {/* Image slider */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          key={currentImage}
          src={currentImage}
          alt={event.title}
          initial={{ opacity: 0.4, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

        {/* Tag pill */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-slate-100 border border-white/10 backdrop-blur-sm">
          <Icon className="w-3.5 h-3.5" />
          <span>{event.tag}</span>
        </div>

        {/* Slider controls */}
        {hasMultipleImages && (
          <>
            {/* Arrows */}
            <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToImage(activeImageIndex - 1);
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950/60 border border-white/10 text-slate-100 hover:bg-primary hover:text-slate-950 transition text-xs"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToImage(activeImageIndex + 1);
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950/60 border border-white/10 text-slate-100 hover:bg-primary hover:text-slate-950 transition text-xs"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Dots & image count */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
              <div className="flex gap-1.5 pointer-events-auto">
                {event.images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToImage(idx);
                    }}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      idx === activeImageIndex
                        ? "bg-primary w-3"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                {activeImageIndex + 1} / {event.images.length}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-primary" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate max-w-[160px]">{event.location}</span>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ConferencesEventsSection() {
  return (
   <section className="py-12 text-white relative bg-gradient-to-r from-primary to-secondary">

      {/* Section Title */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Conferences & Events
        </motion.h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-14">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="px-7 py-3 bg-white text-secondary cursor-pointer rounded-xl hover:bg-secondary/70 transition hover:text-white"
        >
          View All Events
        </motion.button>
      </div>
    </section>
  );
}
