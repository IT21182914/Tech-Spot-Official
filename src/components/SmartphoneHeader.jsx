import React from "react";
import ReviewButton from "./ReviewButton";

const SmartphoneHeader = () => (
  <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center mb-10">
    <ReviewButton text="What customers say about us" />
    <h1 className="text-3xl sm:text-4xl font-bold text-center">Smartphones</h1>
    <ReviewButton text="පාරිභෝගිකයන් අපි ගැන කියන දේ" />
  </div>
);

export default SmartphoneHeader;
