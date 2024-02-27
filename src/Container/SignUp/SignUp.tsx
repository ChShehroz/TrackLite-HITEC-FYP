import { Link, useNavigate } from "react-router-dom";
import DropDown from "../../Component/DropDown";
import getStartedImg from "../../assets/Images/GetStarted.png";
import React, { useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { RiEyeFill } from "react-icons/ri";
import { RiEyeOffFill } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";

interface FormState {
  email: string;
  password: string;
  department: string;
  userType: "faculty" | "student";
}

const SignUp = () => {
  let navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/Log-In");
  };

  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
    department: "",
    userType: "student",
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

  useEffect(() => {
    document.title = "TrackLite HITEC | Sign-Up";
  });

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <div className="relative text-center">
        <img src={getStartedImg} alt="Get started" className="w-[593px]" />
        <div className="absolute top-[35px] left-[55%]">
          <div className="w-[450px] h-[520px] pt-1.5 border-[#DEC0A7] bg-gradient-to-r from-[#D7D3C2] to-[#DEC0A7] shadow-lg bg-white rounded-xl">
            <div className="w-[450px] h-[520px] px-8 py-4 bg-gradient-to-b from-[#f5f1e1] via-[#fffdf6] bg-[#fffdf6] rounded-t-md rounded-b-xl ">
              <h1 className="text-3xl font-light text-slate-600 text-center mb-2">
                Create Account
              </h1>
              <h3 className="text-2xl text-slate-800 font-semibold">Sign up</h3>
              <p className=" text-sm text-slate-500 font-medium mb-10">
                Please enter your Details
              </p>
              <form onSubmit={handleSubmit}>
                <div>
                  <Input
                    type="email"
                    label="Email"
                    labelPlacement="outside"
                    radius="full"
                    onChange={handleInputChange}
                    endContent={
                      <TbMailFilled className="text-2xl text-slate-600 pointer-events-none flex-shrink-0" />
                    }
                    classNames={{
                      inputWrapper: [
                        "shadow-sm",
                        "bg-default-200/70",
                        "backdrop-blur-lg",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/80",
                        "group-data-[focused=true]:bg-default-200/75",
                        "text-slate-500",
                        "border",
                        "border-slate-400",
                      ],
                      input: ["bg-transparent", "text-slate-500"],
                      label: ["text-slate-600", "ml-1", "pl-3"],
                    }}
                  />
                </div>

                <div className="mb-3 mt-8">
                  <Input
                    label="Password"
                    labelPlacement="outside"
                    radius="full"
                    onChange={handleInputChange}
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <RiEyeOffFill className="text-2xl text-slate-600 pointer-events-none" />
                        ) : (
                          <RiEyeFill className="text-2xl text-slate-600 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    classNames={{
                      inputWrapper: [
                        "shadow-sm",
                        "bg-default-200/70",
                        "backdrop-blur-lg",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/80",
                        "group-data-[focused=true]:bg-default-200/75",
                        "text-slate-500",
                        "border",
                        "border-slate-400",
                      ],
                      input: ["bg-transparent", "text-slate-500"],
                      label: ["text-slate-600", "ml-1", "pl-3"],
                    }}
                  />
                </div>
                <div className="mb-3 gap-2">
                  <label
                    className="block text-gray-700 text-sm text-left font-medium ml-4 mb-1"
                    htmlFor="department"
                  >
                    Department
                  </label>
                  <DropDown />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm text-left font-medium ml-4 mb-1"
                    htmlFor="user type"
                  >
                    User type
                  </label>
                  <div className="w-full text-left">
                    <button
                      type="button"
                      onClick={() =>
                        setFormState({ ...formState, userType: "faculty" })
                      }
                      className={`px-8 py-1.5 text-sm font-semibold rounded-full ${
                        formState.userType === "faculty"
                          ? "bg-black text-white"
                          : "border text-black"
                      } mr-2`}
                    >
                      Faculty
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormState({ ...formState, userType: "student" })
                      }
                      className={`px-8 py-1.5 text-sm font-semibold rounded-full ${
                        formState.userType === "student"
                          ? "bg-black text-white"
                          : "border text-black"
                      }`}
                    >
                      Student
                    </button>
                  </div>
                </div>

                <Button
                  onClick={handleSignUpClick}
                  radius="full"
                  variant="flat"
                  className="w-full flex items-center text-sm space-x-2 px-3 py-1.5 bg-slate-800 text-white shadow-md  focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  Sign up
                </Button>

                <p className="text-center text-slate-600 text-sm mt-2">
                  Already a user?{" "}
                  <Link to={"/Log-In"}>
                    <a className="text-blue-500 hover:underline cursor-pointer">
                      Login
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
