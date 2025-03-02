/** @format */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";
import { navLinks, NavLinkType } from "@/constant/nav-links";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 h-[12vh] z-[50] ${
          navbg ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-full">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <GrTechnology className="w-6 h-6 text-white" />
            </div>
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

            {!showNav && (
              <HiBars3BottomRight
                onClick={() => setShowNav(true)}
                className="w-8 h-8 cursor-pointer text-gray-900 lg:hidden"
              />
            )}
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/50 z-[40] transition-opacity duration-300 ${
          showNav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowNav(false)}
      >
        <div
          className={`absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-5 transform transition-transform duration-300 ${
            showNav ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowNav(false)}
            className="absolute top-4 right-4 text-gray-800 text-2xl"
          >
            ✕
          </button>

          <ul className="mt-10 space-y-5">
            {navLinks.map((link: NavLinkType) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="block text-gray-800 font-semibold text-lg hover:text-red-600"
                  onClick={() => setShowNav(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link href="/create-account">
              <button
                className="w-full text-lg px-5 py-3 font-medium text-gray-800 border-2 border-gray-900 rounded-lg transition-all duration-300 hover:text-white hover:bg-gray-900"
                onClick={() => setShowNav(false)}
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
