import { ArrowUpRight } from "lucide-react";

import Container from "../../components/common/Container";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 sm:pt-28 lg:pt-20"
    >
      {/* Decorative background glow behind the hero content. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -left-40 h-80 w-80 rounded-full bg-[var(--color-primary)] opacity-10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -right-40 h-96 w-96 rounded-full bg-[var(--color-secondary)] opacity-10 blur-[140px]"
      />

      <Container>
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-12 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-12 xl:gap-20">
          {/* Hero content */}
          <div className="mx-auto w-full max-w-[680px] lg:mx-0">
            {/* Developer role label. */}
            <p className="mb-5 font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-primary-hover)] uppercase sm:text-sm">
              // Full Stack Developer
            </p>

            {/* Main hero heading. */}
            <h1 className="text-[clamp(3rem,7vw,4.5rem)] leading-[1] font-bold tracking-[-0.045em] text-[var(--color-text)] lg:text-7xl xl:text-[5rem]">
              Hi, I'm{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                Nikhil.
              </span>
            </h1>

            {/* Main value proposition. */}
            <p className="mt-6 max-w-xl text-xl leading-snug font-medium tracking-[-0.02em] text-[var(--color-text)] sm:text-2xl lg:text-[1.75rem] xl:text-3xl">
              I build modern web experiences with code and a bit of AI.{" "}
              <span aria-hidden="true">🚀</span>
            </p>

            {/* Supporting introduction. */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              MERN Stack Developer focused on building scalable, user-friendly
              web applications and exploring the possibilities of AI.
            </p>

            {/* Primary and secondary actions. */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-primary)] transition-all duration-300 hover:bg-[var(--color-primary-hover)] sm:w-auto"
              >
                View My Work
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/resume.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-hover)] sm:w-auto"
              >
                Download Resume
              </a>
            </div>

            {/* Quick portfolio information. */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--color-border)] pt-6 sm:grid-cols-3">
              <div>
                <p className="text-lg font-semibold text-[var(--color-text)]">
                  MERN
                </p>

                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  Primary Stack
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-[var(--color-text)]">
                  TypeScript
                </p>

                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  Working With
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-[var(--color-text)]">
                  AI
                </p>

                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  Exploring
                </p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-[420px] pb-24 sm:max-w-[460px] sm:pb-20 lg:max-w-[500px] lg:pb-0">
            {" "}
            {/* Main image container. Replace the placeholder with the real profile image later. */}
            <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-primary)]">
              {/* Placeholder until the final profile image is added. */}
              <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(124,58,237,0.22),transparent_45%)] px-8 text-center">
                <div>
                  <p className="font-mono text-sm text-[var(--color-primary-hover)]">
                    &lt; developer /&gt;
                  </p>

                  <p className="mt-3 text-2xl font-semibold">Your Visual</p>

                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Profile image goes here
                  </p>
                </div>
              </div>

              {/* Small status card layered over the image. */}
              <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-xl border border-[var(--color-border)] bg-[rgba(17,17,24,0.82)] px-3 py-2.5 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:px-4 sm:py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-success)]" />

                  <span className="text-[11px] font-medium text-[var(--color-text)] sm:text-xs">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
            {/* AI assistant preview card. */}
            <div className="relative z-10 mx-auto -mt-14 w-[calc(100%-1.5rem)] rounded-2xl border border-[var(--color-border)] bg-[rgba(17,17,24,0.92)] p-4 shadow-[var(--shadow-primary)] backdrop-blur-xl sm:mr-[-1rem] sm:ml-auto sm:w-[20rem] lg:absolute lg:-right-8 lg:-bottom-7 lg:m-0">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-sm">
                  🤖
                </div>

                <div>
                  <p className="text-sm font-semibold">Ask Nikhil AI</p>

                  <p className="mt-1 text-xs leading-5 text-[var(--color-text-secondary)]">
                    Want to know more about me? Ask my AI assistant.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-2.5 text-left text-xs text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-text)]"
              >
                <span>Ask something...</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
