import React from "react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center"
        id="contact"
      >
        <div className="bg-gray-700 text-center hover:shadow-md transition-shadow shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Contact Us
          </h1>
          <p className="text-white text-center mb-6">
            Have any questions or concerns? We would love to hear from you!
          </p>
          <form action="https://formspree.io/f/manypbbk" method="POST">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                className="text-black"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                className="text-black"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="text-black mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
