 import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-stone-900 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40">
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="mt-3 mb-3 rounded-2xl border border-stone-200/70 bg-white/50 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:border-stone-800/70 dark:bg-stone-900/40">
            <div className="flex items-center justify-between px-4 py-3 sm:px-5">
              {/* Brand */}
              <a href="/" className="text-base font-semibold tracking-tight">
                Raj Tayde
              </a>

              {/* Socials */}
              <ul className="flex items-center gap-3 sm:gap-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/raj-tayde-a3072b30a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-10 w-10 place-items-center rounded-full border border-stone-200/70 bg-white/70 text-[18px] text-stone-700 transition-all hover:scale-105 hover:bg-white dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
                    title="LinkedIn"
                  >
                    <FaLinkedin aria-hidden="true" focusable="false" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Raj-spy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid h-10 w-10 place-items-center rounded-full border border-stone-200/70 bg-white/70 text-[18px] text-stone-700 transition-all hover:scale-105 hover:bg-white dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
                    title="GitHub"
                  >
                    <FaGithub aria-hidden="true" focusable="false" />
                  </a>
                </li>
                <li className="hidden sm:list-item">
                  <a
                    href="https://www.instagram.com/rajj_704/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="grid h-10 w-10 place-items-center rounded-full border border-stone-200/70 bg-white/70 text-[18px] text-stone-700 transition-all hover:scale-105 hover:bg-white dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
                    title="Instagram"
                  >
                    <FaInstagram aria-hidden="true" focusable="false" />
                  </a>
                </li>
                <li className="hidden sm:list-item">
                  <a
                    href="https://x.com/home?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="grid h-10 w-10 place-items-center rounded-full border border-stone-200/70 bg-white/70 text-[18px] text-stone-700 transition-all hover:scale-105 hover:bg-white dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
                    title="Twitter"
                  >
                    <FaTwitter aria-hidden="true" focusable="false" />
                  </a>
                </li>
                <li className="hidden sm:list-item">
                  <a
                    href="https://www.facebook.com/yourfacebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="grid h-10 w-10 place-items-center rounded-full border border-stone-200/70 bg-white/70 text-[18px] text-stone-700 transition-all hover:scale-105 hover:bg-white dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
                    title="Facebook"
                  >
                    <FaFacebook aria-hidden="true" focusable="false" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
