import { useEffect } from "react";
import Footer from "../../Component/Footer";
import LostFoundForm from "../../Component/LostFoundForm/LostFoundForm";
import NavBar from "../../Component/NavBar";

const LostFoundReport = () => {
  const handleSubmit = (data: {
    name: string;
    location: string;
    phone: string;
    email: string;
    reportType: "Lost Item" | "Found Item";
    description: string;
    dateAndTime: string;
    photo?: any;
  }) => {
    // Perform some action with the form data
    console.log(data);
  };

  useEffect(() => {
    document.title = "Lost-Found";
  });
  return (
    <>
      <NavBar />
      <LostFoundForm onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default LostFoundReport;
