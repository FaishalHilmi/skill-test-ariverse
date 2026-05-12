import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function EmptySection() {
  return (
    <section
      className="
        flex min-h-[90vh]
        flex-col items-center
        justify-center overflow-hidden
        bg-background px-5
      "
    >
      <div
        className="
          relative z-10
          mx-auto w-full max-w-4xl
          text-center
        "
      >
        <div className="relative mb-12 inline-block">
          <Heart
            className="
              h-24 w-24
              text-primary/20
              md:h-32 md:w-32
            "
          />
        </div>

        <div
          className="
            mx-auto mb-12
            max-w-xl space-y-6
          "
        >
          <h1
            className="
              text-4xl font-bold
              tracking-tighter
              md:text-6xl
            "
          >
            Wishlist Anda Masih Kosong
          </h1>

          <p
            className="
              text-sm font-medium
              leading-relaxed
              text-on-surface-variant
              md:text-lg
            "
          >
            Jelajahi katalog kami dan temukan game favorit Anda selanjutnya.
          </p>
        </div>

        <Link
          href="/games"
          className="
            group inline-flex items-center
            gap-3 rounded-full
            bg-primary px-10 py-3
            font-bold text-on-primary
            shadow-2xl shadow-primary/30
            transition-all
            hover:scale-105
          "
        >
          Cari Game Sekarang
          <ArrowRight
            className="
              h-5 w-5
              transition-transform
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>
    </section>
  );
}
