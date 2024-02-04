import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/20/solid";

const schema = z.object({
  reportType: z.enum(["Lost Item", "Found Item"]),
  name: z.string().min(1, "Name is required."),
  email: z
    .string()
    .email("Invalid email address.")
    .min(1, "Email is required."),
  phone: z.string().regex(/^\d{11}$/, "Phone number must be 11 digits"),
  location: z.string().min(1, "Location is required."),
  description: z.string().min(1, "Description is required."),
  dateAndTime: z.string().min(1, "Date and time are required."),
  photo: z.any(),
});

type LostAndFoundData = z.infer<typeof schema>;

const LostFoundForm = () => {
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
  const btnPrimaryStyle = `bg-black text-white font-semibold px-8 py-1 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50`;
  const btnSecondaryStyle = `bg-transparent text-red-500 font-semibold px-8 py-1 rounded-full rounded border-2 border-red-400 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50`;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-[#545454] font-semibold my-10">
        Lost and Found Reporting
      </h2>
      <div className="bg-[#CB97E7] rounded-3xl pt-1 shadow-xl max-w-4xl w-full mb-20">
        <div className="bg-[#EFE7CD] p-12 rounded-t-2xl rounded-b-3xl max-w-4xl w-full">
          <p className="text-sm text-center mx-24 mb-6">
            Lost something on campus? We're here to help. Use this form to
            report any items you've lost or found on campus. Our Lost and Found
            team will assist in reuniting items with their rightful owners.
          </p>
          <div className="flex flex-col items-center justify-center mt-4 mb-8">
            <div className="w-[90%] border-t border-gray-400 mx-auto"></div>
          </div>
          <form onSubmit={handleSubmit(submitData)} className="space-y-4">
            <div className="flex items-center mb-4">
              <p className="font-semibold text-red-500 mx-4">I am Reporting:</p>
              <Controller
                name="reportType"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        {...register("reportType")}
                        type="radio"
                        value="Lost Item"
                        checked={field.value === "Lost Item"}
                        className="form-radio h-5 w-5 text-blue-600 border-gray-300"
                      />
                      <span className="text-sm font-medium">Lost Item</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        {...register("reportType")}
                        type="radio"
                        value="Found Item"
                        checked={field.value === "Found Item"}
                        className="form-radio h-5 w-5 text-blue-600 border-gray-300"
                      />
                      <span className="text-sm font-medium">Found Item</span>
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
                  Name
                </label>
                <input
                  {...register("name")}
                  id="studentName"
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
            <div className="flex space-x-4">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="location"
                >
                  Location (Last Seen/Found)
                </label>
                <input
                  {...register("location")}
                  id="location"
                  className={formInputStyle}
                  placeholder="Where was the item last seen or found?"
                />
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="description"
                >
                  Description of Item
                </label>
                <input
                  id="description"
                  type="text"
                  {...register("description")}
                  className={formInputStyle}
                  placeholder="Provide a detailed description of the item"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="photoItem"
                >
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
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="dateTime"
                >
                  Date and Time
                </label>
                <input
                  {...register("dateAndTime")}
                  id="dateTime"
                  type="datetime-local"
                  className={formInputStyle}
                  placeholder="Date and Time"
                />
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
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LostFoundForm;
