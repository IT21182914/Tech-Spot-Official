import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black">
      <h1 className="text-xl font-bold text-white">Tech Spot</h1>
      <ul className="flex space-x-4">
        <li className="text-white hover:text-accent cursor-pointer">Home</li>
        <li className="text-white hover:text-accent cursor-pointer">
          Products
        </li>
        <li className="text-white hover:text-accent cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
