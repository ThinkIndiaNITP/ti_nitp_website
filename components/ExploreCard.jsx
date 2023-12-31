"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    viewport={{ once: true }}
    className={`relative ${
      active === id ? "" : ""
    } flex items-center justify-center min-w-[200px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    // onClick={() => handleClick(id)}
    // animate={{ scale: active === id ? 1.05 : 1 }}
    // transition={{ duration: 0.3 }}
  >
    <img
      src={imgUrl}
      alt="Events.."
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active == id ? (
      <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-black">
        {title}
      </h2>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col glassmorphism rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src="/search.svg"
            alt="explore"
            className="w-1/2 h-1/2 rounded-sm mx-auto object-contain"
          />
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-black uppercase">
          Explore..
        </p>

        <h3 className="font-medium text-xl leading-8">
          <a
            // href={title}
            className="block relative group-hover:text-purple-500 transition-colors duration-200"
          >
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </a>
        </h3>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
