import { useState, useEffect } from "react";
import "./ImageSlider.css";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      {/* ✅ Wrapper for slides */}
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`slide-${i}`} className="slide-image" />
        ))}
      </div>

      {/* ✅ Navigation buttons */}
      <button className="nav-btn left" onClick={prevSlide}>
        ❮
      </button>
      <button className="nav-btn right" onClick={nextSlide}>
        ❯
      </button>

      {/* ✅ Dots indicator */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
