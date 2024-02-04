import { Routes, Route } from "react-router-dom";
import GetStarted from "../Container/GetStarted/GetStarted";
import SignUp from "../Container/SignUp/SignUp";
import SignIn from "../Container/LogIn/LogIn";
import Home from "../Container/Home/Home";
import DegreeClearance from "../Container/DegreeClearance/DegreeClearance";
import LostFoundForm from "../Component/LostFoundForm/LostFoundForm";
import LostFoundReport from "../Container/LostFoundReport/LostFoundReport";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/LogIn" element={<SignIn />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/DegreeApplication" element={<DegreeClearance />} />
      <Route path="/LostFoundReport" element={<LostFoundReport />} />
    </Routes>
  );
};

export default RoutesPage;
