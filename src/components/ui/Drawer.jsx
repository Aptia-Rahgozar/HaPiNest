import { useLocation, useNavigate } from "react-router";
import {
  hapinestLogo,
  contactIcon,
  galleryIcon,
  profileIcon,
} from "../../assets";

export const Drawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // Already on homepage, just scroll
      const section = document.getElementById("contact");
      if (section) section.scrollIntoView({ behavior: "smooth" });
      setIsDrawerOpen(false);
    } else {
      // Navigate to homepage first, then scroll
      navigate("/", { state: { scrollToContact: true } });
      setIsDrawerOpen(false);
    }
  };

  const handleMyWorkClick = () => {
    navigate("/projects");
    setIsDrawerOpen(false);
  };

  const handleAboutMeClick = () => {
    navigate("/aboutMe");
    setIsDrawerOpen(false);
  };

  const handleHomeClick = () => {
    navigate("/");
    setIsDrawerOpen(false);
  };

  const handleAboutHaPiNestClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // Already on homepage, just scroll
      const section = document.getElementById("whyHaPiNest");
      if (section) section.scrollIntoView({ behavior: "smooth" });
      setIsDrawerOpen(false);
    } else {
      // Navigate to homepage first, then scroll
      navigate("/", { state: { scrollToWhyHaPiNest: true } });
      setIsDrawerOpen(false);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-1/2 z-50 md:hidden
                 transform transition-transform duration-500 ease-in-out
                 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="bg-primaryLighter h-40 text-center">
        <a onClick={handleHomeClick} className="inline-block cursor-pointer">
          <img
            className="mx-auto pt-9"
            src={hapinestLogo}
            alt="HaPiNest logo"
          />
        </a>
        <div className="mt-7 ">
          <a
            onClick={handleAboutHaPiNestClick}
            className="font-drawer-big text-myBlack cursor-pointer"
          >
            About HaPiNest
          </a>
        </div>
      </div>
      <div className="flex flex-col bg-white opacity-80 h-full font-drawer-small text-myBlack pt-12 pl-6.5">
        <a onClick={handleMyWorkClick} className="w-fit mb-10 cursor-pointer">
          <div className="flex items-center">
            <img src={galleryIcon} alt="gallery icon" />
            <span className="ml-2">Projects</span>
          </div>
        </a>

        <a onClick={handleAboutMeClick} className="w-fit mb-10 cursor-pointer">
          <div className="flex items-center">
            <img src={profileIcon} alt="profile icon" />
            <span className="ml-2">About Me</span>
          </div>
        </a>

        <a
          href="#contact"
          onClick={handleContactClick}
          className="w-fit mb-10 cursor-pointer"
        >
          <div className="flex items-center">
            <img src={contactIcon} alt="contact icon" />
            <span className="ml-2">Contact Me</span>
          </div>
        </a>
      </div>
    </div>
  );
};
