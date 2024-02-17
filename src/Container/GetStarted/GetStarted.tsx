import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import getStartedImg from "../../assets/Images/GetStarted.png";
import Logo from "../../assets/Images/LogoRemovebg.png";

const GetStarted = () => {
  return (
    <>
      <div className="relative text-center">
        <img src={getStartedImg} alt="Get started" className="w-[593px]" />
        <div className="absolute top-[42%] left-3/4 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-3xl font-bold text-slate-800 mb-7">
            Get Started
          </h1>
          <Link to={"/Log-In"}>
            <Button
              radius="full"
              variant="flat"
              className="px-12 py-2.5 text-slate-600 font-bold focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              Log In
            </Button>
          </Link>
          <Link to={"/SignUp"}>
            <Button
              radius="full"
              variant="flat"
              className="px-12 py-2.5 mx-2 text-sm font-bold border border-black bg-slate-800 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Sign Up
            </Button>
          </Link>
          <img
            src={Logo}
            alt="Logo"
            className="absolute top-72 left-1/2 mix-blend-multiply transform -translate-x-1/2 w-32 "
          />
        </div>
      </div>
    </>
  );
};

export default GetStarted;
