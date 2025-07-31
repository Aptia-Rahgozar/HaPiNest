import { useNavigate } from "react-router";
import { useTitle } from "../hooks/useTitle";
import { cone } from "../assets";

export const UnderConstruction = ({ title }) => {
  useTitle(title);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <img src={cone} alt="traffic cone" />
      <p className="text-primaryDark font-medium text-[20px] min-[768px]:text-[36px] mt-6 text-center">
        PAGE IS UNDER CONSTRUCTION
      </p>
      <p className="text-grayDark font-medium min-[768px]:text-[24px] mt-3">
        Something awesome is in the works.
      </p>
      <p className="text-primaryDark font-bold text-[38px] min-[768px]:text-[64px] ">
        Check back soon!
      </p>
      <button
        onClick={() => navigate(-1)}
        className="flex justify-center items-center button-primary-big mx-auto mt-8 mb-14"
      >
        Back
      </button>
    </div>
  );
};
