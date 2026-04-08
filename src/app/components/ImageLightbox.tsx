import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

interface ImageLightboxProps {
  imageUrl: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

export function ImageLightbox({ imageUrl, alt, isOpen, onClose, onPrevious, onNext }: ImageLightboxProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "ArrowLeft") {
        onPrevious?.();
      }

      if (e.key === "ArrowRight") {
        onNext?.();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          style={{ cursor: "zoom-out" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {onPrevious && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              e.stopPropagation();
              onNext?.();
            }}
            className="max-w-4xl max-h-[80vh] relative"
            style={{ cursor: onNext ? "pointer" : "default" }}
          >
            <img
              src={imageUrl}
              alt={alt}
              className="w-full h-full object-contain rounded-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
