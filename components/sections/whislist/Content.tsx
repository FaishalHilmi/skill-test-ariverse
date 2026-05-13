"use client";

import EmptySection from "./EmptySection";
import GridSection from "./GridSection";
import HeaderSection from "./HeaderSection";
import games from "@/data/games.json";
import { useWishlistStore } from "@/store/useWishlistStore";

export default function Content() {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const wishlistGames = games.filter((game) => wishlist.includes(game.id));

  if (wishlistGames.length === 0) {
    return <EmptySection />;
  }

  return (
    <>
      <HeaderSection totalItems={wishlistGames.length} />
      <GridSection games={wishlistGames} />
    </>
  );
}
