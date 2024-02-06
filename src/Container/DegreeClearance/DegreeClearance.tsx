import DegreeForm from "../../Component/DegreeApplicationForm/DegreeForm";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";

const DegreeClearance = () => {
  return (
    <>
      <NavBar />
      <DegreeForm
        onSubmit={function (_data: {
          phone: string;
          studentName: string;
          fatherName: string;
          rollNo: string;
          semester: string;
          email: string;
          reasonForLeaving: string;
          postalAddress: string;
        }): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Footer />
    </>
  );
};

export default DegreeClearance;
