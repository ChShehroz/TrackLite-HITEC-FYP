import ExamQuriesForm from "../../Component/ExamQuries/ExamQuriesForm";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";

const ExamQuries = () => {
  const handleSubmit = (data: {
    studentName: string;
    rollNo: string;
    email: string;
    phone: string;
    queryType: "Apply for 'I' Grade" | "Request Exam Recheck";
    courseName: string;
    courseCode: string;
    reason: string;
    file?: File | undefined;
  }) => {
    // Perform some action with the form data
    console.log(data);
  };
  return (
    <>
      <NavBar />
      <ExamQuriesForm onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default ExamQuries;
