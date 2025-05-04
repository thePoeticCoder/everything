"use client";
import React, { useState } from "react";
import SliderInput from "../machine-coding-components/slider-input";

const MachineCoder = () => {
  const [amount, setAmount] = useState(15);
  return (
    <div>
      <SliderInput min={0} max={100} value={amount} onChange={setAmount} />
    </div>
  );
};
export default MachineCoder;
