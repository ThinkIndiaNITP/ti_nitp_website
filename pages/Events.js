"use client";
import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds } from "../constants";
import { Event } from "../utils/motion";
import { ExploreCard } from "../components";
const Events = () => {
  const [active, setActive] = useState("world-2");
  return (
    <>
      <h1></h1>
      <section className={`${styles.paddings}`} id="explore">
        <motion.div
          variants={Event}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <h1 className="mt-[8px] pr-52 font-bold md:text-[64px] text-[40px] text-black">
            Events ... <br className="md:block hidden  " />
          </h1>

          <div className="mt-[50px] flex lg:flex-col flex-col min-h-[70vh]   gap-5">
            {exploreWorlds.map((world, index) => (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Events;
