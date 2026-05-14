import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import { Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWishlistStore } from "@/store/useWishlistStore";
import { CardProps } from "@/types/card";

export default function WishlistGameCard({ game, index = 0 }: CardProps) {
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);

  return (
    <FadeUp
      delay={index * 0.05}
      className="transform-gpu
        will-change-transform
        group relative
        w-[85%] shrink-0
        snap-start overflow-hidden
        rounded-4xl
        border border-outline/10
        bg-surface-container
        transition-all
        hover:shadow-2xl
        hover:shadow-primary/5
        sm:w-[45%]
        md:w-full"
    >
      <Link
        href={`/games/${game.slug}`}
        className="
          relative block
          aspect-square
          overflow-hidden
        "
      >
        <Image
          src={game.coverImage}
          alt={game.title}
          fill
          sizes="
            (max-width: 768px) 85vw,
            (max-width: 1024px) 45vw,
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
            absolute inset-0
            bg-linear-to-t
            from-surface-container
            via-transparent
            to-transparent
            opacity-60
          "
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(game.id);
          }}
          className="
            absolute right-6 top-6 z-10
            rounded-full bg-white/90
            p-2.5 text-primary
            shadow-xl backdrop-blur-md
            transition-all
            hover:scale-110
            active:scale-95
            dark:bg-surface-container/90
          "
        >
          <Heart
            className="
              h-5 w-5 fill-red-500 text-red-500
            "
          />
        </button>

        <div
          className="
            absolute bottom-6 left-6
            flex flex-wrap gap-2
          "
        >
          {game.genres.map((genre) => (
            <span
              key={genre}
              className="
                rounded-lg border
                border-white/10
                bg-surface-container/80
                px-3 py-1.5
                text-[9px] font-bold
                uppercase tracking-wider
                text-on-surface
                shadow-sm backdrop-blur-md
              "
            >
              {genre}
            </span>
          ))}
        </div>
      </Link>

      <div className="space-y-7 p-6 md:p-8">
        <div className="space-y-1.5">
          <Link
            href={`/games/${game.slug}`}
            className="
              line-clamp-1
              text-xl font-bold
              leading-tight
              text-on-surface
              transition-colors
              hover:text-primary
              md:text-2xl
            "
          >
            {game.title}
          </Link>

          <div className="flex items-center gap-2">
            <span
              className="
                h-3 w-1 rounded-full
                bg-primary/30
              "
            />

            <p
              className="
                text-[11px] font-bold
                uppercase tracking-wider
                text-on-surface-variant
              "
            >
              Terbitan {game.developer}
            </p>
          </div>
        </div>

        <div
          className="
            flex items-center justify-between
            border-t border-outline/10
            pt-6 transition-colors
            group-hover:border-primary/20
          "
        >
          <div className="flex flex-col">
            {game.price > 0 && (
              <span
                className="
                  mb-0.5 text-[10px]
                  font-bold tracking-tight
                  text-on-surface-variant/60
                  line-through
                "
              >
                {`Rp ${(game.price + game.price * 0.15).toLocaleString("id-ID")}`}
              </span>
            )}

            <span
              className={cn(
                `
                  text-xl font-bold
                  leading-none tracking-tighter
                  md:text-2xl
                `,
                game.price === 0 ? "italic text-primary" : "text-on-surface",
              )}
            >
              {game.price === 0
                ? "GRATIS"
                : `Rp ${game.price.toLocaleString("id-ID")}`}
            </span>
          </div>

          <button
            className={cn(
              `
                group/btn relative flex
                items-center gap-2
                overflow-hidden rounded-2xl
                px-6 py-3.5
                text-[10px] font-bold
                uppercase tracking-widest
                transition-all
                active:scale-95
              `,
              game.price === 0
                ? `
                  bg-secondary
                  text-on-secondary
                  shadow-lg shadow-secondary/20
                `
                : `
                  bg-primary
                  text-on-primary
                  shadow-lg shadow-primary/20
                `,
            )}
          >
            <div
              className="
                absolute inset-0
                translate-y-full bg-white/10
                transition-transform duration-300
                group-hover/btn:translate-y-0
              "
            />

            <span className="relative">
              {game.price === 0 ? "Klaim" : "Beli"}
            </span>

            <ShoppingCart
              className="
                relative h-3.5 w-3.5
                transition-transform
                group-hover/btn:scale-110
              "
            />
          </button>
        </div>
      </div>
    </FadeUp>
  );
}
