"use client";

import Link from "next/link";
import games from "@/data/games.json";
import useLoading from "@/hooks/useLoading";
import { ChevronRight } from "lucide-react";
import { Game } from "@/types/game";
import { CollectionGameCard } from "@/components/game/card/CollectionGameCard";
import { CollectionGameCardSkeleton } from "@/components/skeleton/card/CollectionGameCardSkeleton";

interface RecommendedSectionProps {
  currentGame: Game;
}

export default function RecommendedSection({
  currentGame,
}: RecommendedSectionProps) {
  const isLoading = useLoading();
  const recommendedGames = games
    .filter((game) => game.id !== currentGame.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <section className="border-t border-outline/10 py-20">
      <div className="container mx-auto px-5 lg:px-16">
        <div
          className="
            mb-12 flex flex-col gap-6
            md:flex-row md:items-end md:justify-between
          "
        >
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-6 md:h-8 w-1 rounded-full bg-primary" />

              <h2
                className="
                  text-2xl font-display font-bold
                  md:text-3xl
                "
              >
                Mungkin Anda Suka
              </h2>
            </div>

            <p
              className="
                text-sm font-medium
                text-on-surface-variant
                md:text-base
              "
            >
              Berdasarkan genre dan preferensi bermain Anda.
            </p>
          </div>

          <Link
            href="/games"
            className="
              group inline-flex items-center gap-2
              self-start text-sm font-bold
              text-primary transition-all
              hover:opacity-70
              md:self-auto
            "
          >
            Lihat Semua
            <ChevronRight
              className="
                h-4 w-4
                transition-transform
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        <div
          className="
            grid grid-cols-1 gap-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <CollectionGameCardSkeleton key={index} />
              ))
            : recommendedGames.map((game, index) => (
                <CollectionGameCard key={game.id} game={game} index={index} />
              ))}
        </div>
      </div>
    </section>
  );
}
