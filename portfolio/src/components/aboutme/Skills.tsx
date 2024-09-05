import { useDeviceSize } from "../../hooks/useDeviceSize";
import { designSkill, frontSkill, otherSkill } from "../../lib/image";
import { ReviewButton } from "./ReviewButton";

export const Skills = () => {
  const { isMobile } = useDeviceSize();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-white opacity-30 text-2xl mb-2">FrontEnd</p>
        <ul className="grid grid-cols-4 gap-3">
          {frontSkill.map((el, index) => (
            <li
              key={index}
              className={`bg-deep rounded-[15px] ${
                isMobile ? "w-16" : "w-24 "
              } h-16 flex justify-center`}
            >
              <img src={el} alt={el} className="w-6 object-contain" />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-white opacity-30 text-2xl mb-2">Design</p>
        <ul className="grid grid-cols-4 gap-3">
          {designSkill.map((el, index) => (
            <li
              key={index}
              className={`bg-deep rounded-[15px] ${
                isMobile ? "w-16" : "w-24 "
              } h-16 flex justify-center`}
            >
              <img src={el} alt={el} className="w-6 object-contain" />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-white opacity-30 text-2xl mb-2">Other</p>
        <ul className="grid grid-cols-4 gap-3">
          {otherSkill.map((el, index) => (
            <li
              key={index}
              className={`bg-deep rounded-[15px] ${
                isMobile ? "w-16" : "w-24 "
              } h-16 flex justify-center`}
            >
              <img src={el} alt={el} className="w-10 object-contain" />
            </li>
          ))}
        </ul>
      </div>
      <ReviewButton />
    </div>
  );
};
