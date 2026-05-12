"use client";

import { useState } from "react";
import { Game } from "@/types/game";
import Image from "next/image";
import GalleryLightbox from "./GalleryLightbox";

export default function GalleryGame({ game }: { game: Game }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const screenshots = game.screenshots || [];

  const visibleImages = 4;

  const previewImages = screenshots.slice(1, visibleImages);

  const remainingImages = Math.max(screenshots.length - visibleImages, 0);

  const currentIndex = screenshots.findIndex(
    (image) => image === selectedImage,
  );

  const handlePrev = () => {
    if (currentIndex <= 0) return;

    setSelectedImage(screenshots[currentIndex - 1]);
  };

  const handleNext = () => {
    if (currentIndex >= screenshots.length - 1) return;

    setSelectedImage(screenshots[currentIndex + 1]);
  };

  return (
    <>
      <div className="space-y-6 md:space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-primary md:h-8" />

          <h2
            className="
              font-display text-2xl font-bold
              md:text-3xl
            "
          >
            Galeri Media
          </h2>
        </div>

        <div
          className="
            grid grid-cols-2 gap-3
            md:grid-cols-4 md:gap-4
          "
        >
          <button
            onClick={() => setSelectedImage(screenshots[0])}
            className="
              group relative col-span-2
              aspect-square cursor-pointer
              overflow-hidden rounded-2xl
              border border-outline/10
              md:row-span-2 md:rounded-3xl
            "
          >
            <Image
              src={screenshots[0] || game.coverImage}
              alt={game.title}
              fill
              sizes="
                (max-width: 768px) 50vw,
                25vw
              "
              className="
                object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
            />
          </button>

          {previewImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="
                  group relative
                  aspect-video cursor-pointer
                  overflow-hidden rounded-xl
                  border border-outline/10
                  md:aspect-square md:rounded-2xl
                "
            >
              <Image
                src={image}
                alt={game.title}
                fill
                sizes="
                    (max-width: 768px) 50vw,
                    25vw
                  "
                className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
              />
            </button>
          ))}

          {remainingImages > 0 && (
            <button
              onClick={() => setSelectedImage(screenshots[0])}
              className="
                group relative
                aspect-video cursor-pointer
                overflow-hidden rounded-xl
                border border-outline/10
                md:aspect-square md:rounded-2xl
              "
            >
              <Image
                src={game.coverImage || screenshots[0]}
                alt={game.title}
                fill
                sizes="
                  (max-width: 768px) 50vw,
                  25vw
                "
                className="
                  object-cover blur-[2px]
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute inset-0
                  flex items-center justify-center
                  bg-black/60
                "
              >
                <span
                  className="
                    font-display text-xs font-bold
                    text-white md:text-base
                  "
                >
                  +{remainingImages} Foto
                </span>
              </div>
            </button>
          )}
        </div>
      </div>

      {selectedImage && (
        <GalleryLightbox
          images={screenshots}
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          title={game.title}
        />
      )}
    </>
  );
}
