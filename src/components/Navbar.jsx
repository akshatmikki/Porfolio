import React, { useState, useEffect, useRef } from "react";
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
      <nav className="fixed top-0 left-0 right-0 flex justify-end py-2 px-4 bg-gray-900 text-white">
        <div className="hidden md:flex items-center gap-6 text-lg">
          <motion.button
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            className="hover:text-gray-300"
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
            className="hover:text-gray-300"
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
            className="hover:text-gray-300"
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
            className="hover:text-gray-300"
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
            className="border px-4 py-1 rounded-md hover:bg-gray-700"
          >
            Resume
          </MotionLink>
          <motion.button
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-lg"
          >
            {!isDarkMode ? <BiSun size={30} /> : <BiMoon size={30} />}
          </motion.button>
        </div>
        <motion.button
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
          className="md:hidden text-lg"
          onClick={toggleDropdown}
        >
          {isDropdownOpen ? (
            <BiChevronUp size={30} />
          ) : (
            <BiChevronDown size={30} />
          )}
        </motion.button>
      </nav>
      {isDropdownOpen && (
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 mt-1 z-10 absolute right-4 flex flex-col items-end ease-in ease-out"
          ref={dropdownRef}
        >
          <button
            className="text-xl py-2 w-full font-mono border"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </button>
          <button
            className="text-xl py-2 w-full font-mono border"
            onClick={() =>
              document
                .getElementById("technologies")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Technologies
          </button>
          <button
            className="text-xl py-2 w-full font-mono border"
            onClick={() =>
              document
                .getElementById("experience")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Experience
          </button>
          <button
            className="text-xl py-2 w-full font-mono border"
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
            className="text-xl py-2 w-full font-mono border text-center"
          >
            Resume
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
