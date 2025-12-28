"use client";

import React, { useState } from "react";

type CodeModalProps = {
  item: {
    name: string;
    code: string;
  };
  onClose: () => void;
};

const MachineCodeModal = ({ item, onClose }: CodeModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.code);
      setCopied(true);

      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-4xl max-h-[90vh] rounded-lg relative overflow-hidden shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{item.name}</h2>

          <div className="flex items-center gap-3">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="text-sm px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 transition"
            >
              {copied ? "✅ Copied" : "Copy Code"}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-xl font-bold hover:text-red-600"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Code */}
        <div className="p-4 overflow-y-auto max-h-[75vh] bg-gray-50">
          <pre className="text-sm whitespace-pre-wrap">
            <code>{item.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MachineCodeModal;
