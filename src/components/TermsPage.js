import React from "react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-12 px-4 text-white">
      <div className="max-w-4xl mx-auto bg-gray-900 bg-opacity-80 p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-white mb-10">
          Terms and Conditions for Smartphone Purchases
        </h1>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed text-center">
          Welcome to <span className="font-bold text-white">Tech Spot</span>! By
          purchasing smartphones from us, you agree to the following terms:
        </p>

        <ul className="list-disc list-inside space-y-4 text-gray-400 text-base leading-relaxed">
          <li>
            <span className="font-bold text-white">Brand New:</span>
            All smartphones are brand new and may come with the manufacturer’s
            warranty (where applicable).
          </li>
          <li>
            <span className="font-bold text-white">Price Changes:</span>
            Smartphone prices are subject to change based on market conditions
            without prior notice.
          </li>
          <li>
            <span className="font-bold text-white">Returns:</span>
            Returns are accepted only for manufacturing defects. No returns for
            change of mind.
          </li>
          <li>
            <span className="font-bold text-white">Payment Confirmation:</span>
            Payments made via bank transfer should be confirmed by sending the
            receipt to our WhatsApp number.
          </li>
          <li>
            <span className="font-bold text-white">Order Processing:</span>
            Orders will be processed only after payment is confirmed.
          </li>
          <li>
            <span className="font-bold text-white">Delivery Time:</span>
            Delivery times may vary depending on courier services and your
            location.
          </li>
          <li>
            <span className="font-bold text-white">
              Courier Responsibility:
            </span>
            Tech Spot is not responsible for courier delays or damages once the
            product is handed over to the courier.
          </li>
        </ul>

        <p className="mt-10 text-center text-gray-500 text-sm">
          * Please contact us for any clarifications regarding your smartphone
          purchase.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
