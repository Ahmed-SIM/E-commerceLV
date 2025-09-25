import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo / About */}
        <div>
          <h1 className="text-2xl font-bold text-red-600">MyShop</h1>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            The best place to buy your favorite products online with amazing
            offers and fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>
            <li>
              <li  className="hover:text-red-500 transition">
                Shop
              </li>
            </li>
            <li>
              <li  className="hover:text-red-500 transition">
                About Us
              </li>
            </li>
            <li>
              <li  className="hover:text-red-500 transition">
                Contact
              </li>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 text-gray-300">
            <a  className="hover:text-red-500 transition">
              <i className="fa-brands fa-facebook fa-lg"></i>
            </a>
            <a  className="hover:text-red-500 transition">
              <i className="fa-brands fa-twitter fa-lg"></i>
            </a>
            <a  className="hover:text-red-500 transition">
              <i className="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a  className="hover:text-red-500 transition">
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
