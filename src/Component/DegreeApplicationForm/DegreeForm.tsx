import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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

const DegreeForm = ({}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DegreeFormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: DegreeFormData) => {
    console.log(data);
    reset();
  };
  const formInputStyle = `w-full bg-[#fffcf1] px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E3C3A9]`;
  const btnPrimaryStyle = `bg-black text-white font-semibold px-8 py-1 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50`;
  const btnSecondaryStyle = `bg-transparent text-red-500 font-semibold px-8 py-1 rounded-full rounded border-2 border-red-400 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50`;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-[#545454] font-semibold my-10">
        Degree Clearance Application
      </h2>
      <div className="bg-[#CB97E7] rounded-3xl pt-1 shadow-xl max-w-4xl w-full mb-20">
        <div className="bg-[#EFE7CD] p-12 rounded-t-2xl rounded-b-3xl max-w-4xl w-full">
          <p className="text-sm text-center mx-24 mb-6">
            Welcome to the Degree Clearance application portal. Here, you can
            submit your request for degree clearance, ensuring that all academic
            and administrative requirements are fulfilled before your
            graduation.
          </p>
          <div className="flex flex-col items-center justify-center mt-4 mb-8">
            <div className="w-[90%] border-t border-gray-400 mx-auto"></div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(submitData)}>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="fatherName"
                >
                  Father's Name
                </label>
                <input
                  {...register("fatherName")}
                  id="fatherName"
                  type="text"
                  placeholder="Enter the father's name"
                  className={formInputStyle}
                />
                {errors.fatherName && (
                  <span className="text-red-500 text-xs">
                    {errors.fatherName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="semester"
                >
                  Semester
                </label>
                <input
                  {...register("semester")}
                  type="text"
                  id="semester"
                  placeholder="Enter the current semester"
                  className={formInputStyle}
                />
                {errors.semester && (
                  <span className="text-red-500 text-xs">
                    {errors.semester.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-2/3">
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
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="reasonForLeaving"
                >
                  Reason for Leaving
                </label>
                <input
                  {...register("reasonForLeaving")}
                  type="text"
                  id="reasonForLeaving"
                  placeholder="Specify the reason for leaving"
                  className={formInputStyle}
                />
                {errors.reasonForLeaving && (
                  <span className="text-red-500 text-xs">
                    {errors.reasonForLeaving.message}
                  </span>
                )}
              </div>
            </div>
            <div className="pb-6">
              <label
                className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                htmlFor="postalAddress"
              >
                Postal Address
              </label>
              <input
                {...register("postalAddress")}
                type="text"
                id="postalAddress"
                placeholder="Enter your postal address"
                className={formInputStyle}
              />
              {errors.postalAddress && (
                <span className="text-red-500 text-xs">
                  {errors.postalAddress.message}
                </span>
              )}
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
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DegreeForm;
