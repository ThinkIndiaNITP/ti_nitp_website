"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import styles from "../styles";
import { navVariants, zoomIn } from "../utils/motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      // variants={navVariants}
      initial="hidden"
      whileInView="show"
      variants={zoomIn}
      className={`${
        styles.xPaddings
      } w-full fixed top-0 flex z-20 items-center  bg-gray-500 ${
        scrolled ? "hero-gradient1 " : "hero-gradient1"
      } rounded-xl`}
    >
      <div
        className={` w-full top-0 mx-auto flex  justify-between items-center max-w-7xl`}
      >
        <img
          src="/thinkinidalogo.png"
          alt="search"
          className="w-[100px] h-[100px] object-contain "
        />

        <div className="flex text-black font-bold ">
          <ul className="list-none hidden sm:flex flex-row gap-10 py-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="
                 text-black text-secondary
               hover:underline hover:text-xl text-[18px] font-medium cursor-pointer"
              >
                <a href={nav.href}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden flex flex-1  pl-52 items-center">
          <img
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain  translate-x-8 "
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden md:flex" : "flex"
            } p-6 black-gradient bg-orange-300 left-0  ml-64 absolute mr-4  top-20  my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={nav.href}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
