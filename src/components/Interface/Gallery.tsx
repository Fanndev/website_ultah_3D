import { useState } from "react";
import { birthdayConfig } from "../../config/birthday";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { gallery } = birthdayConfig.celebrant;

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 bg-black/50 backdrop-blur-md rounded-lg p-4 pointer-events-auto hover:bg-black/60 transition-colors"
      >
        <span className="text-white">View Gallery</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 pointer-events-auto">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X size={24} />
      </button>

      <button
        onClick={prevImage}
        className="absolute left-4 text-white hover:text-gray-300"
      >
        <ChevronLeft size={40} />
      </button>



      <img
        src={gallery[currentIndex]}
        alt={`Gallery image ${currentIndex + 1}`}
        className="max-h-[80vh] max-w-[80vw] object-contain"
      />

     

      <button
        onClick={nextImage}
        className="absolute right-4 text-white hover:text-gray-300"
      >
        <ChevronRight size={40} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {gallery.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
