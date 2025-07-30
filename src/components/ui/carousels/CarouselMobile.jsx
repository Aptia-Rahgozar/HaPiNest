import { useState, useEffect } from "react";
import { ProjectCard } from "../ProjectCard";

export const CarouselMobile = ({ slides }) => {
  const [smallCurrent, setSmallCurrent] = useState(0);

  const smallLastIndex = slides.length - 1;

  const prevSmallSlide = () => {
    setSmallCurrent((prev) => (prev === 0 ? smallLastIndex : prev - 1));
  };

  const nextSmallSlide = () => {
    setSmallCurrent((prev) => (prev === smallLastIndex ? 0 : prev + 1));
  };

  // Optional auto-slide fro SMALL slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSmallSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [smallLastIndex]);

  return (
    <div className="relative max-w-[312px] mx-auto mt-6 overflow-hidden rounded-2xl">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 "
        style={{ transform: `translateX(-${smallCurrent * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <ProjectCard key={idx} slide={slide} ide={idx} />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSmallSlide}
        className="absolute top-1/2 -translate-y-1/2 left-2 bg-white bg-opacity-75 rounded-full p-1 hover:bg-opacity-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={nextSmallSlide}
        className="absolute top-1/2 -translate-y-1/2 right-2 bg-white bg-opacity-75 rounded-full p-1 hover:bg-opacity-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex">
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setSmallCurrent(idx)}
            className={`block w-2 h-2 mx-2 rounded-full cursor-pointer transition-all ${
              idx === smallCurrent ? "scale-125 bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
