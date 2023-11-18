"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings}  sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-row`}
    >
      <div className="flex mt-6 justify-center  mb-20 items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1)}
          className={`${styles.heroHeading}  italic `}
        >
          ThinkIndia Nit Patna
          <br></br> Welcomes you
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        {/* <div
          className={`absolute w-full h-[300px] ${
            "hero-gradient" + " hidden md:block"
          }  ${"hero-gradient2" + " show md:block"} z-[0] top-[130px]`}
        /> */}
        <div
          className={`absolute w-full h-[300px] 
     ${"hero-gradient  hidden lg:block "} z-[0] top-[100px]  ${"hero-gradient lg:block show"}`}
        />

        <img
          style={{
            width: "100%",
            padding: "50px",
            margin: "10px",
          }}
          src="/thinkinidalogo.png"
          className="w-full  sm:h-[500px] sm:m-[10px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
