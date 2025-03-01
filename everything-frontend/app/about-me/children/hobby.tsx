import React from "react";
import { funFacts } from "@/constant/about-me";

const Hobby = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 text-center">
        Hobbies & Interests
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {funFacts.map((fact, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="text-3xl">✨</span>
            <p className="text-gray-700 font-semibold mt-2">{fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobby;
