// src/components/about/NeedHelpSection.jsx
import { PhoneCall, Mail, MessageCircle } from "lucide-react";

export default function NeedHelpSection() {
  return (
    <section
      id="need-help"
      className="relative py-8 sm:py-8"
      aria-labelledby="need-help-heading"
    >
      {/* soft background accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          {/* Text side */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <MessageCircle className="h-3.5 w-3.5" />
              Need more information?
            </div>
            <h2
              id="need-help-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
            >
             Need more information?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Please feel free to contact us to discuss your requirement. We
              will get back to you at the earliest, or you can reach us directly
              on the details.
            </p>
          </div>

          {/* Card side */}
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/60 via-red-400/50 to-primary/70 opacity-80 blur-md" />
            <div className="relative rounded-3xl bg-white px-5 py-6 sm:px-7 sm:py-7 shadow-x0.5 border border-white/60">
              <div className="space-y-4">
                {/* <p className="text-sm text-slate-600 leading-relaxed">
                  Please feel free to contact us to discuss your requirement.
                  We will get back at the earliest. Or please call us on:
                </p> */}

                <div className="space-y-3">
                  <a
                    href="tel:+914224500437"
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-primary/5 hover:text-primary transition"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <PhoneCall className="h-4 w-4" />
                    </span>
                    <span>+91 70 6602 7860</span>
                  </a>

                  <a
                    href="mailto:contact@jpri.in"
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-900 hover:bg-primary/5 hover:text-primary transition"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span>contact@jpri.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
