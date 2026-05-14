import { ElementType, ReactNode } from "react";

export interface AnimatedTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}
