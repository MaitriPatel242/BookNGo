import React from 'react';

const SignupForm = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('./bg-04.jpg')", // Ensure this path is correct
      }}
    >
      {/* Background image with opacity and blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg opacity-80"
        style={{
          backgroundImage: "url('./bg-04.jpg')", // Ensure this path is correct
        }}
      ></div>

      {/* Sign up form */}
      <div className="relative bg-green text-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Sign Up</h2>

        <form>
          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Confirm your password"
              required
            />
          </div>

          <br />

          <button
            type="submit"
            className="w-full py-4 bg-white text-green text-2xl font-bold rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Signup
          </button>

          <p className="text-center mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-white underline hover:text-gray-200">
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
