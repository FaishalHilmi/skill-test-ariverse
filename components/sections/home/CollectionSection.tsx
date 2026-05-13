"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { CollectionGameCard } from "@/components/game/card/CollectionGameCard";
import { GAME_CATEGORIES } from "@/data/categories";
import { CollectionGameCardSkeleton } from "@/components/skeleton/card/CollectionGameCardSkeleton";
import games from "@/data/games.json";
import Link from "next/link";
import useLoading from "@/hooks/useLoading";

export function CollectionSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const isLoading = useLoading();

  const filteredGames = useMemo(() => {
    if (activeCategory === "All") {
      return games;
    }

    return games.filter((game) => game.genres.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section className="bg-surface-container/30 py-20">
      <div className="container mx-auto px-5 lg:px-16">
        <div
          className="
            mb-12 flex flex-col gap-8
            md:flex-row md:items-end md:justify-between
          "
        >
          <div className="max-w-xl">
            <h2
              className="
                mb-4 text-4xl font-bold
                md:text-5xl
              "
            >
              Koleksi Terbaru
            </h2>

            <p className="font-medium text-on-surface-variant">
              Temukan rilis terbaru yang dikurasi khusus untuk pengalaman gaming
              terbaikmu.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {GAME_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-6 py-2.5",
                  "text-sm font-bold",
                  "transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
                    : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div
          className="
            grid grid-cols-1 gap-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <CollectionGameCardSkeleton key={index} />
              ))
            : filteredGames
                .slice(0, 8)
                .map((game, index) => (
                  <CollectionGameCard key={game.id} game={game} index={index} />
                ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/games"
            className={cn(
              "rounded-full px-10 py-4",
              "text-sm font-bold",
              "border-2 border-primary",
              "text-primary",
              "transition-all duration-300",
              "hover:bg-primary hover:text-on-primary",
            )}
          >
            Lihat Semua Game
          </Link>
        </div>
      </div>
    </section>
  );
}
