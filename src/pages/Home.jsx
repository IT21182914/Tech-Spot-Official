import React from "react";
import HeroSection from "../components/HeroSection";
import Carousel from "../components/Carousel";
import ThreeScene from "../components/ThreeScene";

const products = [
  {
    name: "Phone Case",
    price: "LKR 850.00",
    image:
      "https://cdn.pixabay.com/photo/2017/08/01/00/40/mobile-2562332_1280.jpg",
  },
  {
    name: "Charger",
    price: "LKR 1890.00",
    image:
      "https://cdn.pixabay.com/photo/2016/12/08/15/40/power-supply-unit-1892002_640.jpg",
  },
  {
    name: "iPhones",
    price: "LKR 215,000.00",
    image:
      "https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_640.jpg",
  },
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
