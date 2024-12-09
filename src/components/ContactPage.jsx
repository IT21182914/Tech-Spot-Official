import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const ContactPage = () => {
  const contactNumbers = ["0726048468", "0729212698"];
  const whatsappNumber = "+94726048468";
  const facebookURL = "https://web.facebook.com/profile.php?id=61558973124367";

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg text-gray-300 mb-12">
          We're here to assist you! Get in touch with us via WhatsApp, Facebook,
          or call us directly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <a
              href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition duration-300"
            >
              <FaWhatsapp className="text-6xl mb-4" />
            </a>
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-400">{whatsappNumber}</p>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <a
              href={facebookURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition duration-300"
            >
              <FaFacebookF className="text-6xl mb-4" />
            </a>
            <h3 className="text-xl font-semibold mb-2">Facebook</h3>
            <p className="text-gray-400">Visit our page</p>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <FiPhoneCall className="text-6xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <div className="text-gray-400 space-y-1">
              {contactNumbers.map((number, index) => (
                <p key={index}>{number}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
