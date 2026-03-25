import { Mail, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-primary to-gray-950 text-white mt-4">
      {/* Background accents — unchanged */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="space-y-4">


          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            Contact Us.
          </h1>

          {/* Short description */}
          <p className="max-w-lg text-sm md:text-base text-white/75">
            Reach JP Research India for research, consultancy, and training.
          </p>

          {/* Contact details */}
          <div className="flex flex-wrap gap-5 pt-2 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-white/60" />
              contact@jpri.in
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-white/60" />
              +917066027860
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
