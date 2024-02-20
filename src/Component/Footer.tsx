import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/Images/Logoremovebg.png";

const Footer = () => {
  return (
    <footer className="bg-[#FEF6D6] py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-between items-center px-10 w-full">
          <img src={Logo} alt="Logo" className="h-9 mr-2" />
          <div className="flex">
            <a href="" className="text-[#545454] hover:text-gray-700 mx-2">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="" className="text-[#545454] hover:text-gray-700 mx-2">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="" className="text-[#545454] hover:text-gray-700 mx-2">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="" className="text-[#545454] hover:text-gray-700 mx-2">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
          </div>
        </div>
        <div className="w-[90%] border-t border-gray-400 my-3"></div>
        <span className="text-xs text-slate-600 pt-2">
          © 2024 TrackLite HITEC University. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
