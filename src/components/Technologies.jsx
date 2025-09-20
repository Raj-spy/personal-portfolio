 import {
  BiLogoJavascript
} from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb, SiHtml5, SiCss3, SiTailwindcss, SiGreensock, SiC,
  SiCplusplus, SiGithub, SiFramer, SiFigma, SiVercel, SiNetlify, SiOpenai
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    items: [
      { Icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
      { Icon: SiCss3, name: "CSS3", color: "text-blue-500" },
      { Icon: BiLogoJavascript, name: "JavaScript", color: "text-yellow-400" },
      { Icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
      { Icon: TbBrandNextjs, name: "Next.js", color: "text-stone-900 dark:text-white" },
      { Icon: SiTailwindcss, name: "Tailwind", color: "text-sky-500" },
    ],
  },
  {
    title: "Backend",
    items: [
      { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
      { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    ],
  },
  {
    title: "Tools",
    items: [
      { Icon: SiGithub, name: "GitHub", color: "text-stone-700 dark:text-stone-300" },
      { Icon: SiVercel, name: "Vercel", color: "text-stone-900 dark:text-white" },
      { Icon: SiNetlify, name: "Netlify", color: "text-blue-500" },
    ],
  },
  {
    title: "Design & Motion",
    items: [
      { Icon: SiFramer, name: "Framer Motion", color: "text-stone-900 dark:text-white" },
      { Icon: SiGreensock, name: "GSAP", color: "text-green-500" },
      { Icon: SiFigma, name: "Figma", color: "text-pink-600" },
    ],
  },
  {
    title: "Languages",
    items: [
      { Icon: SiC, name: "C", color: "text-blue-600" },
      { Icon: SiCplusplus, name: "C++", color: "text-blue-700" },
    ],
  },
  {
    title: "AI",
    items: [{ Icon: SiOpenai, name: "OpenAI", color: "text-emerald-500" }],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Technologies() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <section className="pb-24" aria-labelledby="tech-title">
        <motion.h2
          id="tech-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="my-16 text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Technologies
        </motion.h2>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="rounded-2xl border border-stone-200 bg-white/60 p-5 shadow-sm backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/50"
              >
                <h3 className="mb-4 text-lg font-medium tracking-tight">{cat.title}</h3>
                <ul className="flex flex-wrap gap-4">
                  {cat.items.map(({ Icon, name, color }) => (
                    <li key={name}>
                      <div
                        className="group flex items-center gap-3 rounded-xl border border-stone-200/70 px-4 py-2 text-sm text-stone-700 transition-colors hover:border-stone-300 hover:bg-stone-50 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800"
                        aria-label={name}
                      >
                        <Icon
                          className={`text-2xl ${color}`}
                          aria-hidden="true"
                          focusable="false"
                        />
                        <span className="tracking-tight">{name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Optional gentle icon idle animation on hover only */}
        {!prefersReducedMotion && (
          <style>
            {`
            .group:hover svg { transform: translateY(-1px); transition: transform .25s ease; }
            `}
          </style>
        )}
      </section>
    </MotionConfig>
  );
}
