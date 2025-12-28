import React from "react";

const MachineCodeCard = ({ item, onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded-lg p-4 bg-white hover:shadow-lg transition"
    >
      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>

      <p className="text-sm text-gray-600 mb-4">{item.description}</p>

      <div className="flex justify-between text-xs">
        <span className="px-2 py-1 bg-gray-100 rounded">{item.category}</span>
        <span className="px-2 py-1 bg-black text-white rounded">
          {item.difficulty}
        </span>
      </div>
    </div>
  );
};

export default MachineCodeCard;
