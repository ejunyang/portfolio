import { useDeviceSize } from "../../hooks/useDeviceSize";
import { Skills } from "./Skills";

export const AboutMe = () => {
  const { isMobile } = useDeviceSize();

  return (
    <section className="bg-normal py-20 px-10 relative">
      <div className="max-w-screen-xl mx-auto">
        <h1
          className={`font-bold text-white ${
            isMobile ? "text-4xl" : "text-5xl"
          }`}
        >
          About me
        </h1>
        <div
          className={`flex ${
            isMobile ? "flex-col gap-5" : "flex-row"
          } justify-center my-12 gap-28`}
        >
          <div className="flex justify-center items-center gap-8">
            <img src="/ejunyang.png" alt="ejunyang" />
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};
