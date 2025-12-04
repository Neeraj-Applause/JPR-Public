import aboutIllustration from "../../assets/images/home/about_us.jpeg";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-2xl md:text-[2rem] font-semibold text-primary tracking-tight">
            JP Research India Pvt. Ltd. (JPRI)
          </h2>

            <div className="mt-3 mb-4 flex justify-center">
            <span className="h-[3px] w-24 bg-primary rounded-full" />
          </div>
        </div>

        {/* Card */}
        <div className="relative bg-white overflow-hidden backdrop-blur-sm">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center px-5 sm:px-8 md:px-10 py-8 sm:py-10">
            {/* Left – text + button */}
            <div className="space-y-4 sm:space-y-5">
              <p className="text-sm sm:text-base md:text-[15px] text-[#333] leading-relaxed [text-align:justify]">
                If you are looking for expertise in road traffic crash
                investigations, crash data analysis, crash reconstructions, road
                safety surveys and audits, or any road safety research activity,
                you have reached the right place. Look around our website for the
                information you seek or simply give us a call and let us know how
                we can help you.
              </p>

              <p className="text-sm sm:text-base md:text-[15px] text-[#333] leading-relaxed [text-align:justify]">
                JP Research India is a wholly owned subsidiary of JP Research
                Inc., a California, USA based company and can be reached at{" "}
                <a
                  href="https://www.jpresearch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:opacity-80 transition"
                >
                  jpresearch.com
                </a>
                .
              </p>

              <button
                onClick={() => navigate("/about")}
                className="mt-4 inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-primary text-white text-sm sm:text-[15px] font-medium shadow-md shadow-primary/30 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 cursor-pointer"
              >
                Read More
              </button>
            </div>

            {/* Right – illustration */}
            <div className="mt-4 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-900/10 bg-slate-50">
                <img
                  src={aboutIllustration}
                  alt="Traffic safety research illustration"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                />
                {/* soft gradient overlay at bottom for depth */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
