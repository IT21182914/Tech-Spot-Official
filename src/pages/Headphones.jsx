// src/pages/Headphones.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/headphones/HeroSection";
import AudioCard from "../components/headphones/AudioCard";
import AvailableModels from "../components/headphones/AvailableModels";
import TrustIndicators from "../components/smartphones/TrustIndicators";
import useHeadphones from "../hooks/useHeadphones";

const Headphones = () => {
  const headphonesData = useHeadphones();

  return (
    <div className="bg-gradient-to-br from-slate-950 via-purple-900 to-black min-h-screen">
      {/* Hero Section with Floating Elements */}
      <HeroSection {...headphonesData} />

      <div className="px-6 pb-12">
        {/* Audio Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={headphonesData.activeCategory}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {headphonesData.headphones.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-500 col-span-full text-xl py-20"
              >
                No audio products found.
              </motion.p>
            ) : (
              headphonesData.headphones.map((item, idx) => (
                <AudioCard
                  key={`${headphonesData.activeCategory}-${idx}`}
                  item={item}
                  index={idx}
                  activeCategory={headphonesData.activeCategory}
                  favorites={headphonesData.favorites}
                  toggleFavorite={headphonesData.toggleFavorite}
                  hoveredCard={headphonesData.hoveredCard}
                  setHoveredCard={headphonesData.setHoveredCard}
                  whatsappLink={headphonesData.whatsappLink}
                />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Available Models Section */}
        <AvailableModels
          availableModels={headphonesData.availableModels}
          activeCategory={headphonesData.activeCategory}
          scrollRef={headphonesData.scrollRef}
          pauseAutoScroll={headphonesData.pauseAutoScroll}
          copiedText={headphonesData.copiedText}
          setCopiedText={headphonesData.setCopiedText}
          waLink={headphonesData.waLink}
        />

        {/* Trust Indicators */}
        <TrustIndicators />
      </div>
    </div>
  );
};

export default Headphones;
