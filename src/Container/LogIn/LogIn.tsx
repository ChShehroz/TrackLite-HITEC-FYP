import { useEffect, useState } from "react";
import getStartedImg from "../../assets/Images/GetStarted.png";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Button, Input } from "@nextui-org/react";
import { TbMailFilled } from "react-icons/tb";

interface FormState {
  email: string;
  password: string;
}

const LogIn = () => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
    // Here you would typically handle the form submission, like sending data to a server
  };

  let navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Home");
  };

  useEffect(() => {
    document.title = "TrackLite HITEC | Log-In";
  });

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="relative text-center">
      <img src={getStartedImg} alt="Get started" className="w-[593px]" />
      <div className="absolute top-[50px] left-[55%]">
        <div className="w-[450px] h-[480px] pt-1.5 border-[#DEC0A7] bg-gradient-to-r from-[#ffe572] to-[#ffe57275] shadow-lg bg-white rounded-xl">
          <div className="w-[450px] h-[480px] px-8 py-8 bg-gradient-to-b from-[#f5f1e1] via-[#fffdf6] bg-[#fffdf6] rounded-t-md rounded-b-xl ">
            <h1 className="text-3xl font-light text-center mb-6">
              Welcome Back!
            </h1>
            <h3 className="text-2xl font-semibold">Log In</h3>
            <p className=" text-sm font-medium mb-10">
              Please enter your Details
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-12">
                <Input
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  onChange={handleInputChange}
                  endContent={
                    <TbMailFilled className="text-2xl text-slate-400 mr-1 pointer-events-none flex-shrink-0" />
                  }
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
              </div>

              <div>
                <Input
                  label="Password"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  onChange={handleInputChange}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <RiEyeOffFill className="text-2xl text-slate-400 mr-1 pointer-events-none" />
                      ) : (
                        <RiEyeFill className="text-2xl text-slate-400 mr-1 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
              </div>
              <div className="text-right mb-12">
                <a className="text-sm text-blue-500 hover:underline cursor-pointer">
                  Forgot password?
                </a>
              </div>
              <Button
                onClick={handleLoginClick}
                radius="full"
                variant="flat"
                className="w-full flex items-center text-sm space-x-2 px-3 py-1.5 bg-slate-800 text-white shadow-md  focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Log In
              </Button>
              <p className="text-center text-sm mt-2">
                Register?{" "}
                <Link to={"/Sign-Up"}>
                  <a className="text-blue-500 hover:underline cursor-pointer">
                    SignUp
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
