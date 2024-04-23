import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Auth = ({ onSignInSuccess }) => {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/authentication', {
        token
      });

      console.log(response.data); // Log the response to inspect

      // If token is valid, navigate to the desired route
      if (response.status === 200) {
        onSignInSuccess();
        navigate('/'); // Navigate to the desired route
      } else {
        setMessage('Invalid token. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error verifying token. Please try again later.');
    }
  };

  const handleTokenChange = (e) => {
    setToken(e.target.value);
    setMessage(''); // Clear the message when the token input changes
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 p-16 rounded-lg shadow-lg border border-gray-300 bg-gray-50">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify Authorization Token
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            <div>
              <label htmlFor="token" className="sr-only">
                Token
              </label>
              <input
                id="token"
                name="token"
                type="text"
                autoComplete="off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Auth Token"
                value={token}
                onChange={handleTokenChange}
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
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};