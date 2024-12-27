import { images } from "../Assets/assets";

const NavBar = () => {
  return (
    <div className="w-full h-16 flex justify-between px-8 items-center ">
      <img src={images.logo} alt="logo" />

      <div className="flex items-center gap-5">
        <img src={images.search} alt="search" />
        <div className="w-11 h-11 bg-gray-300 flex items-center justify-center rounded-full">
          <img src={images.user} alt="user" className="w-full rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
