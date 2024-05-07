import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Add a state for the message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      });

      console.log(response.data); // Log the response to inspect

      // If login successful, navigate to the desired route and store user data in local storage
      if (response.status === 200) {
        const userData = response.data;
        localStorage.setItem('userId', userData.userId); // Store userId in local storage
        localStorage.setItem('userEmail', userData.email); // Store userEmail in local storage
        localStorage.setItem('userName', userData.username); // Store userName in local storage
        localStorage.setItem('userRole', userData.role); // Store userRole in local storage

        navigate('/authentication'); // Navigate to the desired route
      } else {
        setMessage('Invalid credentials. Please try again.'); // Set the error message
      }
    } catch (error) {
      console.error(error);
      setMessage('Error signing in. Please try again later.'); // Set the error message
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessage(''); // Clear the message when the email input changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setMessage(''); // Clear the message when the password input changes
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 p-16 rounded-lg shadow-lg border border-gray-300 bg-gray-50">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
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
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            {message && (
              <div className="text-red-500 text-sm">{message}</div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
          <div className="text-sm text-center">
            <p className="text-gray-600">Don't have an account?</p>
            <a
              href="/sign-up"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Create New Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
