/** @format */

import React from "react";
import Image from "next/image";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const RatingBlock = ({
  imgSrc,
  rating,
  platform,
}: {
  imgSrc: string;
  rating: number;
  platform: string;
}) => (
  <div className="flex items-center space-x-4">
    <Image src={imgSrc} alt={platform} width={40} height={40} loading="lazy" />
    <div>
      <div className="flex items-center space-x-2 ">
        <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-bold">
          {rating}
        </h1>
        <div className="flex items-center">
          <FaStar className="w-4 h-4 text-yellow-600" />
          <FaStar className="w-4 h-4 text-yellow-600" />
          <FaStar className="w-4 h-4 text-yellow-600" />
          <FaStar className="w-4 h-4 text-yellow-600" />
          <BsStarHalf className="w-4 h-4 text-yellow-600" />
        </div>
      </div>
      <p className="text-gray-600 text-small sm:text-base">
        Best rated on {platform}
      </p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-black">
            Let&rsquo;s do the everything Here
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-gray-600 leading-[2.5rem] md:leading-[3.5rem]">
            One solution, infinite possibilities—your all-in-one powerhouse for{" "}
            <span className="text-black">everything you need!</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-600">
            Experience the ultimate all-in-one solution designed to handle
            everything effortlessly. Whether it&apos;s work, creativity, or
            daily tasks, this powerhouse adapts to your needs, making life
            simpler and more efficient. One product, endless possibilities!
          </p>
          <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-4 mt-6">
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
          <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-4 mt-6">
            <a
              href="#_"
              aria-label="Get Free Trial"
              className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-gray-600 active:shadow-none shadow-lg bg-gradient-to-tr from-gray-600 to-gray-400 border-gray-800 text-white"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative">Get Free Trial</span>
            </a>
            <a
              href="/create-account"
              aria-label="Create Account"
              className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-gray-600 active:shadow-none shadow-lg bg-gradient-to-tr from-gray-600 to-gray-400 border-gray-800 text-white"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative">Create Account</span>
            </a>
          </div>
        </div>
        <div className="mx-auto hidden xl:block ">
          <Image
            src="/images/hero.jpg"
            alt="hero section image"
            width={900}
            height={900}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
