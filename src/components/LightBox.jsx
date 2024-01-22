import { useState } from "react";
import "../styles/all.css";
import CommunityContent from "../pages/CommunityContent";

export default function LightBox({ type }) {
  const [lightBoxState, setLightBoxState] = useState(false);
  const handleToggleLightBox = (event) => {
    if (
      !event.target.classList.contains("lightBox__content") &&
      !event.target.closest(".lightBox__content")
    ) {
      setLightBoxState(!lightBoxState);
    }
    // Stop event propagation
    event.stopPropagation();
  };
  const handleCloseButtonClick = () => setLightBoxState(false);

  const lightBoxContent = (currentType) => {
    switch (type || currentType) {
      case "COMMUNITY CONTENT":
        return (
          <CommunityContent
            isOpen={lightBoxState}
            onToggle={handleToggleLightBox}
            onClose={handleCloseButtonClick}
          />
        );
      case "EVENT CONTENT":
        return <div className="">活動</div>;
      case "SIGN IN":
        return <div className="">登入</div>;
      case "SIGN UP":
        return <div className="">註冊</div>;
      default:
        break;
    }
  };

  return (
    <>
      {/* <div
        className={`${isOpenLightBox} absolute top-0 bottom-0 left-0 right-0 bg-black-65 flex justify-center items-center`}
        onClick={(e) => handleToggleLightBox(e)}
      >
        <article
          className="light__box__content max-w-[888px] max-h-[85vh] overflow-y-scroll relative bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="sticky ml-auto cursor-pointer hover:-translate-y-1 rounded-full top-6 right-6 w-11 h-11 bg-cyan-normal"
            onClick={() => handleCloseButtonClick()}
          >
            <div className="relative cursor-pointer">
              <div className="w-[30px] bg-white -bottom-6 left-[16%] absolute h-[3px] rotate-45"></div>
              <div className="w-[30px] bg-white -bottom-6 left-[16%] absolute h-[3px] -rotate-45"></div>
            </div>
          </div>
        </article>
      </div> */}
      <button
        className="p-3 rounded-full block mx-auto bg-blue-400 text-white"
        onClick={(e) => handleToggleLightBox(e)}
      >
        切換燈箱
      </button>

      {lightBoxContent("COMMUNITY CONTENT")}
    </>
  );
}
