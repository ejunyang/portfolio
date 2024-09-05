import { AboutMe } from "../components/aboutme/AboutMe";
import { Career } from "../components/aboutme/Career";
import { Cover } from "../components/Cover";
import { Interview } from "../components/Interview";

export const Home = () => {
  return (
    <>
      <Cover />
      <AboutMe />
      <Interview />
      <Career />
    </>
  );
};
