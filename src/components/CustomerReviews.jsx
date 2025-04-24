import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const reviews = [
  { image: "/images/Asanka.png", name: "Asanka" },
  { image: "/images/Aadham.png", name: "Aadham" },
  { image: "/images/Achintha.png", name: "Achintha" },
  { image: "/images/Naveen.png", name: "Naveen" },
  { image: "/images/Thilina.png", name: "Thilina" },
  { image: "/images/Dinuka.png", name: "Dinuka" },
  { image: "/images/Bathiya.png", name: "Bathiya" },
  { image: "/images/Chameera.png", name: "Chameera" },
];

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-primary text-secondary py-12">
      <h2 className="text-4xl font-bold text-center mb-8">
        What Our Customers Say
      </h2>
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="rounded-lg overflow-hidden"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full max-w-[500px] max-h-[300px] object-contain rounded-lg shadow-lg mb-8"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <p className="text-3xl font-semibold">
            Thank you,{" "}
            <span className="text-accent font-bold">
              {reviews[activeIndex]?.name}
            </span>
            !
          </p>
        </div>
      </div>

      <div className="mt-20"></div>
    </div>
  );
};

export default CustomerReviews;
