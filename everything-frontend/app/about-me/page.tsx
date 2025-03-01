import React from "react";
import { introEnd, introStart } from "@/constant/about-me";
import { AboutImage } from "../components/Home/About/about-image";
import SocialMedia from "./children/social-media";
import Skills from "./children/skills";
import { Experience } from "./children/experience";
import Hobby from "./children/hobby";

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
          <Skills />
          <Experience />
        </div>
      </div>
      <Hobby />
    </section>
  );
};

export default AboutMe;
