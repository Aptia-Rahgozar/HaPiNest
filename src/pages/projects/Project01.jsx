import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { ProjectCard } from "../../components";
import { slides } from "../../data/ProjectsData";

import {
  ZoomIn,
  NotebookPen,
  Lightbulb,
  Palette,
  FlaskRound,
  Clapperboard,
  CircleQuestionMark,
  Route,
  Goal,
  MonitorPlay,
  Telescope,
} from "lucide-react";

import {
  mobileIconPrimaryDark,
  processIconPrimaryDark,
  project01DesignProcess,
  play,
  project01MobileHero,
} from "../../assets";

export const Project01 = ({ title }) => {
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
        "discover",
        "define",
        "ideate",
        "design",
        "prototype",
        "test",
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
              src={project01MobileHero}
              alt="project 1 hero"
              className="rounded-2xl"
            />
          </div>
          {/* Introduction (Mobile) */}
          <div className="p-4 bg-secondaryPink mx-auto min-[768px]:mx-0 shadow-myShadow rounded-2xl">
            <div className="flex items-center mb-2.5">
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
            <div className="min-[992px]:text-[18px]">
              <p className="text-myBlack mb-2.5 leading-3">
                <span className="font-bold mr-2">Product's Type:</span>
                <span>Healthcare App</span>
              </p>
              <p className="text-myBlack mb-2.5">
                (Smart and intuitive booking experience for a digital healthcare
                platform)
              </p>
              <p className="text-myBlack mb-2.5">
                <span className="font-bold mr-2">Product's Name:</span>
                <span>Visitech</span>
              </p>
              <p className="text-myBlack">
                <span className="font-bold mr-2">My Roll:</span>
                <span>Product Designer</span>
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
                className={`flex flex-col duration-200 py-1 min-w-[72px] items-center justify-center rounded-xl ${
                  activeButton === "overview"
                    ? "bg-primaryDark text-white"
                    : "text-grayDark hover:bg-white cursor-pointer"
                }`}
              >
                <Telescope />
                <span className="font-medium mt-1">Overview</span>
              </div>
              <div
                id="btn-discover"
                onClick={() => handleButtonClick("discover")}
                className={`flex flex-col duration-200 py-1 min-w-[72px] items-center justify-center rounded-xl ${
                  activeButton === "discover"
                    ? "bg-primaryDark text-white"
                    : "text-grayDark hover:bg-white cursor-pointer"
                }`}
              >
                <ZoomIn />
                <span className="font-medium mt-1">Discover</span>
              </div>
              <div
                id="btn-define"
                onClick={() => handleButtonClick("define")}
                className={`flex flex-col duration-200 py-1 min-w-[72px] items-center justify-center rounded-xl ${
                  activeButton === "define"
                    ? "bg-primaryDark text-white"
                    : "text-grayDark hover:bg-white cursor-pointer"
                }`}
              >
                <NotebookPen />
                <span className="font-medium mt-1">Define</span>
              </div>
              <div
                id="btn-ideate"
                onClick={() => handleButtonClick("ideate")}
                className={`flex flex-col duration-200 py-1 min-w-[72px] items-center justify-center rounded-xl ${
                  activeButton === "ideate"
                    ? "bg-primaryDark text-white"
                    : "text-grayDark hover:bg-white cursor-pointer"
                }`}
              >
                <Lightbulb />
                <span className="font-medium mt-1">Ideate</span>
              </div>
              <div
                id="btn-design"
                onClick={() => handleButtonClick("design")}
                className={`flex flex-col duration-200 py-1 min-w-[72px] items-center justify-center rounded-xl ${
                  activeButton === "design"
                    ? "bg-primaryDark text-white"
                    : "text-grayDark hover:bg-white cursor-pointer"
                }`}
              >
                <Palette />
                <span className="font-medium mt-1">Design</span>
              </div>
              <div
                id="btn-test"
                onClick={() => handleButtonClick("test")}
                className={`flex flex-col duration-200 py-1 min-w-[72px] items-center justify-center rounded-xl ${
                  activeButton === "test"
                    ? "bg-primaryDark text-white"
                    : "text-grayDark hover:bg-white cursor-pointer"
                }`}
              >
                <FlaskRound />
                <span className="font-medium mt-1">Test</span>
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
              src={project01DesignProcess}
              alt="design process"
              className="w-full"
            />
            <div
              id="overview"
              className="absolute top-[0%] w-full h-[1px]"
            ></div>
            <div
              id="discover"
              className="absolute top-[16%] w-full h-[1px]"
            ></div>
            <div
              id="define"
              className="absolute top-[44.2%] w-full h-[1px]"
            ></div>
            <div
              id="ideate"
              className="absolute top-[49.6%] w-full h-[1px]"
            ></div>
            <div
              id="design"
              className="absolute top-[52.8%] w-full h-[1px]"
            ></div>
            <div id="test" className="absolute top-[77%] w-full h-[1px]"></div>
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
              The main issue was the lack of an integrated system to track and
              manage health between patients and doctors. In today’s busy life,
              people don’t have enough time to monitor their health consistently
              or maintain effective communication with healthcare providers.
              There was a clear need for a simple, accessible, and user-friendly
              application to support users in staying connected with their
              doctors and taking control of their well-being.
            </p>
            <h3 id="design-process" className="font-semibold mt-4 mb-2">
              Design Process
            </h3>
            <p>
              The project followed the Design Thinking approach, progressing
              through five key stages:
            </p>
            <h4 className="font-medium my-1">1. Empahtize</h4>
            <p>
              Through initial research, surveys, interviews, and competitor
              analysis, the team identified the core needs of target users—busy
              individuals, chronic patients, and non-tech-savvy users.
            </p>
            <h4 className="font-medium my-1">2. Define</h4>
            <p>
              Insights from research were categorized, and user personas were
              created to clarify user goals, pain points, and expectations.
            </p>
            <h4 className="font-medium my-1">3. Ideate</h4>
            <p>
              Multiple solutions were brainstormed using methods. Ideas were
              evaluated and refined based on feasibility and user value.
            </p>
            <h4 className="font-medium my-1">4. Design</h4>
            <p>
              A user flow and information architecture were developed, followed
              by wireframes and high-fidelity UI designs to bring the concept to
              life.
            </p>
            <h4 className="font-medium my-1">5. Usability Testing</h4>
            <p>
              A prototype was tested with users, feedback was collected, and
              design iterations were made to improve usability and meet user
              needs more effectively.
            </p>
            <h3 id="outcome" className="font-semibold mt-4 mb-2">
              Outcome
            </h3>
            <p>
              The final result was a health management mobile app with a clean,
              modern interface that helps users track their health, stay in
              touch with doctors, set medication reminders, log symptoms, and
              follow personalized health plans. User feedback during the final
              testing phase was positive, confirming that the design
              successfully addressed key user needs.
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
              How it works!
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
