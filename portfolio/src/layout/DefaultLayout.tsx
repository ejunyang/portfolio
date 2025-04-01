import { Outlet } from "react-router-dom";
import { FloatingActionButton } from "./FloatingActionButton";
import { Footer } from "./Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export const DefaultLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <FloatingActionButton />
      <Outlet />
      <Footer />
    </div>
  );
};
