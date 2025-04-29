import React from "react";

type Props = {
  total: number;
  start: number;
  middle: number;
};

const ProgressBar = ({ total, start, middle }: Props) => {
  const startPercentage = (start / total) * 100;
  const middlePercentage = (middle / total) * 100;
  const endPercentage = 100 - startPercentage - middlePercentage;

  return (
    <div className="w-[360px] bg-gray-300 rounded-full h-6 overflow-hidden">
      <div className="flex h-full w-full">
        <div
          className="bg-blue-500 h-full transition-all duration-500"
          style={{ width: `${startPercentage}%` }}
        />
        <div
          className="bg-yellow-500 h-full transition-all duration-500"
          style={{ width: `${middlePercentage}%` }}
        />
        <div
          className="bg-green-500 h-full transition-all duration-500"
          style={{ width: `${endPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
