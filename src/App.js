import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Location from "./components/Location";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/location" element={<Location />} />{" "}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
