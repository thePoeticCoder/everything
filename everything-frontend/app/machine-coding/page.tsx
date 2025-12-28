"use client";

import React, { useState } from "react";
import MachineCodeCard from "./machine-code-card";
import MachineCodeModal from "./machine-code-modal";
import {
  CATEGORY_OPTIONS,
  DIFFICULTY_OPTIONS,
  machineCodeItems,
} from "./constant";

const MachineCoder = () => {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState(machineCodeItems);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleSearch = () => {
    const result = machineCodeItems.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (!level || item.difficulty === level) &&
        (!category || item.category === category)
      );
    });

    setFilteredItems(result);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Machine Code Components</h1>

      {/* Search & Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search component..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2"
        />

        {/* Difficulty Filter */}
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Levels</option>
          {DIFFICULTY_OPTIONS.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Categories</option>
          {CATEGORY_OPTIONS.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800"
        >
          Search
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <MachineCodeCard
            key={item.id}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* Code Modal */}
      {selectedItem && (
        <MachineCodeModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default MachineCoder;
