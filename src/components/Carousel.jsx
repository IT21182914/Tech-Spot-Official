import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import basic Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import modules from "swiper/modules"

const Carousel = ({ products = [] }) => {
  if (!products || products.length === 0) {
    return <p className="text-white text-center">No products to display.</p>;
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 mx-auto w-full">
      {" "}
      {/* Add controlled padding */}
      <Swiper
        spaceBetween={20} // Add a little gap between slides
        slidesPerView={1} // Default to 1 slide per view
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide for small screens
          768: { slidesPerView: 2 }, // 2 slides for tablets
          1024: { slidesPerView: 3 }, // 3 slides for desktops
        }}
        className="my-8"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-700 bg-opacity-40 p-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-md"
              />
              <h3 className="mt-2 text-white text-lg font-semibold text-center">
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm text-center">
                {product.price}
              </p>
              <div className="flex justify-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-8 h-8 cursor-pointer hover:stroke-blue-500 transition duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 5m5-5h6m-6 0L9 18m6-5l2 5M9 18a1.5 1.5 0 11-3 0m12 0a1.5 1.5 0 11-3 0"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
