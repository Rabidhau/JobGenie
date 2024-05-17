import {
  faEdit,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import JobsCard from "./JobsCard";

export const Profile = ({ onSignInSuccess }) => {
  useEffect(() => {
    onSignInSuccess();
  }, [onSignInSuccess]);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
    phone_number: "",
    location: "",
    
    aboutMe: "",
  });
  const [jobsData, setJobsData] = useState({
    createdJobs: [],
    appliedJobs: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `http://localhost:3000/user-profile/${userId}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchJobsData = async () => {
      try {
        const company_name = localStorage.getItem("companyName");
        const createdJobsResponse = await axios.get(
          `http://localhost:3000/created-jobs/${company_name}`
        );

        const appliedJobsResponse = await axios.get(
          `http://localhost:3000/applicants/${company_name}`
        );

        setJobsData({
          createdJobs: createdJobsResponse.data,
          appliedJobs: appliedJobsResponse.data,
        });
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobsData();
  }, []);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update the company_name in local storage when changed
    if (name === "company_name") {
      localStorage.setItem("companyName", value);
    }
  };

  const handleAboutMeEdit = () => {
    // Prompt the user to input the new about me content
    const newAboutMe = prompt("Enter your new About Me content:");

    // Check if the user entered something
    if (newAboutMe !== null && newAboutMe !== "") {
      // Update the state with the new about me content
      setFormData({
        ...formData,
        aboutMe: newAboutMe,
      });

      // Update local storage with the new about me content
      const userId = localStorage.getItem("userId");
      if (userId) {
        const userData = JSON.parse(localStorage.getItem(userId));
        localStorage.setItem(
          userId,
          JSON.stringify({ ...userData, aboutMe: newAboutMe })
        );
      }

      // Close the edit mode
      setIsEditing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        `http://localhost:3000/updateinfo/${userId}`,
        formData
      );
      const updatedData = response.data;
      setFormData(updatedData);
      toggleEdit();
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };
  const [createdJobs, setCreatedJobs] = useState([]);

  useEffect(() => {
    if (formData?.email)
      axios
        .get("http://localhost:3000/created-jobs/" + formData.email)
        .then(function (response) {
          setCreatedJobs(response?.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [formData]);

  return (
    <div className="container max-w-[1300px] mx-auto py-8 mt-20 flex flex-col md:flex-row">
      <div className="w-full md:pl-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{formData.name}</h1>
          <p className="text-gray-600 mb-4">{`Senior Recruiter at ${formData.company_name}`}</p>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
            <span>{formData.email}</span>
          </div>
          <div className="flex items-center text-white mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-2" />
            <span>{formData.phone_number}</span>
          </div>
          <div className="flex items-center text-white mb-2">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-gray-500 mr-2" 
            />
            <span>{formData.location}</span>
          </div>
          <button
            onClick={toggleEdit}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Edit Profile
          </button>
        </div>
        <div className="mt-8">
  <h2 className="text-2xl text-white font-bold mb-4">About Me</h2>
  {isEditing ? (
    <textarea
      value={formData.aboutMe}
      onChange={handleChange}
      name="aboutMe"
      id="aboutMe"
      rows="4"
      className="w-full p-2 border text-white border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    ></textarea>
  ) : (
    <p className="text-gray-600 text-white">{formData.aboutMe}</p>
  )}
</div>
        <button
          onClick={handleAboutMeEdit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Edit About Me
        </button>
        {/* Jobs Section */}
        <div className="flex mt-8 w-full gap-16">
          {/* Jobs Created */}
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Jobs Created</h2>
            <h3 className="font-semibold">
              Total Jobs Created: {createdJobs.length}
            </h3>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {createdJobs.map((job) => (
                <JobsCard props={job} key={job.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 w-1/2 scale-75">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="company_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleEdit}
                  className="mr-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
