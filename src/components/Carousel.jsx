import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = ({ products = [] }) => {
  if (!products || products.length === 0) {
    return <p className="text-white text-center">No products to display.</p>;
  }

  return (
    <Swiper spaceBetween={50} slidesPerView={3} className="my-8">
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="bg-gray-700 bg-opacity-40 p-4 rounded-lg w-96">
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded-md"
            />
            <h3 className="mt-2 text-white">{product.name}</h3>
            <p className="text-gray-400">{product.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
