import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBell,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Images/Logoremovebg.png";

const NavBar = () => {
  return (
    <nav className="bg-[#FEF6D6] px-10 py-5 flex justify-between items-center">
      <img src={Logo} alt="Logo" className="h-11" />
      <div className="space-x-4 flex">
        <div className="group inline-block relative">
          <a className="flex items-center space-x-2 px-4 py-2 cursor-pointer bg-black text-white rounded-full shadow-md transform transition-all duration-200 group-hover:scale-110 group-hover:px-6">
            <FontAwesomeIcon
              icon={faHouseChimney}
              className="h-5 w-5 text-white group-hover:text-teal-500 transition-colors duration-200"
            />
            <span className="text-sm opacity-100 transition-opacity duration-200">
              Home
            </span>
          </a>
        </div>
        <div className="group inline-block relative">
          <a className="flex items-center space-x-2 px-4 py-2 cursor-pointer bg-black text-white rounded-full shadow-md transform transition-all duration-200 group-hover:scale-110 group-hover:px-6">
            <FontAwesomeIcon
              icon={faBell}
              className="h-5 w-5 text-white group-hover:text-teal-500 transition-colors duration-200"
            />
            <span className="text-sm opacity-100 transition-opacity duration-200">
              Notification
            </span>
          </a>
        </div>
        <div className="group inline-block relative">
          <a className="flex items-center space-x-2 px-4 py-2 cursor-pointer bg-black text-white rounded-full shadow-md transform transition-all duration-200 group-hover:scale-110 group-hover:px-6">
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              className="h-5 w-5 text-white group-hover:text-teal-500 transition-colors duration-200"
            />
            <span className="text-sm opacity-100 transition-opacity duration-200">
              History
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
