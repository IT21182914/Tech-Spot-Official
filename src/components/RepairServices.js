import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const RepairServices = () => {
  const services = [
    { name: "Chip Level Repair", icon: "💻" },
    { name: "Screen Replacement", icon: "📱" },
    { name: "Battery Replacement", icon: "🔋" },
    { name: "Unlocking Services", icon: "🔓" },
    { name: "Software Issues", icon: "🛠️" },
    { name: "Hardware Repairs", icon: "🔧" },
    { name: "Camera Repair", icon: "📷" },
    { name: "Speaker Repair", icon: "🔊" },
  ];

  const beforeAfterImages = [
    {
      before: "/images/iphoneSEBefore.jpg",
      after: "/images/iphoneSEAfter.png",
    },
    {
      before: "/images/AllPhonesBefore.jpg",
      after: "/images/SamsungAfter.png",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16">
      {/* Animated Heading */}
      <div className="text-center mb-12">
        <TypeAnimation
          sequence={[
            "Broken Phone?",
            2000,
            "Let Us Fix It Today!",
            2000,
            "Your Trusted Repair Experts.",
            2000,
          ]}
          wrapper="h1"
          className="text-5xl font-bold mb-6"
          repeat={Infinity}
        />
        <p className="text-xl text-gray-300">
          Our repair services ensure your devices are back to perfect condition.
        </p>
      </div>

      {/* Before and After Swiper */}
      <div className="max-w-4xl mx-auto mb-16">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="rounded-lg overflow-hidden"
        >
          {beforeAfterImages.map((imageSet, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <img
                    src={imageSet.before}
                    alt="Before Repair"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <p className="mt-2 text-lg font-semibold text-gray-400">
                    Before
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={imageSet.after}
                    alt="After Repair"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <p className="mt-2 text-lg font-semibold text-gray-400">
                    After
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairServices;
