import { BrowserRouter, Routes, Route } from "react-router-dom";
import Email from "../Pages/Email";
import Questions from "../Pages/Questions";
import Sliders from "../Pages/Sliders";
import ThankYou from "../Pages/ThankYou";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

const AllRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email" element={<Email />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/sliders" element={<Sliders />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoute;
