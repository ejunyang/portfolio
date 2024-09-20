import { SlClose } from "react-icons/sl";
import { useDeviceSize } from "../hooks/useDeviceSize";

interface ModalProps {
  currentIndex: number | null;
  images: { title: string; image: string; tools: string[]; desc: string }[];
  onClose: () => void;
}

export const DesignModal = ({ onClose, currentIndex, images }: ModalProps) => {
  const { isMobile } = useDeviceSize();
  return (
    <div
      className={`bg-[rgba(0,0,0,.65)] fixed inset-0 overflow-y-scroll`}
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg max-w-screen-xl mx-auto my-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className={`fixed ${
              isMobile ? "w-8 h-8 right-5 top-1" : "w-12 h-12 right-6 top-5"
            }`}
          >
            <SlClose color="#fff" className="w-full h-full" />
          </button>
          {currentIndex !== null && (
            <div
              className={`overflow-scroll ${
                isMobile ? "h-[20rem]" : "h-[30rem]"
              }`}
            >
              <img
                key={currentIndex}
                src={images[currentIndex].image}
                alt={images[currentIndex].title}
                className="mx-auto"
              />
            </div>
          )}
          <div>
            {currentIndex !== null && (
              <div
                className={`${
                  isMobile ? "flex-col" : "flex items-center gap-8"
                }`}
              >
                <div>
                  <h2 className="text-xl font-semibold text-black mt-4 mb-2">
                    {images[currentIndex].title}
                  </h2>
                  <ul className="flex gap-2">
                    {images[currentIndex].tools.map((tool, idx) => (
                      <li
                        key={idx}
                        className="bg-gray-100 rounded-[10px] p-2 text-sm"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className={`${isMobile && "mt-4"}`}>
                  {images[currentIndex].desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
