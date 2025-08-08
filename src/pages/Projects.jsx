import { useState, useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";

import { useTitle } from "../hooks/useTitle";

import { ProjectCard } from "../components";
import {
  galleryIconPrimaryDark,
  mobileIconWhite,
  mobileIconGrayDark,
  monitorIconWhite,
  monitorIconPrimaryDark,
} from "../assets";

export const Projects = ({ slides, title }) => {
  useTitle(title);
  const [mobileApps, setMobileApps] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1500, // Optional: animation duration
      once: false, // Optional: animation happens only once
      startEvent: "DOMContentLoaded", // Delay init until window.onload
    });
  }, []);

  return (
    <div data-aos="zoom-in-up">
      <h1 className="flex">
        <img
          src={galleryIconPrimaryDark}
          alt="gallery icon"
          className="mr-2 min-[768px]:w-8"
        />
        <span className="text-[20px] min-[768px]:text-[32px] font-bold md:font-medium text-primaryDark">
          Project Gallery
        </span>
      </h1>
      <p className="text-myBlack min-[768px]:text-[20px] mt-4">
        Explore some of the projects I’ve worked on — each one tells a unique story of
        user needs, thoughtful design and real problem-solving.{" "}
      </p>
      <div className="flex bg-grayLighter p-2 min-[768px]:px-10 min-[992px]:px-12 min-[768px]:py-3 gap-2 min-[768px]:gap-10 min-[992px]:gap-12 mt-4 min-[768px]:mt-12 mb-6 rounded-2xl">
        <button
          onClick={() => setMobileApps(true)}
          className={`flex-1 flex justify-center items-center ${
            mobileApps
              ? "bg-primaryLight text-white"
              : "bg-white text-grayDark hover:border hover:border-grayLighter hover:shadow-md hover:font-bold hover:text-primaryDark"
          }  font-medium h-[40px] min-[768px]:h-[80px] rounded-xl cursor-pointer`}
        >
          <img
            src={mobileApps ? mobileIconWhite : mobileIconGrayDark}
            alt="mobile icon"
            className="w-6 mr-2"
          />
          <span className="min-[768px]:text-[20px]">Mobile Apps</span>
        </button>
        <button
          onClick={() => setMobileApps(false)}
          className={`flex-1 flex justify-center items-center ${
            !mobileApps
              ? "bg-primaryLight text-white"
              : "bg-white text-grayDark hover:border hover:border-grayLighter hover:shadow-md hover:font-bold hover:text-primaryDark"
          }  font-medium h-[40px] min-[768px]:h-[80px] rounded-xl cursor-pointer`}
        >
          <img
            src={!mobileApps ? monitorIconWhite : monitorIconPrimaryDark}
            alt="monitor icon"
            className="w-6 mr-2"
          />
          <span className="min-[768px]:text-[20px]">Websites</span>
        </button>
      </div>
      <div>
        <div className="grid [grid-template-columns:repeat(auto-fit,_312px)] gap-6 justify-center">
          {slides
            .filter((slide) => slide.mobileApp === mobileApps)
            .map((slide, idx) => (
              <div
                key={idx}
                className="max-w-[312px] mx-auto cursor-pointer duration-300 min-[768px]:hover:scale-105"
              >
                <ProjectCard slide={slide} idx={idx} />
                <Link
                  to={slide.url}
                  className="flex justify-center items-center text-primaryDark font-medium border border-primaryDark w-[160px] h-[48px] rounded-2xl mx-auto my-4 min-[768px]:hidden"
                >
                  See Details
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
