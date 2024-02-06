import ExamQuriesForm from "../../Component/ExamQuries/ExamQuriesForm";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";

const ExamQuries = () => {
  return (
    <>
      <NavBar />
      <ExamQuriesForm
        onSubmit={function (_data: {
          studentName: string;
          rollNo: string;
          email: string;
          phone: string;
          queryType: "Apply for 'I' Grade" | "Request Exam Recheck";
          courseName: string;
          courseCode: string;
          reason: string;
          file?: File | undefined;
        }): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Footer />
    </>
  );
};

export default ExamQuries;
