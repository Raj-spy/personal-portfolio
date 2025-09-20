 // src/components/Hero.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import profilepic from "../assets/mypic.jpeg";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";

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
  const prefersReducedMotion = useReducedMotion();
  const [typed, setTyped] = useState("");
  const full = "Raj Tayde";
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const btnRef = useRef(null);

  // Typewriter (disabled if reduced motion)
  useEffect(() => {
    if (prefersReducedMotion) {
      setTyped(full);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i >= full.length) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  // Button ripple
  const onButtonClick = (e) => {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - (btn.getBoundingClientRect().left + radius)}px`;
    circle.style.top = `${e.clientY - (btn.getBoundingClientRect().top + radius)}px`;
    circle.className =
      "pointer-events-none absolute rounded-full bg-white/35 dark:bg-stone-700/35 animate-[ping_0.6s_ease-out_1]";
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 650);
  };

  const onMagnet = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setMagnet({ x: x * 0.1, y: y * 0.1 });
  };

  const onMagnetLeave = () => setMagnet({ x: 0, y: 0 });

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative" aria-label="Introduction">
        {/* Cursor spotlight background */}
        {!prefersReducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),black,transparent_40%)]"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - r.left;
              const y = e.clientY - r.top;
              e.currentTarget.style.setProperty("--x", `${x}px`);
              e.currentTarget.style.setProperty("--y", `${y}px`);
            }}
            style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(120,120,120,.08), transparent 40%)" }}
            aria-hidden="true"
          />
        )}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 py-12 sm:gap-10 sm:py-16 lg:grid-cols-2 lg:py-24">
            {/* Text */}
            <motion.div initial="hidden" animate="visible" variants={container} className="order-2 lg:order-1">
              {/* Availability pill */}
              <motion.div
                variants={item}
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-xs text-stone-700 dark:border-stone-800 dark:bg-stone-900/50 dark:text-stone-200"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Available for opportunities
              </motion.div>

              <motion.h1
                variants={item}
                className="font-semibold tracking-tight text-[clamp(28px,6vw,56px)] sm:text-[clamp(32px,5vw,64px)]"
              >
                {typed}
                {!prefersReducedMotion && typed.length < full.length && (
                  <span className="animate-pulse">|</span>
                )}
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

              <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
                <div
                  className="relative"
                  onMouseMove={onMagnet}
                  onMouseLeave={onMagnetLeave}
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    ref={btnRef}
                    onClick={onButtonClick}
                    style={{ transform: `translate(${magnet.x}px, ${magnet.y}px)` }}
                    className="relative inline-flex items-center rounded-full bg-stone-900 px-5 py-2.5 text-[15px] text-white transition-transform duration-150 hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-500 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-300"
                  >
                    Download Resume
                  </a>
                </div>

                <a
                  href="#projects"
                  className="inline-flex items-center rounded-full border border-stone-300 px-5 py-2.5 text-[15px] text-stone-800 transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-500 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800/40"
                >
                  View Projects
                </a>
              </motion.div>

              {/* Scroll hint */}
              <motion.div
                variants={item}
                className="mt-6 flex items-center gap-2 text-xs text-stone-500"
              >
                <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-stone-400" />
                Scroll to projects
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="order-1 flex justify-center lg:order-2"
            >
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-stone-200 transition-shadow duration-300 hover:shadow-lg dark:ring-stone-700">
                {/* Soft glow on hover */}
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100 [background:radial-gradient(400px_circle_at_70%_30%,rgba(255,255,255,0.12),transparent_40%)]" />
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
