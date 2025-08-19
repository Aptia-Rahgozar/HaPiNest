import { Clapperboard, PenTool } from "lucide-react";
import {
  frame,
  pamixLogoDesktop,
  pamixPackDesktop,
  pamixBillboard,
  pamixBusinessCard,
  pamixLabel,
  persicaDesktop,
  periscaMobile,
  businessCardsMobile,
  businessCardsDesktop,
  behandishanDesktop,
  behandishanMobile,
  chamaanDesktop,
  chamaanMobile,
  magazineDesktop,
  magazineMobile,
} from "../../assets";

export const VariousProjects = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondaryPink shadow-myShadow rounded-2xl p-5 min-[768px]:pt-16 min-[978px]:pt-24 min-[1188px]:pt-32 min-[768px]:pb-6 min-[978px]:pb-9 min-[1188px]:pb-12 min-[768px]:pl-14 min-[768px]:pr-14 min-[978px]:pr-24 min-[1188px]:pr-32">
        <div className="min-[768px]:flex flex-row-reverse min-[768px]:items-start">
          <img
            src={frame}
            alt="glasses"
            className="w-[146px] min-[768px]:w-[200px] min-[978px]:w-[271px] min-[1188px]:w-[342px] min-[768px]:-mt-7 min-[978px]:-mt-10 min-[1188px]:-mt-14"
          />

          <h1 className="flex-2 text-[28px] min-[768px]:text-[42px] min-[978px]:text-[53px] min-[1188px]:text-[64px] font-bold text-primaryDark mt-3 leading-tight mb-2.5 min-[768px]:mb-6">
            Pieces of My
            <br />
            Graphic Design Story
          </h1>
        </div>
        <p className="font-medium text-[20px] min-[768px]:text-[24px] min-[978px]:text-[32px] min-[1188px]:text-[40px] text-primaryDark leading-tight">
          Older Works – Small Steps in a Bigger Journey
        </p>
      </section>

      <section>
        <h2 className="flex items-center text-primaryDark mb-2 min-[768px]:mb-6 mt-6 min-[768px]:mt-14">
          <Clapperboard className="stroke-1 min-[768px]:w-[48px] min-[768px]:h-[48px]" />
          <span className="ml-2 font-bold min-[768px]:font-medium text-[20px] min-[768px]:text-[32px]">
            Story
          </span>
        </h2>
        <p className="text-myBlack min-[768px]:text-[20px] ">
          These are some of the graphic design projects I worked on, mostly
          during and shortly after my university years. While they may not fully
          reflect who I am as a designer today, they offer a glimpse into the
          creative journey that shaped my foundation. Over the years, I’ve
          created hundreds of design pieces. However, when I recently set out to
          gather my work into a collection, I realized that many of those
          earlier projects were no longer accessible. Today, my focus has
          shifted more toward UI/UX design — a space where I feel most
          passionate, inspired, and confident in my creative direction.
        </p>
      </section>

      <section>
        <h2 className="flex items-center text-primaryDark mb-2 min-[768px]:mb-6 mt-6 min-[768px]:mt-14">
          <PenTool className="stroke-1 min-[768px]:w-[32px] min-[768px]:h-[32px]" />
          <span className="ml-2 font-bold min-[768px]:font-medium text-[20px] min-[768px]:text-[32px]">
            Brand Design
          </span>
        </h2>
        <p className="text-myBlack font-semibold min-[768px]:font-normal min-[768px]:text-[32px] mb-4 min-[768px]:mb-6">
          For PAMIX, a furniture and accessories manufacturing company
        </p>

        <div className="flex flex-col min-[768px]:flex-row min-[768px]:gap-10 justify-center items-center">
          <div className="max-w-[596px] ">
            <img
              src={pamixLogoDesktop}
              alt="Pamix logo"
              className="rounded-2xl shadow-myShadow"
            />
            <div className="flex bg-secondaryPink mt-4 min-[768px]:mt-6 justify-center items-center h-[48px] min-[768px]:h-[64px] font-medium min-[768px]:font-bold min-[768px]:text-[24px] text-primaryLight rounded-2xl">
              Logo
            </div>
          </div>
          <div className="max-w-[596px] mt-6 min-[768px]:mt-0">
            <img
              src={pamixPackDesktop}
              alt="Pamix pack"
              className="rounded-2xl shadow-myShadow"
            />
            <div className="flex bg-secondaryPink mt-4 min-[768px]:mt-6 justify-center items-center h-[48px] min-[768px]:h-[64px] font-medium min-[768px]:font-bold min-[768px]:text-[24px] text-primaryLight rounded-2xl">
              Packaging Design
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-10 mt-6">
          <div className="max-w-[580px] ">
            <img
              src={pamixBillboard}
              alt="Pamix Billboard"
              className="rounded-2xl shadow-myShadow"
            />
            <div className="flex bg-secondaryPink mt-4 min-[768px]:mt-6 justify-center items-center h-[48px] min-[768px]:h-[64px] font-medium min-[768px]:font-bold min-[768px]:text-[24px] text-primaryLight rounded-2xl">
              Urban Advertising
            </div>
          </div>
        </div>

        <div className="flex flex-col min-[768px]:flex-row min-[768px]:gap-10 justify-center items-center mt-6">
          <div className="max-w-[596px] ">
            <img
              src={pamixBusinessCard}
              alt="Pamix business card"
              className="rounded-2xl shadow-myShadow"
            />
            <div className="flex bg-secondaryPink mt-4 min-[768px]:mt-6 justify-center items-center h-[48px] min-[768px]:h-[64px] font-medium min-[768px]:font-bold min-[768px]:text-[24px] text-primaryLight rounded-2xl">
              Business Card
            </div>
          </div>
          <div className="max-w-[596px] mt-6 min-[768px]:mt-0">
            <img
              src={pamixLabel}
              alt="Pamix label"
              className="rounded-2xl shadow-myShadow"
            />
            <div className="flex bg-secondaryPink mt-4 min-[768px]:mt-6 justify-center items-center h-[48px] min-[768px]:h-[64px] font-medium min-[768px]:font-bold min-[768px]:text-[24px] text-primaryLight rounded-2xl">
              Product Label
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="flex items-center text-primaryDark mb-2 min-[768px]:mb-6 mt-6 min-[768px]:mt-14">
          <PenTool className="stroke-1 min-[768px]:w-[32px] min-[768px]:h-[32px]" />
          <span className="ml-2 font-bold min-[768px]:font-medium text-[20px] min-[768px]:text-[32px]">
            Brand Design
          </span>
        </h2>
        <p className="text-myBlack font-semibold min-[768px]:font-normal min-[768px]:text-[32px] mb-4 min-[768px]:mb-6">
          For PERSICA, a Sydney-based Organic Shop
        </p>
        <div className="flex justify-center">
          <div>
            <picture>
              <source media="(min-width: 768px)" srcSet={persicaDesktop} />
              <img
                src={periscaMobile}
                alt="Persica"
                className="shadow-myShadow rounded-2xl"
              />
            </picture>
            <div className="flex bg-secondaryPink mt-4 min-[768px]:mt-6 justify-center items-center h-[48px] min-[768px]:h-[64px] font-medium min-[768px]:font-bold min-[768px]:text-[24px] text-primaryLight rounded-2xl">
              Logo & Business Card
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="flex items-center text-primaryDark mb-4 min-[768px]:mb-6 mt-6 min-[768px]:mt-14">
          <PenTool className="stroke-1 min-[768px]:w-[32px] min-[768px]:h-[32px]" />
          <span className="ml-2 font-bold min-[768px]:font-medium text-[20px] min-[768px]:text-[32px]">
            Business Card Design
          </span>
        </h2>
        <div className="flex justify-center">
          <div>
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={businessCardsDesktop}
              />
              <img
                src={businessCardsMobile}
                alt="Persica"
                className="shadow-myShadow rounded-2xl"
              />
            </picture>
            <div className="flex bg-secondaryPink mt-4 min-[768px]:mt-6 justify-center items-center h-[48px] min-[768px]:h-[64px] font-medium min-[768px]:font-bold min-[768px]:text-[24px] text-primaryLight rounded-2xl">
              Business Card
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="flex items-center text-primaryDark mb-2 min-[768px]:mb-6 mt-6 min-[768px]:mt-14">
          <PenTool className="stroke-1 min-[768px]:w-[32px] min-[768px]:h-[32px]" />
          <span className="ml-2 font-bold min-[768px]:font-medium text-[20px] min-[768px]:text-[32px]">
            Exhibition Collateral
          </span>
        </h2>
        <p className="text-myBlack font-semibold min-[768px]:font-normal min-[768px]:text-[32px] mb-4 min-[768px]:mb-6">
          For BEHANDISHAN BAHREVAR SANJESH, a designer & manufacturer of oil and
          gas equipment
        </p>
        <div className="flex justify-center">
          <div>
            <picture>
              <source media="(min-width: 768px)" srcSet={behandishanDesktop} />
              <img
                src={behandishanMobile}
                alt="Behandishan Bahrevar Sanjesh"
                className="shadow-myShadow rounded-2xl"
              />
            </picture>
            <div className="flex bg-secondaryPink mt-4 min-[768px]:mt-6 justify-center items-center h-[48px] min-[768px]:h-[64px] font-medium min-[768px]:font-bold min-[768px]:text-[24px] text-primaryLight rounded-2xl">
              Business Card, Catelog & Brochure
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="flex items-center text-primaryDark mb-2 min-[768px]:mb-6 mt-6 min-[768px]:mt-14">
          <PenTool className="stroke-1 min-[768px]:w-[32px] min-[768px]:h-[32px]" />
          <span className="ml-2 font-bold min-[768px]:font-medium text-[20px] min-[768px]:text-[32px]">
            Workshop Posters
          </span>
        </h2>
        <p className="text-myBlack font-semibold min-[768px]:font-normal min-[768px]:text-[32px] mb-4 min-[768px]:mb-6">
          For CHAMAAN, a psychology clinic
        </p>
        <div className="flex justify-center">
          <div>
            <picture>
              <source media="(min-width: 768px)" srcSet={chamaanDesktop} />
              <img
                src={chamaanMobile}
                alt="Chamaan"
                className="shadow-myShadow rounded-2xl"
              />
            </picture>
            <div className="flex bg-secondaryPink mt-4 min-[768px]:mt-6 justify-center items-center h-[48px] min-[768px]:h-[64px] font-medium min-[768px]:font-bold min-[768px]:text-[24px] text-primaryLight rounded-2xl">
              Informational Posters
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="flex items-center text-primaryDark mb-2 min-[768px]:mb-6 mt-6 min-[768px]:mt-14">
          <PenTool className="stroke-1 min-[768px]:w-[32px] min-[768px]:h-[32px]" />
          <span className="ml-2 font-bold min-[768px]:font-medium text-[20px] min-[768px]:text-[32px]">
            Page Layout
          </span>
        </h2>
        <p className="text-myBlack font-semibold min-[768px]:font-normal min-[768px]:text-[32px] mb-4 min-[768px]:mb-6">
          For a special edition of a magazine
        </p>
        <div className="flex justify-center">
          <div>
            <picture>
              <source media="(min-width: 768px)" srcSet={magazineDesktop} />
              <img
                src={magazineMobile}
                alt="Magazine"
                className="shadow-myShadow rounded-2xl"
              />
            </picture>
            <div className="flex bg-secondaryPink mt-4 min-[768px]:mt-6 justify-center items-center h-[48px] min-[768px]:h-[64px] font-medium min-[768px]:font-bold min-[768px]:text-[24px] text-primaryLight rounded-2xl">
              Page Layout
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
