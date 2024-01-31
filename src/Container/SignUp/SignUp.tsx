import { Link } from "react-router-dom";
import DropDown from "../../Component/DropDown";
import getStartedImg from "../../assets/Images/GetStarted.png";
import React, { useState } from "react";

interface FormState {
  email: string;
  password: string;
  department: string;
  userType: "faculty" | "student";
}

const SignUp = () => {
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
  return (
    <>
      <div className="relative text-center">
        <img src={getStartedImg} alt="Get started" className="w-[593px]" />
        <div className="absolute top-[60px] left-[55%]">
          <div className="w-[450px] h-[450px] pt-1.5 border-[#DEC0A7] bg-gradient-to-r from-[#D7D3C2] to-[#DEC0A7] shadow-lg bg-white rounded-xl">
            <div className="w-[450px] h-[450px] px-8 py-4 bg-gradient-to-b from-[#f5f1e1] via-[#fffdf6] bg-[#fffdf6] rounded-t-md rounded-b-xl ">
              <h1 className="text-3xl font-light text-center mb-5">
                Create Account
              </h1>
              <h3 className="text-2xl font-semibold">Sign up</h3>
              <p className=" text-sm font-medium mb-6">
                Please enter your Details
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 flex justify-between items-center">
                  <label
                    className="block text-gray-700 text-sm font-semibold"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                    className="w-[78%] px-3 py-1.5 bg-transparent border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E3C3A9]"
                  />
                </div>

                <div className="mb-3 flex justify-between items-center">
                  <label
                    className="block text-gray-700 text-sm font-semibold"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleInputChange}
                    className="w-[78%] px-3 py-1.5 bg-transparent border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E3C3A9]"
                  />
                </div>
                <div className="mb-3 flex justify-between items-center gap-2">
                  <label
                    className="block text-gray-700 text-sm font-semibold"
                    htmlFor="department"
                  >
                    Department
                  </label>
                  <DropDown />
                </div>
                <div className="flex items-center w-[93%] mb-6">
                  <label
                    className="block text-gray-700 text-sm font-semibold"
                    htmlFor="user type"
                  >
                    User type
                  </label>
                  <div className="w-[78%]">
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
                <button
                  type="submit"
                  className="w-[90%] px-3 py-1.5 text-sm font-bold border border-black bg-black hover:border-slate-500 text-white hover:text-black shadow-sm hover:bg-transparent rounded-full"
                >
                  Sign up
                </button>
                <p className="text-center text-sm mt-2">
                  Already a user?{" "}
                  <Link to={"/LogIn"}>
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
