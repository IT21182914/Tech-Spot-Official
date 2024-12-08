import React from "react";
import HeroSection from "../components/HeroSection";
import Carousel from "../components/Carousel";
import ThreeScene from "../components/ThreeScene";

const products = [
  {
    name: "Phone Case",
    price: "LKR 637.36",
    image:
      "https://cdn.pixabay.com/photo/2017/08/01/00/40/mobile-2562332_1280.jpg",
  },
  {
    name: "Charger",
    price: "LKR 329.32",
    image:
      "https://cdn.pixabay.com/photo/2020/05/03/00/47/charger-5123473_640.jpg",
  },
  {
    name: "iPhones",
    price: "LKR 381.13",
    image:
      "https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_640.jpg",
  },
];

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ThreeScene />
      <Carousel products={products} /> {/* Pass products as a prop */}
    </div>
  );
};

export default Home;
