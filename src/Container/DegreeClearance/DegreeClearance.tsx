import { useEffect } from "react";
import DegreeForm from "../../Component/DegreeApplicationForm/DegreeForm";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";

const DegreeClearance = () => {
  const handleSubmit = (data: {
    phone: string;
    studentName: string;
    fatherName: string;
    rollNo: string;
    semester: string;
    email: string;
    reasonForLeaving: string;
    postalAddress: string;
  }) => {
    // Perform some action with the form data
    console.log(data);
  };

  useEffect(() => {
    document.title = "Degree-Clearance";
  });

  return (
    <>
      <NavBar />
      <DegreeForm onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default DegreeClearance;
