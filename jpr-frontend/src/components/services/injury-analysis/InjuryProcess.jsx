const steps = [
  "Medical report collection",
  "AIS injury coding",
  "Injury severity grading",
  "Source correlation",
  "Kinematics reconstruction",
  "Final injury mechanism report",
];

export default function InjuryProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-primary mb-12">
          Our Injury Analysis Process
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 p-6 shadow transition hover:shadow-lg hover:border-primary"
            >
              <div className="text-2xl font-bold text-primary mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-slate-700 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
