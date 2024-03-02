import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Input,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { FaPhoneAlt, FaUpload } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaCircleQuestion } from "react-icons/fa6";
import { Props } from "@fortawesome/react-fontawesome";

// Define your form schema using Zod
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
    .min(1, "Phone number is required.")
    .regex(/^\d{11}$/, "Phone number must be 11 digits."),
  courseName: z.string().min(1, "Course name is required."),
  courseCode: z.string().min(1, "Course code is required."),
  reason: z.string().min(20, "Please provide a detailed reason or concern."),
  file: z.instanceof(FileList).optional(),
});

type ExamQueriesFormData = z.infer<typeof schema>;

const ExamQuriesForm = ({}: Props) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ExamQueriesFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ExamQueriesFormData) => {
    console.log(data);
    // Process the file here if necessary
    // Example: console.log(data.file?.[0]);
    reset();
  };
  // Tailwind CSS classes
  const btnPrimaryStyle = `px-8 py-1 flex items-center text-sm space-x-2 bg-slate-800 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400`;
  const btnSecondaryStyle = `px-8 py-1 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50`;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-slate-800 font-semibold my-10">
        Exam Query Assistance
      </h2>
      <div className="bg-[#ff7d60] rounded-3xl pt-1 shadow-xl max-w-4xl w-full mb-20">
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center mb-4">
              <p className="font-semibold text-slate-800 mr-4">Type of Query</p>
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
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-60 md:mb-5">
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
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Input
                  {...register("courseName")}
                  type="courseName"
                  label="Course Name"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
                {errors.courseName && (
                  <span className="text-red-500 text-xs">
                    {errors.courseName.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-5">
                <Input
                  {...register("courseCode")}
                  type="courseCode"
                  label="Course Code"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
                {errors.courseCode && (
                  <span className="text-red-500 text-xs">
                    {errors.courseCode.message}
                  </span>
                )}
              </div>

              <div className="w-full md:w-2/3 px-3">
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
                    <FaPhoneAlt className="text-xl text-slate-400 mr-1 pointer-events-none flex-shrink-0" />
                  }
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <Input
                  {...register("file")}
                  type="file"
                  label="Supporting Documents (optional)"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  accept=".pdf,.docx"
                  onChange={(e) => {
                    register("file").onChange(e);
                  }}
                  endContent={
                    <FaUpload
                      className="text-xl text-slate-400 mr-1 pointer-events-none flex-shrink-0"
                      onClick={() =>
                        document.getElementById("file-upload")?.click()
                      }
                    />
                  }
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
              </div>
              <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <Textarea
                  {...register("reason")}
                  type="reaason"
                  label="Detail Reason"
                  labelPlacement="outside"
                  placeholder="Describe the reason for your query in detail..."
                  size="sm"
                  minRows={2}
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                ></Textarea>
                {errors.reason && (
                  <span className="text-red-500 text-xs">
                    {errors.reason.message}
                  </span>
                )}
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
