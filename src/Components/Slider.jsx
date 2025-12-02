import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  const images = [
    "/assets/game1.jpg",
    "/assets/game2.jpg",
    "/assets/game3.jpg",
    "/assets/game4.jpg",
    "/assets/game5.jpg",
    "/assets/game6.jpg",
    "/assets/game7.jpg",
    "/assets/game8.jpg",
    "/assets/game9.jpg",
    "/assets/game10.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = previous

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Animation variants
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <div className="relative overflow-hidden w-full max-w-6xl mx-auto rounded-2xl shadow-xl mt-10">
      {/* Image animation */}
      <div className="relative h-[400px] flex items-center justify-center bg-black">
        <AnimatePresence custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute w-full h-full object-cover rounded-2xl"
          />
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-2xl px-3 py-1 rounded-full backdrop-blur-sm transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-2xl px-3 py-1 rounded-full backdrop-blur-sm transition"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
