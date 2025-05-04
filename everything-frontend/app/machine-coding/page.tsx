"use client";
import React, { useState } from "react";
import Modal from "../machine-coding-components/modal";

const MachineCoder = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Modal"
      >
        <p>This is a simple modal using Tailwind CSS.</p>
        <div className="mt-4 text-right">
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default MachineCoder;
