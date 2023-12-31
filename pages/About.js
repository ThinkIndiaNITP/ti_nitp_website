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
        className="mt-[8px] font-normal sm:text-[32px]  text-[20px] text-center text-secondary-black"
      >
        <span className="font-extrabold text-black">Lorem</span> Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Itaque eligendi voluptas
        corporis facere nihil nam alias rem dolore eum? Odio.{" "}
        <span className="font-extrabold text-black">Itaque eligendi</span> of
        today, using only <span className="font-extrabold text-black">VR</span>{" "}
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's{" "}
        <span className="font-extrabold text-black">explore</span> the madness
        of the metaverse by scrolling down
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
