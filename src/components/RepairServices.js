import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
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
      after: "/images/AllPhonesAfter.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16">
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
        <motion.p
          className="text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our repair services ensure your devices are back to perfect condition.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          className="rounded-lg overflow-hidden"
        >
          {beforeAfterImages.map((imageSet, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-3 items-center gap-4">
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <img
                    src={imageSet.before}
                    alt="Before Repair"
                    className="w-full h-auto max-w-sm object-contain"
                  />
                  <p className="mt-2 text-lg font-bold text-green-400">
                    Before
                  </p>
                </motion.div>

                <motion.div
                  className="flex justify-center items-center text-green-500 text-6xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ delay: 2, duration: 1 }}
                >
                  ♻️
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 1 }}
                >
                  <img
                    src={imageSet.after}
                    alt="After Repair"
                    className="w-full h-auto max-w-sm object-contain"
                  />
                  <p className="mt-2 text-lg font-bold text-blue-400">After</p>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RepairServices;

// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Pagination, Autoplay } from "swiper/modules";

// const RepairServices = () => {
//   const services = [
//     { name: "Chip Level Repair", icon: "💻" },
//     { name: "Screen Replacement", icon: "📱" },
//     { name: "Battery Replacement", icon: "🔋" },
//     { name: "Unlocking Services", icon: "🔓" },
//     { name: "Software Issues", icon: "🛠️" },
//     { name: "Hardware Repairs", icon: "🔧" },
//     { name: "Camera Repair", icon: "📷" },
//     { name: "Speaker Repair", icon: "🔊" },
//   ];

//   const beforeAfterImages = [
//     {
//       before: "/images/iphoneSEBefore.jpg",
//       after: "/images/iphoneSEAfter.png",
//     },
//     {
//       before: "/images/AllPhonesBefore.jpg",
//       after: "/images/AllPhonesAfter.jpg",
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4">

//       <div className="text-center mb-12">
//         <TypeAnimation
//           sequence={[
//             "Broken Phone?",
//             2000,
//             "Let Us Fix It Today!",
//             2000,
//             "Your Trusted Repair Experts.",
//             2000,
//           ]}
//           wrapper="h1"
//           className="text-4xl md:text-5xl font-bold mb-6"
//           repeat={Infinity}
//         />
//         <motion.p
//           className="text-lg md:text-xl text-gray-300"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Our repair services ensure your devices are back to perfect condition.
//         </motion.p>
//       </div>

//       <div className="max-w-4xl mx-auto mb-16">
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           autoplay={{ delay: 6000 }}
//           pagination={{ clickable: true }}
//           className="rounded-lg overflow-hidden"
//         >
//           {beforeAfterImages.map((imageSet, index) => (
//             <SwiperSlide key={index}>
//               <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">

//                 <motion.div
//                   className="flex flex-col items-center"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5, duration: 1 }}
//                 >
//                   <img
//                     src={imageSet.before}
//                     alt="Before Repair"
//                     className="w-full max-w-xs md:max-w-sm h-auto object-contain"
//                   />
//                   <p className="mt-2 text-lg font-bold text-green-400">
//                     Before
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   className="flex justify-center items-center text-green-500 text-6xl"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1, rotate: 360 }}
//                   transition={{ delay: 2, duration: 1 }}
//                 >
//                   ♻️
//                 </motion.div>

//                 <motion.div
//                   className="flex flex-col items-center"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 3, duration: 1 }}
//                 >
//                   <img
//                     src={imageSet.after}
//                     alt="After Repair"
//                     className="w-full max-w-xs md:max-w-sm h-auto object-contain"
//                   />
//                   <p className="mt-2 text-lg font-bold text-blue-400">After</p>
//                 </motion.div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
//           Our Services
//         </h2>
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//             >
//               <div className="text-5xl md:text-6xl mb-4">{service.icon}</div>
//               <h3 className="text-lg md:text-xl font-semibold">
//                 {service.name}
//               </h3>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default RepairServices;
