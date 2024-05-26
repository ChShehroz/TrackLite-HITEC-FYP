import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from "@nextui-org/react";
import { FaCircleQuestion, FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";

const schema = z.object({
  studentName: z.string().min(1, "Student's name is required."),
  fatherName: z.string().min(1, "Father's name is required."),
  rollNo: z.string().min(1, "Roll number is required."),
  semester: z.string().min(1, "Semester is required."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Invalid email address."),
  phone: z
    .string()
    .min(1, { message: "Phone number is required." })
    .regex(/^\d{11}$/, { message: "Phone number must be 11 digits." }),

  reasonForLeaving: z.string().min(1, "Reason for leaving is required."),
  postalAddress: z.string().min(1, "Postal address is required."),
});

type DegreeFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: DegreeFormData) => void;
}

const DegreeForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DegreeFormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: DegreeFormData) => {
    onSubmit(data);
    reset();
  };

  const btnPrimaryStyle = `px-8 py-1 flex items-center text-sm space-x-2 bg-slate-800 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400`;
  const btnSecondaryStyle = `px-8 py-1 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50`;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-slate-800 font-semibold my-10">
        Degree Clearance Application
      </h2>
      <div className="bg-[#CB97E7] rounded-3xl pt-1 shadow-xl max-w-4xl w-full mb-20">
        <div className="relative bg-gradient-to-b from-[#f0e8c9] via-[#fffdf6] bg-[#fffdf6] p-14 rounded-t-2xl rounded-b-3xl max-w-4xl w-full">
          <Popover
            showArrow
            offset={10}
            backdrop="blur"
            placement="left"
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    opacity: {
                      duration: 0.15,
                    },
                  },
                },
                exit: {
                  y: "10%",
                  opacity: 0,
                  transition: {
                    opacity: {
                      duration: 0.1,
                    },
                  },
                },
              },
            }}
          >
            <PopoverTrigger>
              <Button
                isIconOnly
                radius="full"
                variant="light"
                className="absolute top-5 right-8 "
              >
                <FaCircleQuestion className="w-5 h-5 text-slate-800" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="w-96 px-4 py-4">
                <div className="text-small font-bold text-slate-800">
                  Degree Clearance Application
                </div>
                <div className="text-tiny text-slate-600">
                  Welcome to the Degree Clearance application portal. Here, you
                  can submit your request for degree clearance, ensuring that
                  all academic and administrative requirements are fulfilled
                  before your graduation.
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <form className="space-y-4" onSubmit={handleSubmit(submitData)}>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-5">
                <Input
                  {...register("studentName")}
                  type="studentname"
                  label="Student's Name"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
                {errors.studentName && (
                  <span className="text-red-500 text-xs">
                    {errors.studentName.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3">
                <Input
                  {...register("fatherName")}
                  type="fatherName"
                  label="Father's Name"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
                {errors.fatherName && (
                  <span className="text-red-500 text-xs">
                    {errors.fatherName.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Input
                  {...register("rollNo")}
                  type="rollNo"
                  label="Roll Number"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
                {errors.rollNo && (
                  <span className="text-red-500 text-xs">
                    {errors.rollNo.message}
                  </span>
                )}
              </div>

              <div className="w-full md:w-1/3 px-3 md:mb-5">
                <Input
                  {...register("semester")}
                  type="semester"
                  label="Semester"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
                {errors.semester && (
                  <span className="text-red-500 text-xs">
                    {errors.semester.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3">
                <Input
                  {...register("reasonForLeaving")}
                  type="reasonForLeaving"
                  label="Reason for Leaving"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
                {errors.reasonForLeaving && (
                  <span className="text-red-500 text-xs">
                    {errors.reasonForLeaving.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Input
                  {...register("phone")}
                  type="phone"
                  label="Phone Number"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                  endContent={
                    <FaPhone className="text-xl text-slate-400 mr-1 pointer-events-none flex-shrink-0" />
                  }
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="w-full md:w-[42%] px-3">
                <Input
                  {...register("email")}
                  type="email"
                  label="Email Address"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                  endContent={
                    <TbMailFilled className="text-2xl text-slate-400 mr-1 pointer-events-none flex-shrink-0" />
                  }
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-[58%] px-3">
                <Input
                  {...register("postalAddress")}
                  type="postalAddress"
                  label="Postal Address"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                  endContent={
                    <FaMapMarkerAlt className="text-2xl text-slate-400 mr-1 pointer-events-none flex-shrink-0" />
                  }
                />
                {errors.postalAddress && (
                  <span className="text-red-500 text-xs">
                    {errors.postalAddress.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6 pt-10">
              <Link to={"/Home"}>
                <Button
                  radius="full"
                  variant="light"
                  color="danger"
                  className={btnSecondaryStyle}
                  onClick={() => reset()}
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                radius="full"
                variant="flat"
                className={btnPrimaryStyle}
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DegreeForm;
