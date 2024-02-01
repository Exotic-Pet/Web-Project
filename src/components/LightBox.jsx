import "../styles/all.css";
import { motion, AnimatePresence } from "framer-motion";
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
          communityLightBoxState && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CommunityContent
                  isOpenState={communityLightBoxState}
                  setIsOpenState={setCommunityLightBoxState}
                  toggleState={handleToggleLightBox}
                />
              </motion.div>
            </AnimatePresence>
          )
        );
      case "EVENT CONTENT":
        return <div className="">活動</div>;
      case "SIGN UP":
        return (
          isSignInLightBoxState && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SignIn
                  isOpenState={isSignInLightBoxState}
                  setIsOpenState={setSignInLightBoxState}
                  toggleState={handleToggleLightBox}
                />
              </motion.div>
            </AnimatePresence>
          )
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
