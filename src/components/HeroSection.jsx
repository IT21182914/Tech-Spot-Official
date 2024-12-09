import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-center relative">
      <div className="animate-fade-in">
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
          className="text-5xl md:text-6xl font-bold text-white"
          repeat={Infinity}
        />
      </div>

      <div className="mt-6">
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
          className="mt-4 text-lg md:text-2xl text-gray-300"
          repeat={Infinity}
        />
      </div>

      <Link to="/shop">
        <button className="mt-12 px-6 py-3 bg-accent text-black font-semibold rounded-full hover:bg-blue-300 shadow-lg transition-transform transform hover:scale-105">
          Shop Now
        </button>
      </Link>

      <div className="absolute bottom-20 flex flex-col items-center animate-bounce">
        <span className="text-gray-300 text-lg md:text-xl">
          Explore More....
        </span>
        <div className="mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-6 h-6 md:w-8 md:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
