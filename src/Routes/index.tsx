import { Routes, Route } from "react-router-dom";
import GetStarted from "../Container/GetStarted/GetStarted";
import SignUp from "../Container/SignUp/SignUp";
import SignIn from "../Container/LogIn/LogIn";
import Home from "../Container/Home/Home";
import DegreeClearance from "../Container/DegreeClearance/DegreeClearance";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/LogIn" element={<SignIn />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/DegreeApplication" element={<DegreeClearance />} />
    </Routes>
  );
};

export default RoutesPage;
