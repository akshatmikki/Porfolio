import aboutImg from "../assets/IMG_4404.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h1
        className={`my-20 text-center text-4xl ${
          isDarkMode ? "text-neutral-900" : ""
        }`}
      >
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center items-center">
            <img className="rounded-2xl" src={aboutImg} alt="about me" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p
              className={`my-2 max-w-xl py-6 ${
                isDarkMode ? "text-neutral-600 " : ""
              }`}
            >
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
