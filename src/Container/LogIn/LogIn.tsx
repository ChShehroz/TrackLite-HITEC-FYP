import { useState } from "react";
import getStartedImg from "../../assets/Images/GetStarted.png";
import { Link } from "react-router-dom";

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
  return (
    <div className="relative text-center">
      <div className="absolute top-[80px] left-[10%]">
        <div className="w-[450px] h-[420px] pt-1.5 border-[#DEC0A7] bg-gradient-to-r from-[#ffe572] to-[#ffe57275] shadow-lg bg-white rounded-xl">
          <div className="w-[450px] h-[420px] px-8 py-10 bg-gradient-to-b from-[#f5f1e1] via-[#fffdf6] bg-[#fffdf6] rounded-t-md rounded-b-xl ">
            <h1 className="text-3xl font-light text-center mb-6">
              Welcome Back!
            </h1>
            <h3 className="text-2xl font-semibold">Log In</h3>
            <p className=" text-sm font-medium mb-10">
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

              <div className="flex justify-between items-center">
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
              <div className="text-right mb-6">
                <a className="text-sm text-blue-500 hover:underline cursor-pointer">
                  Forgot password?
                </a>
              </div>
              <Link to={"/Home"}>
                <button
                  type="submit"
                  className="w-[90%] px-3 py-1.5 text-sm font-bold border border-black bg-black hover:border-slate-500 text-white hover:text-black shadow-sm hover:bg-transparent rounded-full"
                >
                  Log In
                </button>
              </Link>
              <p className="text-center text-sm mt-2">
                Register?{" "}
                <Link to={"/SignUp"}>
                  <a className="text-blue-500 hover:underline cursor-pointer">
                    SignUp
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <img
        src={getStartedImg}
        alt="Get started"
        className="absolute right-0 w-[593px]"
      />
    </div>
  );
};

export default LogIn;
