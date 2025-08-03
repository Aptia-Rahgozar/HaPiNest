import { Routes, Route } from "react-router";

import {
  Home,
  Projects,
  AboutMe,
  ProjectVisitech,
  Project100,
  PageNotFound,
  UnderConstruction,
} from "../pages";

import { slides } from "../data/ProjectsData";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home slides={slides} title="Home" />} />
        <Route
          path="projects"
          element={<Projects slides={slides} title="Projects" />}
        />
        <Route
          path="projects/visitech"
          element={<ProjectVisitech title="Visitech" />}
        />
        <Route path="projects/100" element={<Project100 title="100" />} />
        <Route path="aboutMe" element={<AboutMe title="About Me" />} />
        <Route
          path="underConstruction"
          element={<UnderConstruction title="Page Under Construction" />}
        />
        <Route path="*" element={<PageNotFound title="Page Not Found" />} />
      </Routes>
    </>
  );
};
