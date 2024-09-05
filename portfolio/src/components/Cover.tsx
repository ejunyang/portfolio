import { Link } from "react-router-dom";

export const Cover = () => {
  return (
    <section className="h-screen py-10">
      <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-between">
        <ul className="flex text-label_light gap-4">
          <li className="transition-all duration-300 ease-in-out hover:text-label_normal">
            <Link to={"https://github.com/ejunyang"} target="_blank">
              GitHub
            </Link>
          </li>
          <li className="transition-all duration-300 ease-in-out hover:text-label_normal">
            <Link to={"https://ejunyang.tistory.com/"} target="_blank">
              Tstory
            </Link>
          </li>
        </ul>

        <div className="w-96 mx-auto my-10">
          <img
            src="/main.png"
            alt="어쩌면 종착지는 개발자"
            className="w-full"
          />
        </div>

        <div>
          <strong className="text-label_main">
            프론트엔드 개발자 양이준입니다.
          </strong>
          <p className="text-label_light">
            사용자의 니즈를 항상 염두에 두고, 문제 해결에 집중하며 책임감 있게
            <br />
            일하는 프론트엔드 개발자가 되고 싶습니다
          </p>
        </div>
      </div>
    </section>
  );
};
