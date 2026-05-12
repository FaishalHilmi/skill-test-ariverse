import WishlistGameCard from "@/components/game/card/WishlistGameCard";
import WishlistGameCardSkeleton from "@/components/skeleton/card/WishlistGameCardSkeleton";
import useLoading from "@/hooks/useLoading";
import { Game } from "@/types/game";

export default function GridSection({ games }: { games: Game[] }) {
  const isLoading = useLoading();
  return (
    <section>
      <div className="container mx-auto px-5 lg:px-16">
        <div
          className="
            flex gap-6 overflow-x-auto
            pb-8 scrollbar-hide
            md:grid md:grid-cols-2
            md:gap-8 md:overflow-visible
            lg:grid-cols-3
          "
        >
          {isLoading
            ? Array.from({
                length: games.length,
              }).map((_, index) => <WishlistGameCardSkeleton key={index} />)
            : games.map((game) => (
                <WishlistGameCard key={game.id} game={game} />
              ))}
        </div>
      </div>
    </section>
  );
}
