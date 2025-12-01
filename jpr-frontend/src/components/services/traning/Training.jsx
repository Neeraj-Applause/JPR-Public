// src/pages/services/DataAnalytics.jsx
import TrainingHero from "./TrainingHero";
import DataWorkforceQuote from "./DataWorkforceQuote";
import TrainingCards from "./TrainingCards";

export default function DataAnalytics() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <TrainingHero />
      <DataWorkforceQuote />
      <TrainingCards />
    </main>
  );
}
