import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaAws, FaWordpress } from "react-icons/fa";
import { SiCplusplus, SiMysql, SiPython } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = ({ isDarkMode }) => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className={`my-20 text-center text-4xl ${
          isDarkMode ? "text-neutral-600" : ""
        }`}
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJs className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-cyan-900" />
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPhp className="text-7xl text-indigo-500" />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaWordpress className="text-7xl text-blue-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
