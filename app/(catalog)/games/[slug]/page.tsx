import ContentSection from "@/components/sections/games/detail/ContentSection";
import HeroSection from "@/components/sections/games/detail/HeroSection";
import RecommendedSection from "@/components/sections/games/detail/RecomendedSection";
import game from "@/data/games.json";
import { notFound } from "next/navigation";

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const gameData = game.find((game) => game.slug === slug);

  if (!gameData) {
    return notFound();
  }

  return (
    <>
      <HeroSection game={gameData} />
      <ContentSection game={gameData} />
      <RecommendedSection currentGame={gameData} />
    </>
  );
}
