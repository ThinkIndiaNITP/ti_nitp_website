"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section
    className={`${styles.paddings}  glassmorphism m-4 py-9  mt-24  relative z-10`}
  >
    {/* <div className="gradient-02 z-0" /> */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth}  ${styles.flexCenter}  gap-52 flex-row`}
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px]  text-[20px]  text-secondary-black styles.justifyContainer"
      >
        <span className="font-extrabold text-black }">Think India Student Chapter NITP</span> embodies a visionary quest to unite students across its educational landscape in a
        shared nationalistic ethos, channelling the collective potential for the noble pursuit of national
        reconstruction within the panoramic endeavour, we, as a pan – India organisation, tirelessly
        endeavour to converge the brightest minds instilling in them a resolute “Nation First” attitude.
        Our mission is to cultivate solution-oriented thinking, igniting a spirit that inspires the youth
        if India to selflessly serve society.{" "}
        <br></br>
        <span className="font-extrabold text-black }">Think India SC NITP</span> was established on 28th February, 2023 and that day marks
        an auspicious culmination in conversion of TECTONIX NITP into THINK INDIA STUDENT
        CHAPTER NITP by group of our brilliant seniors with their intellect and unwavering dedication
        under the guidance of our esteemed PI Dr. Shiv Shankar Choudhary.
<br></br>
        <span className="font-extrabold text-black }">Embark on an exhilarating odyssey with the THINK INDIA SC NITP</span> – a journey that unfolds the
        boundless opportunities for honing your skills across diverse domains. This club is dedicated
        to elevate your prowessin technology management and soft skills converging under a singular
        platform where ideas and knowledge converge with excellence. Our primary aim is to
        illuminate the path for brilliant minds to flourish.
<br></br>
        <span className="font-extrabold text-black }">A Memorandum of Understanding (MoU)</span>
        was signed between NIT Patna and THINK INDIA
        ORGANIZATION under the kind presence of Dr. Asit Narayan (Registrar NITP), Dr. Sanjay Kumar
        (Dean Alumni Affairs), Dr. Prakash Chandra (Dean Student Welfare), Dr. Shiv Shankar
        Choudhary (PI), Dr. Saraj Sarangi, Sh. Manish Kumar (Think India Bihar Convenor) and Ram
        Kumar (Think India Bihar Co-Convenor).
      </motion.p>

      {/* <motion.img
        variants={fadeIn("up", "tween", 0.2, 1)}
        src="/thinkinidalogo.png"
        // alt="arrow down"
        className="w-[40px] h-[40px] object-contain "
      /> */}
    </motion.div>
  </section>
);

export default About;
