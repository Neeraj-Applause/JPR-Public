// src/pages/services/DataAnalytics.jsx
import DataAnalyticsHero from "./DataAnalyticsHero";
import DataAnalyticsIntro from "./DataAnalyticsIntro";
import DataAnalyticsAdvisory from "./DataAnalyticsAdvisory";
import DataAnalyticsMethods from "./DataAnalyticsMethods";

export default function DataAnalytics() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <DataAnalyticsHero />
      <DataAnalyticsIntro />
      <DataAnalyticsAdvisory />
      <DataAnalyticsMethods />
    </main>
  );
}
