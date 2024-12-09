import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Reviews from "./components/CustomerReviews";
import RepairServices from "./components/RepairServices";

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
