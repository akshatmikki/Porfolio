import React, { useState, useEffect, useRef } from "react";
import logoDark from "../assets/logo_dark.svg";
import logoLight from "../assets/logo_light.svg";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { BiSun, BiMoon } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const MotionLink = motion(Link);

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className=" max-[425px]:mt-5 flex items-center justify-between py-2">
        <motion.div
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="flex flex-shrink-0 items-center"
        >
          {isDarkMode ? (
            <a href="/">
              <img className="mx-2 w-10" src={logoLight} alt="logo" />
            </a>
          ) : (
            <a href="/">
              <img className="mx-2 w-10" src={logoDark} alt="logo" />
            </a>
          )}
        </motion.div>
        <div className="hidden md:flex m-8 item-center justify-center gap-4 text-2xl">
          <motion.button
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className={`hover:text-white text-lg ${
              isDarkMode ? "text-slate-700 hover:text-neutral-900" : ""
            }`}
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </motion.button>
          <motion.button
            variants={container(0.4)}
            initial="hidden"
            animate="visible"
            className={`hover:text-white text-lg ${
              isDarkMode ? "text-slate-700 hover:text-neutral-900" : ""
            }`}
            onClick={() =>
              document
                .getElementById("technologies")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Technologies
          </motion.button>
          <motion.button
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className={`hover:text-white text-lg ${
              isDarkMode ? "text-slate-700 hover:text-neutral-900" : ""
            }`}
            onClick={() =>
              document
                .getElementById("experience")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Experience
          </motion.button>
          <motion.button
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className={`hover:text-white text-lg ${
              isDarkMode ? "text-slate-700 hover:text-neutral-900" : ""
            }`}
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </motion.button>
          <MotionLink
            to="/resume"
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className={`text-white text-base ml-2 border-2 px-4 py-1 rounded-md hover:bg-[rgba(256,256,256,0.1)] ${
              isDarkMode ? "text-slate-700  hover:bg-slate-800" : ""
            }`}
          >
            Resume
          </MotionLink>
          <motion.button
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4 text-lg text-white"
          >
            {!isDarkMode ? <BiSun size={30} /> : <BiMoon size={30} />}
          </motion.button>
        </div>
        <motion.button
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
          className="md:hidden text-lg text-white"
          onClick={toggleDropdown}
        >
          {isDropdownOpen ? (
            <BiChevronUp size={30} />
          ) : (
            <BiChevronDown size={30} />
          )}
        </motion.button>
        <motion.button
          variants={container(0.3)}
          initial="hidden"
          animate="visible"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="ml-4 md:hidden text-lg text-gray-400"
        >
          {!isDarkMode ? <BiSun size={30} /> : <BiMoon size={30} />}
        </motion.button>
      </nav>
      {isDropdownOpen && (
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className=" bg-slate-900 mt-1 z-10  absolute right-0 left-0 flex flex-col items-center ease-in ease-out"
          ref={dropdownRef}
        >
          <button
            className=" text-xl py-2 w-full font-mono rounded-lg rounded-b-none	 border-t border-l border-r "
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </button>
          <button
            className=" text-xl py-2 w-full font-mono  rounded-t-none	 border-t border-l border-r "
            onClick={() =>
              document
                .getElementById("technologies")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Technologies
          </button>
          <button
            className=" text-xl py-2 w-full font-mono  border-t border-l border-r "
            onClick={() =>
              document
                .getElementById("experience")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Experience
          </button>
          <button
            className=" text-xl py-2 w-full font-mono  border-t border-l border-r "
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </button>
          <Link
            to="/resume"
            className=" text-xl py-2 w-full font-mono rounded-lg rounded-t-none text-center	 border-t border-b border-l border-r "
          >
            Resume
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
