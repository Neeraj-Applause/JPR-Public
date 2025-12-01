// src/components/DataWorkforceQuote.jsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Eye, Database, Users } from "lucide-react";

/**
 * DataWorkforceQuote
 *
 * A modern, sleek quote/steps component showing the chain:
 *   Problems need to be solved,
 *   Solutions requires understanding,
 *   Understanding comes from data,
 *   Data requires well trained workforce.
 *
 * - Uses subtle motion for entrance and hover micro-interactions
 * - Clean, typographic-first design, responsive
 * - TailwindCSS utility classes (adjust if you use different CSS)
 *
 * Paste into your page: <DataWorkforceQuote />
 *
 * Note: keeps the copy exactly as provided by the user.
 */

export default function DataWorkforceQuote() {
  const steps = [
    {
      key: 1,
      icon: CheckCircle,
      text: "Problems need to be solved,",
      accent: "Problems",
    },
    {
      key: 2,
      icon: Eye,
      text: "Solutions requires understanding,",
      accent: "Solutions",
    },
    {
      key: 3,
      icon: Database,
      text: "Understanding comes from data,",
      accent: "Understanding",
    },
    {
      key: 4,
      icon: Users,
      text: "Data requires well trained workforce.",
      accent: "Data",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-tr from-white/60 to-white/40 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 md:p-12 shadow-lg"
        >
          {/* Header / quote label */}
          <div className="flex items-center justify-between gap-6 mb-6">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-primary/90 mb-1">
                Insight → Action
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                A single chain — from problem to capability
              </h2>
            </div>
          </div>

          {/* Steps layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isLast = idx === steps.length - 1;
              return (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="relative flex flex-col items-start gap-4 p-4"
                >
                  {/* Number + icon badge */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center h-12 w-12 rounded-xl border ${!isLast ? "bg-white" : "bg-primary"} ${!isLast ? "border-slate-100" : "border-primary"} shadow-sm`}
                      aria-hidden
                    >
                      <span className={`text-sm font-semibold ${!isLast ? "text-slate-700" : "text-white"}`}>{`0${s.key}`}</span>
                    </div>

                    <div className="h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="pl-1">
                    <p className="text-lg md:text-xl font-semibold text-slate-900 leading-tight">
                      {s.text}
                    </p>
                  </div>

                  {/* vertical connector for md+ */}
                  {!isLast && (
                    <div
                      className="hidden md:block absolute right-[-1.5rem] top-12 h-[calc(100% - 48px)] w-0.5 bg-gradient-to-b from-primary/30 to-transparent"
                      aria-hidden
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA/footnote */}
          <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-sm text-slate-600 max-w-xl">
              <strong className="text-slate-900">Build capability.</strong> Invest in a trained workforce and you make your data work — turning insight into measurable impact.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
