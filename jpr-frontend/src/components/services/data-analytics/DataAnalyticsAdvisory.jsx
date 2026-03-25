// src/pages/services/DataAnalyticsAdvisory.jsx
import React from "react";
import { motion } from "framer-motion";
import advisoryImg from "../../../assets/images/services/safety_advisory.png"; // update path if needed

export default function DataAnalyticsAdvisory() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* IMAGE (left on lg, top on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-1 py-4"
          >
            <div className="relative rounded-xl overflow-hidden border border-primary">
              <img
                src={advisoryImg}
                alt="Automotive safety advisory"
                className="w-full h-[260px] md:h-[320px] lg:h-[320px] object-cover transform transition-transform duration-400 ease-out hover:scale-102"
              />
            </div>
          </motion.div>

          {/* CONTENT (right on lg, below on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-2"
          >
            <h2 className="text-xl font-semibold text-primary-600 tracking-wide">
              Automotive safety advisory
            </h2>

            <p className="mt-4 max-w-3xl text-justify text-base leading-relaxed text-slate-900">
              Equipped with data on nearly 9000+ accidents across India, we are
              data-wealthy and well experienced in helping the government
              agencies and automotive manufacturers and equipment manufacturers
              with insightful information on addressing road safety questions.
            </p>

            <ul className="mt-6 max-w-2xl space-y-4">
              <li className="flex items-start gap-3 text-slate-900">
                <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span
                  className="block max-w-md flex-1 leading-relaxed"
                  style={{ textAlign: "justify", textJustify: "inter-word" }}
                >
                  "Is my product useful for the market?"
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-900">
                <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span
                  className="block max-w-md flex-1 leading-relaxed"
                  style={{ textAlign: "justify", textJustify: "inter-word" }}
                >
                  "Will this technology help in addressing the intended problem?"
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-900">
                <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span
                  className="block max-w-md flex-1 leading-relaxed"
                  style={{ textAlign: "justify", textJustify: "inter-word" }}
                >
                  "What are the top-ranking problems in road safety to be
                  addressed?"
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
