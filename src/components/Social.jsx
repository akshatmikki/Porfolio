import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { NAVLINKS } from "../constants/index";
import { motion } from "framer-motion";

const Social = ({ isDarkMode }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-0 left-4 min-[1025px]:left-10 z-10 text-neutral-400 "
    >
      <ul
        className={`flex flex-col items-center text-2xl justify-center list-none after:content[""]  after:block after:w-px after:h-40 after:bg-slate-300 after:my-0 after:mx-auto ${
          isDarkMode ? "after:bg-slate-700" : ""
        }`}
      >
        <li
          className={` last-of-type:mb-10 pt-6 cursor-pointer hover:transform hover:-translate-y-1 hover:text-white ${
            isDarkMode ? "text-slate-700 hover:text-neutral-900" : ""
          }`}
        >
          <a
            target="_blank"
            href={NAVLINKS.linkedIn}
            className={`${
              isDarkMode ? "text-slate-700 hover:text-neutral-900" : ""
            }`}
          >
            <FaLinkedin />
          </a>
        </li>
        <li
          className={` last-of-type:mb-10 pt-6 cursor-pointer hover:transform hover:-translate-y-1 hover:text-white ${
            isDarkMode ? "text-slate-700 hover:text-neutral-900" : ""
          }`}
        >
          <a
            target="_blank"
            href={NAVLINKS.github}
            className={`${
              isDarkMode ? "text-slate-700 hover:text-neutral-900" : ""
            }`}
          >
            <FaGithub />
          </a>
        </li>
        <li
          className={` last-of-type:mb-10 pt-6 cursor-pointer hover:transform hover:-translate-y-1 hover:text-white ${
            isDarkMode ? "text-slate-700 hover:text-neutral-900" : ""
          }`}
        >
          <a
            target="_blank"
            href={NAVLINKS.hackerrank}
            className={`${
              isDarkMode ? "text-slate-700 hover:text-neutral-900" : ""
            }`}
          >
            <FaHackerrank />
          </a>
        </li>
        <li
          className={` last-of-type:mb-10 pt-6 cursor-pointer hover:transform hover:-translate-y-1 hover:text-white ${
            isDarkMode ? "text-slate-700 hover:text-neutral-900" : ""
          }`}
        >
          <a
            target="_blank"
            href={NAVLINKS.leetcode}
            className={`${
              isDarkMode ? "text-slate-700 hover:text-neutral-900" : ""
            }`}
          >
            <SiLeetcode />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Social;
