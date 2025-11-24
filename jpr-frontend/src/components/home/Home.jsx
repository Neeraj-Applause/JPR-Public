// src/components/home/Home.jsx
import Hero from "./Hero";
import StatsStrip from "./StatsStrip";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import SocialSection from "./SocialSection";
import OfficesSection from "./OfficesSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsStrip />
      <AboutSection />
      <ServicesSection />
      <SocialSection />
      <OfficesSection />
      {/* other sections will go here later */}
    </div>
  );
}
