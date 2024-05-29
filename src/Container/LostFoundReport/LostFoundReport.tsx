import { useEffect } from "react";
import Footer from "../../Component/Footer";
import LostFoundForm from "../../Component/LostFoundForm/LostFoundForm";
import NavBar from "../../Component/NavBar";
import axios from "axios";

const LostFoundReport = () => {
  const handleSubmit = async (data: any) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "photo" && data[key]) {
        formData.append(key, data[key]);
      } else {
        formData.append(key, data[key]);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/lostfound",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

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
