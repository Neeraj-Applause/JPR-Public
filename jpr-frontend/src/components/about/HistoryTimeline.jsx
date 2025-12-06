// src/components/about/HistoryTimeline.jsx
import { Clock3 } from "lucide-react";
import image1 from "../../assets/images/history/2006.png";
import image2 from "../../assets/images/history/2008.png";
import image3 from "../../assets/images/history/2010.png";
import image4 from "../../assets/images/history/today.png";
import crash from "../../assets/images/history/crash.jpg";
import group from "../../assets/images/history/group.JPG";



const milestones = [
  {
    year: "2006",
    title: "Establishment of JP Research India Pvt. Ltd.",
    description:
      "As India crossed 100,000 annual road fatalities, JP Research India Pvt. Ltd. was founded by Mrs. Jeya Padmanaban to address the lack of in-depth crash data. From the outset, JPRI focused on automotive safety workshops and initiating scientific crash investigations in partnership with agencies and manufacturers.",
    image: group,
  },
  {
    year: "2008",
    title: "Crash investigations – the journey begins",
    description:
      "After several unsuccessful attempts to start crash investigations with government agencies and OEMs, JPRI independently launched its first on-site crash investigation pilot with the support of Tamil Nadu Police on a national highway near Chennai. The success of this project led to a second, two-year pilot in Coimbatore Rural District, deepening insights into human, vehicle and infrastructure factors.",
    image: crash,
  },
  {
    year: "2010",
    title: "Head Office established in Coimbatore, Tamil Nadu",
    description:
      "JPRI set up its India headquarters in Coimbatore to conduct continuous on-site crash investigations. Today, the company operates branches across India, collecting in-depth crash data on highways, towns and cities, and publishing its findings in national and international conferences through the RASSI Consortium public–private partnership model.",
    image: image3,
  },
  {
    year: "Today",
    title: "Our journey continues… towards safer Indian roads",
    description:
      "JPRI now leads forensic crash investigations, road safety engineering, data analytics and capacity building initiatives. Working with governments, NGOs, OEMs and other stakeholders, we provide technical assistance and cost-effective safety solutions, while sharing insights through conferences, meetings and media to drive evidence-based decision making.",
    image: image4,
  },
];

export default function HistoryTimeline() {
  return (
    <section
      className="relative py-16 sm:py-20"
      id="history"
      aria-labelledby="history-heading"
    >
      {/* Decorative gradient backdrop */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0 space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur">
            <Clock3 className="h-3.5 w-3.5" />
            Our Journey
          </div>

          <h2
            id="history-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
          >
           JP Research India’s journey till today
          </h2>

          <p className="mt-2 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
           JP Research India is a wholly owned subsidiary of JP Research, Inc. (USA), a leading statistical, engineering research and data analysis firm specializing in automotive safety. Since 2006, JPRI has worked with government bodies, manufacturers and organizations to build awareness, collect in-depth crash data and advance evidence-based road safety in India.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-10">
          {/* Center vertical line on desktop */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 md:block border-l border-slate-200/70" />

          <ol className="space-y-10 sm:space-y-14">
            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <li
                  key={item.title}
                  className="relative md:flex md:items-stretch"
                >
                  {/* Dot on the center line (desktop) */}
                  <span className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 h-5 w-5 items-center justify-center rounded-full bg-white shadow">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-red-500" />
                  </span>

                  {/* Mobile line + dot (left side) */}
                  <div className="absolute left-4 top-0 bottom-0 md:hidden border-l border-slate-200/70" />
                  <span className="md:hidden absolute left-4 top-6 -translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-primary to-red-500" />
                  </span>

                  {/* IMAGE on opposite side of card (desktop only) */}
                  {isLeft ? (
                    // Card is on left, image on right
                    <>
                      {/* Card side */}
                      <div
                        className="
                          w-full md:w-1/2
                          md:pr-10 md:mr-auto
                        "
                      >
                        <article className="relative rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-md p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                          <div className="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-1 text-xs sm:text-[13px] font-semibold shadow-md">
                            {item.year}
                          </div>

                          <h3 className="mt-3 text-base sm:text-lg font-semibold text-slate-900">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
                            {item.description}
                          </p>

                          <div className="pointer-events-none absolute inset-x-6 bottom-0 h-1 rounded-t-full bg-gradient-to-r from-primary/40 via-red-400/40 to-primary/40 opacity-70" />
                        </article>
                      </div>

                      {/* Image side */}
                      <div className="hidden md:flex md:w-1/2 md:pl-10 md:ml-auto items-center justify-center">
                        <div className="rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-72 w-full object-contain"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    // Card is on right, image on left
                    <>
                      {/* Image side */}
                      <div className="hidden md:flex md:w-1/2 md:pr-10 md:mr-auto items-center justify-center">
                        <div className="rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md">
                        <img
  src={item.image}
  alt={item.title}
  className={`w-full object-contain ${
    item.year === "Today"
      ? "h-150 sm:h-[20rem]"
      : "h-72"
  }`}
/>

                        </div>
                      </div>

                      {/* Card side */}
                      <div
                        className="
                          w-full md:w-1/2
                          md:pl-10 md:ml-auto
                        "
                      >
                        <article className="relative rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-md p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                          <div className="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-1 text-xs sm:text-[13px] font-semibold shadow-md">
                            {item.year}
                          </div>

                          <h3 className="mt-3 text-base sm:text-lg font-semibold text-slate-900">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
                            {item.description}
                          </p>

                          <div className="pointer-events-none absolute inset-x-6 bottom-0 h-1 rounded-t-full bg-gradient-to-r from-primary/40 via-red-400/40 to-primary/40 opacity-70" />
                        </article>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
