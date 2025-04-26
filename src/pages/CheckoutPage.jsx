import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Select a payment option</h2>

          {/* PayHere */}
          <div
            className={`border rounded-md mb-4 p-4 ${
              selectedPayment === "payhere"
                ? "border-blue-600"
                : "border-gray-300"
            }`}
          >
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="payhere"
                checked={selectedPayment === "payhere"}
                onChange={handlePaymentChange}
              />
              <img
                src="/images/payhere.png"
                alt="PayHere"
                className="w-32 h-auto"
              />
              <span className="text-base font-medium">
                Visa, Master, Amex (via PayHere)
              </span>
            </label>
          </div>

          {/* Koko */}
          <div
            className={`border rounded-md mb-4 p-4 ${
              selectedPayment === "koko" ? "border-blue-600" : "border-gray-300"
            }`}
          >
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="koko"
                checked={selectedPayment === "koko"}
                onChange={handlePaymentChange}
              />
              <img src="/images/koko.png" alt="Koko" className="w-24 h-auto" />
              <span className="text-base font-medium">
                Pay in 3 interest-free installments with Koko
              </span>
            </label>
          </div>

          {/* Bank Transfer */}
          <div
            className={`border rounded-md p-4 ${
              selectedPayment === "bank" ? "border-blue-600" : "border-gray-300"
            }`}
          >
            <label className="flex flex-col gap-3 cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={selectedPayment === "bank"}
                  onChange={handlePaymentChange}
                />
                <img src="/images/bank.png" alt="Bank" className="h-6" />
                <span className="text-base font-semibold">Bank Deposit</span>
              </div>

              {/* Show Bank Details */}
              {selectedPayment === "bank" && (
                <div className="bg-blue-50 p-4 rounded-md mt-3 text-gray-800">
                  <h3 className="font-bold text-lg mb-2">
                    Bank Deposit Details
                  </h3>
                  <p className="text-sm mb-1">
                    Bank Name:{" "}
                    <span className="font-medium">Commercial Bank</span>
                  </p>
                  <p className="text-sm mb-1">
                    Branch: <span className="font-medium">Tissamaharama</span>
                  </p>
                  <p className="text-sm mb-1">
                    Account Name:{" "}
                    <span className="font-medium">D.S.U. Arachchi</span>
                  </p>
                  <p className="text-sm mb-4">
                    Account Number:{" "}
                    <span className="font-medium">8008916927</span>
                  </p>
                  <p className="text-xs text-gray-600">
                    Note: Send the receipt via WhatsApp (0726048468). Make sure
                    to mention your mobile phone model name (e.g., iPhone 11,
                    Samsung A15).
                  </p>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-2xl font-bold mb-6">Summary</h2>

          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between mb-2">
              <p>Product</p>
              <p className="font-semibold">iPhone 11 × 1</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p>Rs. 163,000.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Delivery</p>
              <p>Rs. 1,500.00</p>
            </div>
          </div>

          <div className="flex justify-between text-xl font-bold">
            <p>Total</p>
            <p>Rs. 164,500.00</p>
          </div>

          <div className="mt-6">
            <label className="inline-flex items-start gap-2">
              <input type="checkbox" required />
              <span className="text-sm">
                I agree to the{" "}
                <Link to="/terms" className="underline text-blue-600">
                  Terms and Conditions
                </Link>
              </span>
            </label>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6 font-bold hover:bg-blue-700">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
