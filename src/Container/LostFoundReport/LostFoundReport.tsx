import { useEffect } from "react";
import Footer from "../../Component/Footer";
import LostFoundForm from "../../Component/LostFoundForm/LostFoundForm";
import NavBar from "../../Component/NavBar";
import axiosInstance from "../../axiosInstance";

const LostFoundReport = () => {
  const handleSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("location", data.location);
    formData.append("description", data.description);
    formData.append("dateAndTime", data.dateAndTime);
    formData.append("reportType", data.reportType);
    formData.append("photo", data.photo);

    try {
      const response = await axiosInstance.post("/lostfound", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response data:", response.data);

      // Handle the response data (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("Error submitting the form:", error);
      // Handle error (e.g., show an error message)
    }
  };

  useEffect(() => {
    document.title = "Lost-Found";
  }, []);

  return (
    <>
      <NavBar />
      <LostFoundForm onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default LostFoundReport;
