import { Routes, Route } from "react-router";
import ChatScreen from "./components/screens/ChatScreen";
import ChatRoom from "./components/screens/ChatRoom";

import { images } from "./Assets/assets";

// MAIN VIEW
const App = () => {
  return (
    <div
      className="mx-auto text-[#444444] bg-zinc-400 min-h-screen"
      style={{
        backgroundImage: `url(${images.sitting_room})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Routes>
        <Route path="/" element={<ChatScreen />} />
        <Route path="/:id" element={<ChatRoom />} />
      </Routes>
    </div>
  );
};

export default App;

// If this code helps you, please consider subscribing to our YouTube channel!
