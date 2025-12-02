import AboutHero from "./AboutHero";
import KeyStatsStrip from "./KeyStatsStrip";
import ServicesSummary from "./ServicesSummary";
import VisionMissionSection from "./VisionMissionSection";
import HistoryTimeline from "./HistoryTimeline";
import CorporateReturnsSection from "./CorporateReturnsSection";
import LeadershipPreview from "./LeadershipPreview";
import NeedHelpSection from "./NeedHelpSection";

export default function About() {
  return (
    <main className="bg-white text-slate-900">
      <AboutHero />
      <VisionMissionSection />
      {/* <ServicesSummary /> */}
      <HistoryTimeline />
      {/* <CorporateReturnsSection /> */}
      <LeadershipPreview />
      <NeedHelpSection />
      
      {/* Narrow container for body sections */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 space-y-20"></div>
    </main>
  );
}
