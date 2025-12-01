// src/pages/services/CrashInvestigations.jsx
import CrashReconstructionHero from "./CrashReconstructionHero";
import CrashReconstructionIntro from "./CrashReconstructionIntro";
import CrashReconstructionVideo from "./CrashReconstructionVideo";

export default function CrashReconstruction() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <CrashReconstructionHero />
      <CrashReconstructionIntro />
        <CrashReconstructionVideo />
    </main>
  );
}
