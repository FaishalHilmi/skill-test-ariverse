import { Gamepad, Gamepad2, GamepadDirectional, Monitor } from "lucide-react";

export const PLATFORM_ICONS: Record<string, React.ElementType> = {
  PC: Monitor,
  PS5: Gamepad2,
  "Xbox Series X": GamepadDirectional,
  "Nintendo Switch": Gamepad,
};
