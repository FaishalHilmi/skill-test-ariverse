export default function HeaderSection({ totalItems }: { totalItems: number }) {
  return (
    <section className="pb-8 pt-8 md:pb-12 md:pt-20">
      <div className="container mx-auto px-5 lg:px-16">
        <div
          className="
            mb-8 flex flex-col gap-2
            md:mb-12 md:flex-row md:items-end
            md:justify-between md:gap-8
          "
        >
          <div className="space-y-2 md:space-y-4">
            <h1
              className="
                text-[40px] font-bold leading-[1.1]
                tracking-tighter
                md:text-7xl
              "
            >
              Wishlist Saya
            </h1>

            <p
              className="
                max-w-xs text-sm font-medium
                text-on-surface-variant
                md:max-w-md md:text-lg
              "
            >
              Kumpulan game impian yang sedang Anda pantau harganya.
            </p>
          </div>

          <div
            className="
              mt-4 flex flex-col items-start
              md:mt-0 md:items-end
            "
          >
            <p
              className="
                mb-1 text-[10px] font-bold
                uppercase tracking-widest
                text-on-surface-variant
              "
            >
              Total Item
            </p>

            <p className="text-3xl font-bold">{totalItems} Game Terpilih</p>
          </div>
        </div>
      </div>
    </section>
  );
}
