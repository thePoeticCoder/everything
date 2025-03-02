import React from "react";
import { introEnd, introStart } from "@/constant/about-me";
import { AboutImage } from "../components/Home/About/about-image";
import SocialMedia from "./children/social-media";
import Skills from "./children/skills";
import { Experience } from "./children/experience";
import Hobby from "./children/hobby";

const AboutMe = () => {
  return (
    <section className="w-full pt-[18vh] p-4 md:p-8 bg-white text-gray-800 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-sm md:text-base max-w-2xl font-bold text-gray-900">
            {introStart}
          </p>
          <p className="text-sm md:text-base max-w-2xl text-gray-600">
            {introEnd}
          </p>
        </div>

        <div className="border-l-4 border-gray-900 pl-4">
          <h3 className="text-xl font-semibold text-gray-900">Education</h3>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">
              BTech in Electrical Engineering (9.0 CGPA)
            </span>{" "}
            <br />
            BVDU, Pune (2016-2020)
          </p>
        </div>
      </div>

      <SocialMedia />
      <Skills />

      {/* Main Content - Image & Experience */}
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2 flex justify-center">
          <AboutImage />
        </div>
        <div className="md:w-1/2 space-y-6">
          <Experience />
        </div>
      </div>

      <Hobby />
    </section>
  );
};

export default AboutMe;
