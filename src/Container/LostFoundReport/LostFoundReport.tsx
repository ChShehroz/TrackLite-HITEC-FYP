import Footer from "../../Component/Footer";
import LostFoundForm from "../../Component/LostFoundForm/LostFoundForm";
import NavBar from "../../Component/NavBar";

const LostFoundReport = () => {
  return (
    <>
      <NavBar />
      <LostFoundForm
        onSubmit={function (_data: {
          name: string;
          location: string;
          phone: string;
          email: string;
          reportType: "Lost Item" | "Found Item";
          description: string;
          dateAndTime: string;
          photo?: any;
        }): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Footer />
    </>
  );
};

export default LostFoundReport;
