import { useEffect } from "react";
import axios from "axios"; // Use axios directly or your configured instance
import DegreeForm from "../../Component/DegreeApplicationForm/DegreeForm";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";

const DegreeClearance = () => {
  const handleSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/degree",
        data
      );

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
