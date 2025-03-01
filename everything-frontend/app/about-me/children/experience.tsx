"use client";
import { experiences } from "@/constant/about-me";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div className="relative bg-white text-black-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            className="p-5 border rounded-lg bg-white text-black transition-transform duration-300 shadow-md"
          >
            <h3 className="text-lg font-bold">{exp.title}</h3>
            <span className="block text-gray-600 text-sm">{exp.year}</span>
            <p className="mt-2 text-gray-700 text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
