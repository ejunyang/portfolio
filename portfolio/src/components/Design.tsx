import { useState } from "react";
import { useDeviceSize } from "../hooks/useDeviceSize";
import { Designlib } from "../lib/data";
import { DesignModal } from "./DesignModal";

export const Design = () => {
  const { isMobile } = useDeviceSize();
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <>
      <section>
        <ul
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-8`}
        >
          {Designlib.map((el, idx) => (
            <li
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setOpen(true);
              }}
              className="bg-deep rounded-[15px] text-white w-full h-[20rem] overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={el.image}
                alt={el.image}
                className="rounded-tl-[15px] rounded-tr-[15px]"
              />
            </li>
          ))}
        </ul>
      </section>
      {open && (
        <DesignModal
          onClose={() => {
            setOpen(false);
            setCurrentIndex(null);
          }}
          currentIndex={currentIndex}
          images={Designlib}
        />
      )}
    </>
  );
};
