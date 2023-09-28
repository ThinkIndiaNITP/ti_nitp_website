"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const Faqsection = () => {
  return (
    <>
      <section
        className={`${styles.paddings} bg-blue-200 m-4 rounded-xl relative z-10`}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.95] flex justify-center flex-col"
          >
            <h3 className="mt-[8px] pr-52 font-bold md:text-[64px] text-[20px] text-black">
              FAQ Section
            </h3>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Faqsection;
