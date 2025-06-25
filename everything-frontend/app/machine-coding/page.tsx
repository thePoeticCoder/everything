"use client";
import React from "react";
import { machineCodeItems } from "@/constant/machine-code-list";

const MachineCoder = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Machine Code Components</h1>
      {machineCodeItems.map((feature) => (
        <div
          key={feature.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1rem",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>
            {feature.id}. {feature.name}
          </h3>
          <div style={{ marginTop: "0.5rem" }}>{feature.description}</div>
        </div>
      ))}
    </div>
  );
};

export default MachineCoder;
