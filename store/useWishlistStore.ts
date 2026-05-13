import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistState = {
  wishlist: number[];
  toggleWishlist: (gameId: number) => void;
  isWishlisted: (gameId: number) => boolean;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],

      toggleWishlist: (gameId) => {
        const wishlist = get().wishlist;
        const exists = wishlist.includes(gameId);

        if (exists) {
          set({ wishlist: wishlist.filter((id) => id !== gameId) });
        } else {
          set({ wishlist: [...wishlist, gameId] });
        }
      },

      isWishlisted: (gameId) => {
        return get().wishlist.includes(gameId);
      },
    }),
    { name: "wishlist-storage" },
  ),
);
