import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const reviews = [
  { image: "/images/Asanka.png" },
  { image: "/images/Aadham.png" },
  { image: "/images/Achintha.png" },
  { image: "/images/Naveen.png" },
  { image: "/images/Thilina.png" },
  { image: "/images/Dinuka.png" },
  { image: "/images/Bathiya.png" },
];

const CustomerReviews = () => {
  return (
    <div className="bg-black text-white py-12">
      <h2 className="text-4xl fascinate-inline-regular text-center mb-8">
        What Our Customers Say
      </h2>
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className="rounded-lg overflow-hidden"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={review.image}
                  alt={`Review ${index + 1}`}
                  className="w-full max-w-[500px] max-h-[200px] object-contain rounded-lg shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows for Large Screens */}
        <div className="hidden md:flex justify-between mt-4">
          <button className="swiper-button-prev text-blue-500 hover:text-white">
            ◀
          </button>
          <button className="swiper-button-next text-blue-500 hover:text-white">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
