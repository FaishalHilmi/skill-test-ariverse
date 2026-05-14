import { Game } from "@/types/game";
import { PLATFORM_ICONS } from "@/lib/platform-icons";
import { formatDate } from "@/lib/utils";

export default function GameInfoCard({ game }: { game: Game }) {
  return (
    <div className="space-y-8">
      <div className="p-8 rounded-4xl bg-surface-container border border-outline/10 space-y-8 sticky top-24">
        <h3 className="text-xl font-display font-bold">Informasi Game</h3>

        <div className="space-y-6">
          <div className="flex justify-between items-center py-2 border-b border-outline/5">
            <span className="text-sm font-medium text-on-surface-variant">
              Developer
            </span>

            <span className="text-sm font-display font-bold text-primary">
              {game.developer}
            </span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-outline/5">
            <span className="text-sm font-medium text-on-surface-variant">
              Publisher
            </span>

            <span className="text-sm font-display font-bold text-on-surface">
              {game.publisher}
            </span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-outline/5">
            <span className="text-sm font-medium text-on-surface-variant">
              Tanggal Rilis
            </span>

            <span className="text-sm font-display font-bold text-on-surface">
              {formatDate(game.releaseDate)}
            </span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-outline/5">
            <span className="text-sm font-medium text-on-surface-variant">
              Platform
            </span>

            <div className="flex gap-3 text-on-surface">
              {game.platforms.map((platform) => {
                const Icon = PLATFORM_ICONS[platform];

                if (!Icon) return null;

                return <Icon key={platform} className="h-4 w-4" />;
              })}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-surface-container-high border border-outline/5">
            <p className="text-[10px] font-display font-bold uppercase tracking-widest text-on-surface-variant mb-2">
              Status Game
            </p>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

              <span className="text-sm font-display font-bold text-on-surface">
                Tersedia Sekarang
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-high border border-outline/5">
            <p className="text-[10px] font-display font-bold uppercase tracking-widest text-on-surface-variant mb-2">
              Rating Konten
            </p>

            <span className="text-sm font-display font-bold text-on-surface">
              Dewasa 17+
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
