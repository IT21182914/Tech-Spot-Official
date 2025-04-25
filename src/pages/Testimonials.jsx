import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const videoProofs = [
  { src: "/videos/customer1.mp4", title: "Customer 1" },
  { src: "/videos/customer2.mp4", title: "Customer 2" },
];

const imageReviews = [
  "/images/Asanka.png",
  "/images/Aadham.png",
  "/images/Achintha.png",
  "/images/Naveen.png",
];

const Testimonials = () => (
  <div className="min-h-screen bg-black text-white py-12 px-6">
    <h1 className="text-4xl font-bold text-center mb-10">
      පාරිභෝගිකයන් අපි ගැන කියන දේ
    </h1>

    {/* Video proofs */}
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">Video Proofs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {videoProofs.map((v, i) => (
          <video
            key={i}
            src={v.src}
            controls
            className="w-full rounded-lg shadow-lg"
            title={v.title}
          />
        ))}
      </div>
    </section>

    {/* Image reviews */}
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Customer Review Images
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {imageReviews.map((img, i) => (
          <LazyLoadImage
            key={i}
            src={img}
            alt={`Review ${i + 1}`}
            effect="blur"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        ))}
      </div>
    </section>
  </div>
);

export default Testimonials;
