// src/pages/services/RoadSafetyEngineering.jsx
import RoadSafetyHero from "./RoadSafetyHero";
import RoadSafetySummary from "./RoadSafetySummary";
import RoadSafetyServicesInteractive from "./RoadSafetyServicesInteractive";

export default function RoadSafetyEngineering() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <RoadSafetyHero />
        <RoadSafetySummary />
        <RoadSafetyServicesInteractive />
    </main>
  );
}
