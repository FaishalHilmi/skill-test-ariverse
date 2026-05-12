export default function WishlistGameCardSkeleton() {
  return (
    <div
      className="
        w-[85%] shrink-0
        snap-start overflow-hidden
        rounded-4xl
        border border-outline/10
        bg-surface-container
        sm:w-[45%]
        md:w-full
      "
    >
      <div
        className="
          relative aspect-4/5
          overflow-hidden
        "
      >
        <div
          className="
            h-full w-full
            animate-pulse
            bg-surface-container-high
          "
        />

        <div
          className="
            absolute right-6 top-6
            h-10 w-10
            animate-pulse rounded-full
            bg-surface-container-highest
          "
        />

        <div
          className="
            absolute bottom-6 left-6
            flex gap-2
          "
        >
          <div
            className="
              h-6 w-16
              animate-pulse rounded-lg
              bg-surface-container-highest
            "
          />

          <div
            className="
              h-6 w-14
              animate-pulse rounded-lg
              bg-surface-container-highest
            "
          />
        </div>
      </div>

      <div className="space-y-7 p-6 md:p-8">
        <div className="space-y-3">
          <div
            className="
              h-7 w-3/4
              animate-pulse rounded-xl
              bg-surface-container-high
            "
          />

          <div className="flex items-center gap-2">
            <div
              className="
                h-3 w-1 rounded-full
                bg-surface-container-highest
              "
            />

            <div
              className="
                h-4 w-32
                animate-pulse rounded-lg
                bg-surface-container-high
              "
            />
          </div>
        </div>

        <div
          className="
            flex items-center justify-between
            border-t border-outline/10
            pt-6
          "
        >
          <div className="space-y-2">
            <div
              className="
                h-3 w-16
                animate-pulse rounded-md
                bg-surface-container-high
              "
            />

            <div
              className="
                h-8 w-24
                animate-pulse rounded-lg
                bg-surface-container-high
              "
            />
          </div>

          <div
            className="
              h-12 w-28
              animate-pulse rounded-2xl
              bg-surface-container-high
            "
          />
        </div>
      </div>
    </div>
  );
}
