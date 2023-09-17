import React, { useState } from "react";
import styles from "../styles";
import { motion } from "framer-motion";
const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("fullName", fullName);
    console.log("email", email);
    console.log("message", message);
  };

  return (
    <>
      <div
        className={`${styles.innerWidth}  mx-auto flex flex-col mt-5 justify-center items-center`}
      >
        <div id="contactimage">
          <div className=" shadow-md border-border-slate-400  p-4 mb-0 max-w-xl  m-16 start-e ">
            <motion.h1
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              whileHover={{ scale: 0.9, opacity: 1 }}
              className="text-3xl font-bold  text-center text-slate-800 mt-3"
            >
              Contact Us
            </motion.h1>
          </div>
          <motion.div
            whileHover={{
              scale: 0.9,
            }}
            transition={{
              layout: { duration: 1, type: "spring" },
            }}
            className=" bg-slate-700 p-4 max-w-2xl  rounded-2xl   border  mb-0"
          >
            <form
              onSubmit={handleSubmit}
              className=" text-white py-4 mt-0 border-t flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="fullname">Full Name</label>
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  className="pl-2 shadow-lg  border-slate-400 border rounded-lg h-8 text-black"
                  type="text"
                  value={fullName}
                  name="fname"
                  id="fullname"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-2 shadow-lg  border-slate-400 border rounded-lg h-8  text-black"
                  type="text"
                  name="email"
                  value={email}
                  id="email"
                  placeholder="xyz@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className=" pl-2 shadow-lg  border-slate-400 border rounded-lg h-40 text-black"
                  id="message"
                  name="message"
                  value={message}
                  placeholder="Type your message here"
                ></textarea>
              </div>

              <button
                className=" border rounded-lg bg-blue-600 text-white h-10 w-56 hover:bg-blue-500"
                type="submit"
              >
                Send mesage
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
