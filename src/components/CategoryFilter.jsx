import React from "react";

const CategoryFilter = ({ categories, active, onSelect }) => (
  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
    {categories.map((c) => (
      <button
        key={c}
        onClick={() => onSelect(c)}
        className={`px-4 py-2 rounded-full border transition duration-300 ${
          active === c
            ? "bg-blue-500 text-white border-blue-500"
            : "text-gray-400 border-gray-600 hover:bg-gray-700"
        }`}
      >
        {c}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
