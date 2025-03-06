/** @format */
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, NavLinkType } from "@/constant/nav-links";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[12vh] bg-white shadow-md z-[50]">
        <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-full">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/images/brand-icon.webp"
                alt="Everything Logo"
                width={40}
                height={40}
                className="cursor-pointer rounded-md"
              />
            </Link>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 hidden sm:block">
              Everything
            </h1>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link: NavLinkType) => (
              <Link
                href={link.url}
                key={link.id}
                className="text-gray-800 hover:text-red-600 font-semibold transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/create-account" className="hidden lg:block">
              <button className="relative inline-block text-lg px-5 py-3 font-medium text-gray-800 border-2 border-gray-900 rounded-lg transition-all duration-300 hover:text-white hover:bg-gray-900">
                Create Account
              </button>
            </Link>

            <button
              onClick={toggleNav}
              className="lg:hidden px-4 py-2 bg-gray-800 text-white rounded-md transition-all duration-300"
            >
              {showNav ? "Close Me" : "Open Me"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {showNav && (
        <div
          className="fixed inset-0 bg-black/50 z-[40] flex items-center justify-end"
          onClick={toggleNav} // Close when clicking outside
        >
          {/* Side Drawer */}
          <div
            className="w-64 h-full bg-white shadow-lg p-5 flex flex-col justify-center items-center space-y-5 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={toggleNav}
              className="absolute top-4 right-4 text-gray-800 text-2xl"
            >
              ✕
            </button>

            {/* Navigation Links */}
            <ul className="w-full text-center space-y-5">
              {navLinks.map((link: NavLinkType) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className="block text-gray-800 font-semibold text-lg hover:text-red-600"
                    onClick={toggleNav} // Close drawer when clicking a link
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Create Account Button */}
            <Link href="/create-account">
              <button
                className="w-full text-lg px-5 py-3 font-medium text-gray-800 border-2 border-gray-900 rounded-lg transition-all duration-300 hover:text-white hover:bg-gray-900"
                onClick={toggleNav}
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
