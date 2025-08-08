import { useState, useEffect } from "react";
import { Link } from "react-router";

export const CarouselDesktop = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const maxIndex = slides.length - 3;
  const totalSteps = slides.length - 2;

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [maxIndex, isHovered]);

  return (
    <div
      className="max-[992px]:hidden relative max-w-[1104px] mt-6 mx-auto pb-2 overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 space-x-4 ease-in-out"
        style={{
          width: `${(slides.length * 100) / 3}%`,
          transform: `translateX(-${(current * 100) / slides.length}%)`,
        }}
      >
        {slides.map((slide, idx) => (
          <Link
            to={slide.url}
            className="rounded-2xl box-border mt-2 shadow-myShadow border border-grayLighter duration-300 hover:scale-105"
            style={{ width: `${100 / slides.length}%` }}
            key={idx}
          >
            <img
              src={slide.image}
              alt={`slide-${idx}`}
              className="w-full rounded-t-2xl object-cover"
            />
            <div className="p-4 h-[160px] bg-primaryLight rounded-b-2xl text-white">
              <p className="font-about-large leading-6 whitespace-pre-line">
                {slide.title}
              </p>
              <p className="font-drawer-small mt-4">{slide.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`block w-2 h-2 mx-2 rounded-full cursor-pointer transition-all ${
              idx === current ? "scale-125 bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
