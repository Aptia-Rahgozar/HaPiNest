import { Link, useLocation, useNavigate } from "react-router";
import {
  hapinestLogoDarkBackground,
  dribbbleLogoWhite,
  behanceLogoWhite,
  linkedinLogoWhite,
  instagramLogoWhite,
} from "../../assets";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // Already on homepage, just scroll
      const section = document.getElementById("contact");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage first, then scroll
      navigate("/", { state: { scrollToContact: true } });
    }
  };

  return (
    <div className="bg-primaryLight pt-10 md:pt-16 pb-10 md:pb-16 mt-8">
      <div className="flex justify-center font-footer text-white">
        <Link to="/projects">Projects</Link>
        <a
          href="#contact"
          onClick={handleContactClick}
          className="mx-8 md:mx-12"
        >
          Contact Me
        </a>
        {/* On Tablet and Desktop */}
        <a
          className="hidden md:block"
          href="#contact"
          onClick={handleContactClick}
        >
          About Me
        </a>
        {/* On Mobile */}
        <Link className="md:hidden" to="/aboutMe">
          About Me
        </Link>
      </div>
      <div className="mt-14 md:mt-20 mb-4 md:mb-6">
        <Link to="/">
          <img
            src={hapinestLogoDarkBackground}
            alt="HaPiNest logo"
            className="mx-auto"
          />
        </Link>
      </div>
      <div className="text-white font-medium text-3xl md:text-4xl text-center">
        Stay in touch
      </div>
      <div className="flex justify-center gap-8 md:gap-12 items-center mt-16">
        <a
          href="https://www.dribbble.com/HabibehPirali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={dribbbleLogoWhite}
            alt="Dribbble logo"
            className="w-9 md:w-12"
          />
        </a>
        <a
          href="https://www.behance.net/habibehpirali1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={behanceLogoWhite}
            alt="Behance logo"
            className="w-10 md:w-12"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/habibeh-pirali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinLogoWhite}
            alt="Behance logo"
            className="w-9 md:w-12 pb-1"
          />
        </a>
        <a
          href="https://www.instagram.com/hapinestdesign?igsh=MTQxOGNyNWRqbTByOA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagramLogoWhite}
            alt="Behance logo"
            className="w-9 pt-1 md:w-12"
          />
        </a>
      </div>
      <p className="text-white text-center mt-18">
        © 2025 Hapinest Design. All rights reserved.
      </p>
    </div>
  );
};
