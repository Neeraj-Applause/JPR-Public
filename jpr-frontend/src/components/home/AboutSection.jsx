import aboutIllustration from "../../assets/images/home/about_us.png";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f8f8f8] py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            JP Research India Pvt. Ltd. (JPRI)
          </h2>

          <div className="mt-3 mb-8 flex justify-center">
            <span className="h-[3px] w-24 bg-primary rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 items-start">
          {/* Left – text + vision/mission + button */}
          <div>
            <p className="text-sm sm:text-base text-[#333] leading-relaxed mb-6">
              If you are looking for expertise in road traffic crash
              investigations, crash data analysis, crash reconstructions, road
              safety surveys and audits, or any road safety research activity,
              you have reached the right place. Look around our website for the
              information you seek or simply give us a call and let us know how
              we can help you.
            </p>
            <p className="text-sm sm:text-base text-[#333] leading-relaxed">
              JP Research India is a wholly owned subsidiary of JP Research
              Inc., a California, USA based company and can be reached at
              jpresearch.com.
            </p>

            {/* Vision / Mission */}
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                <p className="text-sm text-primary leading-relaxed">
                  To be a world-renowned traffic safety research and training
                  center, that will focus on conducting traffic safety research.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                <p className="text-sm text-primary leading-relaxed">
                  To conduct traffic safety research activities with an
                  unbiased, scientific, evidence-based and data-driven approach
                  that will provide high quality data.
                </p>
              </div>
            </div>

            {/* Read more button */}
            <button className="mt-10 inline-flex px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary/90 transition">
              Read More
            </button>
          </div>

          {/* Right – illustration */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={aboutIllustration}
              alt="Traffic safety research illustration"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
