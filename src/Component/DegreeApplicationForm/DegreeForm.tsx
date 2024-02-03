import React, { useState } from "react";

interface FormState {
  studentName: string;
  fatherName: string;
  rollNo: string;
  semester: string;
  email: string;
  phone: string;
  reasonForLeaving: string;
  postalAddress: string;
}

const DegreeForm: React.FC = () => {
  const formInputStyle = `w-full bg-[#fffcf1] px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E3C3A9]`;
  const btnPrimaryStyle = `bg-black text-white font-semibold px-8 py-1 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50`;
  const btnSecondaryStyle = `bg-transparent text-red-500 font-semibold px-8 py-1 rounded-full rounded border-2 border-red-400 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50`;

  const [formState, setFormState] = useState<FormState>({
    studentName: "",
    fatherName: "",
    rollNo: "",
    semester: "",
    email: "",
    phone: "",
    reasonForLeaving: "",
    postalAddress: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic goes here
    console.log(formState);
  };

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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="studentName"
                >
                  Student Name
                </label>
                <input
                  id="studentName"
                  type="text"
                  placeholder="Enter student's name"
                  name="studentName"
                  value={formState.studentName}
                  onChange={handleChange}
                  className={formInputStyle}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                  htmlFor="fatherName"
                >
                  Father Name
                </label>
                <input
                  id="fatherName"
                  type="text"
                  placeholder="Enter father's name"
                  name="fatherName"
                  value={formState.fatherName}
                  onChange={handleChange}
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
                  Roll No
                </label>
                <input
                  type="text"
                  name="rollNo"
                  value={formState.rollNo}
                  onChange={handleChange}
                  placeholder="Enter your registration number"
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
                  type="text"
                  name="semester"
                  value={formState.semester}
                  onChange={handleChange}
                  placeholder="Semester"
                  className={formInputStyle}
                />
              </div>
            </div>
            <div className="w-2/3">
              <label
                className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
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
                  Phone No
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
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
                  type="text"
                  name="reasonForLeaving"
                  value={formState.reasonForLeaving}
                  onChange={handleChange}
                  placeholder="Reason for Leaving"
                  className={formInputStyle}
                />
              </div>
            </div>
            <div className="pb-6">
              <label
                className="block text-gray-700 text-sm font-medium ml-4 mb-2"
                htmlFor="postalAddress"
              >
                Postal address
              </label>
              <input
                type="text"
                name="postalAddress"
                value={formState.postalAddress}
                onChange={handleChange}
                placeholder="Enter your postal address"
                className={formInputStyle}
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button type="button" className={btnSecondaryStyle}>
                Cancel
              </button>
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
