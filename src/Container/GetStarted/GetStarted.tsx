import { Link } from "react-router-dom";
import getStartedImg from "../../assets/Images/GetStarted.png";
import Logo from "../../assets/Images/LogoRemovebg.png";

const GetStarted = () => {
  return (
    <>
      <div className="relative text-center">
        <img src={getStartedImg} alt="Get started" className="w-[593px]" />
        <div className="absolute top-[48%] left-3/4 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl font-bold text-[#364039] mb-6">
            Get Started
          </h1>
          <Link to={"/LogIn"}>
            <button className="rounded-full px-12 py-2.5 text-sm font-bold border hover:bg-black/40 border-slate-500 text-black shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-70">
              Log In
            </button>
          </Link>
          <Link to={"/SignUp"}>
            <button className="rounded-full px-12 py-2.5 mx-2 text-sm font-bold border border-black bg-black  hover:bg-gray-800 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
              Sign Up
            </button>
          </Link>
          <img
            src={Logo}
            alt="Logo"
            className="absolute top-60 left-1/2 mix-blend-multiply transform -translate-x-1/2 w-32 "
          />
        </div>
      </div>
    </>
  );
};

export default GetStarted;
