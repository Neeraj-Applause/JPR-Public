// src/pages/services/DataAnalyticsAdvisory.jsx
import React from "react";
import { motion } from "framer-motion";
import advisoryImg from "../../../assets/images/services/data-advisory.jpg"; // update path if needed

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
            className="lg:col-span-5 order-1"
          >
            <div className="relative rounded-xl overflow-hidden border border-primary">
              <img
                src={advisoryImg}
                alt="Automotive safety advisory"
                className="w-full h-[420px] object-cover transform transition-transform duration-400 ease-out hover:scale-102"
              />
            </div>
          </motion.div>

          {/* CONTENT (right on lg, below on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 order-2"
          >
            <h2 className="text-xl font-semibold text-primary-600 tracking-wide">
              Automotive safety advisory
            </h2>

            <p className="mt-4 text-slate-700 text-base leading-relaxed max-w-3xl">
              Equipped with data on nearly 4,000 accidents across India, we are data-wealthy and well experienced in helping the government agencies and automotive manufacturers and equipment manufacturers with insightful information on addressing questions like, “Is my product useful for the market?”, “Will this technology help in addressing the intended problem?”, “What are the top-ranking problems in road safety to be addressed?”
            </p>

            <ul className="mt-6 space-y-3 max-w-3xl">
              <li className="flex items-start gap-3 text-secondary">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                “Is my product useful for the market?”
              </li>
              <li className="flex items-start gap-3 text-secondary">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                “Will this technology help in addressing the intended problem?”
              </li>
              <li className="flex items-start gap-3 text-secondary">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                “What are the top-ranking problems in road safety to be addressed?”
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
