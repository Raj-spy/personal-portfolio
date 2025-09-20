 import { PROJECTS } from "../constants";
import { MotionConfig, motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const card = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="pb-4" aria-labelledby="projects-title">
        <motion.h2
          id="projects-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="my-16 text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title ?? i}
                variants={card}
                className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white/70 shadow-sm ring-1 ring-transparent transition-shadow hover:shadow-md dark:border-stone-800 dark:bg-stone-900/50"
              >
                {/* Media */}
                <div className="relative">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Browser chrome accent */}
                  <div className="pointer-events-none absolute inset-x-3 top-3 flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-stone-300"></span>
                    <span className="h-2 w-2 rounded-full bg-stone-300"></span>
                    <span className="h-2 w-2 rounded-full bg-stone-300"></span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-5">
                  <h3 className="line-clamp-1 text-lg font-medium tracking-tight">{p.title}</h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {p.description}
                  </p>

                  {/* Tags */}
                  {Array.isArray(p.technologies) && p.technologies.length > 0 && (
                    <ul className="mt-1 flex flex-wrap gap-2">
                      {p.technologies.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-stone-200 bg-white px-2.5 py-1 text-xs text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Actions */}
                  <div className="mt-2 flex items-center gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center rounded-full bg-stone-900 px-3.5 py-2 text-sm text-white transition-colors hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-500"
                      >
                        View project
                      </a>
                    )}
                    {p.code && (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center rounded-full border border-stone-300 px-3.5 py-2 text-sm text-stone-800 transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-500 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800/40"
                      >
                        View code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
