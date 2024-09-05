import { interview } from "../lib/data";

export const Interview = () => {
  return (
    <section className="bg-normal pb-20">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-bold text-white text-5xl">Interview</h1>

        <ul className="flex flex-col gap-8 mt-20">
          {interview.map((el, index) => (
            <li
              key={index}
              className="text-white bg-deep rounded-[30px] p-8 w-[55rem] mx-auto"
            >
              <h2 className="font-bold text-2xl mb-3">{el.question}</h2>
              <p>{el.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
