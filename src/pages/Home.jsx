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
    rating: 4.5,
  },
  {
    name: "Charger",
    price: "LKR 1,890.00",
    image:
      "https://cdn.pixabay.com/photo/2016/12/08/15/40/power-supply-unit-1892002_640.jpg",
    rating: 4.3,
  },
  {
    name: "iPhone 13 Pro",
    price: "LKR 215,000.00",
    image:
      "https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_640.jpg",
    rating: 4.9,
  },
  {
    name: "Samsung Galaxy S22",
    price: "LKR 195,000.00",
    image:
      "https://cdn.pixabay.com/photo/2022/03/12/09/23/smartphone-7063761_640.jpg",
    rating: 4.8,
  },
  {
    name: "Wireless Earbuds",
    price: "LKR 12,500.00",
    image:
      "https://cdn.pixabay.com/photo/2021/06/26/10/44/airpods-6365870_640.jpg",
    rating: 4.6,
  },
  {
    name: "Bluetooth Speaker",
    price: "LKR 6,500.00",
    image:
      "https://cdn.pixabay.com/photo/2021/07/27/15/16/speaker-6497177_640.jpg",
    rating: 4.7,
  },
  {
    name: "Power Bank 20,000mAh",
    price: "LKR 4,800.00",
    image:
      "https://cdn.pixabay.com/photo/2015/03/27/14/44/promotional-products-694794_640.jpg",
    rating: 4.4,
  },
  {
    name: "Smart Watch",
    price: "LKR 15,000.00",
    image:
      "https://cdn.pixabay.com/photo/2022/04/15/15/09/smart-watch-7134697_640.jpg",
    rating: 4.7,
  },
  {
    name: "Gaming Headset",
    price: "LKR 8,500.00",
    image:
      "https://cdn.pixabay.com/photo/2017/03/05/14/19/headphone-2118725_640.jpg",
    rating: 4.8,
  },
  {
    name: "Phone Stand",
    price: "LKR 1,200.00",
    image: "https://m.media-amazon.com/images/I/61srjyM7TFL._AC_SL1500_.jpg",
    rating: 4.2,
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
