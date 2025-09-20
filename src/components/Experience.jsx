 import { EXPERIENCES } from "../constants";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <MotionConfig reducedMotion="user">
      <section className="pb-4" aria-labelledby="experience-title">
        <motion.h2
          id="experience-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="my-16 text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Experience
        </motion.h2>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        >
          {/* Vertical rail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[22px] top-0 h-full w-px bg-gradient-to-b from-stone-300 via-stone-200 to-transparent dark:from-stone-700 dark:via-stone-800"
          />

          {EXPERIENCES.map((exp, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.li
                key={exp.role + i}
                variants={item}
                className="relative pl-14"
              >
                {/* Dot */}
                <button
                  type="button"
                  aria-label={`Toggle ${exp.role} at ${exp.company}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="group absolute left-0 top-2 grid h-11 w-11 place-items-center rounded-full border border-stone-300 bg-white shadow-sm transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 dark:border-stone-700 dark:bg-stone-900"
                >
                  <span className={`h-2.5 w-2.5 rounded-full transition-colors ${isOpen ? "bg-stone-900 dark:bg-white" : "bg-stone-400 dark:bg-stone-500"}`} />
                </button>

                {/* Card */}
                <div className="mb-6 rounded-2xl border border-stone-200 bg-white/70 p-5 shadow-sm transition-colors dark:border-stone-800 dark:bg-stone-900/50">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-medium tracking-tight">
                        {exp.role} <span className="text-stone-500">· {exp.company}</span>
                      </h3>
                      <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">{exp.year}</p>
                    </div>

                    {/* Compact badges: location/type if provided */}
                    <div className="flex items-center gap-2">
                      {exp.type && (
                        <span className="rounded-full border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200">
                          {exp.type}
                        </span>
                      )}
                      {exp.location && (
                        <span className="rounded-full border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200">
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-3">
                          <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                            {exp.description}
                          </p>

                          {/* Highlights list if provided */}
                          {Array.isArray(exp.highlights) && exp.highlights.length > 0 && (
                            <ul className="list-disc pl-5 text-sm text-stone-700 dark:text-stone-300">
                              {exp.highlights.map((h) => (
                                <li key={h} className="leading-relaxed">{h}</li>
                              ))}
                            </ul>
                          )}

                          {/* Tech tags */}
                          {Array.isArray(exp.technologies) && exp.technologies.length > 0 && (
                            <ul className="mt-1 flex flex-wrap gap-2">
                              {exp.technologies.map((t) => (
                                <li
                                  key={t}
                                  className="rounded-full border border-stone-200 bg-white px-2.5 py-1 text-xs text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
                                >
                                  {t}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </section>
    </MotionConfig>
  );
}
