"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { startingFeatures } from "../constants";
import { StartSteps, TitleText, TypingText } from "../components";
import { Event, fadeIn, planetVariants } from "../utils/motion";

const GetStarted = () => (
  <section
    className={`${styles.paddings} bg-green-100  m-4 rounded-xl relative z-10`}
  >
    <h1 className="mt-[8px] pr-52 font-bold md:text-[64px] text-[40px] text-black">
      Lorem
    </h1>
    <motion.div
      variants={Event}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src=""
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
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
