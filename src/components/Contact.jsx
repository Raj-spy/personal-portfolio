 import { useMemo, useRef, useState } from "react";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const SUBJECTS = ["Project", "Freelance", "Collab", "Bug report", "Other"];

export default function Contact({ CONTACT }) {
  const emailHref = useMemo(
    () => (CONTACT?.email ? `mailto:${CONTACT.email}?subject=Inquiry%20from%20Portfolio&body=Hi%20Raj,` : "#"),
    [CONTACT?.email]
  );

  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [sent, setSent] = useState(false);
  const rippleRef = useRef(null);

  const handleCopy = async () => {
    if (!CONTACT?.email) return;
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (_) {}
  };

  const handleChip = (s) => setSubject(s);

  const onSubmit = (e) => {
    e.preventDefault();
    // Simulate async send for demo
    setSent(true);
    setTimeout(() => setSent(false), 2400);
  };

  const onButtonClick = (e) => {
    // Simple ripple
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - (btn.getBoundingClientRect().left + radius)}px`;
    circle.style.top = `${e.clientY - (btn.getBoundingClientRect().top + radius)}px`;
    circle.className =
      "pointer-events-none absolute rounded-full bg-white/40 dark:bg-stone-700/40 animate-[ping_0.6s_ease-out_1]";
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 650);
  };

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
            Quick replies during working hours. Choose a subject or shoot a short note.
          </motion.p>

          {/* Quick actions */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              onClick={() => (window.location.href = emailHref)}
              className="relative inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-5 py-3 text-stone-900 transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800/60"
              aria-label={CONTACT?.email ? `Email ${CONTACT.email}` : "Email"}
            >
              Email {CONTACT?.email ?? ""}
            </motion.button>

            {CONTACT?.phoneNo && (
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

          {/* Subject chips */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
            aria-label="Select a subject"
          >
            {SUBJECTS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => handleChip(s)}
                className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500
                ${subject === s
                    ? "border-stone-900 bg-stone-900 text-white dark:border-stone-200 dark:bg-stone-200 dark:text-stone-900"
                    : "border-stone-300 bg-white text-stone-800 hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:bg-stone-800/60"
                  }`}
                aria-pressed={subject === s}
              >
                {s}
              </button>
            ))}
          </motion.div>

          {/* Minimal form with small, snappy interactions */}
          <motion.form
            onSubmit={onSubmit}
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

            <input
              name="subject"
              type="text"
              placeholder="Subject (auto from chip)"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="h-12 rounded-xl border border-stone-300 bg-white px-4 text-sm outline-none transition-colors placeholder:text-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-stone-500/30 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-stone-500/30 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
              required
            />

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleCopy}
                className="rounded-full border border-stone-300 px-4 py-2 text-xs text-stone-700 transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800"
                aria-live="polite"
              >
                Copy email
              </button>

              <div className="relative">
                <button
                  type="submit"
                  onClick={onButtonClick}
                  ref={rippleRef}
                  className="relative h-12 overflow-hidden rounded-xl bg-stone-900 px-5 text-sm font-medium text-white transition-colors hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-500 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-300"
                >
                  Send message
                </button>
              </div>
            </div>
          </motion.form>

          {/* Toasts */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="pointer-events-none fixed inset-x-0 bottom-6 z-50 mx-auto w-fit rounded-full bg-stone-900 px-4 py-2 text-xs text-white shadow-lg dark:bg-stone-200 dark:text-stone-900"
                role="status"
              >
                Email copied
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="pointer-events-none fixed inset-x-0 bottom-20 z-50 mx-auto w-fit rounded-full bg-emerald-600 px-4 py-2 text-xs text-white shadow-lg dark:bg-emerald-500 dark:text-stone-900"
                role="status"
              >
                Message sent
              </motion.div>
            )}
          </AnimatePresence>

          {/* Micro trust + address */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 text-center text-xs text-stone-500 dark:text-stone-400"
          >
            {CONTACT?.address && <p>{CONTACT.address}</p>}
            <p>Replies usually within 24 hours.</p>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
