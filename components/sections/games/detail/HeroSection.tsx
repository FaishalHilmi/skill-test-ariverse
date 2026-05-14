"use client";

import { cn } from "@/lib/utils";
import { Game } from "@/types/game";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import { useWishlistStore } from "@/store/useWishlistStore";
import FadeUpText from "@/components/animations/FadeUpText";
import BlurRevealText from "@/components/animations/BlurRevealText";

export default function HeroSection({ game }: { game: Game }) {
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const wishlist = useWishlistStore((state) => state.wishlist);
  const isWishlisted = wishlist.includes(game.id);

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-end">
      <div className="absolute inset-0">
        <Image
          src={game.coverImage}
          alt={game.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto px-5 lg:px-16 pb-12 relative z-10">
        <div className="max-w-4xl space-y-6">
          <FadeUpText delay={0} className="flex flex-wrap gap-2">
            {game.genres.map((genre) => (
              <span
                key={genre}
                className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-display font-bold uppercase tracking-widest text-primary"
              >
                {genre}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full bg-surface-container/40 backdrop-blur-md border border-outline/20 text-[10px] font-display font-bold uppercase tracking-widest text-on-surface">
              {game.platforms.join(" / ")}
            </span>
          </FadeUpText>

          <BlurRevealText
            as="h1"
            delay={0.1}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter"
          >
            {game.title}
          </BlurRevealText>

          <FadeUpText
            delay={0.2}
            className="flex flex-wrap items-center gap-4 md:gap-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-3 w-3 md:h-4 md:w-4 fill-current",
                      i >= Math.floor(game.rating) && "opacity-30",
                    )}
                  />
                ))}
              </div>
              <span className="text-xs md:text-sm font-medium text-on-surface-variant">
                {game.rating}
              </span>
            </div>

            <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-3 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl bg-primary text-on-primary font-display font-bold text-sm md:text-base hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                Beli Sekarang -{" "}
                {game.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                })}
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(game.id);
                }}
                className="p-3 md:p-4 rounded-xl md:rounded-2xl glass border border-outline/20 text-on-surface hover:bg-surface-container transition-colors group"
              >
                <Heart
                  className={cn(
                    "h-5 w-5 md:h-6 md:w-6 transition-colors",
                    isWishlisted
                      ? "fill-red-500 text-red-500"
                      : "text-on-surface group-hover:text-red-500",
                  )}
                />
              </button>
            </div>
          </FadeUpText>
        </div>
      </div>
    </section>
  );
}
