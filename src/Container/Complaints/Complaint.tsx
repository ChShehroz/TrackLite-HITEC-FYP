import ComplaintForm from "../../Component/ComplaintForm/ComplaintForm";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";

const Complaint = () => {
  const handleSubmit = (data: {
    email: string;
    name: string;
    complaintNature: string;
    issueDescription: string;
  }) => {
    // Perform some action with the form data
    console.log(data);
  };

  return (
    <>
      <NavBar />
      <ComplaintForm onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default Complaint;
