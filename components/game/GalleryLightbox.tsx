import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryLightboxProps {
  images: string[];
  selectedImage: string | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  title: string;
}

export default function GalleryLightbox({
  images,
  selectedImage,
  onClose,
  onPrev,
  onNext,
  title,
}: GalleryLightboxProps) {
  if (!selectedImage) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/90 p-5 min-h-screen
      "
    >
      <button
        onClick={onClose}
        className="
          absolute right-5 top-5
          rounded-full bg-white/10 p-3
          text-white backdrop-blur-md
        "
      >
        <X className="h-5 w-5" />
      </button>

      <button
        onClick={onPrev}
        className="
          absolute left-5
          rounded-full bg-white/10 p-3
          text-white backdrop-blur-md
        "
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div
        className="
          relative h-[80vh] w-full
          max-w-6xl overflow-hidden
          rounded-3xl
        "
      >
        <Image
          src={selectedImage}
          alt={title}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      <button
        onClick={onNext}
        className="
          absolute right-5
          rounded-full bg-white/10 p-3
          text-white backdrop-blur-md
        "
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
