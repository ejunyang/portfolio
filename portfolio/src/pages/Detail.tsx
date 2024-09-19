import { useNavigate, useParams } from "react-router-dom";
import { project } from "../lib/data";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useDeviceSize } from "../hooks/useDeviceSize";

export const Detail = () => {
  const { id } = useParams();
  const { isMobile } = useDeviceSize();
  const navigate = useNavigate();
  const current = project.find((el) => el.id === id);
  const isLastPage = current && current.id === "7";

  return (
    <section className="mb-14">
      {/* 프로젝트별 배경 색상 */}
      <div
        className={`h-[30rem]  ${isMobile ? "mb-36" : "mb-60 "}
        ${id === "1" ? "bg-[#F5E5CE]" : ""} 
        ${id === "2" ? "bg-[#ABF6E1]" : ""}
        ${id === "3" ? "bg-[#C6E4FF]" : ""}
        ${id === "4" ? "bg-[#D5E0FC]" : ""}
        ${id === "5" ? "bg-[#F7CBC4]" : ""}
        ${id === "6" ? "bg-[#7CDCE6]" : ""}
        ${id === "7" ? "bg-[#FFEEBD]" : ""}`}
      >
        {/* Prev, Next */}
        <div className="max-w-screen-xl mx-auto translate-y-10 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 "
          >
            <SlArrowLeft />
            <span className="text-xs">뒤로</span>
          </button>
          {current && (
            <button
              onClick={() => {
                if (!isLastPage) {
                  const nextId = Number(current.id);
                  navigate(`/detail/${nextId + 1}`);
                }
              }}
              className={`flex items-center gap-2 ${
                isLastPage
                  ? "text-label_light cursor-default"
                  : "text-label_normal"
              }`}
            >
              <span className={`text-xs`}>다음</span>
              <SlArrowRight />
            </button>
          )}
        </div>

        {current && (
          <div className="max-w-screen-md mx-auto text-center pt-14 px-10">
            <p className="text-[#373737] text-sm mb-4">{current.date}</p>
            <h2 className="text-3xl font-bold text-label_normal">
              {current.projectName}
            </h2>

            <p className="flex-1 my-8">{current.description}</p>

            <ul className="flex gap-4 justify-center items-center mb-8">
              {current.url.map((el, index) => (
                <li key={index}>
                  <Link
                    to={el}
                    target="_blank"
                    className="text-xs px-6 py-3 rounded-[10px] bg-[rgba(0,0,0,.1)] transition-all duration-300 ease-in-out hover:bg-gray-50"
                  >{`${index === 0 ? "서비스 바로가기" : "GitHub"}`}</Link>
                </li>
              ))}
            </ul>
            <img
              src={`${current.image}`}
              alt={`${current.projectName}`}
              className="border border-[#D0D0D0] rounded-[30px] mx-auto"
            />
          </div>
        )}
      </div>
      <div className="max-w-screen-md mx-auto relative px-10">
        <div>
          {/* 사용기술 */}
          <h2 className="text-xl font-semibold mt-8">🕹️ 사용기술</h2>

          <ul className="flex flex-wrap gap-2 my-4">
            {current?.skill?.map((el) => (
              <li className="py-2 px-4 rounded-[10px] bg-gray-50">{el}</li>
            ))}
          </ul>
          {/* 주요기능 */}
          <h2 className="text-xl font-semibold mt-16 mb-4">📌 주요기능</h2>
          <p>{current?.function}</p>
          {/* 작업기여도 */}
          <h2 className="text-xl font-semibold mt-16 mb-4">💭 작업 기여도</h2>
          <ul>
            {current?.contribution?.map((el) => (
              <li className="my-4">
                <strong>{el.title}</strong>
                <ul className="pl-4 mt-2">
                  {el.contents.map((item) => (
                    <li className="list-disc">{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          {/* 트러블슈팅 */}
          <h2
            className={`text-xl font-semibold mt-16 mb-4 ${
              current?.trouble.length === 0 ? "hidden" : "block"
            }`}
          >
            ☄️ 트러블 슈팅
          </h2>

          <ul
            className={`${current?.trouble.length === 0 ? "hidden" : "block"}`}
          >
            {current?.trouble?.map((el) => (
              <li key={el.title} className="mb-8">
                <h3 className="bg-gray-50 px-8 py-4 rounded-[15px] text-center mb-4">
                  {el.title}
                </h3>
                <div className="flex items-center gap-8">
                  <p className="font-semibold text-sm">문제</p>
                  <p className="flex-1">{el.problem}</p>
                </div>

                <div className="flex items-center gap-8 my-4 border border-l-0 border-r-0 py-4">
                  <p className="font-semibold text-sm">원인</p>
                  <p className="flex-1">{el.cause}</p>
                </div>

                <div className="flex items-center gap-8">
                  <p className="font-semibold text-sm">해결</p>
                  <p className="flex-1">{el.solve}</p>
                </div>
              </li>
            ))}
          </ul>

          {current?.preview && current?.preview?.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mt-16 mb-4">
                🎁 Preview{" "}
                <span className="text-xs text-label_light font-normal">
                  유지보수로 인해 결과물이 상이할 수 있다는 점 너른
                  양해부탁드립니다.
                </span>
              </h2>

              <img
                src={current?.preview}
                alt={`${current?.projectName} 이미지`}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
