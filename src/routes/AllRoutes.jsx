import { Routes, Route } from "react-router";

import {
  Home,
  Projects,
  AboutMe,
  Project01,
  Project02,
  PageNotFound,
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
        <Route path="projects/01" element={<Project01 title="Project 01" />} />
        <Route path="projects/02" element={<Project02 title="Project02" />} />
        <Route path="aboutMe" element={<AboutMe title="About Me" />} />
        <Route path="*" element={<PageNotFound title="Page Not Found" />} />
      </Routes>
    </>
  );
};
