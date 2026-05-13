"use client";

import { MoveRight } from "lucide-react";
import { TrendingGameCardSkeleton } from "@/components/skeleton/card/TrendingGameCardSkeleton";
import Link from "next/link";
import games from "@/data/games.json";
import TrendingGameCard from "@/components/game/card/TrendingGameCard";
import useLoading from "@/hooks/useLoading";

export default function TrendingSection() {
  const isLoading = useLoading();

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-5 lg:px-16">
        <div className="mb-8 flex items-center justify-between md:mb-12">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-primary hidden md:block" />

            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Sedang Tren
            </h2>
          </div>

          <Link
            href="/games"
            className="flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3"
          >
            Lihat Semua
            <MoveRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <TrendingGameCardSkeleton key={index} />
              ))
            : games
                .slice(0, 4)
                .map((game, index) => (
                  <TrendingGameCard key={game.id} game={game} index={index} />
                ))}
        </div>
      </div>
    </section>
  );
}
