import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import Container from "../../components/common/Container";

const contactDetails = [
  {
    label: "Email",
    value: "nikhilkiroula7@gmail.com",
    href: "mailto:nikhilkiroula7@gmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Delhi, India",
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/nikhilKiroula",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhil-singh-kiroula-5343b1246/",
    icon: FaLinkedin,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Decorative background glow. */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/4
          h-96
          w-96
          rounded-full
          bg-[var(--color-primary)]
          opacity-[0.045]
          blur-[140px]
        "
      />

      <Container>
        {/* Section heading. */}
        <div className="max-w-2xl">
          <p
            className="
              font-mono
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-[var(--color-primary-hover)]
              sm:text-sm
            "
          >
            05 — Contact
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              leading-[1.08]
              tracking-[-0.04em]
              text-[var(--color-text)]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Let's build something{" "}
            <span className="text-[var(--color-text-secondary)]">
              meaningful.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-[var(--color-text-secondary)]
              sm:text-lg
              sm:leading-8
            "
          >
            Have a project, opportunity, or idea in mind? Feel free to reach
            out. I'd be happy to connect.
          </p>
        </div>

        {/* Contact content. */}
        <div
          className="
            mt-14
            grid
            gap-6
            lg:mt-16
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-8
          "
        >
          {/* Contact information. */}
          <div
            className="
              rounded-2xl
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-5
              sm:p-7
              lg:p-8
            "
          >
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  text-[var(--color-text)]
                "
              >
                Get in touch
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-[var(--color-text-muted)]
                "
              >
                I'm always open to discussing new projects, collaborations,
                and opportunities.
              </p>
            </div>

            {/* Contact details. */}
            <div className="mt-7 space-y-3">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-[var(--color-border)]
                      bg-[var(--color-bg)]
                      p-4
                      transition-all
                      duration-300
                      hover:border-[var(--color-primary)]
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[var(--color-border)]
                        text-[var(--color-primary-hover)]
                      "
                    >
                      <Icon size={17} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-xs
                          text-[var(--color-text-muted)]
                        "
                      >
                        {detail.label}
                      </p>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-sm
                          font-medium
                          text-[var(--color-text)]
                        "
                      >
                        {detail.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="
                        ml-auto
                        shrink-0
                        text-[var(--color-text-muted)]
                        transition-transform
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>
                );
              })}
            </div>

            {/* Social links. */}
            <div className="mt-7 border-t border-[var(--color-border)] pt-6">
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-[var(--color-text-muted)]
                "
              >
                Find me online
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-[var(--color-border)]
                        bg-[var(--color-bg)]
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-[var(--color-text-secondary)]
                        transition-all
                        duration-200
                        hover:border-[var(--color-primary)]
                        hover:text-[var(--color-text)]
                      "
                    >
                      <Icon size={15} />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact form. */}
          <form
            className="
              rounded-2xl
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-5
              sm:p-7
              lg:p-8
            "
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name field. */}
              <div>
                <label
                  htmlFor="name"
                  className="
                    text-sm
                    font-medium
                    text-[var(--color-text)]
                  "
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-bg)]
                    px-4
                    py-3
                    text-sm
                    text-[var(--color-text)]
                    outline-none
                    placeholder:text-[var(--color-text-muted)]
                    transition-colors
                    duration-200
                    focus:border-[var(--color-primary)]
                  "
                />
              </div>

              {/* Email field. */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    text-sm
                    font-medium
                    text-[var(--color-text)]
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-bg)]
                    px-4
                    py-3
                    text-sm
                    text-[var(--color-text)]
                    outline-none
                    placeholder:text-[var(--color-text-muted)]
                    transition-colors
                    duration-200
                    focus:border-[var(--color-primary)]
                  "
                />
              </div>
            </div>

            {/* Subject field. */}
            <div className="mt-5">
              <label
                htmlFor="subject"
                className="
                  text-sm
                  font-medium
                  text-[var(--color-text)]
                "
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                className="
                  mt-2
                  w-full
                  rounded-xl
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-bg)]
                  px-4
                  py-3
                  text-sm
                  text-[var(--color-text)]
                  outline-none
                  placeholder:text-[var(--color-text-muted)]
                  transition-colors
                  duration-200
                  focus:border-[var(--color-primary)]
                "
              />
            </div>

            {/* Message field. */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="
                  text-sm
                  font-medium
                  text-[var(--color-text)]
                "
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me a little about your project..."
                className="
                  mt-2
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-bg)]
                  px-4
                  py-3
                  text-sm
                  leading-6
                  text-[var(--color-text)]
                  outline-none
                  placeholder:text-[var(--color-text-muted)]
                  transition-colors
                  duration-200
                  focus:border-[var(--color-primary)]
                "
              />
            </div>

            {/* Submit button. */}
            <button
              type="submit"
              className="
                mt-5
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[var(--color-primary)]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-[var(--color-primary-hover)]
                hover:shadow-[var(--shadow-primary)]
                sm:w-auto
              "
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;