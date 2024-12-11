import React, { Suspense } from "react";

const Map = React.lazy(() => import("./Map"));

const Location = () => {
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=6.28268,81.2878`;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4 lg:px-20">
      <h1 className="text-5xl font-bold fascinate-inline-regular mb-8 text-center lg:text-6xl">
        Find Us Here
      </h1>
      <p className="text-lg kanit-medium text-gray-400 mb-8 text-center lg:text-xl">
        Palliyawaththa Road, Tissamaharama, Sri Lanka.
      </p>

      <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-xl mb-10">
        <Suspense
          fallback={
            <div className="text-center text-gray-400">Loading map...</div>
          }
        >
          <Map />
        </Suspense>
      </div>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-7 py-3 bg-blue-500 text-white font-semibold text-base rounded-full hover:bg-blue-600 transition duration-300 shadow-lg"
        aria-label="Start Directions"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        Start Directions
      </a>
    </div>
  );
};

export default Location;
