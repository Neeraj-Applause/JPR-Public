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
    <section className="py-4 bg-gradient-to-bl from-white to-blue-50 overflow-x-hidden px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Right: Explanation (modern, clean, simple) */}
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
                  Data collection methods
                </h2>
                <div className="mt-3 h-0.5 w-100 bg-primary rounded-full" />
              </div>
            </div>

            <p className="mt-6 text-gray-700 text-md leading-relaxed">
              The results of analyzing a dataset is only as good and robust as
              the method and quality of the data collected.
            </p>

            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              We assist anybody interested in collecting road safety data with
              an aim of making our journeys safer.
            </p>
          </div>
        </motion.div>

        {/* Left: Animated Donut Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full"
        >
          <div className="w-full max-w-[90vw] md:max-w-[480px] mx-auto">
            <svg
              viewBox="0 0 480 480"
              width="100%"
              className="block"
              overflow="visible"
            >
              <defs>
                {/* Deep red → dark fade */}
                <linearGradient id="seg1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#A01E21" />
                  <stop offset="50%" stopColor="#C73236" />{" "}
                  {/* brighter midpoint */}
                  <stop offset="100%" stopColor="#201D1E" />
                </linearGradient>

                {/* Dark → bright red diagonal */}
                <linearGradient id="seg2" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#201D1E" />
                  <stop offset="40%" stopColor="#5A0F11" />{" "}
                  {/* subtle warm tone */}
                  <stop offset="100%" stopColor="#A01E21" />
                </linearGradient>

                {/* Bright red → deep fade */}
                <linearGradient id="seg3" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#A01E21" />
                  <stop offset="60%" stopColor="#D34347" /> {/* vibrant */}
                  <stop offset="100%" stopColor="#201D1E" />
                </linearGradient>

                {/* Dark → warm → red */}
                <linearGradient id="seg4" x1="1" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#201D1E" />
                  <stop offset="45%" stopColor="#551415" />{" "}
                  {/* rich midpoint */}
                  <stop offset="100%" stopColor="#A01E21" />
                </linearGradient>

                {/* Vertical rich red gradient */}
                <linearGradient id="seg5" x1="0.5" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stopColor="#A01E21" />
                  <stop offset="55%" stopColor="#C93236" /> {/* energetic */}
                  <stop offset="100%" stopColor="#201D1E" />
                </linearGradient>

                {/* Horizontal dark → vivid red */}
                <linearGradient id="seg6" x1="0" y1="0.5" x2="1" y2="0.5">
                  <stop offset="0%" stopColor="#201D1E" />
                  <stop offset="40%" stopColor="#6E1213" />{" "}
                  {/* subtle warm lift */}
                  <stop offset="100%" stopColor="#A01E21" />
                </linearGradient>

                {/* Glow effect (unchanged) */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Donut Segments */}
              {segments.map((seg, i) => {
                let end = seg.endAngle;
                if (end <= seg.startAngle) end += 360;
                const path = describeArc(
                  center,
                  center,
                  outerRadius,
                  innerRadius,
                  seg.startAngle,
                  end
                );
                const midAngle = seg.startAngle + (end - seg.startAngle) / 2;
                const iconPos = polarToCartesian(
                  center,
                  center,
                  iconRadius,
                  midAngle
                );
                const labelPos = polarToCartesian(
                  center,
                  center,
                  labelRadius,
                  midAngle
                );
                // Label position logic: always outside donut, never cut off
                let labelX = labelPos.x;
                let labelY = labelPos.y;
                let anchor = "middle";
                if (midAngle > 60 && midAngle < 120) anchor = "start";
                if (midAngle > 240 && midAngle < 300) anchor = "end";
                // Clamp label position to keep it inside SVG
                const labelBoxWidth = 160;
                const labelBoxHeight = 40;
                const svgSize = 480;
                const clampedX = Math.max(
                  0,
                  Math.min(labelX - labelBoxWidth / 2, svgSize - labelBoxWidth)
                );
                const clampedY = Math.max(
                  0,
                  Math.min(labelY - labelBoxHeight, svgSize - labelBoxHeight)
                );
                return (
                  <motion.g
                    key={seg.label}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.3 + i * 0.15,
                      type: "spring",
                      stiffness: 120,
                    }}
                    onMouseEnter={() => handleMouseEnter(seg.label)}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: "pointer" }}
                  >
                    <motion.path
                      d={path}
                      fill={seg.gradient}
                      opacity={highlighted === seg.label ? 0.32 : 0.18}
                      stroke={seg.color}
                      strokeWidth={highlighted === seg.label ? 5 : 2}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      filter={highlighted === seg.label ? "url(#glow)" : ""}
                      transition={{ duration: 0.2 }}
                    />
                    <foreignObject
                      x={iconPos.x - 34} // slightly bigger offset
                      y={iconPos.y - 34}
                      width={58}
                      height={58}
                      style={{ overflow: "visible" }} // allow scaled child to extend outside
                      className="flex items-center justify-center pointer-events-none"
                    >
                      <motion.div
                        className="flex items-center justify-center h-full w-full rounded-full bg-white/80 shadow-lg"
                        animate={
                          highlighted === seg.label
                            ? { scale: 1.18 }
                            : { scale: 1 }
                        }
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{ transformOrigin: "50% 50%" }} // scale from center
                      >
                        <seg.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                    </foreignObject>

                    {/* Show label only if highlighted (auto or hover) */}
                    <AnimatePresence>
                      {highlighted === seg.label && (
                        <motion.g
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <foreignObject
                            x={clampedX}
                            y={clampedY}
                            width={labelBoxWidth}
                            height={labelBoxHeight}
                          >
                            <div className="bg-white text-primary text-sm font-semibold rounded-lg shadow-lg px-2 py-2 border border-primary/30 text-center pointer-events-none select-none whitespace-nowrap">
                              {seg.label}
                            </div>
                          </foreignObject>
                        </motion.g>
                      )}
                    </AnimatePresence>
                  </motion.g>
                );
              })}
              {/* Center text container */}
              <motion.circle
                cx={center}
                cy={center}
                r={innerRadius - 10}
                fill="#fff"
                stroke={primary}
                strokeWidth={7}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="drop-shadow-2xl"
              />

              <motion.text
                x={center}
                y={center}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={primary}
                fontSize="16"
                fontWeight="600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Data Collection
              </motion.text>

              <motion.text
                x={center}
                y={center + 20}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={primary}
                fontSize="16"
                fontWeight="600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Methodology
              </motion.text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataAnalyticsMethods;
