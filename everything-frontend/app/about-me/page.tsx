// src/components/AboutMe/index.tsx
import React from "react";
import { aboutMeData, introEnd, introStart } from "@/constant/about-me";
import { AboutImage } from "../components/Home/About/about-image";
import SocialMedia from "./children/social-media";

const AboutMe = () => {
  return (
    <section className="w-full pt-[18vh] p-4 md:p-8 bg-white text-gray-800 space-y-8">
      <div className="text-center space-y-4">
        <p className="text-sm md:text-base max-w-2xl mx-auto font-bold text-gray-700">
          {introStart}
        </p>
        <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-600">
          {introEnd}
        </p>
        <SocialMedia />
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-6 space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2 flex justify-center">
          <AboutImage />
        </div>

        <div className="md:w-1/2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {aboutMeData.skills.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Experience
            </h2>
            <div className="space-y-4">
              {aboutMeData.experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-gray-50"
                >
                  <h3 className="text-lg font-bold text-gray-800">
                    {exp.title}
                  </h3>
                  <span className="block text-gray-500 text-xs">
                    {exp.year}
                  </span>
                  <p className="mt-1 text-gray-600 text-sm">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
