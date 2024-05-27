import { useEffect } from "react";
import ComplaintForm from "../../Component/ComplaintForm/ComplaintForm";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
import axios from "axios";

const Complaint = () => {
  const handleSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/complaints",
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
    document.title = "Complaints";
  });

  return (
    <>
      <NavBar />
      <ComplaintForm onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default Complaint;
