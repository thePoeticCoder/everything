"use client";

import React, { useState, useMemo } from "react";
import { Tool, tools } from "./data";

const ToolsPage = () => {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredTools = useMemo(() => {
    return tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const groupedTools = useMemo(() => {
    return filteredTools.reduce((acc: Record<string, Tool[]>, tool) => {
      if (!acc[tool.category]) acc[tool.category] = [];
      acc[tool.category].push(tool);
      return acc;
    }, {});
  }, [filteredTools]);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen py-20 bg-gray-900 text-white"
          : "min-h-screen py-20 bg-gray-100 text-black"
      }
    >
      <div className="w-[90%] xl:w-[80%] mx-auto text-center">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">🧰 Everything Tools</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded hover:shadow"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search tools..."
          className="w-full mb-10 p-3 border rounded shadow-sm"
        />

        {Object.entries(groupedTools).map(([category, tools]) => (
          <div key={category} className="mb-12 text-left">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {tool.description}
                  </p>
                  <button className="text-blue-600 underline text-sm" disabled>
                    Open Tool
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
