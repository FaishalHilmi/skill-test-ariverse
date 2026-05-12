import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import SelectField from "../ui/SelectField";
import { useState } from "react";
import { YEAR_OPTIONS } from "@/data/years-options";

export default function SidebarFilters({
  onClose,
  isMobile,
}: {
  onClose?: () => void;
  isMobile?: boolean;
}) {
  const [year, setYear] = useState("all");

  return (
    <aside
      className={cn(
        "shrink-0 space-y-8 animate-in fade-in duration-500",
        isMobile ? "w-full" : "w-64 hidden lg:block slide-in-from-left-4",
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-display font-bold">Filter</h3>
        <div className="flex items-center gap-4">
          <button className="text-xs font-display font-bold text-primary hover:underline">
            Reset
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-surface-container rounded-full lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xs font-display font-bold uppercase tracking-widest text-on-surface-variant">
          Genre
        </h4>
        <div className="space-y-3">
          {["Action", "RPG", "Adventure", "Shooter", "Strategy"].map(
            (genre) => (
              <label
                key={genre}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-outline/30 bg-surface-container text-primary focus:ring-primary/20 accent-primary cursor-pointer"
                  defaultChecked={genre === "Action"}
                />
                <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">
                  {genre}
                </span>
              </label>
            ),
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xs font-display font-bold uppercase tracking-widest text-on-surface-variant">
          Platform
        </h4>
        <div className="flex flex-wrap gap-2">
          {["PC", "PS5", "Xbox", "Switch"].map((platform) => (
            <button
              key={platform}
              className={cn(
                "px-4 py-1.5 rounded-lg text-xs font-display font-bold transition-all",
                platform === "PC"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high",
              )}
            >
              {platform}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xs font-display font-bold uppercase tracking-widest text-on-surface-variant">
          Tahun Rilis
        </h4>
        <SelectField
          value={year}
          onChange={(e) => setYear(e.target.value)}
          options={YEAR_OPTIONS}
        />
      </div>
    </aside>
  );
}
