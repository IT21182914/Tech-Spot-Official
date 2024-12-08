import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-md"
      />
      <h2 className="mt-4 text-xl text-white">{product.name}</h2>
      <p className="text-gray-400">{product.price}</p>
      <button className="mt-4 px-4 py-2 bg-accent text-black rounded hover:bg-blue-300">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
