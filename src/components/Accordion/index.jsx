import React, { useState } from "react";

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="border rounded-md mb-6 overflow-hidden">
          <input
            type="checkbox"
            id={`accordion-item-${index}`}
            className="hidden"
            checked={index === activeIndex}
          />
          <label
            htmlFor={`accordion-item-${index}`}
            className="block cursor-pointer px-4 py-5 transition-colors duration-300"
            onClick={() => handleClick(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-white">
                {item.title}
              </span>
              <svg
                className={`h-6 w-6 transition-transform transform ${
                  index === activeIndex ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </label>
          <div
            className={`px-4 pb-4 max-w-[80%] ${
              index === activeIndex ? "block" : "hidden"
            }`}
          >
            <p className="text-white">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
