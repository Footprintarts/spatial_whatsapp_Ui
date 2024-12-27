/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const chatData = [
  {
    id: 1,
    name: "David",
    message: "I might not be able to do it.",
    time: "25m",
    unread: 3,
    active: true,
    image: "https://avatar.iran.liara.run/public/1.png",
  },
  {
    id: 2,
    name: "Joseph",
    message: "Great man.. Sounds cool...",
    time: "27m",
    unread: 2,
    active: true,
    image: "https://avatar.iran.liara.run/public/37.png",
  },
  {
    id: 3,
    name: "Jacob",
    message: "Tell me more mate",
    time: "27m",
    unread: 0,
    active: false,
    image: "https://avatar.iran.liara.run/public/9.png",
  },
  {
    id: 4,
    name: "Gabby",
    message: "I'll send through the mail",
    time: "Tue",
    unread: 0,
    active: false,
    image: "https://avatar.iran.liara.run/public/17.png",
  },
  {
    id: 5,
    name: "Ann",
    message: "that's exactly what I meant..",
    time: "Sun",
    unread: 0,
    active: false,
    image: "https://avatar.iran.liara.run/public/85.png",
  },
];

const Chat = () => {
  const getRandomColor = () => {
    const colors = ["#FF5733", "#a6e22e", "#3357FF", "#f92672", "#ae81ff"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      {chatData.map((chat) => (
        <Link to={`/${chat.id}`} key={chat.id}>
          <div className="chatlist-item w-full h-[73px] mb-[36px] flex items-center justify-between pr-[33px] pl-[27px] hover:shadow-2xl hover:shadow-zinc-500/60 cursor-pointer transition2">
            <div className="group flex gap-[24px] items-center">
              {/* Profile Pic */}
              {chat.image ? (
                <img
                  src={chat.image}
                  alt={chat.name}
                  className="profile-pic w-[60px] h-[60px] rounded-full"
                />
              ) : (
                <div
                  className="profile-pic w-[60px] h-[60px] relative rounded-full text-zinc-50 center-item font-semibold text-lg"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  {chat.name.charAt(0)}
                  {chat.active && (
                    <div className="active w-[13px] h-[13px] bg-[#39D753] rounded-full absolute bottom-0 right-0"></div>
                  )}
                </div>
              )}

              <div className="details leading-[1.3]">
                <strong>{chat.name}</strong>
                <p className="text-[15px]">{chat.message}</p>
              </div>
            </div>
            <div className="time flex flex-col items-center">
              <p className="text-[14px]">{chat.time}</p>
              {chat.unread > 0 && (
                <div className="unread w-[23px] h-[23px] bg-[#39D753] flex items-center justify-center text-white rounded-full">
                  {chat.unread}
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Chat;
