import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Location from "./components/Location";
import Footer from "./components/Footer";
import FloatingContactButtons from "./components/FloatingContactButtons";
import Reviews from "./components/CustomerReviews";
import RepairServices from "./components/RepairServices";
import ContactPage from "./components/ContactPage";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/location" element={<Location />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/repair" element={<RepairServices />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <FloatingContactButtons />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
