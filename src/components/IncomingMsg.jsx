/* eslint-disable react/prop-types */

const IncomingMsg = ({ time, message }) => {
  return (
    <div className="w-full flex justify-end">
      <div className="w-[324px]  flex">
        {/* time */}
        <p className="text-[12px] flex items-end">{time}</p>
        {/* message bubble */}
        <div className="w-[275px] h-[108px] bg-[#0FA275] flex flex-1 px-[30px] py-[16px] rounded-[20px] rounded-br-none items-center">
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomingMsg;
