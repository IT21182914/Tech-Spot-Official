import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-center">
      <TypeAnimation
        sequence={[
          "Welcome to Tech Spot!",
          1000,
          "",
          "Tech Spot: Your Mobile Repair & Accessories Destination!",
          2000,
        ]}
        speed={20}
        deletionSpeed={40}
        wrapper="h1"
        className="text-5xl font-bold text-white"
        repeat={Infinity}
      />
      <TypeAnimation
        sequence={[
          "Explore the best mobile accessories",
          1500,
          "Discover your next favorite gadget!",
          2000,
        ]}
        speed={20}
        deletionSpeed={40}
        wrapper="p"
        className="mt-4 text-lg text-gray-300"
        repeat={Infinity}
      />
      <Link to="/shop">
        <button className="mt-8 px-6 py-3 bg-accent text-black font-semibold rounded hover:bg-blue-300">
          Shop Now
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
