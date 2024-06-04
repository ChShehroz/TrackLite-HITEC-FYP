import { Link, useNavigate } from "react-router-dom";
import getStartedImg from "../../assets/Images/GetStarted.png";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import { departments } from "./Department";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

// Define your form schema using Zod
const schema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  department: z.string().nonempty("Department is required"),
  userType: z.enum(["faculty", "student"]),
});

type FormState = z.infer<typeof schema>;

const SignUp = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormState>({
    resolver: zodResolver(schema),
  });

  const handleSignUpClick = async (data: FormState) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        data
      );
      console.log("Response:", response.data);
      navigate("/Log-In");
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  useEffect(() => {
    document.title = "TrackLite HITEC | Sign-Up";
  }, []);

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
              <form onSubmit={handleSubmit(handleSignUpClick)}>
                <div>
                  <Input
                    {...register("email")}
                    type="email"
                    label="Email"
                    labelPlacement="outside"
                    size="sm"
                    variant="underlined"
                    endContent={
                      <TbMailFilled className="text-2xl text-slate-400 mr-1 pointer-events-none flex-shrink-0" />
                    }
                    classNames={{
                      label: ["text-slate-800", "text-sm"],
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-3 mt-10">
                  <Input
                    {...register("password")}
                    label="Password"
                    labelPlacement="outside"
                    size="sm"
                    variant="underlined"
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
                    classNames={{
                      label: ["text-slate-800", "text-sm"],
                    }}
                    type={isVisible ? "text" : "password"}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="mb-3 mt-10">
                  <Controller
                    name="department"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        label="Department"
                        labelPlacement="outside"
                        size="sm"
                        variant="underlined"
                        classNames={{
                          label: ["text-slate-800", "text-sm"],
                          listbox: "h-40",
                        }}
                      >
                        {departments.map((dept) => (
                          <SelectItem key={dept.id} value={dept.name}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.department && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.department.message}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    className="block text-slate-600 text-sm text-left font-medium ml-4 mb-1"
                    htmlFor="user type"
                  >
                    User type
                  </label>
                  <div className="w-full text-left">
                    <ButtonGroup radius="full">
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => setValue("userType", "faculty")}
                        className={`px-8 py-1.5 text-sm font-semibold rounded-full ${
                          control._formValues.userType === "faculty"
                            ? "bg-slate-800 text-white"
                            : "text-slate-800"
                        } mr-2`}
                      >
                        Faculty
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => setValue("userType", "student")}
                        className={`px-8 py-1.5 text-sm font-semibold rounded-full ${
                          control._formValues.userType === "student"
                            ? "bg-slate-800 text-white"
                            : "text-slate-800"
                        }`}
                      >
                        Student
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>

                <Button
                  type="submit"
                  radius="full"
                  variant="flat"
                  className="w-full flex items-center text-sm space-x-2 px-3 py-1.5 bg-slate-800 text-white shadow-md  focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  Sign up
                </Button>

                <p className="text-center text-slate-600 text-sm mt-2">
                  Already a user?{" "}
                  <Link to={"/Log-In"}>
                    <span className="text-blue-500 hover:underline cursor-pointer">
                      Login
                    </span>
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
