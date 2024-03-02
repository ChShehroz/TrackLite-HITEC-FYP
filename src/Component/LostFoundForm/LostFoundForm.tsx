import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/20/solid";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  RadioGroup,
  Radio,
  Button,
  Input,
} from "@nextui-org/react";
import { useEffect } from "react";
import { FaCircleQuestion, FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const schema = z.object({
  reportType: z.enum(["Lost Item", "Found Item"]),
  name: z.string().min(1, "Name is required."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Invalid email address."),
  phone: z
    .string()
    .min(1, { message: "Phone number is required." })
    .regex(/^\d{11}$/, { message: "Phone number must be 11 digits." }),
  location: z.string().min(1, "Location is required."),
  description: z.string().min(1, "Description is required."),
  dateAndTime: z.string().min(1, "Date and time are required."),
  photo: z.any(),
});

type LostAndFoundData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: LostAndFoundData) => void;
}

const LostFoundForm = ({}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<LostAndFoundData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: LostAndFoundData) => {
    console.log(data);
    reset();
  };

  // Tailwind CSS classes
  const formInputStyle = `w-full bg-[#fffcf1] px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E3C3A9]`;
  const btnPrimaryStyle = `px-8 py-1 flex items-center text-sm space-x-2 bg-slate-800 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400`;
  const btnSecondaryStyle = `px-8 py-1 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50`;
  const formLabel = `block text-gray-700 text-sm font-medium ml-4 mb-1`;

  useEffect(() => {
    document.title = "Lost-Found";
  });

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-slate-800 font-semibold my-10">
        Lost and Found Reporting
      </h2>
      <div className="bg-[#ff607d] rounded-3xl pt-1 shadow-xl max-w-4xl w-full mb-20">
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
                  Lost and Found Reporting
                </div>
                <div className="text-tiny text-slate-600">
                  Lost something on campus? We're here to help. Use this form to
                  report any items you've lost or found on campus. Our Lost and
                  Found team will assist in reuniting items with their rightful
                  owners.
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <form onSubmit={handleSubmit(submitData)} className="space-y-4">
            <div className="flex items-center mb-4">
              <p className="font-semibold text-red-500 mx-4">I am Reporting:</p>
              <Controller
                name="reportType"
                control={control}
                render={({ field }) => (
                  <div className="flex space-x-4">
                    <RadioGroup orientation="horizontal">
                      <Radio
                        {...register("reportType")}
                        type="radio"
                        value="Lost Item"
                        checked={field.value === "Lost Item"}
                        className="form-radio text-blue-600 border-gray-300"
                      >
                        Lost Item
                      </Radio>
                      <Radio
                        {...register("reportType")}
                        type="radio"
                        value="Found Item"
                        checked={field.value === "Found Item"}
                        className="form-radio text-blue-600 border-gray-300"
                      >
                        Found Item
                      </Radio>
                    </RadioGroup>
                  </div>
                )}
              />
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-60 md:mb-5">
                <Input
                  {...register("name")}
                  type="studentname"
                  label="Student's Name"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
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
            </div>
            <div className="w-2/3">
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
            <div className="flex space-x-4">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="location">
                  Location (Last Seen/Found)
                </label>
                <input
                  {...register("location")}
                  id="location"
                  className={formInputStyle}
                  placeholder="Where was the item last seen or found?"
                />
                {errors.location && (
                  <span className="text-red-500 text-xs">
                    {errors.location.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="description">
                  Description of Item
                </label>
                <input
                  id="description"
                  type="text"
                  {...register("description")}
                  className={formInputStyle}
                  placeholder="Provide a detailed description of the item"
                />
                {errors.description && (
                  <span className="text-red-500 text-xs">
                    {errors.description.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="photoItem">
                  Item Photo (optional for found items)
                </label>
                <div className="mt-2 flex justify-center rounded-3xl border border-dashed border-gray-400 px-6 py-4">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-10 w-10 text-gray-700"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-800">
                      PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label className={formLabel} htmlFor="dateTime">
                  Date and Time
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

export default LostFoundForm;
