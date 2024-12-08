import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop"; // Import Shop Page
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} /> {/* Add Shop Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
