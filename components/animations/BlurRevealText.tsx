"use client";

import { AnimatedTextProps } from "@/types/animation";
import { motion } from "framer-motion";
import { ElementType, ReactNode, useRef } from "react";

export default function BlurRevealText({
  children,
  as: Component = "div",
  className,
  delay = 0,
}: AnimatedTextProps) {
  const hasAnimated = useRef(false);
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      initial={
        hasAnimated.current
          ? false
          : {
              opacity: 0,
              y: 24,
              filter: "blur(12px)",
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      onAnimationComplete={() => {
        hasAnimated.current = true;
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
