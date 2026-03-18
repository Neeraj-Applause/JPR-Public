// src/pages/services/CrashInvestigations.jsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CrashReconstructionHero from "./CrashReconstructionHero";
import CrashReconstructionIntro from "./CrashReconstructionIntro";
import CrashReconstructionVideo from "./CrashReconstructionVideo";

function FloatingBackButton() {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate(-1)}
      className="
        fixed top-24 left-6 z-50
        flex items-center gap-2 px-4 py-2
        bg-white/90 backdrop-blur-sm border border-slate-200
        rounded-full shadow-lg hover:shadow-xl
        text-slate-700 hover:text-primary
        transition-all duration-300
        hover:scale-105 hover:-translate-y-0.5
      "
      title="Go back"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="text-sm font-medium">Back</span>
    </button>
  );
}

export default function CrashReconstruction() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <FloatingBackButton />
      <CrashReconstructionHero />
      <CrashReconstructionIntro />
        <CrashReconstructionVideo />
    </main>
  );
}
