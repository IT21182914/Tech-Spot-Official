import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Smartphones from "./pages/Smartphones";
import Location from "./components/Location";
import Footer from "./components/Footer";
import FloatingContactButtons from "./components/FloatingContactButtons";
import Reviews from "./components/CustomerReviews";
import RepairServices from "./components/RepairServices";
import ContactPage from "./components/ContactPage";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";

import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-ZW20PMEHYY");
    ReactGA.send("pageview");
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="bg-black text-white min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/location" element={<Location />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/repair" element={<RepairServices />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/smartphones" element={<Smartphones />} />
          </Routes>
          <FloatingContactButtons />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
