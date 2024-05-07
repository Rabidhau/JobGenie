import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const fetchUserData = async () => {
  try {
    const userId = localStorage.getItem('userId');
    const response = await axios.get(`http://localhost:3000/user-profile/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

const fetchJobs = async () => {
  try {
    const company_name = localStorage.getItem('companyName');
    const createdJobsResponse = await axios.get(`http://localhost:3000/created-jobs/${company_name}`);
    const appliedJobsResponse = await axios.get(`http://localhost:3000/applicants/${company_name}`);
    return { createdJobs: createdJobsResponse.data, appliedJobs: appliedJobsResponse.data };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return { createdJobs: [], appliedJobs: [] };
  }
};

export const Profile = ({ onSignInSuccess }) => {
  onSignInSuccess();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    email: '',
    phone_number: '',
    location: '',
    profileImage: '',
  });
  const [jobsData, setJobsData] = useState({ createdJobs: [], appliedJobs: [] });

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUserData();
      if (userData) {
        setFormData(userData);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchJobsData = async () => {
      const jobsData = await fetchJobs();
      setJobsData(jobsData);
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
    if (name === 'company_name') {
      localStorage.setItem('companyName', value);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setFormData({
        ...formData,
        profileImage: reader.result,
      });
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId'); 
      const response = await axios.post(`http://localhost:3000/updateinfo/${userId}`, formData);
      const updatedData = response.data;
      setFormData(updatedData);
      toggleEdit();
      
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div className="container mx-auto py-8 mt-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4">
          <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">Profile Image</label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleImageChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-2">{formData.name}</h1>
          <p className="text-gray-600 mb-4">{`Senior Recruiter at ${formData.company_name}`}</p>
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
          <button onClick={toggleEdit} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Edit Profile
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in posuere
          faucibus, lectus magna consequat nibh, vel luctus eros magna in magna. Donec vel nulla
          vel risus dapibus venenatis. Nullam sit amet tortor vel risus venenatis auctor.
        </p>
      </div>
      {/* Jobs Section */}
      <div className="flex mt-8 justify-center text-center">
        {/* Jobs Created */}
        <div className="w-1/2 mr-4">
          <h2 className="text-2xl font-bold mb-4">Jobs Created</h2>
          <p>Total Jobs Created: {jobsData.createdJobs.length}</p>
          <div className="grid gap-4">
            {jobsData.createdJobs.map((job) => (
              <div key={job.id} className="bg-gray-100 p-4 rounded-lg">
                {/* Render job details here */}
              </div>
            ))}
          </div>
        </div>
        {/* Jobs Applied */}
        <div className="w-1/2 ml-4">
          <h2 className="text-2xl font-bold mb-4">Jobs Applied</h2>
          <p>Total Applicants: {jobsData.appliedJobs.length}</p>
          <div className="grid gap-4">
            {jobsData.appliedJobs.map((job) => (
              <div key={job.id} className="bg-gray-100 p-4 rounded-lg">
                {/* Render job details here */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
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
                <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">Company Name</label>
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
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
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
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
                <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">Profile Image URL</label>
                <input
                  type="text"
                  id="profileImage"
                  name="profileImage"
                  value={formData.profileImage}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={toggleEdit} className="mr-2 text-gray-600 hover:text-gray-800">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
