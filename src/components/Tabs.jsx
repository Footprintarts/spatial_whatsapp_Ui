const Tabs = () => {
  return (
    <div className="tabs w-full h-15 mt-5 flex gap-12 items-center  text-zinc-100/90 pl-7 cursor-pointer">
      {/* <!-- tab-01 --> */}
      <div className="pinned-tab flex items-center gap-2.5 pb-1.5 hover:border-b-2 hover:border-b-green-400  transition2">
        <p className="">Pinned</p>
        <div className="count w-6 h-6 bg-green-500 flex items-center justify-center text-white rounded-full ">
          3
        </div>
      </div>
      {/* <!-- tab-02 --> */}
      <div className="chats-tab flex items-center gap-2.5 pb-1.5 border-b-2 hover:border-b-green-400  transition2">
        <p className="">Chats</p>
        <div className="count w-6 h-6 bg-green-500 flex items-center justify-center text-white rounded-full">
          2
        </div>
      </div>
      {/* <!-- tab-03 --> */}
      <div className="groups-tab flex items-center gap-2.5 pb-1.5 hover:border-b-2 hover:border-b-green-400  transition2">
        <p className="">Groups</p>
        <div className="count w-6 h-6 bg-green-500 flex items-center justify-center text-white rounded-full">
          1
        </div>
      </div>
    </div>
  );
};

export default Tabs;
