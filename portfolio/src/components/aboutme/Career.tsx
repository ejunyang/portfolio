import { useRef, useState } from "react";
import { career } from "../../lib/data";
import { Project } from "../Project";
import { useDeviceSize } from "../../hooks/useDeviceSize";

export const Career = () => {
  const [activeTab, setActiveTab] = useState("Career");
  const { isMobile } = useDeviceSize();

  const careerRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-normal py-28 px-10 ">
      <div
        className={`max-w-screen-xl mx-auto flex ${
          isMobile ? "flex-col" : "flex-row"
        } gap-11`}
      >
        <div
          className={`flex gap-6 font-bold text-white ${
            isMobile ? "text-4xl flex-row justify-center" : "text-5xl flex-col"
          } text-left sticky top-0`}
        >
          <button
            className={`${
              activeTab === "Career" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleTabClick("Career")}
          >
            Career
          </button>
          <button
            className={`${
              activeTab === "Project" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleTabClick("Project")}
          >
            Project
          </button>
        </div>

        <section
          ref={careerRef}
          className={`${activeTab === "Career" ? "block" : "hidden"} flex-1`}
        >
          <ul className="flex flex-col gap-8">
            {career.map((el, index) => (
              <li
                key={index}
                className="bg-deep rounded-[15px] p-8 text-white w-full"
              >
                <p className="text-label_light text-sm">{el.date}</p>
                <h2
                  className={`${
                    isMobile ? "text-xl" : "text-2xl"
                  } font-bold my-2`}
                >
                  {el.company}
                </h2>
                <p>{el.position}</p>
                <ul className="mt-4">
                  {el.contents.map((content, index) => (
                    <li key={index} className="list-disc ml-4">
                      {content}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <div
          ref={projectRef}
          className={`${activeTab === "Project" ? "block" : "hidden"}`}
        >
          <Project />
        </div>
      </div>
    </div>
  );
};
