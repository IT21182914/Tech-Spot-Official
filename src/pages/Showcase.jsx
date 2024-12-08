// src/pages/Showcase.jsx
import React from "react";
import ThreeScene from "../components/ThreeScene";

const Showcase = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-8 text-white">
        Mobile Shop Showcase
      </h1>
      <ThreeScene />
      <div className="text-center mt-6 text-gray-400">
        <p>Discover our latest products in 3D!</p>
      </div>
    </div>
  );
};

export default Showcase;
