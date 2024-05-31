import { useEffect } from "react";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
import ExamQuriesForm from "../../Component/ExamQuries/ExamQuriesForm";
import axiosInstance from "../../axiosInstance";

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
      formData.append("file", data.file[0]); // Ensure file is appended correctly

      console.log("Submitting form data:", data); // Log form data for debugging

      const response = await axiosInstance.post("/examqueries", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response data:", response.data); // Log response data
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
      <ExamQuriesForm onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default LostFoundReport;
