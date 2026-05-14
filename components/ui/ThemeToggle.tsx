import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="p-2 h-9 w-9" />;

  return (
    <button
      aria-label={
        theme === "dark" ? "Aktifkan light mode" : "Aktifkan dark mode"
      }
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "p-2 rounded-full transition-all duration-300",
        "bg-surface-container hover:bg-surface-container-high text-on-surface",
        "border border-outline/10 shadow-sm",
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
