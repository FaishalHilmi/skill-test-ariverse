import AboutGame from "@/components/game/AboutGame";
import GameInfoCard from "@/components/game/card/GameInfoCard";
import GalleryGame from "@/components/game/GalleryGame";
import { Game } from "@/types/game";

export default function ContentSection({ game }: { game: Game }) {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-5 lg:px-16">
        <div
          className="
            grid grid-cols-1
            gap-12 lg:grid-cols-3 lg:gap-16
          "
        >
          <div
            className="
              space-y-16 md:space-y-20
              lg:col-span-2
            "
          >
            <GalleryGame game={game} />
            <AboutGame game={game} />
          </div>
          <GameInfoCard game={game} />
        </div>
      </div>
    </section>
  );
}
