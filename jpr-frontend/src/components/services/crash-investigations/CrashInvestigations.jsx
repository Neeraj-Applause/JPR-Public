// src/pages/services/CrashInvestigations.jsx
import CrashInvestigationsHero from "./CrashInvestigationsHero";
import CrashInvestigationsExpertise from "./CrashInvestigationsExpertise";
import RassiInDepthSection from "./RassiInDepthSection";
import CrashInvestigationsDetails from "./CrashInvestigationsDetails";

export default function CrashInvestigations() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <CrashInvestigationsHero />
<CrashInvestigationsExpertise />
      <RassiInDepthSection />
      <CrashInvestigationsDetails />
    </main>
  );
}
