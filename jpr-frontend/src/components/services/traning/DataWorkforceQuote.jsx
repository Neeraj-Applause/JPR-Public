// src/components/DataWorkforceQuote.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Eye, Database, Users } from "lucide-react";

// Import training photos
import img1 from "../../../assets/images/Training photos/DSC09804.jpg";
import img2 from "../../../assets/images/Training photos/DSC09823.jpg";
import img3 from "../../../assets/images/Training photos/DSCN1478.jpg";
import img4 from "../../../assets/images/Training photos/DSCN1500.jpg";
import img5 from "../../../assets/images/Training photos/DSCN1521.jpg";
import img6 from "../../../assets/images/Training photos/DSCN1610.jpg";
import img7 from "../../../assets/images/Training photos/DSCN1620.jpg";
import img8 from "../../../assets/images/Training photos/DSCN1645.jpg";
import img9 from "../../../assets/images/Training photos/DSCN1651.jpg";
import img10 from "../../../assets/images/Training photos/DSCN1663.jpg";
import img11 from "../../../assets/images/Training photos/DSCN1708.jpg";
import img12 from "../../../assets/images/Training photos/Img -01.jpg";
import img13 from "../../../assets/images/Training photos/Img -02.jpg";
import img14 from "../../../assets/images/Training photos/img-05-2024.jpg";
import img15 from "../../../assets/images/Training photos/MicrosoftTeams-image (28).jpg";
import img16 from "../../../assets/images/Training photos/MicrosoftTeams-image (29).jpg";
import img17 from "../../../assets/images/Training photos/Picture1.jpg";
import img18 from "../../../assets/images/Training photos/Picture2.jpg";
import img19 from "../../../assets/images/Training photos/Picture3.jpg";
import img20 from "../../../assets/images/Training photos/Picture10.jpg";
import img21 from "../../../assets/images/Training photos/Picture11.jpg";

export default function DataWorkforceQuote() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  
  const steps = [
    { key: 1, icon: CheckCircle, text: "Problems need to be solved," },
    { key: 2, icon: Eye, text: "Solutions requires understanding," },
    { key: 3, icon: Database, text: "Understanding comes from data," },
    { key: 4, icon: Users, text: "Data requires well trained workforce." },
  ];

  const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setScrollPosition((prev) => (prev + 1) % galleryImages.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [galleryImages.length, isPaused]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-widest text-slate-500 mb-1">
              Insight → Action
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 text-red-500">
              A single chain — from problem to capability
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 text-slate-400">
                    <Icon size={19} />
                  </div>

                  <p className="text-base md:text-lg font-medium leading-relaxed" style={{ color: '#9e1b32' }}>
                    {s.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Horizontal Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <div 
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                className="flex gap-2 p-4 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${scrollPosition * 200}px)` }}
              >
                {duplicatedImages.map((image, index) => (
                  <motion.div
                    key={`${index}-${image}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index % galleryImages.length) * 0.02 }}
                    className="flex-shrink-0 cursor-pointer"
                    onClick={() => setPreviewImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Training photo ${(index % galleryImages.length) + 1}`}
                      className="w-48 h-32 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Auto-scroll indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {galleryImages.slice(0, 8).map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 w-8 rounded-full transition-all duration-300 ${
                      index === scrollPosition % 8
                        ? "bg-primary"
                        : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Preview Modal */}
          {previewImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setPreviewImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-lg max-h-[60vh] p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Footer note */}
         <div className="mt-8 pt-4 border-t border-slate-200">
 <p className="text-sm text-slate-600 max-w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
    <strong className="text-slate-900">Build capability.</strong>{" "}
    Invest in a trained workforce and you make your data work — turning
    insight into measurable impact.
  </p>
</div>

        </motion.div>
      </div>
    </section>
  );
}
