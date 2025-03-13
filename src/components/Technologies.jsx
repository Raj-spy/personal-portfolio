import { BiLogoJavascript } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiHtml5, SiCss3, SiTailwindcss, SiGreensock, SiC, SiCplusplus, SiGithub, SiFramer, SiFigma, SiVercel, SiNetlify, SiOpenai } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

// Motion animation variants
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

const Technologies = () => {
  return (
    <div className="pb-24">
      {/* Animated heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      {/* Animated technology icons */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Frontend */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <SiHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <BiLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
          <SiTailwindcss className="text-7xl text-sky-500" />
        </motion.div>

        {/* Backend & Databases */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)}>
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(6)}>
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        {/* Tools & DevOps */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <SiVercel className="text-7xl" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <SiNetlify className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <SiGithub className="text-7xl text-gray-700" />
        </motion.div>

        {/* Animation & UI/UX */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <SiGreensock className="text-7xl text-green-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <SiFramer className="text-7xl text-black" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <SiFigma className="text-7xl text-pink-600" />
        </motion.div>

        {/* Programming Languages */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <SiC className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <SiCplusplus className="text-7xl text-blue-700" />
        </motion.div>

        {/* AI & ML */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <SiOpenai className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
