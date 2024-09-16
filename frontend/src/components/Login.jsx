import React from 'react';

const LoginForm = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('./bg-04.jpg')", // Replace with your background image URL
      }}
    >
      {/* Background image with blur and opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md opacity-70"
        style={{
          backgroundImage: "url('./bg-04.jpg')", // Replace with your background image URL
        }}
      ></div>

      {/* Login form */}
      <div className="relative bg-green text-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Log In</h2>

        <form>
          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your email"
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
            />
          </div>
            <br></br>
          <button
            type="submit"
            className="w-full py-4 bg-white text-green text-2xl font-bold rounded-lg hover:bg-gray-100 transition duration-300"
          >
           Log in
          </button>

          <p className="text-center mt-4">
            Don't have an account?{' '}
            <a href="/signup" className="text-white underline hover:text-gray-200">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
