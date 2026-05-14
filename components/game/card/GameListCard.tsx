import { cn } from "@/lib/utils";
import { useWishlistStore } from "@/store/useWishlistStore";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import { CardProps } from "@/types/card";

export default function GameListCard({ game, index = 0 }: CardProps) {
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const wishlist = useWishlistStore((state) => state.wishlist);
  const isWishlisted = wishlist.includes(game.id);

  return (
    <Link href={`/games/${game.slug}`}>
      <FadeUp
        delay={index * 0.05}
        className="
          group relative overflow-hidden rounded-2xl
          bg-surface-container
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-2xl hover:shadow-primary/10
        "
      >
        <div className="relative aspect-4/5 overflow-hidden">
          <Image
            src={game.coverImage}
            alt={game.title}
            fill
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw
            "
            className="
              object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute left-4 top-4
              inline-flex items-center
              rounded-lg bg-black/60
              px-2.5 py-1.5
              text-xs font-bold text-white
              backdrop-blur-md
            "
          >
            {game.rating}
          </div>

          <div
            className="
              pointer-events-none absolute bottom-4 left-4
              flex flex-wrap gap-2
            "
          >
            {game.genres.map((genre) => (
              <span
                key={genre}
                className="
                  rounded bg-primary
                  px-2 py-1
                  text-[8px] font-bold uppercase tracking-widest
                  text-on-primary
                "
              >
                {genre}
              </span>
            ))}

            {game.platforms.map((platform) => (
              <span
                key={platform}
                className="
                    rounded bg-black/50
                    px-2 py-1
                    text-[8px] font-bold uppercase tracking-widest
                    text-white backdrop-blur-md
                  "
              >
                {platform}
              </span>
            ))}
          </div>
        </div>

        <div className="p-5">
          <h3
            className="
              mb-3 line-clamp-1
              text-lg font-bold
              group-hover:text-primary
            "
          >
            {game.title}
          </h3>

          <div className="mt-auto flex items-center justify-between">
            <span className="text-sm font-bold">
              {game.price === 0
                ? "Gratis"
                : `Rp ${game.price.toLocaleString("id-ID")}`}
            </span>

            <button
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(game.id);
              }}
              className="
                group/btn rounded-lg
                bg-surface-container-high p-2
                transition-colors duration-300
                hover:bg-primary
              "
            >
              <Heart
                className={cn(
                  "h-4 w-4 transition-colors",
                  isWishlisted
                    ? "fill-red-500 text-red-500"
                    : "text-on-surface-variant group-hover/btn:text-on-primary",
                )}
              />
            </button>
          </div>
        </div>
      </FadeUp>
    </Link>
  );
}
