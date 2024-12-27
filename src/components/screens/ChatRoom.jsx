import audioIcon from "../../Assets/Audio.svg";
import backIcon from "../../Assets/back.svg";
import videoCallIcon from "../../Assets/video_call.svg";
import chatsIcon from "../../Assets/Chats.svg";
import menuIcon from "../../Assets/menu.svg";
import patternLightIcon from "../../Assets/Pattern_light.svg";
import emojiIcon from "../../Assets/😁.svg";
import emoticonsIcon from "../../Assets/😍🤣🥰💩.svg";
import sendIcon from "../../Assets/send.svg";
import cameraIcon from "../../Assets/camera.svg";

import getCurrentTimeString from "../../helpers/CurrentTime";

// Tilt
import { useEffect, useRef, useState } from "react";
import applyTiltEffect from "../../helpers/tilt";

// Params
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// data
import { chatData } from "../../data/users";

const ChatRoom = () => {
  // Tilt
  const tiltCardRef = useRef(null);
  useEffect(() => {
    if (tiltCardRef.current) {
      applyTiltEffect(tiltCardRef.current);
    }
  }, []);

  // Params
  const { id } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    // Fetching simulation
    const fetchedUser = chatData.find((user) => user.id == id);
    setUser(fetchedUser);
  }, [id]);

  // Fallback
  if (!chatData.find((user) => user.id == id)) {
    return <p className="text-rose-500 text-semibold">User Not Found!</p>;
  }

  return (
    <div className="w-full h-screen center-item bg-[url(src/Components/hero20/Assets/sitting_room.jpg)] bg-cover bg-center bg-no-repeat">
      <div
        className="bg w-full h-screen center-item"
        style={{ perspective: "1000px" }}
      >
        <div className="tilt-card" ref={tiltCardRef}>
          {/* ChatRoom */}
          <div className="  card w-[428px] h-[926px] bg-zinc-100/20 backdrop-blur rounded-md cursor-pointer">
            {/* CHAT ID */}
            <div className="w-full h-[80px] bg-zinc-500/20 backdrop-blur mt-5 pl-[34px] pr-[32px] flex items-center">
              <div className="h-[39px] bg-transparent w-full flex items-center justify-between">
                {/* id group */}
                <div className="flex items-center">
                  {/* Arrow back */}
                  <Link to={"/"}>
                    <img src={backIcon} alt="back icon" width={9.7} />
                  </Link>
                  {/* Avatar & name */}
                  <div className=" flex items-center ml-[25px] gap-[19px]">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-slate-300 relative rounded-full">
                      <img src={user.image} alt="img" className="w-full" />
                      {/* active */}
                      <div className="absolute w-[13px] h-[13px] border-2 border-white rounded-full bottom-0 right-0 bg-green-400"></div>
                    </div>
                    {/* /* Name */}
                    <p className="text-[18px] text-transparent bg-gradient-to-r from-rose-500 to-sky-500 bg-clip-text font-semibold">
                      {user.name}
                    </p>
                  </div>
                </div>

                {/* options */}
                <div className=" flex items-center ">
                  <div className="flex  items-center mr-[29px] gap-[18px]">
                    {/* 1 */}
                    <img src={videoCallIcon} alt="video call" width={28} />
                    {/* 2 */}
                    <img src={chatsIcon} alt="chat" width={23} />
                  </div>

                  {/* 3 */}
                  <img src={menuIcon} alt="menu" width={5} />
                </div>
              </div>
            </div>

            {/* CHAT WINDOW */}
            <div className="w-full h-[729px] bg-zinc-50/10 backdrop-blur relative">
              {/* Pattern Bg */}
              <img
                src={patternLightIcon}
                alt="pattern"
                className="opacity-80"
              />

              {/* Overlay */}
              <div className="absolute bg-[#1b1b1b]/30 w-full h-full  top-0"></div>

              {/* Chat Msgs */}
              <div className="absolute top-[63px] left-[28px] bg-transparent w-[376px] h-[628px] text-slate-50 flex flex-col gap-[30px]">
                {/* incoming msg */}
                {/* 1 */}
                <div className="w-full flex justify-end">
                  <div className="w-[324px]  flex">
                    {/* time */}
                    <p className="text-[12px] flex items-end">10:30pm</p>
                    {/* message bubble */}
                    <div className="w-[275px] h-[108px] bg-[#0FA275] flex flex-1 px-[30px] py-[16px] rounded-[20px] rounded-br-none items-center">
                      <p className="text-sm">
                        Send me the image of the document and the number of the
                        file it is stored in...
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="w-full  flex justify-end">
                  <div className=" flex">
                    {/* time */}
                    <p className="text-[12px] flex items-end">
                      {getCurrentTimeString()}
                    </p>
                    {/* message bubble */}
                    <div className=" w-[190px] h-[128px]  bg-slate-100 flex flex-1 px-[30px] py-[16px] rounded-[20px] rounded-br-none">
                      <div className="w-full h-full center-item">
                        <img src={user.image} alt="img" className="w-3/4 " />
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Day */}
                <div className="flex justify-center items-center ">
                  <div className="bg-[#9E9E9D] w-[80px] h-[28px] px-4 rounded-full flex items-center justify-center">
                    <p className="text-[12px]">Apr 17</p>
                  </div>
                </div>

                {/* 3 */}
                <div className="w-full flex justify-end">
                  <div className="w-[324px]  flex">
                    {/* time */}
                    <p className="text-[12px] flex items-end">
                      {getCurrentTimeString()}
                    </p>
                    {/* message bubble */}
                    <div className="w-[275px] h-[108px] bg-[#0FA275] flex flex-1 px-[30px] py-[16px] rounded-[20px] rounded-br-none items-center">
                      <p className="text-sm">
                        Hey {user.name}... I am planning to meet tonight at
                        josephs house.. will you be able to join?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Outgoing msg */}

                <div className="bg-transparent flex flex-col gap-1">
                  {/* 1 */}
                  <div className="w-full flex ">
                    <div className="  flex">
                      {/* message bubble */}
                      <div className="h-[46px] bg-[#00264D] flex flex-1 px-[24px] py-[14px] rounded-[20px] rounded-bl-none items-center">
                        <p className="text-sm">Hey mannnn</p>
                      </div>

                      {/* time */}
                      <p className="text-[12px] flex items-end">10:32pm</p>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="w-full flex ">
                    <div className="  flex">
                      {/* message bubble */}
                      <div className=" h-[46px] bg-[#00264D] flex flex-1 px-[10px] py-[9px] rounded-[6px]  items-center">
                        <p className="text-sm">
                          <img src={emoticonsIcon} alt="emoticons" width={93} />
                        </p>
                      </div>

                      {/* time */}
                      <p className="text-[12px] flex items-end">10:32pm</p>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="w-full flex ">
                    <div className="  flex">
                      {/* message bubble */}
                      <div className=" h-[46px] bg-[#00264D] flex flex-1 px-[24px] py-[14px] rounded-[20px] rounded-bl-none items-center">
                        <p className="text-sm">
                          I might not be able to make it
                        </p>
                      </div>

                      {/* time */}
                      <p className="text-[12px] flex items-end">10:32pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INPUT & BTNS */}
            <div className="w-full h-[120px] bg-zinc-500/20 backdrop-blur pt-7">
              <div className="w-[378px] h-[53px] ml-[25px] flex items-center justify-between">
                <div className="bg-zinc-100/20 h-full flex items-center px-2 rounded-full">
                  {/* Input group */}
                  <div className="bg-transparent grid grid-cols-[32px,1fr,58px] text-zinc-50 ">
                    {/* emoji */}
                    <img src={emojiIcon} alt="emoji" width={32} />
                    {/* input */}
                    <input
                      type="text"
                      placeholder="Message"
                      className="border-none outline-none p-1 bg-transparent placeholder:text-zinc-100"
                    />
                    {/* btns */}
                    <div className="flex gap-[17px]">
                      {/* send */}
                      <img src={sendIcon} alt="send icon" width={20} />
                      {/* photo */}
                      <img src={cameraIcon} alt="camera icon" width={19} />
                    </div>
                  </div>
                </div>

                {/* audio msg */}
                <div className="w-[52px] h-[52px] bg-green-500 flex items-center justify-center rounded-full shadow-xl shadow-zinc-500/40 cursor-pointer hover:-translate-y-5 transition-all duration-300 ease-in-out">
                  <img src={audioIcon} alt="audio icon" width={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
