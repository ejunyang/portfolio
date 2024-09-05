import { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { Review } from "./Review";

export const ReviewButton = () => {
  const [open, setOpen] = useState(false);

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
        className="bg-white rounded-[15px] flex justify-between items-center p-4 px-6 text-lg transition-all duration-300 ease-in-out hover:bg-deep hover:text-white"
      >
        함께 일한 동료들은 절 이렇게 생각해요 💭
        <SlArrowRight />
      </button>

      {open && <Review onClose={() => setOpen(false)} />}
    </>
  );
};
