"use client";
import { useState } from "react";
import { Skill, skills } from "@/constant/about-me";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = (skill: { name: string; years: number }) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Skills</h2>
      <p className="text-gray-500 text-sm mb-2">
        Click a skill to view experience.
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill: Skill, index) => (
          <button
            key={index}
            onClick={() => handleSkillClick(skill)}
            className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium shadow-md transition-transform transform hover:scale-105 hover:bg-gray-700"
          >
            {skill.name}
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedSkill && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg relative max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold">{selectedSkill.name}</h3>
            <p className="text-gray-700 mt-2">
              Experience: {selectedSkill.years} years
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
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
