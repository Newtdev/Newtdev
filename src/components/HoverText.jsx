import React, { useState } from "react";

const HoverText = () => {
  const text = "Hover over this text and watch it come to life!";
  const [activeIndices, setActiveIndices] = useState([]);
  const handleMouseEnter = (index) => {
    if (!activeIndices.includes(index)) {
      setActiveIndices((prev) => [...prev, index]);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <p className="text-2xl font-medium leading-8">
        {text.split("").map((char, index) => (
          <span
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            className={`transition duration-300 ${activeIndices.includes(index)
                ? "text-blue-500 font-bold" // Active styles
                : "text-gray-700"
              }`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default HoverText;
