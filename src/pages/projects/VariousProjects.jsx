import { Clapperboard, PenTool } from "lucide-react";
import { frame, pamixLogo, pamixPacking, billboard } from "../../assets";

export const VariousProjects = () => {
  return (
    <div>
      <section className="bg-secondaryPink shadow-myShadow rounded-2xl p-4 pt-6 min-[932px]:pt-12 min-[932px]:pb-8 min-[1124px]:pt-16 min-[1124px]:pb-12">
        <div className="flex">
          <h1 className="flex-1 text-primaryDark font-bold text-[22px] mt-4 min-[590px]:text-[32px] min-[590px]:mt-7 min-[932px]:text-[51px] min-[932px]:ml-6 min-[932px]:mt-9 min-[1124px]:text-[64px] min-[1124px]:ml-12 min-[1124px]:mt-12">
            Pieces of My
          </h1>

          <img
            src={frame}
            alt="frame"
            className="flex-1 w-[102.6px] h-[42.9px] min-[590px]:w-[171px] min-[590px]:h-[71.5px] min-[932px]:w-[273.6px] min-[932px]:h-[114.4px] min-[1124px]:w-[342px] min-[1124px]:h-[143px]"
          />
        </div>
        <p className="text-primaryDark font-bold text-[22px] -mt-2 min-[590px]:text-[32px] min-[932px]:text-[51px] min-[590px]:-mt-3 min-[932px]:-mt-5 min-[932px]:ml-6 min-[1124px]:text-[64px] min-[1124px]:ml-12">
          Graphic Design Story
        </p>
        <p className="text-primaryDark font-medium min-[590px]:text-[20px]  min-[932px]:text-[32px] min-[932px]:ml-6 min-[1124px]:text-[40px] min-[1124px]:ml-12 mt-4">
          Older Works – Small Steps in a Bigger Journey
        </p>
      </section>

      <section className="mt-14">
        <h2 className="flex items-center text-primaryDark">
          <Clapperboard className="min-[768px]:w-7 min-[768px]:h-7 min-[992px]:w-[48px] min-[992px]:h-[48px] stroke-1 mr-2" />
          <span className="text-[20px] min-[768px]:text-[26px] min-[992px]:text-[34px] font-medium">
            Story
          </span>
        </h2>
        <p className="min-[768px]:text-[20px] mt-5">
          These are some of the graphic design projects I worked on, mostly
          during and shortly after my university years. While they may not fully
          reflect who I am as a designer today, they offer a glimpse into the
          creative journey that shaped my foundation. Over the years, I’ve
          created hundreds of design pieces. However, when I recently set out to
          gather my work into a collection, I realized that many of those
          earlier projects were no longer accessible.
        </p>
        <p className="min-[768px]:text-[20px] mt-2">
          Today, my focus has shifted more toward UI/UX design — a space where I
          feel most passionate, inspired, and confident in my creative
          direction.
        </p>
      </section>
      <section className="mt-14 text-primaryDark">
        <h2 className="flex items-center ">
          <PenTool className="min-[768px]:w-7 min-[768px]:h-7 min-[992px]:w-[48px] min-[992px]:h-[48px] stroke-1 mr-2" />
          <span className="text-[20px] min-[768px]:text-[26px] min-[992px]:text-[34px] font-medium">
            Branding Design
          </span>
        </h2>
        <p className="text-[20px] min-[768px]:text-[26px] min-[992px]:text-[34px] mt-5">
          For PAMIX, a furniture and accessories manufacturing company
        </p>
        <div className="flex gap-10 mt-6">
          <div className="w-1/2">
            <img
              src={pamixLogo}
              alt="Pamix Logo"
              className="rounded-2xl shadow-myShadow w-full"
            />
          </div>
          <div className="w-1/2">
            <img
              src={pamixPacking}
              alt="Pamix Packing"
              className="rounded-2xl shadow-myShadow w-full"
            />
          </div>
        </div>

        <div className="flex gap-10 mt-6">
          <div className="flex-1 bg-secondaryPink text-primaryLight text-center font-bold text-[18px] min-[768px]:text-[24px] py-2 min-[768px]:py-4 rounded-2xl shadow-myShadow">
            Logo
          </div>
          <div className="flex-1 bg-secondaryPink text-primaryLight text-center font-bold text-[18px] min-[768px]:text-[24px] py-2 min-[768px]:py-4 rounded-2xl shadow-myShadow">
            Packaging
          </div>
        </div>

        <div className="flex justify-center gap-10 mt-6">
          <div></div>
          <div className="flex flex-col w-1/2">
            <img
              src={billboard}
              alt="Pamix billboard"
              className="rounded-2xl shadow-myShadow "
            />
            <div className="flex-1 bg-secondaryPink text-primaryLight text-center font-bold text-[18px] min-[768px]:text-[24px] py-2 min-[768px]:py-4 rounded-2xl shadow-myShadow mt-6">
              Packaging
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};
