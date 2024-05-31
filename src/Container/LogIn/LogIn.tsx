import { useEffect } from "react";
import getStartedImg from "../../assets/Images/GetStarted.png";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Button, Input } from "@nextui-org/react";
import { TbMailFilled } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  let navigate = useNavigate();

  const handleLoginClick = async (data: LoginFormInputs) => {
    try {
      const response = await axios.post<{ token: string }>(
        "http://localhost:5000/api/v1/auth/login",
        data
      );
      const { token } = response.data;
      localStorage.setItem("token", token); // Store the token
      console.log("Response data:", response.data);
      navigate("/Home");
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  useEffect(() => {
    document.title = "TrackLite HITEC | Log-In";
  }, []);

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
            <form onSubmit={handleSubmit(handleLoginClick)}>
              <div className="mb-12">
                <Input
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  {...register("email")}
                  endContent={
                    <TbMailFilled className="text-2xl text-slate-400 mr-1 pointer-events-none flex-shrink-0" />
                  }
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <Input
                  label="Password"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  {...register("password")}
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
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="text-right mb-12">
                <a className="text-sm text-blue-500 hover:underline cursor-pointer">
                  Forgot password?
                </a>
              </div>
              <Button
                type="submit"
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
