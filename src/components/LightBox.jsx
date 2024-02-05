import "../styles/all.css";
import { motion, AnimatePresence } from "framer-motion";
import EventContent from "../pages/EventContent";
import CommunityContent from "../pages/CommunityContent";
import SignIn from "../pages/SignIn";

export default function LightBox({
  eventLightBoxState,
  setEventLightBoxState,
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
        return (
          <EventContent
            isOpenState={eventLightBoxState}
            setIsOpenState={setEventLightBoxState}
            toggleState={handleToggleLightBox}
          />
        );
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

  const lightBoxState = eventLightBoxState || communityLightBoxState || isSignInLightBoxState;

  return (
    lightBoxState && (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.05 }}
        >
          {lightBoxContent()}
        </motion.div>
      </AnimatePresence>
    )
  );
}