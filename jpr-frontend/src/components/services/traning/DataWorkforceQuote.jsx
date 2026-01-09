// src/components/DataWorkforceQuote.jsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Eye, Database, Users } from "lucide-react";

export default function DataWorkforceQuote() {
  const steps = [
    { key: 1, icon: CheckCircle, text: "Problems need to be solved," },
    { key: 2, icon: Eye, text: "Solutions requires understanding," },
    { key: 3, icon: Database, text: "Understanding comes from data," },
    { key: 4, icon: Users, text: "Data requires well trained workforce." },
  ];

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
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
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

                  <p className="text-base md:text-lg font-medium text-slate-900 leading-relaxed">
                    {s.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Footer note */}
         <div className="mt-6 pt-4 border-t border-slate-200">
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
