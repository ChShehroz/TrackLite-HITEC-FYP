import { useEffect } from "react";
import axios from "axios";
import Footer from "../../Component/Footer";
import LostFoundForm from "../../Component/LostFoundForm/LostFoundForm";
import NavBar from "../../Component/NavBar";

const LostFoundReport = () => {
  const handleSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      formData.append("studentName", data.studentName);
      formData.append("rollNo", data.rollNo);
      formData.append("courseName", data.courseName);
      formData.append("courseCode", data.courseCode);
      formData.append("queryType", data.queryType);
      formData.append("reason", data.reason);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("file", data.file[0]);

      const response = await axios.post(
        "http://localhost:5000/api/v1/examqueries",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error submitting the form:", error);
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
