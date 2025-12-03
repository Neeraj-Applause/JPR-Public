import aboutIllustration from "../../assets/images/home/about_us.png";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f8f8f8] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            JP Research India Pvt. Ltd. (JPRI)
          </h2>

          <div className="mt-3 mb-8 flex justify-center">
            <span className="h-[3px] w-24 bg-primary rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center">
          {/* Left – text + button */}
          <div>
            <p className="text-sm sm:text-base md:text-[15px] text-[#333] leading-relaxed mb-4 sm:mb-6 [text-align:justify]">
              If you are looking for expertise in road traffic crash
              investigations, crash data analysis, crash reconstructions, road
              safety surveys and audits, or any road safety research activity,
              you have reached the right place. Look around our website for the
              information you seek or simply give us a call and let us know how
              we can help you.
            </p>
            <p className="text-sm sm:text-base md:text-[15px] text-[#333] leading-relaxed [text-align:justify]">
              JP Research India is a wholly owned subsidiary of JP Research
              Inc., a California, USA based company and can be reached at
              jpresearch.com.
            </p>

            <button
              onClick={() => navigate("/about")}
              className="mt-8 sm:mt-10 inline-flex px-8 py-3 bg-primary text-white text-sm sm:text-base font-semibold rounded-md shadow-md hover:bg-primary/90 transition cursor-pointer"
            >
              Read More
            </button>
          </div>

          {/* Right – illustration */}
          <div className="mt-4 lg:mt-0 flex justify-center lg:justify-end">
            <img
              src={aboutIllustration}
              alt="Traffic safety research illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
