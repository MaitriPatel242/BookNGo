import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

const Booking = () => {
  const price = 1000; // Static price
  const location = "New York, USA"; // Static location
  const description = "A beautiful tour package to experience the vibrant culture and landscapes of New York.";
  const title = "New York City Tour"; // Static title
  const reviewsArray = [1, 2, 3]; // Static reviews array
  const avgRating = 4.5; // Static average rating
  const calculatedPrice = price * 1; // Static price calculation (1 person)

  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="w-full lg:w-1/2 h-auto flex flex-col items-start space-y-4">
            <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-lg">
              <p className="text-gray-500">Image Placeholder (Upload your image here)</p>
            </div>
            <div className="space-y-2 text-left">
              <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
              <p className="text-lg text-green"><strong>Location:</strong> {location}</p>
              <p className="text-lg text-green"><strong>Price:</strong> Rs. {price}</p>
              <p className="text-lg text-gray-600">{description}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            <h5 className="text-2xl font-bold text-green mb-6">Booking Information</h5>
            <form className="space-y-6">
              <div>
                <input
                  className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <input
                  className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  type="text"
                  placeholder="Contact No."
                  required
                />
              </div>
              <div>
                <input
                  className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  type="number"
                  placeholder="Number of People"
                  defaultValue={1}
                  min={1}
                  required
                />
              </div>
              <div>
                <input
                  className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  type="date"
                  required
                  min={minDate}
                />
              </div>

              <div className="mt-12 font-semibold">
                <div className="flex my-4 justify-between text-green">
                  <span>Gross Price: </span>
                  <p className="font-semibold">Rs. {price}</p>
                </div>
                <div className="flex text-green my-4 border-b-[1px] pb-2 border-gray-300 justify-between">
                  <span>GST: </span>
                  <p className="font-semibold">0%</p>
                </div>
                <div className="flex my-6 justify-between font-bold text-lg text-green">
                  <span>Net Price: </span>
                  <p>Rs. {calculatedPrice}</p>
                </div>
              </div>

              <button type="submit" className="btn w-full bg-green text-white h-10 font-bold rounded">
                Book
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
