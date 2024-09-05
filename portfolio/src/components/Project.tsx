import { useNavigate } from "react-router-dom";
import { project } from "../lib/data";
import { useDeviceSize } from "../hooks/useDeviceSize";

export const Project = () => {
  const navigate = useNavigate();
  const { isMobile } = useDeviceSize();

  return (
    <section className="flex-1">
      <ul className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-8`}>
        {project.map((el) => (
          <li
            key={el.id}
            onClick={() => navigate(`/detail/${el.id}`)}
            className="bg-deep rounded-[15px] text-white w-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={el.image}
              alt={el.image}
              className="rounded-tl-[15px] rounded-tr-[15px]"
            />
            <div className={`${isMobile ? "p-5" : "p-8"}`}>
              <h3 className="font-bold text-xl mb-2">{el.projectName}</h3>
              <p className="">{el.projectContent}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
