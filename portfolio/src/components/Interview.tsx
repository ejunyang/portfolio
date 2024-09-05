import { useDeviceSize } from "../hooks/useDeviceSize";
import { interview } from "../lib/data";

export const Interview = () => {
  const { isMobile } = useDeviceSize();

  return (
    <section className="bg-normal pb-20 px-10">
      <div className="max-w-screen-xl mx-auto">
        <h1
          className={`font-bold text-white ${
            isMobile ? "text-4xl" : "text-5xl"
          }`}
        >
          Interview
        </h1>

        <ul className={`flex flex-col gap-8 ${isMobile ? "mt-10" : "mt-20"}`}>
          {interview.map((el, index) => (
            <li
              key={index}
              className="text-white bg-deep rounded-[30px] p-8 max-w-screen-lg mx-auto"
            >
              <h2
                className={`font-bold ${
                  isMobile ? "text-xl" : "text-2xl"
                } mb-3`}
              >
                {el.question}
              </h2>
              <p>{el.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
