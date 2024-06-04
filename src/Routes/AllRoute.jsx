import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Email from "../Pages/Email";
import Questions from "../Pages/Questions";
import Sliders from "../Pages/Sliders";
import ThankYou from "../Pages/ThankYou";

const AllRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/email" />} />
        <Route path="/email" element={<Email />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/sliders" element={<Sliders />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoute;
