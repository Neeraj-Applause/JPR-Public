import Crash_Cases from "../../assets/icons/statsstrip/Crash_Cases.svg";
import Expertise_Area from "../../assets/icons/statsstrip/Expertise_Area.svg";
import Research_Network from "../../assets/icons/statsstrip/Research_Network.svg";
import Safety_Insights from "../../assets/icons/statsstrip/Safety_Insights.svg";

const stats = [
  {
    icon: Crash_Cases,
    highlight: "9000+",
    title: "Crash Cases Investigated",
  },
  {
    icon: Expertise_Area,
    highlight: "Pan - India",
    title: "Presence",
  },
  {
    icon: Safety_Insights,
    highlight: "14 Years",
    title: "Of In Depth Research",
  },
  {
    icon: Research_Network,
    highlight: "Data - Driven",
    title: "Safety Insights",
  },
];

export default function StatsStrip() {
  return (
    <section className="w-full bg-secondary py-8">
      <div className="px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon, highlight, title }) => (
            <div
              key={highlight}
              className="bg-white rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.20)] px-4 py-4 flex flex-col items-center text-center"
            >

                <img
                  src={icon}
                  alt={title}
                  className="h-24 w-24 object-contain"
                />


              {/* Highlight text */}
              <p className="text-[28px] font-semibold text-primary">
                {highlight}
              </p>

              {/* Sub Label */}
              <p className="text-base font-semibold text-black">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
