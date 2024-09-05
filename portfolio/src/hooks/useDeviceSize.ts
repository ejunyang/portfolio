import { useMediaQuery } from "react-responsive";

export const useDeviceSize = () => {
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });
  return { isMobile };
};
