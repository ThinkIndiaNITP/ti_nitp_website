"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import Link from "next/link";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h5 className="font-bold md:text-[64px] text-[44px] text-black">
          ThinkIndia
        </h5>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-black opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-black"></h4>
          <p className="font-normal text-[14px]  opacity-50 text-black">
            Copyright © 2023. ThinkIndia NITP.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <Link href={social.href} target="_blank">
                <img
                  key={social.id}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer bg-black rounded-full"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
