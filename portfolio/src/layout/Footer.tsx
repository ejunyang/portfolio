import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="border border-b-0 border-r-0 border-l-0 p-6">
      <div className="max-w-screen-xl mx-auto text-center text-label_light text-[10px] flex flex-col justify-center items-center">
        <p>ⓒ ejunyang. All rights reserved</p>
        <p>해당 포트폴리오는 React 기반으로 제작되었습니다</p>
        <ul className="flex gap-2 mt-2">
          <li>
            <Link
              to="https://github.com/ejunyang"
              className="transition-all duration-300 ease-in-out hover:text-label_main"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              to="https://ejunyang.tistory.com/"
              className="transition-all duration-300 ease-in-out hover:text-label_main"
            >
              Tstory
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
