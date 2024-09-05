import { Skills } from "./Skills";

export const AboutMe = () => {
  return (
    <section className="bg-normal py-20 relative">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-bold text-white text-7xl">About me</h1>
        <div className="flex justify-center my-12 gap-24">
          <div className="flex justify-center items-center gap-8">
            <img src="/ejun.PNG" alt="ejunyang" />
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};
