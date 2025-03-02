"use client";
import { useState } from "react";
import { Skill, skills } from "@/constant/about-me";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = (skill: Skill) => setSelectedSkill(skill);
  const closeModal = () => setSelectedSkill(null);

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2">
        Skills
      </h2>
      <p className="text-gray-600 text-sm mb-4 mt-2">
        Click on a skill to view experience details.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => handleSkillClick(skill)}
            className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-700"
          >
            {skill.name}
          </button>
        ))}
      </div>

      {selectedSkill && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg relative max-w-sm w-full border border-gray-300"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold">{selectedSkill.name}</h3>
            <p className="text-gray-700 mt-2">
              Experience:{" "}
              <span className="font-medium">{selectedSkill.years} years</span>
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
