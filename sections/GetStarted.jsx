"use client";

import { motion } from "framer-motion";

import styles from "../styles";

import { Event, fadeIn, planetVariants, slideIn } from "../utils/motion";

const GetStarted = () => (
  <section
    className={`${styles.paddings} glassmorphism bg-green-100  m-4 rounded-xl relative z-10`}
  >
    <h1 className="mt-[8px] pr-52 font-bold md:text-[30px] text-[10px] text-black">
      Our PI<br></br>
      Shiv Shankar Choudhary
    </h1>
    <motion.div
      variants={Event}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-5`}
    >
      <motion.div
        // variants={planetVariants("left")}
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="./pi.jpg"
          alt="get-started"
          className={`w-[50%] h-[60%] mr-24 sm:flex sm:items-center`}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur necessitatibus cum hic ullam, in voluptate alias velit
            impedit numquam aliquid?{" "}
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
