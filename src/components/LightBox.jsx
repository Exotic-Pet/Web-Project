import { useState } from "react";
import "../styles/all.css";
import CommunityContent from "../pages/CommunityContent";
import SignIn from "../pages/SignIn";

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
      case "SIGN UP":
        return (
          <SignIn
            isOpen={lightBoxState}
            onToggle={handleToggleLightBox}
            onClose={handleCloseButtonClick}
          />
        );
      default:
        break;
    }
  };

  return (
    <>
      <button
        className="p-3 rounded-full block mx-auto bg-blue-400 text-white"
        onClick={(e) => handleToggleLightBox(e)}
      >
        切換燈箱
      </button>

      {lightBoxContent("SIGN UP")}
    </>
  );
}
