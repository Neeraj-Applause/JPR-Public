import InjuryAnalysisHero from "./InjuryAnalysisHero";
import InjuryOverview from "./InjuryOverview";
import InjuryProcess from "./InjuryProcess";
import InjuryExpertise from "./InjuryExpertise";
import InjuryCapabilities from "./InjuryCapabilities";
import InjuryCTA from "./InjuryCTA";

export default function InjuryAnalysis() {
  return (
    <main className="bg-white text-slate-900">
      <InjuryAnalysisHero />
      <InjuryOverview />
      <InjuryProcess />
      <InjuryExpertise />
      <InjuryCapabilities />
      <InjuryCTA />
    </main>
  );
}
