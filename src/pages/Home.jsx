import React from "react";
import HeroSection from "../components/HeroSection";
import Carousel from "../components/Carousel";
import ThreeScene from "../components/ThreeScene";

const products = [
  { name: "Phone Case", price: "LKR 637.36", image: "/path/to/image1.jpg" },
  {
    name: "Screen Protector",
    price: "LKR 329.32",
    image: "/path/to/image2.jpg",
  },
  { name: "Charger", price: "LKR 381.13", image: "/path/to/image3.jpg" },
];

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ThreeScene />
      <Carousel products={products} />
    </div>
  );
};

export default Home;
