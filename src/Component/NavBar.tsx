import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBell,
  faClockRotateLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Images/Logoremovebg.png";

const NavBar = () => {
  return (
    <nav className="bg-[#FEF6D6] px-10 pt-6 pb-2 flex justify-between items-center">
      <img src={Logo} alt="Logo" className="h-11" />
      <div className="space-x-4 flex items-center">
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
        <div className="group inline-block relative">
          <div className="group mb-2 bg-black rounded-full transform transition-all duration-200 group-hover:scale-110">
            <button className="flex items-center space-x-2 p-3">
              <FontAwesomeIcon
                icon={faUser}
                className="h-5 w-5 text-white group-hover:text-teal-500 transition-colors duration-200"
              />
            </button>
          </div>
          <ul className="absolute right-2 text-base text-black hidden pt-1 cursor-pointer group-hover:block w-48 transition-all duration-200 transform origin-top scale-95 group-hover:scale-100">
            <li>
              <a className="rounded-t text-black hover:text-yellow-50 bg-[#FFFCF1] hover:bg-black shadow-lg py-2 px-4 block whitespace-no-wrap transition-colors duration-200">
                Change Password
              </a>
            </li>
            <li>
              <a className="text-black hover:text-yellow-50 bg-[#FFFCF1] hover:bg-black shadow-lg py-2 px-4 block whitespace-no-wrap transition-colors duration-200">
                Login
              </a>
            </li>
            <li>
              <a className="rounded-b text-black hover:text-yellow-50 bg-[#FFFCF1] hover:bg-black shadow-lg py-2 px-4 block whitespace-no-wrap transition-colors duration-200">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
