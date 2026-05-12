import { CollectionSection } from "@/components/sections/home/CollectionSection";
import Hero from "@/components/sections/home/HeroSection";
import TrendingSection from "@/components/sections/home/TrendingSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrendingSection />
      <CollectionSection />
    </>
  );
}
