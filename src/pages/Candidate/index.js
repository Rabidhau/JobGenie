import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Candidate = ({ onSignInSuccess }) => {
  useEffect(() => {
    onSignInSuccess();
  }, [onSignInSuccess]);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    location: "",
    aboutMe: "",
    qualifications: []
  });
  
  const [jobsData, setJobsData] = useState({
    createdJobs: [],
    appliedJobs: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(`http://localhost:3000/candidate/${userId}`);
        const { qualification1, qualification2, qualification3, qualification4, ...data } = response.data;
        const qualifications = [qualification1, qualification2, qualification3, qualification4].filter(Boolean); // Filter out empty qualifications
        setFormData({ ...data, qualifications }); // Spread the rest of the data along with qualifications array
        
        // Check if "About Me" content exists in local storage
        const storedAboutMe = localStorage.getItem("aboutMe");
        if (storedAboutMe) {
          setFormData(prevState => ({ ...prevState, aboutMe: storedAboutMe }));
        }
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
      [name]: value
    });
  };

  const handleAboutMeEdit = () => {
    const newAboutMe = prompt("Enter your new About Me content:");
    if (newAboutMe !== null && newAboutMe !== "") {
      // Update the state with the new about me content
      setFormData({
        ...formData,
        aboutMe: newAboutMe,
      });
      
      // Save the new about me content in local storage
      localStorage.setItem("aboutMe", newAboutMe);
      
      setIsEditing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.post(`http://localhost:3000/update_candidate/${userId}`, formData);
      const updatedData = response.data;
      setFormData(updatedData);
      toggleEdit();
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="container mx-auto py-8 mt-20 flex flex-col md:flex-row">
      <div className="md:w-2/3 md:pl-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{formData.name}</h1>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
            <span>{formData.email}</span>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-2" />
            <span>{formData.phone_number}</span>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 mr-2" />
            <span>{formData.location}</span>
          </div>
        </div>
        {Array.isArray(formData.qualifications) && formData.qualifications.length > 0 && (
          <div className="mb-2">
            <h2 className="text-xl font-bold mb-2">Qualifications</h2>
            <ul className="list-disc pl-6">
              {formData.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={toggleEdit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Edit Profile
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          {isEditing ? (
            <textarea
              value={formData.aboutMe}
              onChange={handleChange}
              name="aboutMe"
              id="aboutMe"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          ) : (
            <p className="text-gray-600">{formData.aboutMe}</p>
          )}
        </div>
        <button
          onClick={handleAboutMeEdit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Edit About Me
        </button>
        <div className="flex mt-8   w-full">
          <div className="w-1/2 mr-4">
            <h2 className="text-2xl font-bold mb-4">Jobs applied</h2>
            <p>Total Jobs Applied: {jobsData.createdJobs.length}</p>
            <div className="grid gap-4">
              {jobsData.createdJobs.map((job) => (
                <div key={job.id} className="bg-gray-100 p-4 rounded-lg">
                  {/* Render job details here */}
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 ml-4">
            <h2 className="text-2xl font-bold mb-4">Job accepted</h2>
            <p>Total Accepted Jobs: {jobsData.appliedJobs.length}</p>
            <div className="grid gap-4">
              {jobsData.appliedJobs.map((job) => (
                <div key={job.id} className="bg-gray-100 p-4 rounded-lg">
                  {/* Render job details here */}
                </div>
              ))}
            </div>
          </div>
        </div>
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
                <div className="mb-4">
                  <label
                    htmlFor="qualification1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Qualification 1
                  </label>
                  <input
                    type="text"
                    id="qualification1"
                    name="qualification1"
                    value={formData.qualification1}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="qualification2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Qualification 2
                  </label>
                  <input
                    type="text"
                    id="qualification2"
                    name="qualification2"
                    value={formData.qualification2}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="qualification3"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Qualification 3
                  </label>
                  <input
                    type="text"
                    id="qualification3"
                    name="qualification3"
                    value={formData.qualification3}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="qualification4"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Qualification 4
                  </label>
                  <input
                    type="text"
                    id="qualification4"
                    name="qualification4"
                    value={formData.qualification4}
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
    </div>
  );
};
