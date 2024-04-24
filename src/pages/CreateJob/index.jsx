import { DateInput } from "@mantine/dates";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateJob = () => {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [requirement, setRequirement] = useState(["", "", "", ""]);
  const [submittedBy, setSubmittedBy] = useState(null);
  const [jobDetails, setJobDetails] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  console.log(submittedBy);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/create-job", {
        companyName,
        jobTitle,
        location,
        emailAddress,
        requirement,
        submitBy: dayjs(submittedBy).format("YYYY-MM-DD"),
        jobDetails,
        category,
      });
      notifications.show({
        title: "Created Successfully",
        message: `${response.data} :)`,
      });
      navigate("/");
    } catch (error) {
      // If there's an error, set the error state to display the error message
      setError("Error Occured. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 mt-10 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 b p-16 rounded-lg shadow-lg border border-gray-300 bg-gray-50">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create New Job
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Error message */}
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            {/* Other input fields */}
            <div>
              <label htmlFor="name" className="block mb-2">
                Company Name
              </label>
              <input
                id="Company Name"
                name="Company Name"
                type="Company Name"
                autoComplete="Company Name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="name" className="block mb-2">
                Job Title
              </label>
              <input
                id="Job Name"
                name="Job Name"
                type="Job Name"
                autoComplete="Job Name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Job Name"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email-address" className="block mb-2">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="name" className="block mb-2">
                Location
              </label>
              <input
                id="Location"
                name="Location"
                type="Location"
                autoComplete="Location"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="name" className="block mb-2">
                Requirement
              </label>
              <input
                id="Requirement 1"
                name="Requirement 1"
                type="Requirement 1"
                autoComplete="Requirement 1"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Requirement 1"
                value={requirement[0]}
                onChange={(e) =>
                  setRequirement((prev) =>
                    prev.map((value, index) =>
                      index === 0 ? e.target.value : value
                    )
                  )
                }
              />
              <input
                id="Requirement 2"
                name="Requirement 2"
                type="Requirement 2"
                autoComplete="Requirement 2"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Requirement 2"
                value={requirement[1]}
                onChange={(e) =>
                  setRequirement((prev) =>
                    prev.map((value, index) =>
                      index === 1 ? e.target.value : value
                    )
                  )
                }
              />
              <input
                id="Requirement 2"
                name="Requirement 2"
                type="Requirement 2"
                autoComplete="Requirement 2"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Requirement 2"
                value={requirement[2]}
                onChange={(e) =>
                  setRequirement((prev) =>
                    prev.map((value, index) =>
                      index === 2 ? e.target.value : value
                    )
                  )
                }
              />
              <input
                id="Requirement3"
                name="Requirement3"
                type="Requirement3"
                autoComplete="Requirement3"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Requirement3"
                value={requirement[3]}
                onChange={(e) =>
                  setRequirement((prev) =>
                    prev.map((value, index) =>
                      index === 3 ? e.target.value : value
                    )
                  )
                }
              />
            </div>

            <div>
              <label htmlFor="name" className="block mb-2">
                Job Description
              </label>
              <textarea
                id="Job Description"
                name="Job Description"
                type="Job Description"
                autoComplete="Job Description"
                rows={5}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Job Description"
                value={jobDetails}
                onChange={(e) => setJobDetails(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="name" className="block mb-2">
                Submit By
              </label>
              <DateInput
                value={submittedBy}
                onChange={setSubmittedBy}
                variant="filled"
                label="Date input"
                placeholder="Date input"
              />
            </div>

            <div className="relative mt-4">
              <select
                id="option"
                name="option"
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-900 py-2 px-4 pr-8 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="placeholder" disabled>
                  Select a category ...
                </option>
                <option value="it">IT</option>
                <option value="sales">Sales</option>
                <option value="Art">Art</option>
                <option value="Finance">Finance</option>
                <option value="Education">Education</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
