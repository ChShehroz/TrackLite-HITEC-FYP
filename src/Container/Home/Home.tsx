import { useEffect } from "react";
import CampusIssueDesk from "../../Component/CampusIssueDesk";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
import MySlider from "../../Component/Slider/Slider";

const Home = () => {
  useEffect(() => {
    document.title = "TrackLite HITEC | Home";
  });

  return (
    <>
      <NavBar />
      <MySlider />
      <CampusIssueDesk />
      <Footer />
    </>
  );
};

export default Home;
