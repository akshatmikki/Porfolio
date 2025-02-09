import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import profilePic from "../assets/image.jpg";
import Typewriter from "typewriter-effect";

const container = (delay) => ({
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = ({ isDarkMode }) => {
  return (
    <div className=" md:mt-20 max-[425px]:mt-10 border-b border-neutral-900 pb-4 lg:mmb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className={`max-[375px]:text-3xl  max-md:text-4xl pb-16 text-6xl font-thin tracking-tight lg:mt-16 xl:text-8xl ${
                isDarkMode ? "text-neutral-800" : ""
              }`}
            >
              Akshat Singhal 
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className={`bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text bg-clip-test text-3xl tracking-tight text-transparent ${
                isDarkMode
                  ? "from-slate-400 via-neutral-400 to-neutral-900"
                  : "from-pink-300 via-slate-500 to-purple-500"
              }`}
            >
              <Typewriter
                options={{
                  strings: ["Software Engineer", "FrontEnd Engineer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className={`my-2 max-w-xl py-6 font-light tracking-tighter ${
                isDarkMode ? "text-neutral-600" : ""
              }`}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Akshat Singhal"
              className=" rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
