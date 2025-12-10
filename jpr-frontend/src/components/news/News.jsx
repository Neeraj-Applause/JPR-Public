import NewsHero from "./NewsHero";
import NewsMainSection from "./NewsMainSection";

export default function News() {
  return (
    <main className="bg-white text-slate-900">
      <NewsHero />
      <NewsMainSection />
    </main>
  );
}
