import { create } from "zustand";

type SortOption = "rating" | "latest" | "price-low" | "alphabetical";

type GameFilterState = {
  selectedGenres: string[];
  selectedPlatform: string;
  selectedYear: string;
  sortBy: SortOption;
  currentPage: number;

  toggleGenre: (genre: string) => void;
  setSelectedPlatform: (platform: string) => void;
  setSelectedYear: (year: string) => void;
  setSortBy: (option: SortOption) => void;
  setCurrentPage: (page: number) => void;
  resetFilters: () => void;
};

export const useGameFilterStore = create<GameFilterState>((set) => ({
  selectedGenres: [],
  selectedPlatform: "All",
  selectedYear: "all",
  sortBy: "rating",
  currentPage: 1,

  toggleGenre: (genre) =>
    set((state) => ({
      selectedGenres: state.selectedGenres.includes(genre)
        ? state.selectedGenres.filter((g) => g !== genre)
        : [...state.selectedGenres, genre],
    })),

  setSelectedPlatform: (platform) =>
    set({ selectedPlatform: platform, currentPage: 1 }),

  setSelectedYear: (year) => set({ selectedYear: year, currentPage: 1 }),

  setSortBy: (sort) => set({ sortBy: sort, currentPage: 1 }),

  setCurrentPage: (page) => set({ currentPage: page }),

  resetFilters: () =>
    set({
      selectedGenres: [],
      selectedPlatform: "All",
      selectedYear: "all",
      sortBy: "rating",
      currentPage: 1,
    }),
}));
