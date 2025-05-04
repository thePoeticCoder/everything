import React from "react";

type SliderInputProps = {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

const SliderInput = ({ min, max, value, onChange }: SliderInputProps) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-md">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Amount: <span className="font-bold">{value}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #1e3a8a 0%, #1e3a8a ${percentage}%, #cbd5e1 ${percentage}%, #cbd5e1 100%)`,
        }}
      />
      <div className="flex justify-between text-sm text-gray-500 mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default SliderInput;

//   const [amount, setAmount] = useState(15);
//   return (
// 	<div>
// 	  <SliderInput min={0} max={100} value={amount} onChange={setAmount} />
// 	</div>
//   );
