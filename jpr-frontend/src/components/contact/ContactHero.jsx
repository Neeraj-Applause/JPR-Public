import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-secondary via-primary to-secondary text-white mt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
            Contact Us
          </div>

          <h1 className="text-3xl lg:text-[2.2rem] font-bold leading-tight">
            Let’s collaborate on{" "}
            <span className="text-white/90">
              safer roads & smarter mobility
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/90">
            Reach out to JP Research India for research collaborations,
            consultancy, training programs, or general enquiries.
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-white/85">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1">
              <Mail className="h-4 w-4" /> info@jpresearch.com
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1">
              <Phone className="h-4 w-4" /> +91-XXX-XXX-XXXX
            </span>
          </div>
        </div>

        {/* Right accent */}
        <div className="relative max-w-sm">
          <div className="absolute -inset-6 rounded-[2rem] bg-white/20 blur-2xl opacity-70" />
          <div className="relative rounded-[1.75rem] border border-white/20 bg-white/10 backdrop-blur-xl p-5 shadow-2xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-2">
              Office Location
            </p>
            <p className="flex items-start gap-2 text-sm text-white/95">
              <MapPin className="h-4 w-4 mt-0.5 text-white/80" />
              Pune, Maharashtra, India
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
