import { SlArrowUp } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

export const FloatingActionButton = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed z-10 bottom-8 right-10">
      <div className="flex flex-col gap-4">
        <button className="shadow-lg rounded-full bg-white p-4 cursor-pointer">
          <Link to="mailto:wnswns722@gamil.com">
            <CiMail color="#3E3E3E" />
          </Link>
        </button>
        <button
          onClick={scrollTop}
          className="shadow-lg rounded-full bg-white p-4 cursor-pointer"
        >
          <SlArrowUp color="#3E3E3E" />
        </button>
      </div>
    </div>
  );
};
