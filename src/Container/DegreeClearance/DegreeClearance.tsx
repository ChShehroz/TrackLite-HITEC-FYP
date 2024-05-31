import { useEffect } from "react";
import DegreeForm from "../../Component/DegreeApplicationForm/DegreeForm";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
import axiosInstance from "../../axiosInstance";

const DegreeClearance = () => {
  const handleSubmit = async (data: any) => {
    try {
      const response = await axiosInstance.post("/degree", data);

      console.log(response.data);

      // Handle the response data (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("Error submitting the form:", error);
      // Handle error (e.g., show an error message)
    }
  };

  useEffect(() => {
    document.title = "Degree-Clearance";
  }, []);

  return (
    <>
      <NavBar />
      <DegreeForm onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default DegreeClearance;
