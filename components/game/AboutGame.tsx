import { CheckCircle2 } from "lucide-react";
import { Game } from "@/types/game";

export default function AboutGame({ game }: { game: Game }) {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-primary rounded-full" />

        <h2 className="text-3xl font-display font-bold">Tentang Game</h2>
      </div>

      <div className="space-y-6">
        <p className="text-lg text-on-surface-variant leading-relaxed font-medium text-justify">
          {game.longDescription}
        </p>
      </div>
    </div>
  );
}
