// src/components/about/ServicesSummary.jsx
import {
  Car,
  BarChart3,
  Route,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Car,
    title: "Crash Investigations",
    description:
      "On-site and in-depth crash data collection to understand real-world crash scenarios.",
    href: "/services/crash-investigations",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Advanced statistical models and analytics that turn complex crash data into clear decisions.",
    href: "/services/data-analytics",
  },
  {
    icon: Route,
    title: "Road Safety Engineering",
    description:
      "Evidence-based engineering recommendations to improve road design and infrastructure safety.",
    href: "/services/road-safety-engineering",
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    description:
      "Workshops and training programs that embed scientific, data-driven road safety practices.",
    href: "/services/training",
  },
];

export default function ServicesSummary() {
  return (
    <section
      className="relative rounded-3xl border border-slate-100 bg-slate-50/70 px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
      aria-labelledby="services-summary-heading"
    >
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 bg-gradient-to-l from-primary/10 to-transparent" />

      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Core capabilities
            </p>
            <h2
              id="services-summary-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              What we do
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              From crash investigations and analytics to engineering and
              training, JPRI supports stakeholders across the road safety
              ecosystem.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center justify-center text-sm font-semibold text-primary hover:text-primary/80"
          >
            View all services
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl bg-white/80 p-5 ring-1 ring-slate-200/80 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:ring-primary/50"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                    <span className="absolute inset-0 rounded-xl border border-primary/20" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {service.title}
                  </h3>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <Link
                  to={service.href}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary/90"
                >
                  Learn more
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
