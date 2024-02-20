import { useEffect } from "react";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
import RequestTable from "../../Component/RequestHistoryTable";

const RequestHistory = () => {
  useEffect(() => {
    document.title = "Request-History";
  });
  return (
    <>
      <NavBar />
      <RequestTable />
      <Footer />
    </>
  );
};

export default RequestHistory;
