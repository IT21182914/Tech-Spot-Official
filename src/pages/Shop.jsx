import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const accessories = [
  {
    name: "Stylish Phone Case",
    price: "LKR 637.36",
    image:
      "https://cdn.pixabay.com/photo/2017/08/01/00/40/mobile-2562332_1280.jpg",
  },
  {
    name: "Portable Charger",
    price: "LKR 329.32",
    image:
      "https://cdn.pixabay.com/photo/2020/05/03/00/47/charger-5123473_640.jpg",
  },
  {
    name: "Wireless Earbuds",
    price: "LKR 1,200.00",
    image:
      "https://cdn.pixabay.com/photo/2019/11/27/19/31/headphones-4652216_640.jpg",
  },
  {
    name: "Stylish Pop Sockets",
    price: "LKR 250.00",
    image:
      "https://cdn.pixabay.com/photo/2020/02/18/10/14/mobile-4858621_640.jpg",
  },
];

const Shop = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <h1 className="text-3xl text-center py-8">Shop Mobile Accessories</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="my-8"
      >
        {accessories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 bg-gray-800 rounded-lg hover:scale-105 transition transform duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg">{item.name}</h3>
              <p className="text-gray-400">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Shop;
