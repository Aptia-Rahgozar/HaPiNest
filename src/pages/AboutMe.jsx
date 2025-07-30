import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTitle } from "../hooks/useTitle";
import { AnimatedDiv } from "../components";

import {
  profilePicture,
  profileIconPrimaryDark,
  hapinestSmiley,
  downloadIcon,
  armIconPrimaryDark,
  toolIconPrimaryDark,
  figmaIcon,
  illustratorIcon,
  miroIcon,
  figjamIcon,
  photoshopIcon,
  useberryIcon,
} from "../assets";

export const AboutMe = ({ title }) => {
  useTitle(title);

  useEffect(() => {
    AOS.init({
      disable: false,
      duration: 1500, // Optional: animation duration
      once: true, // Optional: animation happens only once
    });
  }, []);

  return (
    <div data-aos="zoom-in-up" className="max-w-[312px] mx-auto">
      {/* GET TO KNOW ME SECTION */}
      <section>
        <div className="flex items-center justify-center bg-primaryLight h-[136px] rounded-2xl">
          <img
            className="rounded-full w-1/3"
            src={profilePicture}
            alt="profile picture"
          />
        </div>

        <div className="flex items-center mt-4 pl-4">
          <img src={profileIconPrimaryDark} alt="profile icon" />
          <h2 className="font-about-large text-primaryDark ml-1">
            Get to Know Me
          </h2>
        </div>

        <div className="mt-4 p-4 bg-white rounded-2xl shadow-myShadow border border-grayLighter">
          <h3 className="text-myBlack font-bold mb-1">My Journey</h3>
          <p className="leading-5">
            I’m Habibeh — a UI/UX designer with a background in graphic design
            and several years of experience in the creative field. My passion
            for color, composition, and visual storytelling started in graphic
            design, but discovering UI/UX shifted my perspective. I realized
            that great design is not only about how things look — but also how
            they work and feel. I’ve completed two advanced courses in UI Design
            and Product Design with some of the best instructors in the field.
            These experiences helped me sharpen both my visual skills and
            strategic thinking.
          </p>
          <h3 className="text-myBlack font-bold mb-1 mt-4">
            Skills & Interests
          </h3>
          <p className="leading-5">
            I enjoy creating designs that are intuitive, aesthetic, and
            user-focused. I'm always exploring new trends, tools, and
            technologies — especially AI — to enhance both my workflow and the
            quality of my work.
          </p>
        </div>
      </section>

      {/* What Makes Me Different Section */}
      <section className="bg-secondaryPink text-myBlack mt-4 py-6 border border-grayLighter shadow-myShadow rounded-2xl">
        <img
          className="mx-auto animate-bounce mt-4"
          src={hapinestSmiley}
          alt="HaPiNest Smiley"
        />

        <h2 className="text-[20px] mt-4 px-4 font-bold mb-2">
          What Makes Me Different?
        </h2>
        <p className="px-4 leading-5">
          My background in graphic design, my natural artistic instincts, and my
          ability to work with modern design tools give me a unique edge as a
          product designer. I bring together creativity and logic to craft
          experiences that are not only beautiful but also meaningful. With a
          solid foundation in visual design, user thinking, and practical tools,
          I can deliver digital products that truly connect with people — from
          concept to execution.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border border-primaryDark rounded-2xl w-[240px] h-[56px] mx-auto mt-6"
        >
          <img src={downloadIcon} alt="download icon" />
          <span className="text-primaryDark text-[16px] font-medium ml-1">
            Download Resume
          </span>
        </a>
      </section>

      {/* What I Do Best Section */}
      <section className="mt-4">
        <div className="flex items-center pl-4">
          <img src={armIconPrimaryDark} alt="arm icon" className="w-6" />
          <h2 className="font-about-large text-primaryDark ml-1">
            What I Do Best
          </h2>
        </div>
        <div className="bg-white p-4 mt-4 rounded-2xl border border-grayLighter shadow-myShadow">
          <p>
            A quick overview of my strengths — across interface design, user
            experience, and the soft skills that make good work happen.
          </p>
          <div
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="100"
            className="aos-hardware-fix border border-grayLight w-[264px] mt-4 py-4 mx-auto rounded-2xl"
          >
            <h3 className="text-[20px] font-[600] text-primaryDark pl-12">
              UX Skills
            </h3>
            <ul className="list-disc pl-10 mt-2 leading-5 text-primaryDark">
              <li>User Research</li>
              <li>Design Thinking</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Usability Testing</li>
            </ul>
          </div>
          <div
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="100"
            className="border border-grayLight w-[264px] mt-4 py-4 mx-auto rounded-2xl"
          >
            <h3 className="text-[20px] font-[600] text-primaryDark pl-12">
              UI Skills
            </h3>
            <ul className="list-disc pl-10 mt-2 leading-5 text-primaryDark">
              <li>Visual Design</li>
              <li>Layout & Typography</li>
              <li>Color Theory</li>
              <li>Responsive Design</li>
              <li>Design Systems</li>
            </ul>
          </div>
          <div
            data-aos="flip-left"
            data-aos-duration="2500"
            data-aos-delay="100"
            className="border border-grayLight w-[264px] mt-4 py-4 mx-auto rounded-2xl"
          >
            <h3 className="text-[20px] font-[600] text-primaryDark pl-12">
              Soft Skills
            </h3>
            <ul className="list-disc pl-10 mt-2 leading-5 text-primaryDark">
              <li>Problem-solving</li>
              <li>Creativity</li>
              <li>Color Theory</li>
              <li>Team Collaboration</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* My Toolbox Section */}
      <section className="mt-4">
        <div className="flex items-center pl-4">
          <img src={toolIconPrimaryDark} alt="arm icon" className="w-6" />
          <h2 className="font-about-large text-primaryDark ml-1">My Toolbox</h2>
        </div>
        <p className="px-4 mt-2 text-myBlack">
          A look at the tools I use in every step of the design process – from
          research to final UI.{" "}
        </p>
        <div className="flex flex-col mt-4 p-4 bg-primaryDark rounded-2xl">
          <div className="flex gap-2">
            <AnimatedDiv className="flex-1 flex flex-col justify-center items-center py-5 bg-white h-[128px] rounded-2xl">
              <img className="h-16" src={figmaIcon} alt="Figma" />
              <span className="text-primaryDark font-bold text-[20px]">
                Figma
              </span>
            </AnimatedDiv>

            <AnimatedDiv
              delay={300}
              className="flex-1 flex flex-col justify-center items-center py-5 bg-white h-[128px] rounded-2xl"
            >
              <img className="h-16" src={illustratorIcon} alt="Illustrator" />
              <span className="text-primaryDark font-bold text-[20px]">
                Illustrator
              </span>
            </AnimatedDiv>
          </div>
          <div className="flex gap-2 my-2">
            <AnimatedDiv
              delay={600}
              className="flex-1 flex flex-col justify-center items-center py-5 bg-white h-[128px] rounded-2xl"
            >
              <img className="h-16" src={miroIcon} alt="Miro" />
              <span className="text-primaryDark font-bold text-[20px]">
                Miro
              </span>
            </AnimatedDiv>
            <div className="flex-1 flex items-center justify-center text-[34px] font-[275] h-[128px] rounded-2xl text-white">
              + AI
            </div>
            <AnimatedDiv
              delay={900}
              className="flex-1 flex flex-col justify-center items-center py-5 bg-white h-[128px] rounded-2xl"
            >
              <img className="h-16" src={figjamIcon} alt="Miro" />
              <span className="text-primaryDark font-bold text-[20px]">
                Figjam
              </span>
            </AnimatedDiv>
          </div>
          <div className="flex gap-2">
            <AnimatedDiv
              delay={1200}
              className="flex-1 flex flex-col justify-center items-center py-5 bg-white h-[128px] rounded-2xl"
            >
              <img className="h-16" src={photoshopIcon} alt="Photoshop" />
              <span className="text-primaryDark font-bold text-[20px]">
                Photoshop
              </span>
            </AnimatedDiv>
            <AnimatedDiv
              delay={1500}
              className="flex-1 flex flex-col justify-center items-center py-5 bg-white h-[128px] rounded-2xl"
            >
              <img className="h-16" src={useberryIcon} alt="Useberry" />
              <span className="text-primaryDark font-bold text-[20px]">
                Useberry
              </span>
            </AnimatedDiv>
          </div>
        </div>
      </section>
    </div>
  );
};
