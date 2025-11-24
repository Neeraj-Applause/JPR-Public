import crashIcon from "../../assets/icons/our_services/Crash_Investigation.png";
import roadIcon from "../../assets/icons/our_services/Road_Safety_Engineering.png";
import dataIcon from "../../assets/icons/our_services/Data_Analytics.png";
import trainingIcon from "../../assets/icons/our_services/Training.png";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Crash Investigation",
      description:
        "Expert analysis of road traffic crashes using scientific methodologies and advanced tools.",
      icon: crashIcon,
    },
    {
      id: 2,
      title: "Road Safety Engineering",
      description:
        "Comprehensive road safety audits and engineering solutions to prevent crashes.",
      icon: roadIcon,
    },
    {
      id: 3,
      title: "Data Analytics",
      description:
        "Advanced analytics of crash data to identify patterns and develop preventive measures.",
      icon: dataIcon,
    },
    {
      id: 4,
      title: "Training",
      description:
        "Professional training programs for crash investigation and road safety management.",
      icon: trainingIcon,
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
          <p className="text-sm sm:text-base text-[#555]">
            Comprehensive road safety research and solutions
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ id, title, description, icon }) => (
            <article
              key={id}
              className="
                group bg-white rounded-2xl border border-[#e3e3e3]
                px-6 py-6 flex flex-col justify-between h-full
                shadow-[0_8px_18px_rgba(0,0,0,0.20)]
                transition-all duration-300
                hover:bg-primary hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]
                hover:-translate-y-1 cursor-pointer
              "
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

              {/* Learn More */}
              <button
                className="
                  mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary
                  transition-all duration-300
                  group-hover:text-white
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
