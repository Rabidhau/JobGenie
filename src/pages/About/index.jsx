import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const About = () => {
  return (
    <div className="bg-gray-900 pt-40 pb-90"> 
      <div className="container mx-auto px-98 py-8 ">
        <h1 className="text-3xl font-bold text-white mb-1 flex justify-center">About Our Job Portal</h1>
        <p className="text-lg text-white mb-6">
          Welcome to our job portal! We are dedicated to connecting job seekers with opportunities
          and helping employers find the perfect candidates.
        </p>
        <p className="text-lg text-white mb-6">
          Our mission is to simplify the job search process by providing a user-friendly platform
          where candidates can explore job listings, create profiles, and apply for positions
          effortlessly. Employers can efficiently manage their hiring process by posting jobs,
          reviewing applications, and communicating with candidates.
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
        <ul className="list-disc text-white ml-6 mb-6">
          <li className="mb-2">Search and filter job listings based on various criteria.</li>
          <li className="mb-2">Create a personalized profile to showcase your skills and experience.</li>
          <li className="mb-2">Apply to job listings directly through our platform.</li>
          <li className="mb-2">Receive notifications about new job openings matching your preferences.</li>
          <li className="mb-2">Manage job postings and applications efficiently as an employer.</li>
          <li className="mb-2">Communicate with candidates seamlessly throughout the hiring process.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-white mb-4">Our Team</h2>
        <p className="text-lg text-white mb-6">
          Behind our job portal is a team of dedicated professionals passionate about revolutionizing
          the recruitment industry. We strive to provide the best possible experience for both job
          seekers and employers, continually innovating and improving our platform.
        </p>
        <p className="text-lg text-white mb-6">
          Meet some of the key members of our team:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-lg">Co-founder & CEO</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-lg">Head of Product</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Michael Johnson</h3>
            <p className="text-lg">Lead Developer</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  );
};