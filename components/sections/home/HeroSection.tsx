"use client";

import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import games from "@/data/games.json";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import FadeUpText from "@/components/animations/FadeUpText";

export default function HeroSection() {
  const featuredGames = games.filter((game) => game.featured);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <section className="overflow-hidden">
      <div ref={emblaRef}>
        <div className="flex">
          {featuredGames.map((game) => (
            <div
              key={game.id}
              className="
                relative w-full min-w-0 flex-[0_0_100%]
                h-150 md:h-175
                overflow-hidden flex items-center
              "
            >
              <div className="absolute inset-0">
                <Image
                  src={game.coverImage}
                  alt={game.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-r from-background via-background/70 to-transparent" />

                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
              </div>

              <div className="container mx-auto px-5 lg:px-16 relative z-10">
                <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-700">
                  <FadeUpText
                    delay={0}
                    className="
                      inline-block px-4 py-1.5 mb-6
                      rounded-full bg-primary/20
                      border border-primary/30
                      backdrop-blur-sm
                    "
                  >
                    <span
                      className="
                        text-[10px] md:text-xs
                        font-display font-bold
                        uppercase tracking-widest
                        text-primary
                      "
                    >
                      Game Unggulan
                    </span>
                  </FadeUpText>

                  <FadeUpText
                    as="h1"
                    delay={0.1}
                    className="
                      text-5xl md:text-7xl
                      font-display font-bold
                      mb-6 leading-tight tracking-tighter
                    "
                  >
                    {game.title}
                  </FadeUpText>

                  <FadeUpText
                    as="p"
                    delay={0.2}
                    className="
                      text-lg md:text-xl
                      text-on-surface-variant
                      font-medium mb-10
                      leading-relaxed max-w-xl
                    "
                  >
                    {game.description}
                  </FadeUpText>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <FadeUpText delay={0.3} className="w-full md:w-fit">
                      <Link
                        href={`/games/${game.slug}`}
                        className={cn(
                          "w-full sm:w-auto px-8 py-4 rounded-full flex items-center justify-center gap-2",
                          "bg-primary text-on-primary font-display font-bold",
                          "shadow-lg shadow-primary/30",
                          "hover:scale-105 transition-all",
                        )}
                      >
                        <Play className="fill-current h-4 w-4" />
                        Lihat Detail
                      </Link>
                    </FadeUpText>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
