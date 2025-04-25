import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const SmartphonesCard = ({ phone, link }) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col">
    <img
      src={phone.image}
      alt={phone.name}
      className="w-full h-72 object-contain p-1 transition-transform duration-300 hover:scale-105"
    />
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="text-xl font-semibold">{phone.name}</h3>
      <p className="text-gray-400 text-sm mt-1">{phone.specs}</p>
      {phone.price && (
        <p className="text-blue-400 font-medium mt-1">{phone.price}</p>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block text-center px-3 py-1.5 bg-green-500 rounded-lg text-sm font-semibold hover:bg-green-600 transition duration-300"
      >
        Order via WhatsApp
      </a>
    </div>
  </div>
);

export default SmartphonesCard;
