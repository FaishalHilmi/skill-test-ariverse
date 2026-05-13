export default function GameListCardSkeleton() {
  return (
    <article
      className="
        overflow-hidden rounded-2xl
        bg-surface-container
        animate-pulse
      "
    >
      <div className="relative aspect-4/5 bg-surface-container-high">
        <div
          className="
            absolute left-4 top-4
            h-7 w-12 rounded-lg
            bg-surface-container-highest
          "
        />
        <div
          className="
            absolute bottom-4 left-4
            flex flex-wrap gap-2
          "
        >
          <div className="h-5 w-14 rounded bg-surface-container-highest" />
          <div className="h-5 w-16 rounded bg-surface-container-highest" />
          <div className="h-5 w-12 rounded bg-surface-container-highest" />
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 h-6 w-3/4 rounded bg-surface-container-high" />
        <div className="flex items-center justify-between">
          <div className="h-5 w-24 rounded bg-surface-container-high" />
          <div
            className="
              h-10 w-10 rounded-lg
              bg-surface-container-high
            "
          />
        </div>
      </div>
    </article>
  );
}
