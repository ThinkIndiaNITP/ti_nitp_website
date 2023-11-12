import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="relative">
      {/* Image Background */}
      <div
        className="xl:container mx-auto mb-32 mt-20 w-full h-96"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.5) 70%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          backgroundImage: `url(./contactus1.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
        }}
      ></div>

      {/* Form Container */}
      <motion.div
        className="px-4 sm:w-2/3 lg:w-1/2 mx-auto -mt-72"
        whileHover={{
          scale: 0.9,
        }}
        transition={{
          layout: { duration: 1, type: "spring" },
        }}
        // style={formContainerStyle}
      >
        <div className="rounded-lg shadow-lg bg-white py-10 md:py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mb-12 mx-auto items-center justify-center">
            {/* Use React icons */}
            <div className="flex items-center justify-center mb-4 md:mb-0">
              <FiMail className="text-4xl text-pink-600" />
              <p className="text-gray-600 ml-2">contact@us</p>
            </div>
            <div className="flex items-center justify-center">
              <FiPhone className="text-4xl text-pink-600" />
              <p className="text-gray-600 ml-2">+91 6392285932</p>
            </div>
          </div>
          <div>
            <form>
              {/* Form fields go here */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                  placeholder="Enter name here..."
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                  placeholder="Enter email here..."
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                  placeholder="Enter message here..."
                />
              </div>

              <button
                className="w-full px-6 py-3 bg-pink-600 text-white font-medium uppercase rounded shadow-md hover:bg-pink-500 hover:shadow-lg focus:bg-pink-600 focus:outline-none focus:ring-0 active-bg-pink-600"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
