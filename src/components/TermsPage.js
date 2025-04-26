import React from "react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <p className="mb-4">
          Welcome to Tech Spot! By purchasing from us, you agree to the
          following terms:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            All phones are brand new and covered by manufacturer warranty (where
            applicable).
          </li>
          <li>Prices may vary based on market conditions.</li>
          <li>
            Returns or exchanges are accepted only if there is a manufacturing
            defect.
          </li>
          <li>
            Payments made via bank transfer should be confirmed by sending a
            receipt to our WhatsApp number.
          </li>
          <li>Orders will be processed only after payment confirmation.</li>
          <li>
            Delivery times may vary based on courier availability and location.
          </li>
          <li>
            Tech Spot is not responsible for courier delays once the product is
            handed over.
          </li>
        </ul>

        <p className="mt-6 text-gray-600 text-sm">
          * You can update or add your specific shop policies later.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
