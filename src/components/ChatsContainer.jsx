import { images } from "../Assets/assets";
// Chat
import Chat from "./Chat";

// Chats Container
const ChatsContainer = () => {
  return (
    <div className="chats-container w-full h-[509px] text-zinc-100/90  mt-5">
      <Chat />
      {/* Add */}
      <div className="w-[75px] h-[75px] bg-lime-500 absolute right-8 bottom-36 flex items-center justify-center rounded-full shadow-xl shadow-lime-600 cursor-pointer hover:-translate-y-5 transition-all duration-300 ease-in-out">
        <img src={images.add_icon} alt="icon" className="w-[32px] " />
      </div>
    </div>
  );
};

export default ChatsContainer;
