"use client";

import { motion } from "framer-motion";
import { navLinks } from "../constants";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} w-full fixed top-0  z-20 items-center px-6   bg-gray-300  `}
  >
    <div
      className={` w-full  mx-auto flex  justify-between items-center max-w-7xl `}
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
               hover:text-orange-100 text-[18px] font-medium cursor-pointer"
            >
              <a href={nav.href}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:hidden flex flex-1 pl-52 items-center ">
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain bg-gray-300 "
        />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
