/** @format */

import React from "react";
import { RatingBlock } from "../../Helper/rating-block";

const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen bg-cover bg-center bg-no-repeat flex justify-center flex-col pb-0">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-white/50 before:z-0" />

      <div className="relative w-[90%] md:w-[80%] mx-auto items-center z-10">
        <p className="text-sm sm:text-base md:text-xl font-bold text-black">
          Let&rsquo;s do the everything Here
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-gray-800 leading-[2.5rem] md:leading-[3.5rem]">
          One solution, infinite possibilities—your all-in-one powerhouse for{" "}
          <span className="text-black">everything you need!</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-medium text-black">
          Experience the ultimate all-in-one solution designed to handle
          everything effortlessly. Whether it&apos;s work, creativity, or daily
          tasks, this powerhouse adapts to your needs, making life simpler and
          more efficient. One product, endless possibilities!
        </p>

        <div className="grid grid-cols-2 xl:grid-cols-2 gap-10 mt-6 backdrop-blur-md bg-white/80 p-6 rounded-lg z-10">
          <div className="flex flex-col space-y-4">
            <RatingBlock
              imgSrc="/images/google.png"
              rating={4.5}
              platform="Google"
            />
            <RatingBlock
              imgSrc="/images/linkedin.png"
              rating={4.7}
              platform="LinkedIn"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <a
              href="/about-me"
              className="rounded relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-white bg-gray-900 border border-gray-800 shadow-lg transition-all duration-300 hover:bg-gray-700"
            >
              Know the Developer
            </a>
            <a
              href="#_"
              className="rounded relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-white bg-gray-600 border border-gray-800 shadow-lg transition-all duration-300 hover:bg-gray-500"
            >
              Get Free Trial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
