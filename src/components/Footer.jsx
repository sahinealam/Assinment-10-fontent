import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-100 text-center py-6 mt-8
        bg-gradient-to-r from-green-600 via-green-800 to-green-600 text-white">
            <div className="flex justify-center gap-6 mb-3">
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className="flex justify-center gap-4 mb-2 text-green-700">
                <span><FaInstagram className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b]
                 to-[#6228d7] text-black h-[50px] w-[50px]" /></span>
                <span><FaFacebook className="text-[#1877F2] h-[50px] w-[50px]" /></span>
                <span><FaPinterest className="text-[#E60023] h-[50px] w-[50px]" /></span>
            </div>
            <p>© 2025 GreenNest. All rights reserved.</p>
        </footer>
    );
};

export default Footer;