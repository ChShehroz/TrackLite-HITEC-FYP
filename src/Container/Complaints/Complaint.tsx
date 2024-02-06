import ComplaintForm from "../../Component/ComplaintForm/ComplaintForm";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";

const Complaint = () => {
  return (
    <>
      <NavBar />
      <ComplaintForm
        onSubmit={function (_data: {
          email: string;
          name: string;
          complaintNature: string;
          issueDescription: string;
        }): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Footer />
    </>
  );
};

export default Complaint;
