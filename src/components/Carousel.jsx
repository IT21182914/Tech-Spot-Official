import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = ({ products }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3} className="my-8">
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="bg-gray-700 p-4 rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded-md"
            />
            <h3 className="mt-2 text-white">{product.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
