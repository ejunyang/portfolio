import { Outlet } from "react-router-dom";
import { FloatingActionButton } from "./FloatingActionButton";
import { Footer } from "./Footer";

export const DefaultLayout = () => {
  return (
    <div className="">
      <FloatingActionButton />
      <Outlet />
      <Footer />
    </div>
  );
};
