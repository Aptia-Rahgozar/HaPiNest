import { Link } from "react-router";

export const ProjectCard = ({ slide, idx }) => {
  return (
    <div className="min-w-full rounded-2xl border border-grayLighter shadow-myShadow">
      <Link to={slide.url}>
        <img
          src={slide.image}
          alt={`slide-${idx}`}
          className="w-full rounded-t-2xl object-cover"
        />
        <div className="p-4 h-[160px] bg-primaryLight rounded-b-2xl text-white">
          <p className="font-about-large leading-6 whitespace-pre-line">
            {slide.title}
          </p>
          <p className="font-drawer-small mt-4">{slide.subtitle}</p>
        </div>
      </Link>
    </div>
  );
};
