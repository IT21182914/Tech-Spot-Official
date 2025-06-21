// src/pages/Smartphones.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/smartphones/HeroSection";
import PhoneCard from "../components/smartphones/PhoneCard";
import AvailableModels from "../components/smartphones/AvailableModels";
import TrustIndicators from "../components/smartphones/TrustIndicators";
import useSmartphones from "../hooks/useSmartphones";

const Smartphones = () => {
  const smartphonesData = useSmartphones();

  return (
    <div className="bg-gradient-to-br from-slate-950 via-gray-900 to-black min-h-screen">
      {/* Hero Section with Floating Elements */}
      <HeroSection {...smartphonesData} />

      <div className="px-6 pb-12">
        {/* Phones Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={smartphonesData.activeCategory}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {smartphonesData.phones.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-500 col-span-full text-xl py-20"
              >
                No smartphones found.
              </motion.p>
            ) : (
              smartphonesData.phones.map((phone, idx) => (
                <PhoneCard
                  key={`${smartphonesData.activeCategory}-${idx}`}
                  phone={phone}
                  index={idx}
                  activeCategory={smartphonesData.activeCategory}
                  favorites={smartphonesData.favorites}
                  toggleFavorite={smartphonesData.toggleFavorite}
                  hoveredCard={smartphonesData.hoveredCard}
                  setHoveredCard={smartphonesData.setHoveredCard}
                  whatsappLink={smartphonesData.whatsappLink}
                />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Available Models Section */}
        <AvailableModels
          availableModels={smartphonesData.availableModels}
          activeCategory={smartphonesData.activeCategory}
          scrollRef={smartphonesData.scrollRef}
          pauseAutoScroll={smartphonesData.pauseAutoScroll}
          copiedText={smartphonesData.copiedText}
          setCopiedText={smartphonesData.setCopiedText}
          waLink={smartphonesData.waLink}
        />

        {/* Trust Indicators */}
        <TrustIndicators />
      </div>
    </div>
  );
};

export default Smartphones;
