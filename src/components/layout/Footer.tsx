import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-10
          sm:px-8
          sm:py-12
          lg:px-12
        "
      >
        {/* Main footer content. */}
        <div
          className="
            flex
            flex-col
            gap-8
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          {/* Brand and short description. */}
          <div className="max-w-sm">
            <a
              href="#home"
              className="
                inline-flex
                items-center
                text-lg
                font-bold
                tracking-[-0.03em]
                text-[var(--color-text)]
              "
            >
              Nikhil Singh Kiroula
              <span className="text-[var(--color-primary)]">.</span>
            </a>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-[var(--color-text-muted)]
              "
            >
              Full Stack Developer building modern web experiences with
              React, Node.js, TypeScript, and AI.
            </p>
          </div>

          {/* Social links and back-to-top action. */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://github.com/nikhilKiroula"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                text-[var(--color-text-secondary)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-[var(--color-primary)]
                hover:text-[var(--color-text)]
              "
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/nikhil-singh-kiroula-5343b1246/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                text-[var(--color-text-secondary)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-[var(--color-primary)]
                hover:text-[var(--color-text)]
              "
            >
              <FaLinkedin size={17} />
            </a>

            <a
              href="mailto:nikhilkiroula7@gmail.com"
              aria-label="Send email"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                text-[var(--color-text-secondary)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-[var(--color-primary)]
                hover:text-[var(--color-text)]
              "
            >
              <Mail size={17} />
            </a>

            <a
              href="#home"
              className="
                group
                ml-1
                inline-flex
                h-10
                items-center
                gap-2
                rounded-lg
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                px-3
                text-sm
                font-medium
                text-[var(--color-text-secondary)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-[var(--color-primary)]
                hover:text-[var(--color-text)]
              "
            >
              Back to top
              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>
        </div>

        {/* Footer bottom row. */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-2
            border-t
            border-[var(--color-border)]
            pt-6
            text-xs
            text-[var(--color-text-muted)]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© {currentYear} Nikhil Singh Kiroula. All rights reserved.</p>

          <p>
            Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;