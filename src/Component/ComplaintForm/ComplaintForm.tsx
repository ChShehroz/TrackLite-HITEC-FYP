import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const schema = z.object({
  name: z.string().min(1, "Name is required."),
  complaintNature: z.string().min(1, "Complaint nature is required."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Invalid email address."),
  issueDescription: z
    .string()
    .min(1, "Issue description is required.")
    .min(20, "Issue description must be at least 20 characters."),
});

type ComplaintFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ComplaintFormData) => void;
}

const ComplaintForm = ({}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ComplaintFormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: ComplaintFormData) => {
    console.log(data);
    reset();
  };

  const formInputStyle = `w-full bg-[#fffcf1] px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E3C3A9]`;
  const btnPrimaryStyle = `bg-black text-white font-semibold px-8 py-1 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50`;
  const btnSecondaryStyle = `bg-transparent text-red-500 font-semibold px-8 py-1 rounded-full rounded border-2 border-red-400 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50`;
  const textAreaStyle = `w-full bg-[#fffcf1] px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#E3C3A9]`;
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-[#545454] font-semibold my-10">
        Submit a Complaint
      </h2>
      <div className="bg-[#ace797] rounded-3xl pt-1 shadow-xl max-w-4xl w-full mb-20">
        <div className="bg-[#EFE7CD] p-12 rounded-t-2xl rounded-b-3xl max-w-4xl w-full">
          <p className="text-sm text-center mx-24 mb-6">
            Your voice matters to us. If you've encountered any issues or have
            concerns regarding campus life, academics, or services, please let
            us know. This form allows you to report and submit a complaint which
            will be promptly addressed by our team.
          </p>
          <div className="flex flex-col items-center justify-center mt-4 mb-8">
            <div className="w-[90%] border-t border-gray-400 mx-auto"></div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(submitData)}>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  {...register("name")}
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className={formInputStyle}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="complaintNature"
                >
                  Nature of Complaint
                </label>
                <input
                  {...register("complaintNature")}
                  id="complaintNature"
                  type="text"
                  placeholder="Enter the nature of complaint"
                  className={formInputStyle}
                />
                {errors.complaintNature && (
                  <span className="text-red-500 text-xs">
                    {errors.complaintNature.message}
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
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                htmlFor="issueDescription"
              >
                Detailed Description of the Issue
              </label>
              <textarea
                {...register("issueDescription")}
                name="issueDescription"
                id="issueDescription"
                rows={5}
                className={textAreaStyle}
                placeholder="Describe the issue in detail"
                defaultValue={""}
              ></textarea>
              {errors.issueDescription && (
                <span className="text-red-500 text-xs">
                  {errors.issueDescription.message}
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
                Submit Complaint
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
