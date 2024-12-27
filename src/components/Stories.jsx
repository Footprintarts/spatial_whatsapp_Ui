/* eslint-disable react/prop-types */
import { images } from "../Assets/assets";
const getRandomPastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 100%, 85%)`;
};

const getRandomName = () => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Faythe",
    "Grace",
    "Heidi",
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const friendsData = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  name: getRandomName(),
  bgColor: getRandomPastelColor(),
  image: `https://avatar.iran.liara.run/public/${index + 1}.png`,
}));

// Friend Component
const Friend = ({ name, image }) => (
  <div className="friend flex flex-col items-center mr-5">
    <div
      className="w-[63px] h-[63px]  rounded-full border-2 border-green-400 shadw shadow-green-400"
      //   style={{ backgroundImage: getRandomPastelColor() }}
    >
      <img src={image} alt="img" className="w-full h-full overflow-clip" />
    </div>
    <p className="">{name}</p>
  </div>
);

// Stories Component
const Stories = () => {
  return (
    <div className="stories w-full h-[103px] mt-5 flex items-center text-zinc-100/90 pl-7">
      <div className="you flex flex-col items-center">
        <div
          className="w-[54px] h-[54px] bg-[#ddc] rounded-full"
          style={{
            backgroundImage: `url(${images.user})`,
            backgroundSize: "cover",
          }}
        ></div>
        <p className="">You</p>
      </div>

      <div className="others ml-5 flex items-center">
        {friendsData.map(({ id, name, image }) => (
          <Friend key={id} name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
