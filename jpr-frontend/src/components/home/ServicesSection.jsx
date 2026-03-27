  // Import service images
  import crashImage from "../../assets/images/our_services/crash_investigation.jpg";
  import dataImage from "../../assets/images/our_services/data_analytics.jpg";
  import roadImage from "../../assets/images/our_services/road_safety.jpg";
  import trainingImage from "../../assets/images/our_services/training.jpg";
  
  import { useNavigate } from "react-router-dom";

  export default function ServicesSection() {
    const navigate = useNavigate();

    const services = [
      {
        id: 1,
        title: "Crash Investigation",
        description:
          "Scientific and expert crash investigation using established and proprietary methodologies to identify causes and contributing factors, generating evidence-based insights for safer vehicles and roads.",
        image: crashImage,
        path: "/services/crash-investigations",
      },
      {
        id: 2,
        title: "Road Safety Engineering",
        description:
          "Comprehensive services including road safety audits, blackspot studies/assessments, traffic speed/volume studies, toll-plaza safety assessments etc. towards building and promoting safer road infrastructure",
        image: roadImage,
        path: "/services/road-safety-engineering",
      },
      {
        id: 3,
        title: "Data Analytics",
        description:
          "Advanced data analytics to identify crash patterns/trends, contributing factors, efficacy of safety systems etc. to promote data driven interventions for policy makers, automotive manufacturers and other stakeholders.",
        image: dataImage,
        path: "/services/data-analytics",
      },
      {
        id: 4,
        title: "Training",
        description:
          "Detailed training programs and workshops on crash investigations, crash analysis, and road safety engineering.",
        image: trainingImage,
        path: "/services/training",
      },
    ];

    return (
      <section className="w-full bg-[#f5f5f5] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ id, title, description, image, path }) => (
              <article
                key={id}
                onClick={() => navigate(path)}
                className="
                  group bg-white rounded-3xl border border-slate-200/60
                  overflow-hidden flex flex-col h-full
                  shadow-lg hover:shadow-2xl
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 cursor-pointer
                  transform-gpu
                "
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") navigate(path);
                }}
              >
                {/* Image Header - Reduced height */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-600 mb-6 flex-grow text-justify" style={{ textAlignLast: 'left', hyphens: 'auto', wordSpacing: 'normal' }}>
                    {description}
                  </p>

                  {/* Learn More Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(path);
                    }}
                    className="
                      inline-flex items-center gap-2 text-sm font-semibold text-primary
                      hover:text-primary/80 transition-all duration-300
                      group-hover:gap-3
                    "
                  >
                    Learn More 
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
