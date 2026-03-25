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
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 shadow-md">
            {/* Centered Heading */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary leading-tight">
                Data analysis expertise
              </h2>
              <div className="mt-3 h-0.5 w-100 bg-primary rounded-full mx-auto" />
            </div>

            {/* Content with Image and Text */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Image on left */}
              <div className="w-full md:w-2/5 flex-shrink-0">
                <div className="relative rounded-xl overflow-hidden border border-primary">
                  <img
                    src={advisoryImg}
                    alt="Data analytics expertise"
                    className="w-full h-64 md:h-80 object-cover transform transition-transform duration-400 ease-out hover:scale-102"
                  />
                </div>
              </div>

              {/* Text on right - wraps under image on mobile */}
              <div className="w-full md:w-3/5 text-center md:text-left">
                <p className="mt-2 text-justify text-md leading-relaxed text-gray-600">
                               Advanced road safety analytics using Python, R, and SAS on structured and unstructured crash datasets. AI-driven digitization and automation of manual accident records, including police accident reports. In-depth accident reconstruction analysis to generate actionable pre-crash and causation insights. Development of interactive, real-time dashboards for continuous accident trend monitoring.
                   <br></br>       Black spot identification using frequency, severity, exposure, and spatial pattern analysis. Accident trend analysis across collision types, road geometry, traffic movements, time-of-day, environmental conditions, and year/location-wise severity patterns. Vulnerable Road User (VRU) analysis covering pedestrians, bicyclists, and motorcyclists to identify key risk factors and targeted safety improvement opportunities. AI & Machine Learning–driven analytics, including deep learning, to uncover complex patterns, relationships, and hidden insights in crash data.
                </p>

                
              </div>
            </div>
          </div>
        </motion.div>
    </section>
  );
};

export default DataAnalyticsMethods;
