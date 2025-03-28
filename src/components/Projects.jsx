import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = ({ isDarkMode }) => {
  return (
    <div id="projects" className="border-b border-zinc-700 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className={`mt-12 mb-12 text-center text-4xl ${
          isDarkMode ? "text-neutral-800" : ""
        }`}
      >
        Projects
      </motion.h1>
      <div >
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center mb-20">
            {index % 2 === 0 ? (
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2"
              >
                <img
                  src={project.image}
                  width={550}
                  height={450}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </motion.div>
            ) : null}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              className="mt-20 w-full max-w-md lg:w-1/2"
            >
              <h6 className={`mb-2 font-semibold ${isDarkMode ? "text-slate-800" : ""}`}>
                {project.title}
              </h6>
              <p className={`mb-4 text-neutral-400 ${isDarkMode ? "text-slate-800" : ""}`}>
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`mr-2 rounded px-2 py-1 text-sm font-medium ${
                    isDarkMode ? "bg-neutral-300 text-slate-800" : "text-purple-900 bg-neutral-900"
                  }`}
                >
                  {tech}
                </span>
              ))}
              <div className="mt-10">
  {(index === 0 || index === 3 || index === 4) && (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Live
    </a>
  )}
  {(index !== 2) && (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      GitHub
    </a>
  )}
</div>


            </motion.div>
            {index % 2 !== 0 ? (
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2"
              >
                <img
                  src={project.image}
                  width={550}
                  height={450}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </motion.div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
