import axios from "axios";
import React, { useState } from "react";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedOption, setSelectedOption] = useState("placeholder");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [verifyToken, setVerifyToken] = useState("");
  const [tokenSent, setTokenSent] = useState(false); // Track if token has been sent

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Function to send token to user's email
  const sendToken = async () => {
    try {
      const response = await axios.post("http://localhost:3000/verify-token", {
        email,
      });
      setTokenSent(true);
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tokenSent) {
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/sign-up", {
        email,
        fullName,
        password,
        selectedOption,
        verifyToken,
      });
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 mt-10 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 p-16 rounded-lg shadow-lg border border-gray-300 bg-gray-50">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create New Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          {message && (
            <div className="text-green-500 text-sm text-center">{message}</div>
          )}

          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="Full Name"
                name="Full Name"
                type="text"
                autoComplete="Full Name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </div>

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

            <div className="relative mt-4">
              <select
                id="option"
                name="option"
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-900 py-2 px-4 pr-8 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="placeholder" disabled>
                  Register as a ...
                </option>
                <option value="Candidate">Register as a Candidate</option>
                <option value="Recruiter">Register as a Recruiter</option>
              </select>
            </div>

            {/* Display Send Token button only if token has not been sent */}
            {!tokenSent && (
              <button
                onClick={sendToken}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Token
              </button>
            )}

            {/* Display input for verification token only if token has been sent */}
            {tokenSent && (
              <div>
                <label htmlFor="verify-token" className="sr-only">
                  Verify Token
                </label>
                <input
                  id="verify-token"
                  name="verify-token"
                  type="text"
                  autoComplete="verify-token"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Token"
                  value={verifyToken}
                  onChange={(e) => setVerifyToken(e.target.value)}
                />
              </div>
            )}
          </div>

          {/* Display Sign Up button only if token has been sent */}
          {tokenSent && (
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          )}

          <div className="text-sm">
            <a
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in to your account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};