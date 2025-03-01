/** @format */

import React from "react";
import { MdOutlineTouchApp } from "react-icons/md";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">
          Why Choose Our Services?
        </h1>
        <p className="mt-3 text-gray-600 font-medium w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
          We provide top-tier solutions tailored to your needs. Whether
          it&apos;s digital services, content creation, or development, our
          expertise ensures quality and satisfaction.
        </p>
      </div>

      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Custom Solutions",
              desc: "We craft personalized services that align with your unique business goals.",
            },
            {
              title: "Innovative Approach",
              desc: "Our team leverages the latest technology to bring you innovative solutions.",
            },
            {
              title: "Expert Team",
              desc: "Our experienced professionals ensure the highest quality of service.",
            },
            {
              title: "Customer Satisfaction",
              desc: "We prioritize client satisfaction, delivering results that exceed expectations.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-3xl bg-pink-600 bg-opacity-20">
                  <MdOutlineTouchApp className="w-6 h-6 text-orange-600" />
                </div>
                <h1 className="text-lg font-bold">{item.title}</h1>
              </div>
              <p className="mt-3 text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/feature-men.webp"
            alt="Feature Illustration"
            className="w-full max-w-sm lg:max-w-md rounded-lg shadow-lg"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
