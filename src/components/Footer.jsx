import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black p-4 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Tech Spot. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
