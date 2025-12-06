const capabilities = [
  "AIS Coding & Severity Scaling",
  "Medical & Post-Mortem Data Review",
  "Injury Source Correlation",
  "Pedestrian & Occupant Biomechanics",
  "Roadside Object Injury Analysis",
  "Vehicle Interior Injury Mapping",
];

export default function InjuryCapabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-primary mb-12">
          Our Capabilities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 p-8 text-center shadow transition hover:shadow-xl hover:border-primary"
            >
              <p className="text-slate-800 font-semibold">{cap}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
