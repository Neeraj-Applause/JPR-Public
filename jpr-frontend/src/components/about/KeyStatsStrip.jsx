// src/components/about/KeyStatsStrip.jsx
import { Clock3, Car, MapPin, Users } from "lucide-react";

export default function KeyStatsStrip() {
  const stats = [
    {
      icon: Clock3,
      label: "Years of research",
      value: "18+",
    },
    {
      icon: Car,
      label: "In-depth crashes analysed",
      value: "100k+",
    },
    {
      icon: MapPin,
      label: "Offices across India",
      value: "8",
    },
    {
      icon: Users,
      label: "OEMs & agencies partnered",
      value: "20+",
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-slate-50/70">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-3 text-sm sm:text-base"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-semibold text-slate-900">
                  {item.value}
                </p>
                <p className="text-xs text-slate-600 sm:text-sm">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
