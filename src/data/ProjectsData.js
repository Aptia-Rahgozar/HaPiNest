import {
  projectCoverSmallVisitech,
  projectCoverSmall100,
  projectCoverSmallPersica,
  projectCoverSmallHaPiNest,
} from "../assets";

const slides = [
  {
    image: projectCoverSmall100,
    title: "Mobile Finance App",
    subtitle: "A Course Project",
    url: "/projects/100",
    mobileApp: true,
  },
  {
    image: projectCoverSmallVisitech,
    title: "Healthcare\nAppointment App",
    subtitle: "A Course Project",
    url: "/projects/visitech",
    mobileApp: true,
  },
  {
    image: projectCoverSmallHaPiNest,
    title: "Personal Portfolio\nWebsite",
    subtitle: "A Real Personal Project",
    url: "/underConstruction",
    mobileApp: false,
  },
  {
    image: projectCoverSmallPersica,
    title: "Visual Design\nShowcase",
    subtitle: "Various Projects",
    url: "/underConstruction",
    mobileApp: false,
  },
];

export { slides };
