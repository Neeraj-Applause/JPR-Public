import React from "react";
import DataCollectionHero from "./DataCollectionHero";
import DataCollectionIntro from "./DataCollectionIntro";
import DataCollectionCards from "./DataCollectionCards";

export default function DataCollection() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <DataCollectionHero />
      <DataCollectionIntro />
      <DataCollectionCards />
    </main>
  );
}
