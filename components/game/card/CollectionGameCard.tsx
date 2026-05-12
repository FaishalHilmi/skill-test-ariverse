import Link from "next/link";
import Image from "next/image";
import { Star, Monitor, Smartphone } from "lucide-react";
import { Game } from "@/types/game";
import { cn } from "@/lib/utils";

export function CollectionGameCard({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game.slug}`}>
      <article
        className={cn(
          "group relative overflow-hidden rounded-3xl",
          "border border-outline/10",
          "bg-surface-container",
          "transition-all duration-300",
          "hover:shadow-2xl hover:shadow-primary/5",
        )}
      >
        <div className="relative aspect-3/4 overflow-hidden">
          <Image
            src={game.coverImage}
            alt={game.title}
            fill
            sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    25vw
  "
            className="
              object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        </div>

        <div className="p-6">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-lg font-bold">{game.title}</h3>

            <div
              className="
                flex items-center gap-1
                text-sm font-bold text-primary
              "
            >
              <Star className="h-4 w-4 fill-current" />

              <span>{game.rating}</span>
            </div>
          </div>

          <div
            className="
              mb-6 flex items-center gap-3
              text-on-surface-variant
            "
          >
            <Monitor className="h-4 w-4" />

            <Smartphone className="h-4 w-4" />
          </div>

          <div className="mt-auto">
            <div
              className={cn(
                "w-full rounded-xl border border-outline/10",
                "bg-surface-container-high px-4 py-3",
                "text-center text-sm font-bold",
                "transition-all duration-300",
                "group-hover:bg-primary",
                "group-hover:text-on-primary",
              )}
            >
              Rp {game.price.toLocaleString("id-ID")}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
