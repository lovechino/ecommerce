import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function FooterTwo() {
  return (
    <footer className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="mb-8 md:mb-0">
          <div className="text-2xl font-bold text-gray-800 mb-4">KARA</div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h6 className="font-semibold text-gray-700 mb-4 uppercase">Company</h6>
          <ul className="text-gray-500 text-sm">
            <li className="mb-2"><a href="#" className="hover:text-gray-700">About</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-700">Term of Use</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-700">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-700">How it Works</a></li>
            <li><a href="#" className="hover:text-gray-700">Contact Us</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h6 className="font-semibold text-gray-700 mb-4 uppercase">Support</h6>
          <ul className="text-gray-500 text-sm">
            <li className="mb-2"><a href="#" className="hover:text-gray-700">Support Career</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-700">24h Service</a></li>
            <li><a href="#" className="hover:text-gray-700">Quick Chat</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h6 className="font-semibold text-gray-700 mb-4 uppercase">Contact</h6>
          <ul className="text-gray-500 text-sm">
            <li className="mb-2"><a href="#" className="hover:text-gray-700">Whatsapp</a></li>
            <li><a href="#" className="hover:text-gray-700">Support 24</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-xs">
        Copyright © 2022 KARA Shop
      </div>
    </footer>
  );
}

export default FooterTwo;