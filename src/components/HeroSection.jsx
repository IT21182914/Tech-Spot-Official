import React from "react";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-center">
      <h1 className="text-5xl font-bold text-white">Welcome to Tech Spot</h1>
      <p className="mt-4 text-lg text-gray-300">
        Explore the best mobile accessories
      </p>
      <button className="mt-8 px-6 py-3 bg-accent text-black font-semibold rounded hover:bg-blue-300">
        Shop Now
      </button>
    </section>
  );
};

export default HeroSection;
