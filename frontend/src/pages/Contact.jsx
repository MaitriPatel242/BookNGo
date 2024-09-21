import React, { useState } from 'react';
import axios from 'axios';
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };
  
    try {
      const token = localStorage.getItem('jwtToken'); // Adjust this based on where you store the token
      console.log(token)
      const response = await axios.post('http://127.0.0.1:8000/api/contact/', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Failed to send email:', error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('./bg-04.jpg')",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center blur-md opacity-70"
          style={{
            backgroundImage: "url('./bg-04.jpg')",
          }}
        ></div>

        <div className="relative bg-green text-white p-8 md:p-10 rounded-lg shadow-lg w-full max-w-[50%] z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Contact Us</h2>

          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Enter the subject"
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-green text-2xl font-bold rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Submit
            </button>
          </form>

          {/* Status message */}
          {status && <p className="mt-4 text-center text-white">{status}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
