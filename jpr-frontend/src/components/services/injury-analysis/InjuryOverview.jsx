export default function InjuryOverview() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            What is Injury Analysis?
          </h2>

          <p className="text-slate-700 leading-relaxed text-justify">
            A systematic process involving the extraction of injury data from medical reports of crash victims, determination of injury severity using global injury scaling techniques, and correlation of each injury with a specific injury source in a crash such as vehicle components or roadside objects.
          </p>

          <p className="text-slate-700 leading-relaxed text-justify">
            Each injury is carefully mapped to vehicle interiors like windshields, A-pillars, bull bars, as well as road infrastructure including trees, guardrails, concrete barriers, and fixed objects.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-200">
          <ul className="space-y-4 text-slate-700">
            <li>✔ Medical Report Data Extraction</li>
            <li>✔ Injury Severity Scaling (AIS)</li>
            <li>✔ Injury Source Correlation</li>
            <li>✔ Vehicle & Road Object Mapping</li>
            <li>✔ Biomechanics Interpretation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
