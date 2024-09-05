import { review } from "../../lib/data";
import { SlClose } from "react-icons/sl";

interface ReviewProps {
  onClose: () => void;
}

export const Review = ({ onClose }: ReviewProps) => {
  return (
    <div className="bg-[rgba(0,0,0,.65)] fixed inset-0 overflow-y-scroll">
      <div className="max-w-screen-xl mx-auto py-32 ">
        <button onClick={onClose} className="w-12 h-12 absolute right-8 top-10">
          <SlClose color="#fff" className="w-full h-full" />
        </button>
        <ul className="grid gap-6 grid-cols-3">
          {review.map((el, index) => (
            <li key={index} className="bg-white rounded-[30px] p-4 flex-1">
              <div className="flex items-center gap-4">
                <img src={el.profile} alt="프로필" className="w-16" />
                <p className="flex flex-col font-semibold">
                  {el.name}{" "}
                  <span className="font-light text-label_light">{el.team}</span>
                </p>
              </div>
              <div className="text-label_normal p-4">{el.content}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
