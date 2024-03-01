import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { FaCircleQuestion } from "react-icons/fa6";

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
  const btnPrimaryStyle = `px-8 py-1 flex items-center text-sm space-x-2 bg-slate-800 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400`;
  const btnSecondaryStyle = `px-8 py-1 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50`;
  const textAreaStyle = `w-full bg-[#fffcf1] px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#E3C3A9]`;
  const formLabel = `block text-gray-700 text-sm font-medium ml-4 mb-1`;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-slate-800 font-semibold my-10">
        Submit a Complaint
      </h2>
      <div className="bg-[#ace797] rounded-3xl pt-1 shadow-xl max-w-4xl w-full mb-20">
        <div className="relative bg-[#EFE7CD] p-14 rounded-t-2xl rounded-b-3xl max-w-4xl w-full ">
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
                  Complaint
                </div>
                <div className="text-tiny text-slate-600">
                  Your voice matters to us. If you've encountered any issues or
                  have concerns regarding campus life, academics, or services,
                  please let us know. This form allows you to report and submit
                  a complaint which will be promptly addressed by our team.
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <form className="space-y-4" onSubmit={handleSubmit(submitData)}>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="name">
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
                <label className={formLabel} htmlFor="complaintNature">
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
              <label className={formLabel} htmlFor="issueDescription">
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
                Submit Complaint
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
