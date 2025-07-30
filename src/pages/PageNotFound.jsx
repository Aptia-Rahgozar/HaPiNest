import { useTitle } from "../hooks/useTitle";

import { unhappySmiley } from "../assets";

export const PageNotFound = ({ title }) => {
  useTitle(title);

  return (
    <div className="flex flex-col items-center mt-12 mb-16" data-aos="zoom-in-up">
      <div className="flex justify-center items-center w-[120px] h-[48px] bg-primaryLighter rounded-2xl mb-10">
        <span className="font-bold text-[40px] text-white">404</span>
      </div>
      <img
        src={unhappySmiley}
        alt="unhappy smiley"
        className="mb-4"
      />
      <p className="font-medium text-[48px] text-primaryDark">Oops!</p>
      <p className="font-medium text-[28px] text-grayLight mt-6">
        Page Not Found
      </p>
    </div>
  );
};
