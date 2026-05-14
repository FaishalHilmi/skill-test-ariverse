import GameListSection from "@/components/sections/games/GameListSection";
import { Suspense } from "react";

export default function GamePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GameListSection />
    </Suspense>
  );
}
