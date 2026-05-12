"use client";

import EmptySection from "./EmptySection";
import GridSection from "./GridSection";
import HeaderSection from "./HeaderSection";
import games from "@/data/games.json";

// import { useWishlistStore } from "@/store/wishlist-store";

export default function Content() {
  //   const wishlistGames = useWishlistStore((state) => state.wishlistGames);
  const wishlistGames = games.slice(0, 4);

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
