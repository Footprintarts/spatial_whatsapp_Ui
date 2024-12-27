import { images } from "../Assets/assets";

const Menu = () => {
  return (
    <div className="nav w-full h-20 bg-transparent mt-5 pt-4 pl-12 flex items-center gap-16 cursor-pointer">
      <img
        src={images.message}
        alt="message"
        width="27"
        className="transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-green-600"
      />
      <img
        src={images.home_icon}
        alt="home"
        width="30"
        className="transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-green-600"
      />
      <img
        src={images.notifications_icon}
        alt="notifications"
        width="25"
        className="transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-green-600"
      />
      <img
        src={images.users}
        alt="users"
        width="31"
        className="transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-green-600"
      />
    </div>
  );
};

export default Menu;
