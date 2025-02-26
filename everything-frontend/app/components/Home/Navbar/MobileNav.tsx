/** @format */
import { navLinks, NavLinkType } from "@/constant/nav-links";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const isNavOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {showNav && (
        <div
          className="fixed inset-0 bg-black opacity-40 w-full h-screen z-[1001]"
          onClick={closeNav}
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-black text-white space-y-6 p-6 transform ${isNavOpen} transition-transform duration-500 z-[1050]`}
        aria-label="Mobile Navigation Menu"
      >
        {navLinks.map((link: NavLinkType) => (
          <Link
            key={link.id}
            href={link.url}
            className="block text-xl sm:text-2xl border-b border-white pb-2 ml-6 hover:text-gray-300 transition-colors duration-300"
            onClick={closeNav}
            tabIndex={0}
          >
            {link.label}
          </Link>
        ))}

        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-6 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:text-gray-300 transition-colors duration-300"
          aria-label="Close Navigation"
          role="button"
          tabIndex={0}
        />
      </nav>
    </div>
  );
};

export default MobileNav;
