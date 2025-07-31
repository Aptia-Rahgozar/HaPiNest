import { useEffect } from "react";
import { useLocation, Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTitle } from "../hooks/useTitle";
import { CarouselMobile, CarouselTablet, CarouselDesktop } from "../components";

import {
  contactIcon,
  profilePicture,
  profileIcon,
  galleryIcon,
  contactIconWhite,
  mailIconWhite,
  dribbbleLogo,
  behanceLogo,
  linkedinLogo,
  instagramLogo,
  profileIconPrimaryDark,
  galleryIconPrimaryDark,
  telegramIconWhite,
  whatsappIconWhite,
  hapinestSmiley,
  downloadIcon,
  profilePictureLarge,
  armIconPrimaryDark,
  hapinestLogo,
  nest,
  toolIconPrimaryDark,
  figmaIcon,
  illustratorIcon,
  useberryIcon,
  photoshopIcon,
  miroIcon,
  figjamIcon,
} from "../assets";

export const Home = ({ slides, title }) => {
  useTitle(title);
  const location = useLocation();

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1500, // Optional: animation duration
  //     once: false, // Optional: animation happens only once
  //     startEvent: "load", // Delay init until window.onload
  //   });
  // }, []);

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const section = document.getElementById("contact");
      if (section) {
        // Delay a bit in case rendering is not finished
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollToWhyHaPiNest) {
      const section = document.getElementById("whyHaPiNest");
      if (section) {
        // Delay a bit in case rendering is not finished
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleContactButtonClick = (e) => {
    e.preventDefault();

    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="h-screen">
        <h1 className="font-hero-subheading text-white text-center text-shadow-sm mt-18 md:mt-0 md:-mb-4">
          Welcome to HaPiNest
        </h1>
        <h2 className="font-hero-heading text-white text-center text-shadow-sm">
          A UI/UX Designer's Portfolio
        </h2>

        <div className="hero-button-container hidden md:flex justify-center">
          <Link
            to="/projects"
            className="flex justify-center items-center button-primary-big"
          >
            <span className="mr-1">
              <img src={galleryIcon} alt="contact icon" />
            </span>
            <span>Explore My Projects</span>
          </Link>
          <a
            href="#contact"
            onClick={handleContactButtonClick}
            className="flex items-center justify-center button-primary-big mx-20 max-[992px]:mx-6"
          >
            <span className="mr-1">
              <img src={profileIcon} alt="contact icon" />
            </span>
            <span>Get To Know Me</span>
          </a>
          <a
            href="#contact"
            onClick={handleContactButtonClick}
            className="flex items-center justify-center button-primary-big"
          >
            <span className="mr-1">
              <img src={contactIcon} alt="contact icon" />
            </span>
            <span>Contact Me</span>
          </a>
        </div>
      </section>

      {/* PROJECT PREVIEW Desktop */}
      <section className="hidden md:block mx-12 -mt-20">
        <h3 className="flex">
          <img
            src={galleryIconPrimaryDark}
            alt="gallery icon"
            className="w-8"
          />
          <span className="text-primaryDark text-[32px] font-medium ml-1">
            Project Preview
          </span>
        </h3>
        <p className="text-myBlack text-[20px] mt-2">
          Here’s a glimpse of my recent work — ranging from UI/UX case studies
          to other types of visual design.
        </p>

        <CarouselDesktop slides={slides} />

        {/* TABLETS Slides Container */}
        <CarouselTablet slides={slides} />

        <Link
          to="/projects"
          className="flex justify-center items-center button-primary-big mx-auto mt-6"
        >
          See All
        </Link>
      </section>

      <div id="contact">
        {/* CONTACT ME SECTION (MOBILE) */}
        <section className="-mt-46 md:hidden pt-4">
          <div className="flex flex-col items-center bg-primaryLight h-[330px] max-w-[312px] mx-auto rounded-2xl">
            <img
              src={profilePicture}
              alt="profile picture"
              className="rounded-full w-2/5 mt-8"
            />

            <img
              src={contactIconWhite}
              alt="contact icon white"
              className="mt-7"
            />

            <h3 className="font-contact-large text-white mt-3">Contact Me</h3>
            <div className="flex justify-center mt-2">
              <img src={mailIconWhite} alt="mail icon" />
              <a
                href="mailto:habibeh.pirali@gmail.com"
                className="font-drawer-small text-white ml-1"
              >
                habibeh.pirali@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-between max-w-[220px] mx-auto pt-7">
            <a
              href="https://www.dribbble.com/HabibehPirali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={dribbbleLogo}
                alt="dribbble logo"
                data-aos="fade-right"
                data-aos-duration="2500"
                data-aos-delay="700"
              />
            </a>
            <a
              href="https://www.behance.net/habibehpirali1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={behanceLogo}
                className="mt-1"
                alt="behance logo"
                data-aos="fade-right"
                data-aos-duration="2500"
                data-aos-delay="500"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/habibeh-pirali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinLogo}
                alt="linkedin logo"
                data-aos="fade-right"
                data-aos-duration="2500"
                data-aos-delay="300"
              />
            </a>
            <a
              href="https://www.instagram.com/hapinestdesign?igsh=MTQxOGNyNWRqbTByOA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramLogo}
                alt="instagram logo"
                data-aos="fade-right"
                data-aos-duration="2500"
                data-aos-delay="100"
              />
            </a>
          </div>
        </section>

        {/* GET TO KNOW ME SECTION (DESKTOP) */}
        <section className="hidden md:block">
          <div className="md:flex bg-white p-6 gap-6 rounded-2xl mt-16 border border-grayLighter shadow-myShadow">
            <div className="flex-1 flex flex-col pt-2">
              {/* Top fixed content */}
              <h3 className="flex items-center">
                <img
                  src={profileIconPrimaryDark}
                  alt="profile icon"
                  className="w-8"
                />
                <span className="text-[32px] font-medium text-primaryDark ml-1">
                  Get to Know Me
                </span>
              </h3>
              {/* The box should always be 24px below the text and stretch down to the bottom */}
              <div className="mt-6 flex-1">
                <div className="h-full bg-primaryLight py-8 px-6 rounded-2xl">
                  <img
                    src={profilePicture}
                    alt="profile picture"
                    className="rounded-full mx-auto w-1/2 mt-5"
                  />
                  <img
                    src={contactIconWhite}
                    alt="contact icon"
                    className="mx-auto mt-12"
                  />
                  <h4 className="text-white text-[24px] font-bold text-center mt-6">
                    Contact Me
                  </h4>

                  <p className="flex justify-center mt-4">
                    <img src={mailIconWhite} alt="mail icon" />
                    <a
                      href="mailto:habibeh.pirali@gmail.com"
                      className="text-white ml-1 text-[20px] hover:underline"
                    >
                      habibeh.pirali@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col pt-4 px-6">
              <div className="flex flex-row space-x-8 mx-auto mb-9">
                <a
                  href="https://www.dribbble.com/HabibehPirali"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    data-aos="fade-down-right"
                    data-aos-duration="2000"
                    data-aos-delay="100"
                    src={dribbbleLogo}
                    alt="dribbble logo"
                  />
                </a>

                <a
                  href="https://www.behance.net/habibehpirali1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="100"
                    src={behanceLogo}
                    alt="behance logo"
                    className="w-8"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/habibeh-pirali"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    data-aos-delay="100"
                    src={linkedinLogo}
                    alt="linkedin logo"
                    className="w-6.5"
                  />
                </a>

                <a
                  href="https://www.instagram.com/hapinestdesign?igsh=MTQxOGNyNWRqbTByOA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    data-aos="fade-up-left"
                    data-aos-duration="2000"
                    data-aos-delay="100"
                    src={instagramLogo}
                    alt="instagram logo"
                    className="w-6.5"
                  />
                </a>
              </div>
              <div className="flex-1 overflow-auto">
                <h4 className="font-bold text-[20px] text-primaryLight">
                  My Journey
                </h4>
                <p className="mt-2 leading-5">
                  I’m Habibeh — a UI/UX designer with a background in graphic
                  design and several years of experience in the creative field.
                  {<br />}My passion for color, composition, and visual
                  storytelling started in graphic design, but discovering UI/UX
                  shifted my perspective. I realized that great design is not
                  only about how things look — but also how they work and feel.
                  {<br />}
                  I’ve completed two advanced courses in UI Design and Product
                  Design with some of the best instructors in the field. These
                  experiences helped me sharpen both my visual skills and
                  strategic thinking.
                </p>
                <h4 className="mt-5 font-bold text-[20px] text-primaryLight">
                  Skills & Interests
                </h4>
                <p className="mt-2 leading-5">
                  {" "}
                  enjoy creating designs that are intuitive, aesthetic, and
                  user-focused. I'm always exploring new trends, tools, and
                  technologies — especially AI — to enhance both my workflow and
                  the quality of my work.
                </p>
              </div>
            </div>
            <div className="flex-1 bg-secondaryPink rounded-2xl py-4 px-6 max-[992px]:hidden">
              <img
                src={hapinestSmiley}
                alt="HaPiNest Smiley"
                className="mt-10 rounded-2xl mx-auto animate-bounce"
              />
              <h4 className="text-[20px] font-bold text-primaryLight mt-6">
                What Makes Me Different?
              </h4>
              <p className="mt-2 text-primaryLight leading-5">
                My background in graphic design, my natural artistic instincts,
                and my ability to work with modern design tools give me a unique
                edge as a product designer. I bring together creativity and
                logic to craft experiences that are not only beautiful but also
                meaningful.{<br />}
                With a solid foundation in visual design, user thinking, and
                practical tools, I can deliver digital products that truly
                connect with people — from concept to execution.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center button-primary-big mx-auto mt-6"
              >
                <img src={downloadIcon} alt="download icon" />
                <span className="text-primaryLight text-[16px] font-medium ml-1">
                  Download Resume
                </span>
              </a>
            </div>
          </div>
          {/* WHAT MAKES ME DIFFERENT (TABLET) */}
          <div className="flex items-center bg-secondaryPink rounded-2xl mt-4 py-4 px-6 min-[992px]:hidden">
            <div className=" min-w-fit mr-7">
              <img
                src={hapinestSmiley}
                alt="HaPiNest Smiley"
                className="p-8 bg-white rounded-2xl mx-auto"
              />
            </div>
            <div>
              <h4 className="text-[20px] font-bold text-primaryLight">
                What Makes Me Different?
              </h4>
              <p className="mt-4 text-primaryLight leading-5">
                My background in graphic design, my natural artistic instincts,
                and my ability to work with modern design tools give me a unique
                edge as a product designer. I bring together creativity and
                logic to craft experiences that are not only beautiful but also
                meaningful.{<br />}
                With a solid foundation in visual design, user thinking, and
                practical tools, I can deliver digital products that truly
                connect with people — from concept to execution.
              </p>
              <button className="flex items-center justify-center border border-primaryLight rounded-2xl w-[240px] h-[56px] mt-6">
                <img src={downloadIcon} alt="download icon" />
                <span className="text-primaryLight text-[16px] font-medium ml-1">
                  Download Resume
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* GET TO KNOW ME SECTION (MOBILE) */}
      <section className="mt-6 md:hidden">
        <div className="bg-secondaryPink max-w-[312px] p-4 mx-auto rounded-2xl">
          <div className="flex items-center">
            <img src={profileIconPrimaryDark} alt="profile icon" />
            <h3 className="font-about-large text-primaryDark ml-1">
              Get to Know Me
            </h3>
          </div>
          <div className="mb-4 mt-2 leading-5">
            I'm Habibeh, a UI/UX designer with a background in graphic design. I
            create user-centered, visually engaging interfaces with a strong eye
            for detail and usability ...
          </div>
          <Link
            to="/aboutMe"
            className="block font-drawer-small border border-primaryDark py-3 px-2 rounded-2xl mx-auto max-w-fit text-primaryDark"
          >
            Learn more about me
          </Link>
        </div>
      </section>

      {/* EXPLORE MY PROJECTS SECTION (MOBILE) */}
      <section className="mt-7 md:hidden">
        <div className="max-w-[312px] px-4 mx-auto">
          <div className="flex items-center">
            <img src={galleryIconPrimaryDark} alt="profile icon" />
            <h3 className="font-about-large text-primaryDark ml-1">
              Explore my projects
            </h3>
          </div>
          <div className="mb-4 mt-2 leading-5">
            <p>
              Explore some of the projects I've worked on - each one tells a
              story of user needs, thoughtful design and real problem-solving.
            </p>
          </div>
        </div>

        <CarouselMobile slides={slides} />

        <Link
          to="/projects"
          className="block font-drawer-small border border-primaryDark py-3 px-6 rounded-2xl mx-auto mt-6 max-w-fit text-primaryDark"
        >
          See All Projects
        </Link>
      </section>

      {/* Why HaPiNest SECTION (MOBILE) */}
      <section id="whyHaPiNest" className="mt-6 md:hidden">
        <div className="flex flex-col items-center bg-secondaryPink max-w-[312px] p-4 mx-auto rounded-2xl">
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="2000"
            src={hapinestLogo}
            alt="HaPiNest logo"
            className="mt-8"
          />
          <p className="text-[20px] mt-5">www.hapinestdesign.com</p>
        </div>
        <div className=" max-w-[312px] p-4 mx-auto mt-4 rounded-2xl bg-white shadow-myShadow border border-grayLighter">
          <h3 className="text-[20px] font-bold text-myBlack">Why HaPiNest?</h3>
          <p className="mt-2 text-myBlack">
            Hapinest Design comes from the first two letters of my first and
            last name (Ha + Pi),but its resemblance to the word Happy was what
            truly inspired the choice. To me, UI/UX design is not just about
            arranging visual elements — it’s about building a safe,
            human-centered, and delightful space. A kind of nest for ideas and
            user experiences. At Hapinest Design, every pixel is placed with
            care and crafted with heart. It’s a small home for designs that are
            functional, beautiful, and deeply human. But this isn’t just a
            personal portfolio. I chose not to name this site after myself
            because I envision something bigger. One day, I hope Hapinest Design
            will evolve into a collaborative studio — a space where a team of
            designers, developers, and thinkers come together to shape complete
            experiences from start to finish.
          </p>
          <p className="text-myBlack font-bold">
            So, this is just the beginning.
          </p>
          <p className="mt-6 text-center text-primaryDark text-[24px]">
            Welcome to the nest.
          </p>
          <img src={nest} alt="nest" className="mx-auto" />
        </div>
      </section>

      {/* WHAT I DO BEST (LARGE SCREENS) */}
      <section className="hidden md:block mx-12 mt-16">
        <h3 className="flex">
          <img src={armIconPrimaryDark} alt="arm icon" className="w-8" />
          <span className="text-primaryDark text-[32px] font-medium ml-1">
            What I Do Best
          </span>
        </h3>
        <p className="text-myBlack text-[20px] mt-2">
          A quick overview of my strengths — across interface design, user
          experience, and the soft skills that make good work happen.
        </p>
        <div className="flex max-w-[1104px] mt-6 mx-auto pb-2 space-x-5 rounded-2xl">
          <div
            data-aos="flip-right"
            data-aos-duration="2500"
            data-aos-delay="100"
            className="w-[352px] h-[264px] bg-white rounded-2xl border border-grayLighter shadow-myShadow pt-8 overflow-auto"
          >
            <h3 className="px-14 mb-4 text-[24px] font-bold text-primaryDark">
              UX Skills
            </h3>
            <ul className="px-14 list-disc text-[20px] text-primaryDark leading-6">
              <li>User Research</li>
              <li>Design Thinking</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Usability Testing</li>
            </ul>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="2500"
            data-aos-delay="300"
            className="w-[352px] h-[264px] bg-white rounded-2xl border border-grayLighter shadow-myShadow pt-8 overflow-auto"
          >
            <h3 className="px-14 mb-4 text-[24px] font-bold text-primaryDark">
              UI Skills
            </h3>
            <ul className="px-14 list-disc  text-[20px] text-primaryDark leading-6">
              <li>Visual Design</li>
              <li>Layout & Typography</li>
              <li>Color Theory</li>
              <li>Responsive Design</li>
              <li>Design Systems </li>
            </ul>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="2500"
            data-aos-delay="500"
            className="w-[352px] h-[264px] bg-white rounded-2xl border border-grayLighter shadow-myShadow pt-8 overflow-auto"
          >
            <h3 className="px-14 mb-4  text-[24px] font-bold text-primaryDark">
              Soft Skills
            </h3>
            <ul className="px-14 list-disc text-[20px] text-primaryDark leading-6">
              <li>Problem-solving</li>
              <li>Creativity</li>
              <li>Team Collaboration</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* My Toolbox Section (Tablet & Desktop) */}
      <section className="hidden md:block mx-12 mt-16">
        <h3 className="flex">
          <img src={toolIconPrimaryDark} alt="arm icon" className="w-8" />
          <span className="text-primaryDark text-[32px] font-medium ml-1">
            My Toolbox
          </span>
        </h3>
        <p className="text-myBlack text-[20px] mt-2">
          A look at the tools I use in every step of the design process – from
          research to final UI.
        </p>
        <div className="flex flex-col max-w-[1104px] mt-6 mx-auto p-6 bg-primaryLight rounded-2xl">
          <div className="flex gap-6">
            <div className="flex flex-col bg-white flex-1 h-[264px] justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-delay="100"
                src={figmaIcon}
                alt="figma"
              />
              <span className="text-[20px] font-bold text-primaryDark mt-4">
                Figma
              </span>
            </div>
            <div className="flex flex-col bg-white flex-1 h-[264px] justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-delay="700"
                src={illustratorIcon}
                alt="illustrator"
              />
              <span className="text-[20px] font-bold text-primaryDark mt-4">
                Illustrator
              </span>
            </div>
            <div className="flex flex-col bg-white flex-1 h-[264px] justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-delay="400"
                src={photoshopIcon}
                alt="photoshop"
              />
              <span className="text-[20px] font-bold text-primaryDark mt-4">
                Photoshop
              </span>
            </div>
          </div>
          <div className="flex gap-6 mt-6">
            <div className="flex flex-col bg-white flex-1 h-[264px] justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-delay="700"
                src={miroIcon}
                alt="miro"
              />
              <span className="text-[20px] font-bold text-primaryDark mt-4">
                Miro
              </span>
            </div>
            <div className="flex flex-col bg-white flex-1 h-[264px] justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-delay="400"
                src={figjamIcon}
                alt="figjam"
              />
              <span className="text-[20px] font-bold text-primaryDark mt-4">
                Figjam
              </span>
            </div>
            <div className="flex flex-col bg-white flex-1 h-[264px] justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-delay="100"
                src={useberryIcon}
                alt="useberry"
              />
              <span className="text-[20px] font-bold text-primaryDark mt-4">
                Useberry
              </span>
            </div>
            <div className="flex flex-col justify-center items-center flex-1 text-white h-[264px] text-[96px] font-[275]">
              + AI
            </div>
          </div>
        </div>
      </section>
      {/* Why HaPiNest SECTION (DESKTOP) */}
      <section className="hidden md:block mt-16">
        <div className="flex bg-white p-6 gap-6 rounded-2xl border border-grayLighter shadow-myShadow">
          <div className="flex flex-col items-center w-[352px] h-[480px] bg-secondaryPink rounded-2xl">
            <img
              data-aos="zoom-in-down"
              data-aos-duration="2000"
              data-aos-delay="200"
              src={hapinestLogo}
              alt="HaPiNest Logo"
              className="w-1/2 mt-36"
            />
            <span className="text-[20px] px-11.5 mt-20">
              www.hapinestdesign.com
            </span>
          </div>
          <div>
            <h3 className="text-primaryDark text-[32px] font-medium min-[992px]:mt-12">
              Why HaPiNest?
            </h3>
            <p className="text-myBlack mt-8">
              Hapinest Design comes from the first two letters of my first and
              last name (Ha + Pi), but its resemblance to the word Happy was
              what truly inspired the choice. To me, UI/UX design is not just
              about arranging visual elements — it’s about building a safe,
              human-centered, and delightful space. A kind of nest for ideas and
              user experiences. At Hapinest Design, every pixel is placed with
              care and crafted with heart. It’s a small home for designs that
              are functional, beautiful, and deeply human. But this isn’t just a
              personal portfolio. I chose not to name this site after myself
              because I envision something bigger. One day, I hope Hapinest
              Design will evolve into a collaborative studio — a space where a
              team of designers, developers, and thinkers come together to shape
              complete experiences from start to finish. So this is just the
              beginning.
            </p>
            <div className="flex items-center mt-12">
              <span className="text-primaryDark text-[24px] mr-6">
                Welcome to the nest.
              </span>
              <img src={nest} alt="nest" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
