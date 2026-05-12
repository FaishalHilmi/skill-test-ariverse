import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Game } from "@/types/game";

export default function TrendingGameCard({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game.slug}`}>
      <article
        className="
          group relative overflow-hidden rounded-2xl
          bg-surface-container
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-xl hover:shadow-primary/10
        "
      >
        <div className="relative aspect-video overflow-hidden">
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
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute right-3 top-3
              flex items-center gap-1
              rounded-md bg-black/60
              px-2 py-1
              text-[10px] font-bold text-white
              backdrop-blur-md
            "
          >
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />

            <span>{game.rating}</span>
          </div>
        </div>

        <div className="p-5">
          <h3
            className="
              mb-2 text-xl font-bold group-hover:opacity-80 transition-opacity duration-100
            "
          >
            {game.title}
          </h3>

          <div className="flex items-center gap-2">
            {game.platforms.map((platform) => (
              <span
                key={platform}
                className="
                  text-[10px] font-bold uppercase tracking-widest
                  text-on-surface-variant
                "
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
