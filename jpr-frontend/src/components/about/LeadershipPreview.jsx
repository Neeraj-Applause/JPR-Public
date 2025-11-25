import { ArrowRight } from "lucide-react";

import leader1 from "../../assets/images/team/Ms-Jeya-Padmanaban.jpg";
import leader2 from "../../assets/images/team/Mr-Ajit-Dandapani.jpg";
import leader3 from "../../assets/images/team/Pradeep_Photo.jpg";
import leader4 from "../../assets/images/team/Mr-Murtuza-Shabbir-Painter.jpg";
import leader5 from "../../assets/images/team/Dr-Ahamedali-Hassan.jpg";
import leader6 from "../../assets/images/team/Mr-Phillip-Jordan.jpg";
import leader7 from "../../assets/images/team/Milind-Keshav-Joshi.jpg";

const leaders = [
  { name: "Ms Jeya Padmanaban", role: "President and Founder, JP Research", photo: leader1 },
  { name: "Mr Ajit Dandapani", role: "Founder and CEO, JP Research", photo: leader2 },
  { name: "Commander Pradeep Jaswani", role: "Chief Operating Officer, JPRI", photo: leader3 },
  { name: "Mr Murtuza Shabbir Painter", role: "Project Manager – RASSI Division, JPRI", photo: leader4 },
  { name: "Dr Ahamedali Hassan", role: "Senior Technical Consultant to JPRI", photo: leader5 },
  { name: "Mr Phillip Jordan", role: "Road Safety Engineering Advisor to JPRI", photo: leader6 },
  { name: "Mr Milind Joshi", role: "Advisor and Consultant to JPRI", photo: leader7 },
];

function Avatar({ name, photo }) {
  if (photo) {
    return (
      <div className="relative overflow-hidden rounded-2xl h-60 w-full">
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    );
  }

  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="h-60 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-red-500 text-white text-3xl font-bold">
      {initials}
    </div>
  );
}

export default function LeadershipPreview() {
  return (
    <section className="relative py-14 sm:py-16" id="leadership">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-primary/8 via-transparent to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-10">

        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
              Leadership
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Leadership Team
              </h2>
            </div>
          </div>
        </div>

       {/* Cards */}
<div className="flex flex-wrap justify-center gap-6">
  {leaders.map((leader) => (
    <article
      key={leader.name}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                 w-full sm:w-[calc(50%-0.75rem)] xl:w-[260px]"
    >
      <Avatar name={leader.name} photo={leader.photo} />

      <div className="px-5 py-4">
        <h3 className="text-base font-semibold text-slate-900 leading-tight">
          {leader.name}
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          {leader.role}
        </p>
      </div>
    </article>
  ))}
</div>

      </div>
    </section>
  );
}
