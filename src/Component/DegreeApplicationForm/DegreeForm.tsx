import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const schema = z.object({
  studentName: z.string(),
  fatherName: z.string(),
  rollNo: z.string(),
  semester: z.string(),
  email: z.string(),
  phone: z.string(),
  reasonForLeaving: z.string(),
  postalAddress: z.string(),
});

type DegreeFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: DegreeFormData) => void;
}

const DegreeForm = ({}: Props) => {
  const { register, handleSubmit, reset } = useForm<DegreeFormData>({
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
