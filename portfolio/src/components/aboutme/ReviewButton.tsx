import { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { Review } from "./Review";
import { useDeviceSize } from "../../hooks/useDeviceSize";

export const ReviewButton = () => {
  const [open, setOpen] = useState(false);
  const { isMobile } = useDeviceSize();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`bg-white rounded-[15px] flex justify-between items-center p-4 px-6 transition-all duration-300 ease-in-out hover:bg-deep hover:text-white ${
          isMobile ? "text-sm" : "text-lg"
        }`}
      >
        함께 일한 동료들은 절 이렇게 생각해요 💭
        <SlArrowRight />
      </button>

      {open && <Review onClose={() => setOpen(false)} />}
    </>
  );
};
