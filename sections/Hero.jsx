"use client";
import React from "react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import Image from "next/image";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
});
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <>
    {/* <div className={`area fixed`}>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div> */}
    <section className={`${styles.yPaddings}   sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth}  mx-auto flex flex-row `}
      >
        <div className="flex flex-col md:flex-row mt-6 justify-center  mb-20 items-center  relative ">
          <motion.h1
            variants={textVariant(1)}
            className={`${styles.heroHeading} z-20 mb-4 text-3xl font-extrabold text-gray-900 dark:text-sky-400 md:text-5xl lg:text-6xl `}
          >
            {/* <span classname="">ThinkIndia NIT Patna Welcomes you.</span> */}
            {/* <h1 className=""> */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              ThinkIndia NIT Patna
            </span>{" "}
            Welcomes You.
            {/* </h1> */}
          </motion.h1>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className=" realtive w-full 
             md:-mt-[20px] -mt-[12px]   flex md:flex-row 
          "
            //  className="glassmorphism w-full sm:m-[10px] object-cover z-10 relative "
          >
            <Image
              src="/thinkinidalogo.png"
              width={300}
              height={100}
              className="glassmorphism mx-6 space-x-6 gap-16  marqueeContent rounded-3xl"
            />
            <Image
              src="/nitplogo.png"
              width={300}
              height={100}
              className="glassmorphism  marqueeContent1  mx-6 px-12 space-x-6 gap-16 rounded-3xl"
            />
          </motion.div>
          {/* <motion.h1
            variants={textVariant(1)}
            className={`${styles.heroHeading}  font-mono relative text-xl before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0em] after:animate-caret after:bg-black  `}
          >
            Welcomes you
          </motion.h1> */}
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className=" realtive w-full 
             md:-mt-[20px] -mt-[12px]
          "
        >
          {/* <div
          className={`absolute w-full h-[300px] ${
            "hero-gradient" + " hidden md:block"
          }  ${"hero-gradient2" + " show md:block"} z-[0] top-[130px]`}
        /> */}
          {/* <div
            className={` relative mb-12 w-full h-[300px] 
     ${"hero-gradient  show lg:block top-[50px]"}
      z-[0]  lg:top-[90px] md:top-[80px] 
      ${"hero-gradient lg:block show"}
     `}
          /> */}
          {/* <motion.h1
            variants={textVariant(1)}
            className={`${styles.heroHeading} font-mono relative  text-4xl before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0em] after:animate-caret after:bg-black  `}
          >
            ThinkIndia NIT Patna
            <br></br>
            Welcomes you
          </motion.h1> */}
          {/* <img
            style={{
              width: "100%",
              padding: "50px",
              margin: "10px",
            }}
            src="/thinkinidalogo.png"
            className="w-full  sm:h-[800px] sm:m-[10px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          /> */}
        </motion.div>
      </motion.div>
    </section>
  </>
);

export default Hero;
