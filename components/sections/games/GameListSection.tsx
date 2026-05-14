"use client";

import {
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  SlidersHorizontal,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { SORT_OPTIONS } from "@/data/sort-options";
import { useGameFilterStore } from "@/store/useGameFilterStore";
import { useSearchParams } from "next/navigation";
import { GAME_CATEGORY_MAP } from "@/data/categories";
import SidebarFilters from "@/components/game/SidebarFilters";
import games from "@/data/games.json";
import GameListCard from "@/components/game/card/GameListCard";
import SelectField from "@/components/ui/SelectField";
import GameListCardSkeleton from "@/components/skeleton/card/GameListCardSkeleton";
import useLoading from "@/hooks/useLoading";
import BlurRevealText from "@/components/animations/BlurRevealText";
import FadeUpText from "@/components/animations/FadeUpText";

const ITEM_PER_PAGE = 9;

export default function GameListSection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isLoading = useLoading();
  const selectedGenres = useGameFilterStore((state) => state.selectedGenres);
  const selectedPlatform = useGameFilterStore(
    (state) => state.selectedPlatform,
  );
  const selectedYear = useGameFilterStore((state) => state.selectedYear);
  const sortBy = useGameFilterStore((state) => state.sortBy);
  const currentPage = useGameFilterStore((state) => state.currentPage);
  const setSortBy = useGameFilterStore((state) => state.setSortBy);
  const setCurrentPage = useGameFilterStore((state) => state.setCurrentPage);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFilterOpen]);

  const filteredGames = useMemo(() => {
    return games
      .filter((game) => {
        const genreMatch =
          selectedGenres.length === 0 ||
          selectedGenres.some((category) =>
            game.genres.some((genre) =>
              GAME_CATEGORY_MAP[category]?.includes(genre),
            ),
          );

        const platformMatch =
          selectedPlatform === "All" ||
          game.platforms.includes(selectedPlatform);

        const yearMatch =
          selectedYear === "all" ||
          new Date(game.releaseDate).getFullYear().toString() === selectedYear;

        const searchLower = searchQuery.toLowerCase();

        const searchMatch = game.title.toLowerCase().includes(searchLower);

        return genreMatch && platformMatch && yearMatch && searchMatch;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "rating":
            return b.rating - a.rating;

          case "latest":
            return (
              new Date(b.releaseDate).getTime() -
              new Date(a.releaseDate).getTime()
            );

          case "price-low":
            return a.price - b.price;

          case "alphabetical":
            return a.title.localeCompare(b.title);

          default:
            return 0;
        }
      });
  }, [selectedGenres, selectedPlatform, selectedYear, sortBy, searchQuery]);

  const totalPages = Math.ceil(filteredGames.length / ITEM_PER_PAGE);
  const paginatedGames = filteredGames.slice(
    (currentPage - 1) * ITEM_PER_PAGE,
    currentPage * ITEM_PER_PAGE,
  );

  return (
    <section className="min-h-screen bg-background relative">
      <div className="container mx-auto px-5 lg:px-16 pt-8 md:pt-12 pb-12 md:pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <SidebarFilters />

          <div className="flex-1 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <BlurRevealText
                  as="h1"
                  className="text-4xl font-display font-bold mb-2 tracking-tight"
                >
                  Semua Game
                </BlurRevealText>
                <FadeUpText
                  as="p"
                  delay={0.1}
                  className="text-on-surface-variant font-medium"
                >
                  Menampilkan {filteredGames.length} judul yang tersedia
                </FadeUpText>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-on-surface-variant">
                  Urutkan:
                </span>
                <SelectField
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(
                      e.target.value as
                        | "rating"
                        | "latest"
                        | "price-low"
                        | "alphabetical",
                    )
                  }
                  options={SORT_OPTIONS}
                  className="min-w-52"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {isLoading
                ? Array.from({ length: ITEM_PER_PAGE }).map((_, index) => (
                    <GameListCardSkeleton key={index} />
                  ))
                : paginatedGames.map((game, index) => (
                    <GameListCard key={game.id} game={game} index={index} />
                  ))}
            </div>

            {!isLoading && paginatedGames.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div
                  className="
      mb-6 flex h-20 w-20
      items-center justify-center
      rounded-full
      bg-surface-container-high
    "
                >
                  <Gamepad2
                    className="
        h-10 w-10
        text-on-surface-variant
      "
                  />
                </div>

                <h3
                  className="
      mb-3 text-2xl
      font-display font-bold
      tracking-tight
    "
                >
                  Game Tidak Ditemukan
                </h3>

                <FadeUpText
                  as="p"
                  delay={0.1}
                  className="
      max-w-md
      text-sm md:text-base
      font-medium
      leading-relaxed
      text-on-surface-variant
    "
                >
                  Coba gunakan kata kunci atau kategori lain.
                </FadeUpText>
              </div>
            )}

            {totalPages > 1 && (
              <div className="pt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <button
                    aria-label="Halaman sebelumnya"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="p-3 rounded-xl bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-all"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageIndex = index + 1;

                    return (
                      <button
                        aria-label={`Halaman ${pageIndex}`}
                        aria-current={
                          currentPage === pageIndex ? "page" : undefined
                        }
                        key={pageIndex}
                        onClick={() => setCurrentPage(pageIndex)}
                        className={cn(
                          "h-11 w-11 rounded-xl text-sm font-display font-bold transition-all",
                          currentPage === pageIndex
                            ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
                            : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high",
                        )}
                      >
                        {pageIndex}
                      </button>
                    );
                  })}
                  <button
                    aria-label="Halaman berikutnya"
                    disabled={currentPage == totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="p-3 rounded-xl bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-all"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsFilterOpen(true)}
        className="lg:hidden fixed bottom-8 right-8 z-70 h-14 w-14 rounded-full bg-primary text-on-primary shadow-2xl shadow-primary/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        aria-label="Filter games"
      >
        <SlidersHorizontal className="h-6 w-6" />
      </button>

      {isFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-60 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsFilterOpen(false)}
          />
          <div
            className={cn(
              "relative w-full max-w-lg bg-surface p-8 rounded-4xl border border-outline/10 shadow-2xl",
              "animate-in zoom-in-95 fade-in duration-300 max-h-[90vh] overflow-y-auto",
            )}
          >
            <SidebarFilters onClose={() => setIsFilterOpen(false)} isMobile />
          </div>
        </div>
      )}
    </section>
  );
}
