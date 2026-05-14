"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { cn } from "@/lib/utils";
import { NAVLINK } from "@/data/nav-links";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchTrim = search.trim();

    if (!searchTrim) {
      router.push("/games");
      return;
    }

    router.push(`/games?search=${encodeURIComponent(searchTrim)}`);
  };
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-5 lg:px-16">
        <div className="flex items-center gap-8 md:gap-12">
          <Link
            href="/"
            className="font-display text-2xl font-bold tracking-tighter text-primary"
          >
            GameVault
            <span className="text-on-surface">.</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {NAVLINK.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display font-semibold transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary",
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <form onSubmit={handleSubmit}>
            <div className="group relative hidden items-center md:flex">
              <Search className="absolute left-3 h-4 w-4 text-on-surface-variant transition-colors group-focus-within:text-primary" />
              <input
                type="text"
                placeholder="Cari judul game..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={cn(
                  "w-40 rounded-full border border-outline/20 bg-surface-container py-2 pr-4 pl-10 text-sm font-medium transition-all placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary/20 focus:outline-none lg:w-64",
                )}
              />
            </div>
          </form>

          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full p-2 text-on-surface transition-colors hover:bg-surface-container md:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="animate-in slide-in-from-top-4 absolute top-20 left-0 flex w-full flex-col gap-6 border-b border-outline/10 bg-background p-6 duration-300 fade-in md:hidden">
          <div className="flex flex-col gap-4">
            {NAVLINK.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "font-display text-lg font-bold transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-on-surface hover:text-primary",
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="relative flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-on-surface-variant" />
              <input
                type="text"
                placeholder="Cari judul game..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={cn(
                  "w-full rounded-xl border border-outline/20 bg-surface-container py-3 pr-4 pl-10 text-sm font-medium focus:border-primary focus:outline-none",
                )}
              />
            </div>
          </form>
        </div>
      )}
    </nav>
  );
}
