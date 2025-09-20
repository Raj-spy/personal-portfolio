 import { CONTACT } from "../constants";
import { MotionConfig, motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const emailHref = `mailto:${CONTACT.email}?subject=Inquiry%20from%20Portfolio&body=Hi%20Raj,`;

  return (
    <MotionConfig reducedMotion="user">
      <section className="border-t border-stone-200 dark:border-stone-800" aria-labelledby="contact-title">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <motion.h2
            id="contact-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Get in touch
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="mx-auto mt-3 max-w-prose text-center text-sm text-stone-600 dark:text-stone-300"
          >
            Fast replies during working hours. Short, small form below—email works too.
          </motion.p>

          {/* Quick actions */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              href={emailHref}
              className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-5 py-3 text-stone-900 transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800/60"
            >
              Email {CONTACT.email}
            </motion.a>

            {CONTACT.phoneNo && (
              <motion.a
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                href={`tel:${CONTACT.phoneNo}`}
                className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-5 py-3 text-stone-900 transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800/60"
              >
                Call {CONTACT.phoneNo}
              </motion.a>
            )}
          </div>

          {/* Minimal form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mt-8 grid max-w-xl gap-3"
            aria-label="Quick message"
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="name"
              className="h-12 rounded-xl border border-stone-300 bg-white px-4 text-sm outline-none transition-colors placeholder:text-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-stone-500/30 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              inputMode="email"
              className="h-12 rounded-xl border border-stone-300 bg-white px-4 text-sm outline-none transition-colors placeholder:text-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-stone-500/30 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-stone-500/30 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
              required
            />
            <button
              type="submit"
              className="h-12 rounded-xl bg-stone-900 px-4 text-sm font-medium text-white transition-colors hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-500 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-300"
            >
              Send message
            </button>
          </motion.form>

          {/* Micro trust + address */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 text-center text-xs text-stone-500 dark:text-stone-400"
          >
            {CONTACT.address && <p>{CONTACT.address}</p>}
            <p>Replies usually within 24 hours.</p>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
