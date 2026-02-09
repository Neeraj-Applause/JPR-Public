import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Briefcase,
  MessageCircle,
  DollarSign,
  Settings,
  Bell,
  MapPin,
  Database,
  CheckCircle,
  BarChart2,
} from "lucide-react";
import { useState, useEffect } from "react";
import ImpactLogo from "../../../assets/logos/logo.png";
import advisoryImg from "../../../assets/images/services/data-analytics.jfif";

const primary = "#A01E21";
const secondary = "#201D1E";

const segments = [
  {
    label: "Notification",
    icon: Bell,
    color: primary,
    gradient: "url(#seg1)",
    startAngle: 270,
    endAngle: 330,
    desc: "Alerts and notifications for data collection activities.",
  },
  {
    label: "Field Data Collection",
    icon: MapPin,
    color: secondary,
    gradient: "url(#seg2)",
    startAngle: 330,
    endAngle: 30,
    desc: "On-site collection of observations, counts and measurements.",
  },
  {
    label: "Data entry",
    icon: Database,
    color: primary,
    gradient: "url(#seg3)",
    startAngle: 30,
    endAngle: 90,
    desc: "Capturing raw field data into digital systems.",
  },
  {
    label: "Quality check",
    icon: CheckCircle,
    color: secondary,
    gradient: "url(#seg4)",
    startAngle: 90,
    endAngle: 150,
    desc: "Validation and cleaning to ensure data integrity.",
  },
  {
    label: "Quality data",
    icon: Users,
    color: primary,
    gradient: "url(#seg5)",
    startAngle: 150,
    endAngle: 210,
    desc: "Curated, verified datasets ready for analysis.",
  },
  {
    label: "Data analysis",
    icon: BarChart2,
    color: secondary,
    gradient: "url(#seg6)",
    startAngle: 210,
    endAngle: 270,
    desc: "Interpreting results and deriving actionable insights.",
  },
];

const center = 240;
const outerRadius = 200;
const innerRadius = 90;
const iconRadius = 145;
const labelRadius = 230;

function polarToCartesian(cx, cy, r, angle) {
  const a = ((angle - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(a),
    y: cy + r * Math.sin(a),
  };
}

function describeArc(cx, cy, r1, r2, startAngle, endAngle) {
  const startOuter = polarToCartesian(cx, cy, r1, endAngle);
  const endOuter = polarToCartesian(cx, cy, r1, startAngle);
  const startInner = polarToCartesian(cx, cy, r2, endAngle);
  const endInner = polarToCartesian(cx, cy, r2, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M",
    startOuter.x,
    startOuter.y,
    "A",
    r1,
    r1,
    0,
    largeArcFlag,
    0,
    endOuter.x,
    endOuter.y,
    "L",
    endInner.x,
    endInner.y,
    "A",
    r2,
    r2,
    0,
    largeArcFlag,
    1,
    startInner.x,
    startInner.y,
    "Z",
  ].join(" ");
}

const AUTO_HIGHLIGHT_DURATION = 1200; // ms per segment

const DataAnalyticsMethods = () => {
  const [hovered, setHovered] = useState(null);
  const [autoIdx, setAutoIdx] = useState(0);
  const [autoActive, setAutoActive] = useState(true);

  // Auto-highlight animation on mount
  useEffect(() => {
    if (!autoActive) return;
    const timer = setTimeout(
      () => setAutoIdx((idx) => (idx + 1) % segments.length),
      AUTO_HIGHLIGHT_DURATION
    );
    return () => clearTimeout(timer);
  }, [autoIdx, autoActive]);

  // When user hovers, stop auto animation
  const handleMouseEnter = (label) => {
    setAutoActive(false);
    setHovered(label);
  };
  const handleMouseLeave = () => setHovered(null);

  // Which segment is highlighted?
  const highlighted = autoActive ? segments[autoIdx].label : hovered;

  return (
    <section className="py-4 pb-16 bg-gradient-to-bl from-white to-blue-50 overflow-x-hidden px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-left"
        >
          <div className="max-w-lg bg-white/60 backdrop-blur-sm ml-12 rounded-2xl p-8 border border-primary/10 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0"></div>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary leading-tight">
                  Data analysis expertise
                </h2>
                <div className="mt-3 h-0.5 w-100 bg-primary rounded-full" />
              </div>
            </div>

            <p className="mt-6 text-gray-700 text-md leading-relaxed">
               In-depth road safety data analytics using Python, R, and SAS, covering both structured and unstructured crash datasets
Leveraging automation and AI for digitization of manual accident records such as police accident reports.
Processing of in-depth accident reconstruction to provide usable and actionable pre-crash data.
Development of interactive dashboards for real-time visualizations and continuous accident trend monitoring.
Identification of high-risk locations (black spots) through frequency, severity, exposure, and spatial pattern analysis.
            </p>

            <p className="mt-4 text-gray-600 text-base leading-relaxed">
           Accident trend analysis, examining collision types, road geometry, traffic movements, time-of-day, environmental conditions, and year-wise, location-wise, and severity-wise trends to understand evolving crash characteristics.
Vulnerable Road User (VRU), focused analysis, with detailed assessment of contributing factors affecting pedestrians, bicyclists, and motorcyclists, aimed at identifying risk patterns and safety improvement opportunities.
Advanced AI and Machine Learning–supported analytical analysis for deep learning to uncover complex patterns, relationships, and insights within crash data.
            </p>
          </div>
        </motion.div>

        {/* Left: Image Card (replacing donut diagram) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full"
        >
          <div className="w-full max-w-[90vw] md:max-w-[420px] mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-primary">
              <img
                src={advisoryImg}
                alt="Automotive safety advisory"
                className="w-full h-[320px] object-cover transform transition-transform duration-400 ease-out hover:scale-102"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataAnalyticsMethods;
