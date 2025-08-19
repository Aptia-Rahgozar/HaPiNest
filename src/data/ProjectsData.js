import {
  projectCoverSmallVisitech,
  projectCoverSmall100,
  projectCoverVariousProjects,
  projectCoverSmallHaPiNest,
} from "../assets";

const slides = [
  {
    image: projectCoverSmall100,
    title: "Mobile App",
    subtitle: "100, a finance app",
    url: "/projects/100",
    mobileApp: true,
  },
  {
    image: projectCoverSmallVisitech,
    title: "Mobile App",
    subtitle: "Visitech, a healthcare appointment app",
    url: "/projects/visitech",
    mobileApp: true,
  },
  {
    image: projectCoverSmallHaPiNest,
    title: "Website",
    subtitle: "HaPiNest, a personal portfolio",
    url: "/projects/haPiNest",
    mobileApp: false,
  },
  {
    image: projectCoverVariousProjects,
    title: "Visual Design Showcase",
    subtitle: "Various Projects",
    url: "/projects/variousProjects",
    mobileApp: false,
  },
];

export { slides };
