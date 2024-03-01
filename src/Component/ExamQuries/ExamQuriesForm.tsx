import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  RadioGroup,
  Radio,
  Button,
} from "@nextui-org/react";
import { FaCircleQuestion } from "react-icons/fa6";

const schema = z.object({
  queryType: z.enum(["Apply for 'I' Grade", "Request Exam Recheck"]),
  studentName: z.string().min(1, "Student's name is required."),
  rollNo: z.string().min(1, "Roll number is required."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Invalid email address."),
  phone: z
    .string()
    .min(1, { message: "Phone number is required." })
    .regex(/^\d{11}$/, { message: "Phone number must be 11 digits." }),
  courseName: z.string().min(1, "Course name is required."),
  courseCode: z.string().min(1, "Course code is required."),
  reason: z.string().min(20, "Please provide a detailed reason or concern."),
  file: z.instanceof(File).optional(),
});

type ExamQuriesFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExamQuriesFormData) => void;
}

const ExamQuriesForm = ({}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ExamQuriesFormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: ExamQuriesFormData) => {
    console.log(data);
    reset();
  };
  // Tailwind CSS classes
  const formInputStyle = `w-full bg-[#fffcf1] px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E3C3A9]`;
  const btnPrimaryStyle = `px-8 py-1 flex items-center text-sm space-x-2 bg-slate-800 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400`;
  const btnSecondaryStyle = `px-8 py-1 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50`;
  const textAreaStyle = `w-full bg-[#fffcf1] px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#E3C3A9]`;
  const formLabel = `block text-gray-700 text-sm font-medium ml-4 mb-1`;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-slate-800 font-semibold my-10">
        Exam Query Assistance
      </h2>
      <div className="bg-[#ff7d60] rounded-3xl pt-1 shadow-xl max-w-4xl w-full mb-20">
        <div className="relative bg-[#EFE7CD] p-14 rounded-t-2xl rounded-b-3xl max-w-4xl w-full">
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
                  Exam Query Assistance
                </div>
                <div className="text-tiny text-slate-600">
                  Need help with exam-related issues? Whether it's applying for
                  an Incomplete grade or requesting an exam recheck, we're here
                  to support you through the process. Use this form to submit
                  your exam queries and we will guide you accordingly.
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <form onSubmit={handleSubmit(submitData)} className="space-y-4">
            <div className="flex items-center mb-4">
              <p className="font-semibold mx-4">Type of Query</p>
              <Controller
                name="queryType"
                control={control}
                render={({ field }) => (
                  <div className="flex space-x-4">
                    <RadioGroup orientation="horizontal">
                      <Radio
                        {...register("queryType")}
                        type="radio"
                        value="Apply for 'I' Grade"
                        checked={field.value === "Apply for 'I' Grade"}
                        className="form-radio text-blue-600 border-gray-300"
                      >
                        Apply for 'I' Grade
                      </Radio>
                      <Radio
                        {...register("queryType")}
                        type="radio"
                        value="Request Exam Recheck"
                        checked={field.value === "Request Exam Recheck"}
                        className="form-radio text-blue-600 border-gray-300"
                      >
                        Request Exam Recheck
                      </Radio>
                    </RadioGroup>
                  </div>
                )}
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="studentName">
                  Student's Name
                </label>
                <input
                  {...register("studentName")}
                  id="studentName"
                  type="text"
                  placeholder="Enter the student's name"
                  className={formInputStyle}
                />
                {errors.studentName && (
                  <span className="text-red-500 text-xs">
                    {errors.studentName.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="rollNo">
                  Roll Number
                </label>
                <input
                  {...register("rollNo")}
                  type="text"
                  id="rollNo"
                  placeholder="Enter your roll number"
                  className={formInputStyle}
                />
                {errors.rollNo && (
                  <span className="text-red-500 text-xs">
                    {errors.rollNo.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="courseName">
                  Course Name
                </label>
                <input
                  {...register("courseName")}
                  id="courseName"
                  className={formInputStyle}
                  placeholder="Enter the course name"
                />
                {errors.courseName && (
                  <span className="text-red-500 text-xs">
                    {errors.courseName.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="courseCode">
                  Course Code
                </label>
                <input
                  id="courseCode"
                  type="text"
                  {...register("courseCode")}
                  className={formInputStyle}
                  placeholder="Enter the course code"
                />
                {errors.courseCode && (
                  <span className="text-red-500 text-xs">
                    {errors.courseCode.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="email">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className={formInputStyle}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className={formInputStyle}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="reason">
                  Detailed Reason
                </label>
                <textarea
                  {...register("reason")}
                  id="reason"
                  rows={3}
                  className={textAreaStyle}
                  placeholder="Describe the reason for your query in detail."
                ></textarea>
                {errors.reason && (
                  <span className="text-red-500 text-xs">
                    {errors.reason.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="file">
                  Supporting Documents (optional)
                </label>
                <div
                  className={`flex items-center ${formInputStyle} cursor-pointer relative`}
                >
                  <input
                    {...register("file")}
                    type="file"
                    id="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => console.log(e.target.files)}
                  />
                  <FontAwesomeIcon
                    icon={faUpload}
                    className="h-4 w-5 text-gray-500 al mr-2"
                  />
                  <span>Upload a file</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
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
                Report Item
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExamQuriesForm;
