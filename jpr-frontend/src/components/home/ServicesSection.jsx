import crashIcon from "../../assets/icons/our_services/Crash_Investigation.svg";
import roadIcon from "../../assets/icons/our_services/Road_Safety_Engineering.svg";
import dataIcon from "../../assets/icons/our_services/Data_Analytics.svg";
import trainingIcon from "../../assets/icons/our_services/Training.svg";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Crash Investigation",
      description:
        "Expert analysis of road traffic crashes using scientific methodologies and advanced tools.",
      icon: crashIcon,
      path: "/services/crash-investigations",
    },
    {
      id: 2,
      title: "Road Safety Engineering",
      description:
        "Comprehensive road safety audits and engineering solutions to prevent crashes.",
      icon: roadIcon,
      path: "/services/road-safety-engineering",
    },
    {
      id: 3,
      title: "Data Analytics",
      description:
        "Advanced analytics of crash data to identify patterns and develop preventive measures.",
      icon: dataIcon,
      path: "/services/data-analytics",
    },
    {
      id: 4,
      title: "Training",
      description:
        "Professional training programs for crash investigation and road safety management.",
      icon: trainingIcon,
      path: "/services/training",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            Our Services
          </h2>
          <div className="mt-3 mb-4 flex justify-center">
            <span className="h-[3px] w-24 bg-primary rounded-full" />
          </div>
          <div className="text-sm sm:text-base text-[#555]">
            Comprehensive road safety research and solutions
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ id, title, description, icon, path }) => (
            <article
              key={id}
              onClick={() => navigate(path)}
              className="
                group bg-white rounded-2xl border border-[#e3e3e3]
                px-6 py-6 flex flex-col justify-between h-full
                shadow-[0_8px_18px_rgba(0,0,0,0.20)]
                transition-all duration-300
                hover:bg-primary hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]
                hover:-translate-y-1 cursor-pointer
              "
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") navigate(path);
              }}
            >
              <div>
                {/* Icon Circle */}
                <div
                  className="
                    h-18 w-18 rounded-full bg-[#f9e9e9]
                    flex items-center justify-center mb-5
                    transition-all duration-300
                    group-hover:bg-white
                  "
                >
                  <img
                    src={icon}
                    alt={title}
                    className="h-12 w-12 transition-all duration-300"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-lg font-semibold mb-2 text-[#111]
                    transition-all duration-300
                    group-hover:text-white
                  "
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-sm leading-relaxed text-[#555]
                    transition-all duration-300
                    group-hover:text-white/90
                  "
                >
                  {description}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevents card click from firing twice
                  navigate(path);
                }}
                className="
                  mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary
                  transition-all duration-300
                  group-hover:text-white cursor-pointer
                "
              >
                Learn More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
