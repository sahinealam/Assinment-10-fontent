import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-white pt-12 pb-6">
      {/* Logo / Site Name and Description */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-wide text-orange-900">PawMart</h1>
        <p className="text-orange-700 mt-2 max-w-md mx-auto">
          PawMart connects local pet owners and buyers for adoption and pet care products.
        </p>
      </div>

      {/* Useful Links */}
      <div className="flex justify-center gap-8 mb-10 flex-wrap">
        <a href="#" className="hover:text-orange-500 transition-colors duration-300 text-b">Home</a>
        <a href="#" className="hover:text-orange-500 transition-colors duration-300">Contact</a>
        <a href="#" className="hover:text-orange-500 transition-colors duration-300">Terms</a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-10">
        <a
          href="#"
          className="p-3 rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:scale-110 transform transition-transform duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="#"
          className="p-3 rounded-full bg-[#1877F2] text-white hover:scale-110 transform transition-transform duration-300"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="#"
          className="p-3 rounded-full bg-[#E60023] text-white hover:scale-110 transform transition-transform duration-300"
        >
          <FaPinterest size={24} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-orange-700 text-center text-sm">
        © 2025 PawMart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

