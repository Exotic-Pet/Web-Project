// import { motion, AnimatePresence } from 'framer-motion';
import "../styles/all.css";
import CommunityContent from "../pages/CommunityContent";
import SignIn from "../pages/SignIn";

export default function LightBox({
  communityLightBoxState,
  setCommunityLightBoxState,
  isSignInLightBoxState,
  setSignInLightBoxState,
  type,
}) {
  const handleToggleLightBox = (event, typeState, setTypeState) => {
    if (
      !event.target.classList.contains("lightBox__content") &&
      !event.target.closest(".lightBox__content")
    ) {
      setTypeState(!typeState);
    }
    // Stop event propagation
    event.stopPropagation();
  };

  const lightBoxContent = () => {
    switch (type) {
      case "COMMUNITY CONTENT":
        return (
          <CommunityContent
            isOpenState={communityLightBoxState}
            setIsOpenState={setCommunityLightBoxState}
            toggleState={handleToggleLightBox}
          />
        );
      case "EVENT CONTENT":
        return <div className="">活動</div>;
      case "SIGN UP":
        return (
          <SignIn
            isOpenState={isSignInLightBoxState}
            setIsOpenState={setSignInLightBoxState}
            toggleState={handleToggleLightBox}
          />
        );
      default:
        break;
    }
  };

  const lightBoxState = communityLightBoxState || isSignInLightBoxState;

  return (
    <div className={lightBoxState ? "block" : "hidden"}>
      {lightBoxContent()}
    </div>
  );
}
