import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const schema = z.object({
  qureyType: z.enum(["Apply for 'I' Grade", "Exam Rechecking"]),
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
  dateAndTime: z.string().min(1, "Date and time are required."),
  photo: z.any(),
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
  const btnPrimaryStyle = `bg-black text-white font-semibold px-8 py-1 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50`;
  const btnSecondaryStyle = `bg-transparent text-red-500 font-semibold px-8 py-1 rounded-full rounded border-2 border-red-400 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50`;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-[#545454] font-semibold my-10">
        Exam Query Assistance
      </h2>
      <div className="bg-[#ff607d] rounded-3xl pt-1 shadow-xl max-w-4xl w-full mb-20">
        <div className="bg-[#EFE7CD] p-12 rounded-t-2xl rounded-b-3xl max-w-4xl w-full">
          <p className="text-sm text-center mx-24 mb-4">
            Need help with exam-related issues? Whether it's applying for an
            Incomplete grade or requesting an exam recheck, we're here to
            support you through the process. Use this form to submit your exam
            queries and we will guide you accordingly.
          </p>
          <div className="flex flex-col items-center justify-center mt-4 mb-8">
            <div className="w-[90%] border-t border-gray-400 mx-auto"></div>
          </div>
          <form onSubmit={handleSubmit(submitData)} className="space-y-4">
            <div className="flex items-center mb-4">
              <p className="font-semibold mx-4">Type of Query</p>
              <Controller
                name="qureyType"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        {...register("qureyType")}
                        type="radio"
                        value="Apply for 'I' Grade"
                        checked={field.value === "Apply for 'I' Grade"}
                        className="form-radio h-5 w-5 text-blue-600 border-gray-300"
                      />
                      <span className="text-sm font-medium">
                        Apply for 'I' Grade
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        {...register("qureyType")}
                        type="radio"
                        value="Exam Rechecking"
                        checked={field.value === "Exam Rechecking"}
                        className="form-radio h-5 w-5 text-blue-600 border-gray-300"
                      />
                      <span className="text-sm font-medium">
                        Exam Rechecking
                      </span>
                    </label>
                  </div>
                )}
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="studentName"
                >
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
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="rollNo"
                >
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
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="courseName"
                >
                  Course Name
                </label>
                <input
                  {...register("courseName")}
                  id="courseName"
                  className={formInputStyle}
                  placeholder="Where was the item last seen or found?"
                />
                {errors.courseName && (
                  <span className="text-red-500 text-xs">
                    {errors.courseName.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="courseCode"
                >
                  Course Code
                </label>
                <input
                  id="courseCode"
                  type="text"
                  {...register("courseCode")}
                  className={formInputStyle}
                  placeholder="Provide a detailed description of the item"
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
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="email"
                >
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
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="phone"
                >
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

            <div className="flex space-x-4">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="dateTime"
                >
                  Detailed Reason/Concern
                </label>
                <input
                  {...register("dateAndTime")}
                  id="dateTime"
                  type="datetime-local"
                  className={formInputStyle}
                  placeholder="Date and Time"
                />
                {errors.dateAndTime && (
                  <span className="text-red-500 text-xs">
                    {errors.dateAndTime.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Link to={"/Home"}>
                <button
                  type="button"
                  className={btnSecondaryStyle}
                  onClick={() => reset()}
                >
                  Cancel
                </button>
              </Link>
              <button type="submit" className={btnPrimaryStyle}>
                Report Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExamQuriesForm;