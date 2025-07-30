import { NavLink, Link, useLocation, useNavigate } from "react-router";
import { hapinestLogo, menuIcon, menuIconPrimaryDark } from "../../assets";

export const Header = ({ setIsDrawerOpen }) => {
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
    <header className="bg-transparent">
      <nav className="my-auto">
        <div className="flex max-w-[1248px] px-6 mx-auto justify-between">
          <Link to="/">
            <img className="py-9" src={hapinestLogo} alt="Hapinest logo" />
          </Link>
          <div className="my-auto hidden md:block">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-myBlack text-[20px] ml-20 hover:font-bold inline-block text-center w-[90px] ${
                  isActive
                    ? "font-bold"
                    : "font-light hover:font-normal"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-myBlack text-[20px] ml-20 inline-block text-center w-[90px] ${
                  isActive
                    ? "font-bold"
                    : "font-light hover:font-normal"
                }`
              }
            >
              Projects
            </NavLink>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="text-[20px] text-myBlack ml-20 hover:font-normal inline-block text-center w-[90px] cursor-pointer font-light"
            >
              Contact
            </a>
          </div>
          <div
            onClick={() => setIsDrawerOpen(true)}
            className="my-auto md:hidden cursor-pointer"
          >
            <img
              src={location.pathname === "/" ? menuIcon : menuIconPrimaryDark}
              alt="menu icon"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
