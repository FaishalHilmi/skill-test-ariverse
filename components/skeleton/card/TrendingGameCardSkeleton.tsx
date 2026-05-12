export function TrendingGameCardSkeleton() {
  return (
    <div
      className="
        overflow-hidden rounded-2xl
        bg-surface-container
      "
    >
      <div
        className="
          aspect-video
          animate-pulse
          bg-surface-container-high
        "
      />

      <div className="p-5">
        <div
          className="
            mb-3 h-6 w-3/4
            animate-pulse rounded-md
            bg-surface-container-high
          "
        />

        <div className="flex gap-2">
          <div
            className="
              h-3 w-10
              animate-pulse rounded-md
              bg-surface-container-high
            "
          />

          <div
            className="
              h-3 w-12
              animate-pulse rounded-md
              bg-surface-container-high
            "
          />

          <div
            className="
              h-3 w-8
              animate-pulse rounded-md
              bg-surface-container-high
            "
          />
        </div>
      </div>
    </div>
  );
}
