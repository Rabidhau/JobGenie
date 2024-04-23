import dayjs from "dayjs";
import React from "react";

export const JobCard = ({ props }) => {
  return (
    <div className="mx-auto w-full bg-white shadow-md rounded-lg overflow-hidden hover:rounded-xl hover:shadow-slate-300 transition-all">
      <div className="px-4 py-6">
        <div className="flex items-center gap-4">
          <img
            className="h-12 w-auto"
            src="https://via.placeholder.com/50"
            alt="Logo"
          />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800">
              {props.jobTitle}
            </h2>
            <span className="text-xs">{props.location}</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600 mt-2">{props.company}</p>
          <p className="text-sm text-gray-600 mt-2">{props.jobDetails}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-700">
              Last Date: {dayjs(props.submitBy).format("DD, MMM, YYYY")}
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded hover:bg-blue-600 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
