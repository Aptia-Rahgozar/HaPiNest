import { useState, useEffect } from "react";
import { Link } from "react-router";

export const CarouselTablet = ({ slides }) => {
  const [tabletCurrent, setTabletCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const tabletMaxIndex = slides.length - 2;
  const tabletTotalSteps = slides.length - 1;

  // TABLET Auto-slide every 3.5 seconds
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setTabletCurrent((prev) => (prev === tabletMaxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [tabletMaxIndex, isHovered]);

  return (
    <div
      className="min-[992px]:hidden relative max-w-[1104px] mt-6 mx-auto pb-2 overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 space-x-4 ease-in-out"
        style={{
          width: `${(slides.length * 100) / 2}%`,
          transform: `translateX(-${(tabletCurrent * 100) / slides.length}%)`,
        }}
      >
        {slides.map((slide, idx) => (
          <Link
            to={slide.url}
            className="rounded-2xl box-border mt-2 border border-grayLighter shadow-myShadow duration-300 hover:scale-105"
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
        {Array.from({ length: tabletTotalSteps }).map((_, idx) => (
          <span
            key={idx}
            onClick={() => setTabletCurrent(idx)}
            className={`block w-2 h-2 mx-2 rounded-full cursor-pointer transition-all ${
              idx === tabletCurrent ? "scale-125 bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
