export function CollectionGameCardSkeleton() {
  return (
    <div
      className="
        overflow-hidden rounded-3xl
        border border-outline/10
        bg-surface-container
      "
    >
      <div
        className="
          aspect-3/4
          animate-pulse
          bg-surface-container-high
        "
      />

      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div
            className="
              h-6 w-2/3
              animate-pulse rounded-md
              bg-surface-container-high
            "
          />

          <div
            className="
              h-5 w-10
              animate-pulse rounded-md
              bg-surface-container-high
            "
          />
        </div>

        <div className="mb-6 flex gap-3">
          <div
            className="
              h-4 w-4
              animate-pulse rounded-full
              bg-surface-container-high
            "
          />

          <div
            className="
              h-4 w-4
              animate-pulse rounded-full
              bg-surface-container-high
            "
          />
        </div>

        <div
          className="
            h-12 w-full
            animate-pulse rounded-xl
            bg-surface-container-high
          "
        />
      </div>
    </div>
  );
}
