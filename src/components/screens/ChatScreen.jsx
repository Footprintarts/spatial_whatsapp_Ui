import { useEffect, useRef } from "react";

import applyTiltEffect from "../../helpers/tilt";

import NavBar from "../NavBar";
import Stories from "../Stories";
import Tabs from "../Tabs";
import ChatsContainer from "../ChatsContainer";
import Menu from "../Menu";

const ChatScreen = () => {
  const tiltCardRef = useRef(null);

  useEffect(() => {
    if (tiltCardRef.current) {
      applyTiltEffect(tiltCardRef.current);
    }
  }, []);

  return (
    // Perspective Container: This invisible container is used to create a 3D effect.
    <div
      className="bg w-full h-screen center-item"
      style={{ perspective: "1000px" }}
    >
      {/* Tilt Card */}
      <div
        ref={tiltCardRef}
        className="tilt-card card w-[428px] h-[926px] bg-zinc-500/20 backdrop-blur rounded-md cursor-pointer"
      >
        <NavBar />
        <Stories />
        <Tabs />
        <ChatsContainer />
        <Menu />
      </div>
    </div>
  );
};

export default ChatScreen;

// If this code helps you, please consider subscribing to our YouTube channel!
