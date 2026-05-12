import { Play, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HeroSection() {
  
  return (
    <section className="relative w-full h-150 md:h-175 overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2000"
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-5 lg:px-16 relative z-10">
        <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-display font-bold uppercase tracking-widest text-primary">
              Game Unggulan
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight tracking-tighter">
            Neon Abyss:
            <br />
            <span className="text-primary italic">Resurgence</span>
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant font-medium mb-10 leading-relaxed max-w-xl">
            Jelajahi dunia distopia yang belum pernah ada sebelumnya. Grafis
            memukau dengan teknologi Ray-Tracing terbaru kini hadir di genggaman
            Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              className={cn(
                "w-full sm:w-auto px-8 py-4 rounded-full flex items-center justify-center gap-2",
                "bg-primary text-on-primary font-display font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all",
              )}
            >
              <Play className="fill-current h-4 w-4" />
              Lihat Detail
            </button>

            <div className="w-full sm:w-auto flex items-center relative flex-1 max-w-sm">
              <Search className="absolute left-4 h-5 w-5 z-50 text-on-surface-variant" />
              <input
                type="text"
                placeholder="Cari game lain..."
                className={cn(
                  "w-full pl-12 pr-6 py-4 rounded-full text-base",
                  "bg-surface-container/60 backdrop-blur-md border border-outline/20",
                  "focus:outline-none focus:ring-2 focus:ring-primary/20",
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
