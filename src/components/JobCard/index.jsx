import React from 'react';

export const JobCard = ({ logoSrc, jobTitle, companyName, jobDescription, postedTime }) => {
  return (
    <div className="mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:rounded-xl hover:shadow-slate-300 transition-all mt-4">
      <div className="px-4 py-6">
        <div className="flex items-center gap-4">
          <img
            className="h-12 w-auto"
            src={logoSrc}
            alt="Logo"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            {jobTitle}
          </h2>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600 mt-2">
            {companyName}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            {jobDescription}
          </p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xs text-gray-400">{postedTime}</p>
            <button className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded hover:bg-blue-600 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
