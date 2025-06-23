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
        <div className="flex items-center justify-between w-full px-4 xl:px-20 mx-auto h-full">
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

          <div className="hidden lg:flex flex-col items-center max-w-[60%]">
            {/* Top Row */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-1">
              {navLinks
                .slice(0, Math.ceil(navLinks.length / 2))
                .map((link: NavLinkType) => (
                  <Link
                    href={link.url}
                    key={link.id}
                    className="text-gray-800 hover:text-red-600 font-semibold text-sm transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
            </div>

            {/* Animated Divider */}
            <div className="w-full overflow-hidden -mt-1 -mb-1">
              <svg viewBox="0 0 1440 60" className="w-full h-4">
                <defs>
                  <linearGradient
                    id="greyWave"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#6b7280" stopOpacity="1" />
                    <stop offset="100%" stopColor="#111827" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#greyWave)"
                  d="M0,20 C180,40 360,0 540,20 C720,40 900,0 1080,20 C1260,40 1440,0 1440,0 L1440,60 L0,60 Z"
                ></path>
              </svg>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks
                .slice(Math.ceil(navLinks.length / 2))
                .map((link: NavLinkType) => (
                  <Link
                    href={link.url}
                    key={link.id}
                    className="text-gray-800 hover:text-red-600 font-semibold text-sm transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/create-account" className="hidden lg:block">
              <button className="text-lg px-5 py-3 font-medium text-gray-800 border-2 border-gray-900 rounded-lg transition-all duration-300 hover:text-white hover:bg-gray-900 whitespace-nowrap">
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
          onClick={toggleNav}
        >
          {/* Side Drawer */}
          <div
            className="w-64 h-full bg-white shadow-lg p-5 flex flex-col justify-center items-center space-y-5 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleNav}
              className="absolute top-4 right-4 text-gray-800 text-2xl"
            >
              ✕
            </button>

            <ul className="w-full text-center space-y-5">
              {navLinks.map((link: NavLinkType) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className="block text-gray-800 font-semibold text-lg hover:text-red-600"
                    onClick={toggleNav}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

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
