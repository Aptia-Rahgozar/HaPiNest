import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { ProjectCard } from "../../components";
import { slides } from "../../data/ProjectsData";

import {
  Palette,
  Clapperboard,
  CircleQuestionMark,
  Route,
  Goal,
  MonitorPlay,
  Telescope,
  ScanSearch,
  ClipboardCheck,
  Waypoints,
  MonitorCog,
} from "lucide-react";

import {
  mobileIconPrimaryDark,
  processIconPrimaryDark,
  project100DesignProcess,
  play,
  project100MobileHero,
  oneHundredLogo,
} from "../../assets";

export const Project100 = ({ title }) => {
  useTitle(title);
  const [activeButton, setActiveButton] = useState("overview");
  const [activeBtn, setActiveBtn] = useState("problem");
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);

  const slide = slides[0];

  const handleButtonClick = (sec) => {
    const section = document.getElementById(sec);
    const container = document.getElementById("scroll-container");

    if (section && container) {
      const sectionRect = section.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const relativeOffset = sectionRect.top - containerRect.top;

      setIsProgrammaticScroll(true);

      container.scrollTo({
        top: container.scrollTop + relativeOffset,
        behavior: "smooth",
      });

      setActiveButton(sec);

      // Wait a bit to allow scroll to finish (adjust if needed)
      setTimeout(() => {
        setIsProgrammaticScroll(false);
      }, 500);
    }
  };

  const handleClick = (sec) => {
    const section = document.getElementById(sec);
    const container = document.getElementById("scroll-project-story-container");

    if (section && container) {
      const relativeOffset = section.offsetTop - container.offsetTop;
      setIsProgrammaticScroll(true);

      container.scrollTo({
        top: relativeOffset,
        behavior: "smooth",
      });

      setActiveBtn(sec);

      // Wait a bit to allow scroll to finish (adjust if needed)
      setTimeout(() => {
        setIsProgrammaticScroll(false);
      }, 500);
    }
  };

  useEffect(() => {
    const container = document.getElementById("scroll-container");

    const onScroll = () => {
      if (!container || isProgrammaticScroll) return;

      const containerRect = container.getBoundingClientRect();
      const sections = [
        "overview",
        "analysis",
        "moodBoard",
        "siteMap",
        "designSystem",
        "uIDesign",
      ];

      for (const sec of sections) {
        const section = document.getElementById(sec);
        if (!section) continue;

        const sectionRect = section.getBoundingClientRect();

        const isInView =
          sectionRect.top >= containerRect.top &&
          sectionRect.top < containerRect.bottom;

        if (isInView) {
          setActiveButton(sec);

          const button = document.getElementById(`btn-${sec}`);
          button?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });

          break;
        }
      }
    };

    container?.addEventListener("scroll", onScroll);

    return () => {
      container?.removeEventListener("scroll", onScroll);
    };
  }, [isProgrammaticScroll]);

  useEffect(() => {
    const container = document.getElementById("scroll-project-story-container");

    const onScroll = () => {
      if (!container || isProgrammaticScroll) return;

      const containerRect = container.getBoundingClientRect();
      const sections = ["problem", "design-process", "outcome"];

      for (const sec of sections) {
        const section = document.getElementById(sec);
        if (!section) continue;

        const sectionRect = section.getBoundingClientRect();

        const isInView =
          sectionRect.top >= containerRect.top &&
          sectionRect.top < containerRect.bottom;

        if (isInView) {
          setActiveBtn(sec);
          break;
        }
      }
    };

    container?.addEventListener("scroll", onScroll);

    return () => {
      container?.removeEventListener("scroll", onScroll);
    };
  }, [isProgrammaticScroll]);

  return (
    <div data-aos="zoom-in-up">
      <div className="min-[768px]:flex gap-6 ">
        <div className="min-[768px]:flex-1 max-w-[312px] min-[768px]:max-w-[856px] min-[768px]:flex min-[768px]:flex-col min-[768px]:justify-between min-[768px]:max-h-[492px] mx-auto min-[768px]:mx-0">
          {/* Hero (Mobile) */}
          <div className="min-[768px]:hidden rounded-2xl mb-4 shadow-myShadow">
            <img
              src={project100MobileHero}
              alt="project 1 hero"
              className="rounded-2xl"
            />
          </div>
          {/* Introduction (Mobile) */}
          <div className="px-4 py-2 bg-secondaryPink mx-auto min-[768px]:mx-0 shadow-myShadow rounded-2xl">
            <div className="flex justify-between mb-2">
              <div className="flex flex-wrap items-center mb-2.5">
                <span>
                  <img
                    src={mobileIconPrimaryDark}
                    alt="mobile icon"
                    className="min-[768px]:w-7 min-[992px]:w-8"
                  />
                </span>
                <h1 className="text-primaryDark text-[20px] min-[768px]:text-[26px] min-[992px]:text-[34px] font-bold mx-2">
                  Mobile App
                </h1>
                <span className="text-myBlack min-[768px]:text-[20px] min-[992px]:text-[22px]">
                  (A Course Project)
                </span>
              </div>
              <div className="bg-white rounded-lg p-1 w-[62px] h-[62px]">
                <img src={oneHundredLogo} alt="100 Logo" />
              </div>
            </div>
            <div className="min-[992px]:text-[18px]">
              <p className="text-myBlack mb-2.5 leading-3">
                <span className="font-bold mr-2">Product Type:</span>
                <span>Mobile Finance App</span>
              </p>
              <p className="text-myBlack mb-2.5">
                A user-friendly financial app designed to simplify payments,
                transfers, and top-ups — all in one place.
              </p>
              <p className="text-myBlack mb-2.5">
                <span className="font-bold mr-2">Product Name:</span>
                <span>100</span>
              </p>
              <p className="text-myBlack">
                <span className="font-bold mr-2">My Role:</span>
                <span>UI Designer</span>
              </p>
            </div>
          </div>
          {/* Design Process */}
          <div className="mx-auto min-[768px]:mx-0">
            <h2 className="flex items-center mt-5 mb-4">
              <span>
                <img
                  src={processIconPrimaryDark}
                  alt="process icon"
                  className="min-[768px]:w-7 min-[992px]:w-8"
                />
              </span>
              <span className="text-[20px] min-[768px]:text-[26px] min-[992px]:text-[34px] font-medium text-primaryDark ml-2">
                Design Process
              </span>
            </h2>

            <div className="flex min-[768px]:justify-around gap-2 min-[768px]:gap-0 bg-grayLighter text-[12px] min-[768px]:text-[14px] min-[992px]:text-[16px] px-2 pt-2 pb-2 rounded-xl overflow-auto">
              <div
                id="btn-overview"
                onClick={() => handleButtonClick("overview")}
                className={`flex flex-col duration-200 py-1 px-2 min-w-fit items-center justify-center rounded-xl ${
                  activeButton === "overview"
                    ? "bg-primaryDark text-white"
                    : "text-grayDark hover:bg-white cursor-pointer"
                }`}
              >
                <Telescope />
                <span className="font-medium mt-1">Overview</span>
              </div>
              <div
                id="btn-analysis"
                onClick={() => handleButtonClick("analysis")}
                className={`flex flex-col duration-200 py-1 px-2 min-w-fit items-center justify-center rounded-xl ${
                  activeButton === "analysis"
                    ? "bg-primaryDark text-white"
                    : "text-grayDark hover:bg-white cursor-pointer"
                }`}
              >
                <ScanSearch />
                <span className="font-medium mt-1">Analysis</span>
              </div>
              <div
                id="btn-moodBoard"
                onClick={() => handleButtonClick("moodBoard")}
                className={` flex flex-col duration-200 py-1 px-2 min-w-fit items-center justify-center rounded-xl ${
                  activeButton === "moodBoard"
                    ? "bg-primaryDark text-white"
                    : "text-grayDark hover:bg-white cursor-pointer"
                }`}
              >
                <ClipboardCheck />
                <span className="font-medium mt-1">Mood Board</span>
              </div>
              <div
                id="btn-siteMap"
                onClick={() => handleButtonClick("siteMap")}
                className={`flex flex-col duration-200 py-1 px-2 min-w-fit items-center justify-center rounded-xl ${
                  activeButton === "siteMap"
                    ? "bg-primaryDark text-white"
                    : "text-grayDark hover:bg-white cursor-pointer"
                }`}
              >
                <Waypoints />
                <span className="font-medium mt-1">Site Map</span>
              </div>
              <div
                id="btn-designSystem"
                onClick={() => handleButtonClick("designSystem")}
                className={`flex flex-col duration-200 py-1 px-2 min-w-fit items-center justify-center rounded-xl ${
                  activeButton === "designSystem"
                    ? "bg-primaryDark text-white"
                    : "text-grayDark hover:bg-white cursor-pointer"
                }`}
              >
                <MonitorCog />
                <span className="font-medium mt-1">Design System</span>
              </div>
              <div
                id="btn-uIDesign"
                onClick={() => handleButtonClick("uIDesign")}
                className={`flex flex-col duration-200 py-1 px-2 min-w-fit items-center justify-center rounded-xl ${
                  activeButton === "uIDesign"
                    ? "bg-primaryDark text-white"
                    : "text-grayDark hover:bg-white cursor-pointer"
                }`}
              >
                <Palette />
                <span className="font-medium mt-1">UI Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-[312px] min-[992px]:w-[352px] min-[768px]:block">
          <ProjectCard slide={slide} />
        </div>
      </div>
      <div className="min-[768px]:flex min-[768px]:h-[600px] gap-6 mt-4">
        <div
          id="scroll-container"
          className="min-[768px]:flex-1 h-[249px] min-[768px]:h-[600px] max-w-[312px] min-[768px]:max-w-[856px] mx-auto min-[768px]:mx-0 bg-white rounded-2xl shadow-myShadow overflow-auto relative"
        >
          <div className="relative w-full">
            <img
              src={project100DesignProcess}
              alt="design process"
              className="w-full"
            />
            <div
              id="overview"
              className="absolute top-[0%] w-full h-[1px]"
            ></div>
            <div
              id="analysis"
              className="absolute top-[12.5%] w-full h-[1px]"
            ></div>
            <div
              id="moodBoard"
              className="absolute top-[28.5%] w-full h-[1px]"
            ></div>
            <div
              id="siteMap"
              className="absolute top-[38.8%] w-full h-[1px]"
            ></div>
            <div
              id="designSystem"
              className="absolute top-[46.4%] w-full h-[1px]"
            ></div>
            <div
              id="uIDesign"
              className="absolute top-[56%] w-full h-[1px]"
            ></div>
          </div>
        </div>
        {/* Project Story Section (Mobile) */}
        <div className="flex flex-col w-[312px] min-[992px]:w-[352px] min-[768px]:h-[600px] mx-auto min-[768px]:mx-0">
          <h2 className="flex items-center text-primaryDark mt-5 min-[768px]:mt-0 mb-4">
            <span>
              <Clapperboard className="min-[768px]:w-7 min-[768px]:h-7 min-[992px]:w-8 min-[992px]:h-8" />
            </span>
            <span className="text-[20px] min-[768px]:text-[26px] min-[992px]:text-[34px] font-medium text-primaryDark ml-2">
              Project Story
            </span>
          </h2>
          <div className="flex bg-grayLighter px-2 pt-2 pb-2 gap-2 rounded-xl">
            <div
              id="btn-problem"
              onClick={() => handleClick("problem")}
              className={`flex flex-col duration-200 py-1 min-w-[72px] items-center justify-center rounded-xl ${
                activeBtn === "problem"
                  ? "bg-primaryDark text-white"
                  : "text-grayDark hover:bg-white cursor-pointer"
              }`}
            >
              <CircleQuestionMark />
              <span className="text-[12px] font-medium mt-1">Problem</span>
            </div>
            <div
              id="btn-design-process"
              onClick={() => handleClick("design-process")}
              className={`flex-1 flex flex-col duration-200 py-1 min-w-[72px] items-center justify-center rounded-xl ${
                activeBtn === "design-process"
                  ? "bg-primaryDark text-white"
                  : "text-grayDark hover:bg-white cursor-pointer"
              }`}
            >
              <Route />
              <span className="text-[12px] font-medium mt-1">
                Design Process
              </span>
            </div>
            <div
              id="btn-outcome"
              onClick={() => handleClick("outcome")}
              className={`flex flex-col duration-200 py-1 min-w-[72px] items-center justify-center rounded-xl ${
                activeBtn === "outcome"
                  ? "bg-primaryDark text-white"
                  : "text-grayDark hover:bg-white cursor-pointer"
              }`}
            >
              <Goal />
              <span className="text-[12px] font-medium mt-1">Outcome</span>
            </div>
          </div>
          <div
            id="scroll-project-story-container"
            className="min-[768px]:flex-1 bg-white text-myBlack max-[768px]:h-[240px] min-[992px]:text-[18px] p-4 rounded-2xl mt-4 shadow-myShadow overflow-auto"
          >
            <h3 id="problem" className="font-semibold mb-2">
              Problem
            </h3>
            <p>
              In today’s fast-paced world, digital financial transactions have
              become a part of everyday life. However, many existing financial
              apps are complex, difficult to navigate, or lack a user-centered
              approach. Users need a secure, intuitive, and accessible solution
              to manage tasks such as card-to-card transfers, bill payments,
              mobile top-ups, and QR code payments. The "100" app was designed
              to address this need by creating a simple, seamless, and friendly
              user experience for both novice and experienced users.
            </p>
            <h3 id="design-process" className="font-semibold mt-4 mb-2">
              Design Process
            </h3>
            <p className="mb-2">
              The process started with a deep competitive analysis. I reviewed
              and benchmarked existing financial apps, studying their user flows
              to understand common design patterns, pain points, and
              opportunities for improvement.
            </p>

            <p className="mb-2">
              Next, I created a comprehensive mood board to define the visual
              direction and emotional tone of the product. This helped guide key
              visual decisions throughout the design.
            </p>

            <p className="mb-2">
              Based on these insights, I developed a clear site map to structure
              the app’s content and user pathways. This served as the foundation
              for creating low-fidelity wireframes, which allowed me to test and
              refine the user experience before committing to high-fidelity
              visuals.
            </p>

            <p className="mb-2">
              In parallel with the UI design, I built a complete design
              system—defining typography, color palettes, icon sets, grid
              structures, and reusable components to ensure scalability and
              visual consistency.
            </p>

            <p>
              Finally, I created an interactive prototype and conducted
              in-person usability testing with real users. Their feedback helped
              me fine-tune interactions and improve the overall experience based
              on real-world use.
            </p>

            <h3 id="outcome" className="font-semibold mt-4 mb-2">
              Outcome
            </h3>
            <p>
              "100" was my first end-to-end product design experience and a
              major milestone in my journey as a UI/UX designer. It taught me
              how to build a product from the ground up with a systems thinking
              mindset and a user-first approach. The final result is a clean,
              modern, and accessible financial app designed to simplify daily
              transactions. This project provided a strong foundation for future
              work and reinforced my passion for creating meaningful,
              user-centered digital experiences
            </p>
          </div>
        </div>
      </div>
      <div className="min-[768px]:flex gap-6 mt-4">
        <div className="max-w-[312px] min-[768px]:flex-1 min-[768px]:max-w-[856px] mx-auto min-[768px]:mx-0">
          <h2 className="flex items-center text-primaryDark mt-5 mb-4">
            <span>
              <MonitorPlay className="min-[768px]:w-7 min-[768px]:h-7 min-[992px]:w-8 min-[992px]:h-8" />
            </span>
            <span className="text-[20px] min-[768px]:text-[26px] min-[992px]:text-[34px] font-medium text-primaryDark ml-2">
              How It Works!
            </span>
          </h2>
          <div className="flex items-center justify-center h-[210px] min-[768px]:h-[380px] min-[992px]:h-[560px] bg-[#d9d9d9] rounded-2xl">
            <img src={play} alt="play video" />
          </div>
        </div>
        <div className="w-[312px] min-[992px]:w-[352px]"></div>
      </div>
    </div>
  );
};
