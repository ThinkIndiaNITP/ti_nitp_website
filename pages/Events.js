"use client";
import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds } from "../constants";
import { Event } from "../utils/motion";
import { ExploreCard } from "../components";
const Events = () => {
  const [active, setActive] = useState("");
  return (
    <>
      <section className={`${styles.paddings}`} id="explore">
        <motion.div
          variants={Event}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <h1 className="mt-[8px] flex justify-center items-center  font-bold md:text-[50px] text-[40px] text-black">
            Our Events
            {/* <br className="md:block hidden  " /> */}
          </h1>

          <p className=" ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
            atque a ullam provident dolores deserunt facere saepe asperiores
            aperiam maxime?
          </p>

          <div className=" glassmorphism  mt-[50px] flex flex-wrap justify-center min-h-[50vh] gap-5 w-full">
            {exploreWorlds.map((world, index) => (
              <div key={world.id} className="w-full m-12 lg:w-1/4">
                <ExploreCard
                  key={world.id}
                  {...world}
                  index={index}
                  active={active}
                  handleClick={setActive}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Events;
