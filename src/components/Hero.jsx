 // src/components/Hero.jsx
import profilepic from "../assets/mypic.jpeg";
import { MotionConfig, motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative" aria-label="Introduction">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 py-12 sm:gap-10 sm:py-16 lg:grid-cols-2 lg:py-24">
            {/* Text */}
            <motion.div initial="hidden" animate="visible" variants={container} className="order-2 lg:order-1">
              <motion.h1
                variants={item}
                className="font-semibold tracking-tight text-[clamp(28px,6vw,56px)] sm:text-[clamp(32px,5vw,64px)]"
              >
                Raj Tayde
              </motion.h1>

              <motion.p variants={item} className="mt-2 tracking-tight text-[clamp(18px,3.5vw,28px)]">
                <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                  Full‑stack Developer
                </span>
              </motion.p>

              <motion.p
                variants={item}
                className="mt-5 max-w-prose text-[clamp(14px,2.8vw,18px)] leading-[1.7] text-stone-600 dark:text-stone-300"
              >
                Builds fast, accessible React/Next.js apps with clean UI and measurable outcomes. Node.js, Postgres/Mongo, and modern tooling with a focus on performance and DX.
              </motion.p>

              <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center rounded-full bg-stone-900 px-5 py-2.5 text-[15px] text-white hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-500"
                >
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-full border border-stone-300 px-5 py-2.5 text-[15px] text-stone-800 hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-500 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800/40"
                >
                  View Projects
                </a>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="order-1 flex justify-center lg:order-2"
            >
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-stone-200 dark:ring-stone-700">
                <motion.img
                  src={profilepic}
                  alt="Portrait of Raj Tayde"
                  className="h-auto w-[min(90vw,520px)] max-w-full object-cover sm:w-[min(80vw,520px)]"
                  loading="eager"
                  decoding="async"
                  width="520"
                  height="520"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
