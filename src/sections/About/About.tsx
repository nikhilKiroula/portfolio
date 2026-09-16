import Container from "../../components/common/Container";

const aboutStats = [
  {
    value: "MERN",
    label: "Core Stack",
  },
  {
    value: "TypeScript",
    label: "Working With",
  },
  {
    value: "AI",
    label: "Exploring",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Subtle background glow for visual continuity with the Hero section. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-40 h-80 w-80 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-[0.06] blur-[120px]"
      />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20 xl:gap-28">
          {/* Section introduction. */}
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-primary-hover)] uppercase sm:text-sm">
              01 — About Me
            </p>

            <h2 className="mt-4 max-w-lg text-3xl leading-[1.08] font-bold tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              I don't just write code.{" "}
              <span className="text-[var(--color-text-secondary)]">
                I build things.
              </span>
            </h2>
          </div>

          {/* About content. */}
          <div className="w-full max-w-2xl lg:pt-1">
            <div className="space-y-6 text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              <p>
                I'm a Full Stack Developer who enjoys turning ideas into
                practical, user-friendly web applications.
              </p>

              <p>
                My primary focus is the MERN stack, while I'm continuously
                improving my TypeScript skills and exploring how AI can make
                modern web experiences smarter and more useful.
              </p>

              <p>
                I care about writing clean code, building responsive interfaces,
                and understanding how the pieces of an application work together
                — from the frontend to the backend.
              </p>
            </div>

            {/* Developer profile stats. */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-primary)] sm:p-6"
                >
                  {/* Small accent indicator for the statistic card. */}
                  <span className="mb-4 block h-1 w-6 rounded-full bg-[var(--color-primary)] transition-all duration-300 group-hover:w-10" />
                  <p className="text-lg font-semibold tracking-tight text-[var(--color-text)] sm:text-xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-[var(--color-text-muted)] sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
