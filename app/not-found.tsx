"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Home, Gamepad2 } from "lucide-react";
import BlurRevealText from "@/components/animations/BlurRevealText";

export default function NotFound() {
  return (
    <main
      className="
        relative flex
        min-h-screen
        items-center justify-center
        overflow-hidden
        bg-background
        px-5 pt-8 pb-20
      "
    >
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-150 w-150
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/5
          blur-[120px]
        "
      />

      <div
        className="
          container relative z-10
          mx-auto
        "
      >
        <div
          className="
            mx-auto max-w-4xl
            text-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-12"
          >
            <div className="relative">
              <BlurRevealText
                as="h1"
                className="
    select-none text-[110px]
    font-black
    leading-none
    tracking-tighter
    text-primary
    md:text-[180px]
  "
              >
                404
              </BlurRevealText>

              <div
                className="
                  absolute inset-0
                  -z-10 rounded-full
                  bg-primary/10
                  blur-[100px]
                "
              />
            </div>

            <div
              className="
                mx-auto max-w-2xl
                space-y-6
              "
            >
              <h2
                className="
    text-3xl
    font-bold
    tracking-tight
    md:text-5xl
  "
              >
                Halaman Tidak Ditemukan
              </h2>

              <p
                className="
                  px-4 text-base
                  font-medium
                  leading-relaxed
                  text-on-surface-variant
                  md:text-xl
                "
              >
                Halaman yang kamu cari tidak tersedia atau mungkin telah
                dipindahkan.
              </p>
            </div>

            <div
              className="
                flex flex-col
                items-center
                justify-center gap-4
                pt-4
                sm:flex-row
              "
            >
              <Link
                href="/"
                className="
                  group flex
                  items-center gap-3
                  rounded-full
                  bg-primary
                  px-10 py-5
                  font-display
                  font-bold
                  text-on-primary
                  shadow-2xl
                  shadow-primary/30
                  transition-all
                  hover:scale-105
                  active:scale-95
                "
              >
                <Home className="h-5 w-5" />
                Kembali ke Beranda
              </Link>

              <Link
                href="/games"
                className="
                  group flex
                  min-w-60
                  items-center
                  justify-center
                  rounded-full
                  border border-outline/10
                  bg-surface-container/50
                  px-10 py-5
                  font-display
                  font-bold
                  text-on-surface
                  transition-all
                  hover:bg-surface-container-high
                  active:scale-95
                "
              >
                Lihat Daftar Game
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
