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
import { useState } from "react";

// Optional: add proficiency (0–100) to showcase comfort levels
const categories = [
  {
    title: "Frontend",
    items: [
      { Icon: SiHtml5, name: "HTML5", color: "text-orange-500", level: 95 },
      { Icon: SiCss3, name: "CSS3", color: "text-blue-500", level: 90 },
      { Icon: BiLogoJavascript, name: "JavaScript", color: "text-yellow-400", level: 92 },
      { Icon: RiReactjsLine, name: "React", color: "text-cyan-400", level: 92 },
      { Icon: TbBrandNextjs, name: "Next.js", color: "text-stone-900 dark:text-white", level: 88 },
      { Icon: SiTailwindcss, name: "Tailwind", color: "text-sky-500", level: 90 },
    ],
  },
  {
    title: "Backend",
    items: [
      { Icon: FaNodeJs, name: "Node.js", color: "text-green-500", level: 85 },
      { Icon: SiMongodb, name: "MongoDB", color: "text-green-500", level: 80 },
    ],
  },
  {
    title: "Tools",
    items: [
      { Icon: SiGithub, name: "GitHub", color: "text-stone-700 dark:text-stone-300", level: 90 },
      { Icon: SiVercel, name: "Vercel", color: "text-stone-900 dark:text-white", level: 88 },
      { Icon: SiNetlify, name: "Netlify", color: "text-blue-500", level: 78 },
    ],
  },
  {
    title: "Design & Motion",
    items: [
      { Icon: SiFramer, name: "Framer Motion", color: "text-stone-900 dark:text-white", level: 88 },
      { Icon: SiGreensock, name: "GSAP", color: "text-green-500", level: 76 },
      { Icon: SiFigma, name: "Figma", color: "text-pink-600", level: 85 },
    ],
  },
  {
    title: "Languages",
    items: [
      { Icon: SiC, name: "C", color: "text-blue-600", level: 70 },
      { Icon: SiCplusplus, name: "C++", color: "text-blue-700", level: 75 },
    ],
  },
  {
    title: "AI",
    items: [{ Icon: SiOpenai, name: "OpenAI", color: "text-emerald-500", level: 72 }],
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
  const [copiedCat, setCopiedCat] = useState("");

  const copyCategory = async (title, list) => {
    try {
      const text = `${title}: ${list.map((x) => x.name).join(", ")}`;
      await navigator.clipboard.writeText(text);
      setCopiedCat(title);
      setTimeout(() => setCopiedCat(""), 1400);
    } catch {}
  };

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
                className="group relative rounded-2xl border border-stone-200 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition-transform duration-300 ease-out dark:border-stone-800 dark:bg-stone-900/50"
                style={!prefersReducedMotion ? { transformStyle: "preserve-3d" } : undefined}
                onMouseMove={(e) => {
                  if (prefersReducedMotion) return;
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const rx = ((y - rect.height / 2) / rect.height) * -6;
                  const ry = ((x - rect.width / 2) / rect.width) * 6;
                  card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
                }}
                onMouseLeave={(e) => {
                  if (prefersReducedMotion) return;
                  e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
                }}
              >
                {/* Spotlight accent */}
                {!prefersReducedMotion && (
                  <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(120,120,120,0.12),transparent_40%)]" />
                )}

                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium tracking-tight">{cat.title}</h3>
                  <button
                    type="button"
                    onClick={() => copyCategory(cat.title, cat.items)}
                    className="rounded-full border border-stone-200 px-2.5 py-1 text-[11px] text-stone-700 transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800"
                    aria-label={`Copy ${cat.title} stack`}
                  >
                    Copy
                  </button>
                </div>

                <ul className="flex flex-wrap gap-4">
                  {cat.items.map(({ Icon, name, color, level }) => (
                    <li key={name}>
                      <div
                        className="group/item relative flex items-center gap-3 rounded-xl border border-stone-200/70 px-4 py-2 text-sm text-stone-700 transition-colors hover:border-stone-300 hover:bg-stone-50 focus-within:border-stone-300 focus-within:bg-stone-50 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800"
                        aria-label={name}
                        tabIndex={0}
                      >
                        <Icon
                          className={`text-2xl ${color}`}
                          aria-hidden="true"
                          focusable="false"
                        />
                        <span className="tracking-tight">{name}</span>

                        {/* Proficiency bar (hover/focus only) */}
                        <span className="pointer-events-none absolute inset-x-3 bottom-1 h-1.5 overflow-hidden rounded-full bg-stone-200/60 opacity-0 transition-opacity duration-200 group-hover/item:opacity-100 group-focus-within/item:opacity-100 dark:bg-stone-800/70">
                          <span
                            className="block h-full rounded-full bg-stone-900 transition-[width] duration-300 ease-out dark:bg-stone-200"
                            style={{ width: `${level ?? 80}%` }}
                          />
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Tiny copied toast per card */}
                <div className="sr-only" aria-live="polite">
                  {copiedCat === cat.title ? `${cat.title} copied` : ""}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gentle icon hover shift only (no idle animation) */}
        {!prefersReducedMotion && (
          <style>
            {`.group [class*="react-icons"] { transition: transform .25s ease; } .group .group\\/item:hover svg, .group .group\\/item:focus-within svg { transform: translateY(-1px); }`}
          </style>
        )}
      </section>
    </MotionConfig>
  );
}
