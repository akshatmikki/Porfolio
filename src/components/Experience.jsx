import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = ({ isDarkMode }) => {
  return (
    <div id="experience" className="border-b border-zinc-700 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={`my-20 text-center text-4xl ${
          isDarkMode ? "text-neutral-800" : ""
        }`}
      >
        Professional Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p
                className={`mb-2 text-sm text-neutral-400 ${
                  isDarkMode ? "text-neutral-600" : ""
                }`}
              >
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div
                className={`mb-2 font-semibold text-xl ${
                  isDarkMode ? "text-neutral-600" : ""
                }`}
              >
                {experience.role} -{" "}
                <span
                  className={`text-purple-100 ${
                    isDarkMode ? "text-slate-600" : ""
                  }`}
                >
                  {experience.company}
                </span>
              </div>
              <ul
                className={`mb-4 text-neutral-400 ${
                  isDarkMode ? "text-neutral-600" : ""
                }`}
              >
                {experience.description.map((point, index) => (
                  <li key={index} className=" mb-5">
                    - {point}
                  </li>
                ))}
              </ul>
              <div className="w-full max-w-xl lg:w-3/4 flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <code
                    key={index}
                    className={`mr-2 mt-4 mb-2 rounded  px-2 py-1 text-sm font-medium  ${
                      isDarkMode
                        ? " bg-neutral-300 text-slate-800"
                        : "bg-neutral-900 text-purple-800"
                    }`}
                  >
                    {tech}
                  </code>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
