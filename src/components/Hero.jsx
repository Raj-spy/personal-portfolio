import profilepic from "../assets/mypic.jpeg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0, x: -100 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, staggerchildren: 0.5 }
  }
};
const childvariants = {
  hidden: { opacity:0,x: -100 },
  visible: { opacity:1,x: 0, transition: { duration: 0.5 } }
}
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Image section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8"> {/* Fixed typo "justifty-center" to "justify-center" */}
            <motion.img
              src={profilepic}
              alt="raj"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650} 
              initail={{x:100,opacity:0}}
              animate={{x:0,opacity:1}} 
              transition={{duration:1, delay:1.5}} 
            />
          </div>
        </div>

        {/* Text section */}
        <div className="w-full lg:w-1/2">
        <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}

           className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
            variants={childvariants}
             className="pb-2 text-4xl tracking-tighter lg:text-8xl"> {/* Fixed typo "text-4*l" to "text-4xl" and "text-8*l" to "text-8xl" */}
              Raj Tayde
            </motion.h2>
            <motion.span 
            variants={childvariants}
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p
            variants={childvariants}
             className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {/* HERO_CONTENT should be a variable or text. Replace with your content */}
              "I’m a Full-Stack Developer with a strong focus on frontend development, crafting intuitive and visually appealing user experiences. Proficient in modern web technologies like React, Next.js, and Tailwind CSS, I build dynamic and responsive applications. On the backend, I work with Node.js, MongoDB, and PostgreSQL to ensure seamless functionality. Passionate about problem-solving and clean code, I’m always exploring new technologies to enhance my development skills and create impactful digital solutions."
              Passionate about coding, building scalable and efficient applications, and continuously learning new technologies.
            </motion.p>
            <motion.a
            variants={childvariants}
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              download
              className="bg-white rounded-full px-6 py-2 text-stone-900 font-bold"
            >
              Download Resume
            </motion.a>
            </motion.div>

          </div>
        </div>
      </div>
    
  );
};

export default Hero;
