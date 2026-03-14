export default function InjuryExpertise() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 space-y-6">

        <h2 className="text-3xl font-bold text-primary">
          JPRI Injury Research Expertise
        </h2>

        <p className="text-slate-700 leading-relaxed text-justify">
          JPRI Injury Research Specialists leverage occupant and pedestrian kinematics, injury data, and crash evidence to map and correlate injuries using globally recognized Abbreviated Injury Scale (AIS) coding techniques. Our specialists have received certified training in AIS Coding Techniques by the Association for Advancement of Automotive Medicine (AAAM), Chicago, USA. The team integrates biomechanical analysis with vehicle and roadside injury sources to provide precise, evidence-based insights.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
          {[
            "AIS Certified Analysts",
            "Biomechanics Specialists",
            "Pedestrian Injury Experts",
            "Occupant Kinematics",
            "Vehicle Interior Injury Mapping",
            "Roadside Object Injury Correlation",
          ].map((skill, i) => (
            <div
              key={i}
              className="rounded-xl bg-white border border-slate-200 p-5 shadow hover:shadow-md transition"
            >
              <p className="font-semibold text-slate-800">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
