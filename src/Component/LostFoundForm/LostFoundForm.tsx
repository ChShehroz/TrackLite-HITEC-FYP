import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
import {
  FaCircleQuestion,
  FaLocationDot,
  FaPhone,
  FaUpload,
} from "react-icons/fa6";
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
  photo: z.any().optional(),
});

type LostAndFoundData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: LostAndFoundData) => void;
}

const LostFoundForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<LostAndFoundData>({
    resolver: zodResolver(schema),
  });

  const submitData = async (data: LostAndFoundData) => {
    onSubmit(data);
    reset();
  };

  useEffect(() => {
    document.title = "Lost-Found";
  }, []);

  const btnPrimaryStyle = `px-8 py-1 flex items-center text-sm space-x-2 bg-slate-800 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400`;
  const btnSecondaryStyle = `px-8 py-1 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50`;

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
                className="absolute top-5 right-8"
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
              <p className="font-semibold text-red-500 mr-4">I am Reporting:</p>
              <Controller
                name="reportType"
                control={control}
                defaultValue="Lost Item"
                render={({ field }) => (
                  <div className="flex space-x-4">
                    <RadioGroup
                      {...field}
                      value={field.value}
                      onChange={field.onChange}
                      orientation="horizontal"
                    >
                      <Radio
                        value="Lost Item"
                        className="form-radio text-blue-600 border-gray-300"
                      >
                        Lost Item
                      </Radio>
                      <Radio
                        value="Found Item"
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
                  type="text"
                  label="Name"
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
                  type="text"
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
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Input
                  {...register("dateAndTime")}
                  id="dateTime"
                  type="datetime-local"
                  label="Date and Time"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                />
                {errors.dateAndTime && (
                  <span className="text-red-500 text-xs">
                    {errors.dateAndTime.message}
                  </span>
                )}
              </div>

              <div className="w-1/2 px-3 md:mb-5">
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

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  {...register("location")}
                  id="location"
                  label="Location (Last Seen/Found)"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                  endContent={
                    <FaLocationDot className="text-2xl text-slate-400 mr-1 pointer-events-none flex-shrink-0" />
                  }
                />
                {errors.location && (
                  <span className="text-red-500 text-xs">
                    {errors.location.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Controller
                  name="photo"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="file"
                      id="file-upload"
                      label="Photo (optional for found items)"
                      labelPlacement="outside"
                      size="sm"
                      variant="underlined"
                      accept="image/*"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files && files.length > 0) {
                          field.onChange(files[0]);
                        } else {
                          field.onChange(null);
                        }
                      }}
                      startContent={
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
                  )}
                />
              </div>
              <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <Input
                  {...register("description")}
                  id="description"
                  type="text"
                  label="Description of Item"
                  labelPlacement="outside"
                  size="sm"
                  variant="underlined"
                  classNames={{
                    label: ["text-slate-800", "text-sm"],
                  }}
                />
                {errors.description && (
                  <span className="text-red-500 text-xs">
                    {errors.description.message}
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
