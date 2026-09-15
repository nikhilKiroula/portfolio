import {
  ArrowUpRight,
  Braces,
  Database,
  Server,
} from "lucide-react";

import {
  SiCss,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import Container from "../../components/common/Container";

const technologies = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: Database },
];

const learningAreas = [
  {
    title: "Frontend Development",
    description:
      "Built responsive interfaces and worked with modern JavaScript and React concepts.",
    icon: Braces,
  },
  {
    title: "Backend Development",
    description:
      "Worked with Node.js and Express.js to build server-side application logic and APIs.",
    icon: Server,
  },
  {
    title: "Database Development",
    description:
      "Worked with MongoDB and database operations as part of full-stack applications.",
    icon: Database,
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Decorative glow adds subtle depth without affecting the layout. */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/3
          h-96
          w-96
          rounded-full
          bg-[var(--color-primary)]
          opacity-[0.04]
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
            04 — Experience
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
            Learning by{" "}
            <span className="text-[var(--color-text-secondary)]">
              building.
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
            My development journey has been focused on hands-on learning,
            practical assignments, and building full-stack applications.
          </p>
        </div>

        {/* Experience card. */}
        <article
          className="
            group
            relative
            mt-14
            overflow-hidden
            rounded-2xl
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            p-5
            transition-all
            duration-300
            hover:border-[var(--color-primary)]
            hover:shadow-[var(--shadow-primary)]
            sm:mt-16
            sm:p-7
            lg:p-8
          "
        >
          {/* Top experience information. */}
          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-start
              lg:justify-between
            "
          >
            <div className="flex items-start gap-4">
              {/* Experience icon. */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-bg)]
                  text-[var(--color-primary-hover)]
                  transition-colors
                  duration-300
                  group-hover:border-[var(--color-primary)]
                "
              >
                <Braces size={21} />
              </div>

              <div>
                <p
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-[var(--color-text-muted)]
                  "
                >
                  MERN Stack Training
                </p>

                <h3
                  className="
                    mt-1
                    text-xl
                    font-semibold
                    tracking-tight
                    text-[var(--color-text)]
                    sm:text-2xl
                  "
                >
                  MERN Stack Trainee
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    font-medium
                    text-[var(--color-primary-hover)]
                  "
                >
                  QSpiders
                </p>
              </div>
            </div>

            {/* Training period from the resume. */}
            <div
              className="
                rounded-lg
                border
                border-[var(--color-border)]
                bg-[var(--color-bg)]
                px-3
                py-2
                font-mono
                text-xs
                text-[var(--color-text-muted)]
                lg:shrink-0
              "
            >
              Practical Training
            </div>
          </div>

          {/* Training description. */}
          <div
            className="
              mt-8
              border-t
              border-[var(--color-border)]
              pt-7
            "
          >
            <p
              className="
                max-w-3xl
                text-sm
                leading-7
                text-[var(--color-text-secondary)]
                sm:text-base
                sm:leading-8
              "
            >
              Hands-on MERN stack training covering HTML, CSS, JavaScript,
              SQL, React, Node.js, Express.js, and MongoDB through practical
              assignments and application-focused learning.
            </p>

            {/* Technologies used during training. */}
            <div className="mt-6 flex flex-wrap gap-2">
              {technologies.map((technology) => {
                const TechnologyIcon = technology.icon;

                return (
                  <span
                    key={technology.name}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-lg
                      border
                      border-[var(--color-border)]
                      bg-[var(--color-bg)]
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-[var(--color-text-secondary)]
                      transition-colors
                      duration-200
                      hover:border-[var(--color-primary)]
                      hover:text-[var(--color-text)]
                    "
                  >
                    <TechnologyIcon size={13} />
                    {technology.name}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Learning areas. */}
          <div
            className="
              mt-7
              grid
              gap-3
              border-t
              border-[var(--color-border)]
              pt-7
              md:grid-cols-3
            "
          >
            {learningAreas.map((area) => {
              const AreaIcon = area.icon;

              return (
                <div
                  key={area.title}
                  className="
                    rounded-xl
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-bg)]
                    p-4
                    transition-all
                    duration-300
                    hover:border-[var(--color-border-hover)]
                  "
                >
                  <AreaIcon
                    size={18}
                    className="text-[var(--color-primary-hover)]"
                  />

                  <h4
                    className="
                      mt-3
                      text-sm
                      font-semibold
                      text-[var(--color-text)]
                    "
                  >
                    {area.title}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-[var(--color-text-muted)]
                    "
                  >
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Training status. */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-3
              border-t
              border-[var(--color-border)]
              pt-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-2">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[var(--color-success)]
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  text-[var(--color-text-secondary)]
                "
              >
                Hands-on practical training
              </span>
            </div>

            {/* Resume link can be connected later if needed. */}
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                text-xs
                font-medium
                text-[var(--color-text-muted)]
              "
            >
              Full-stack development
              <ArrowUpRight size={13} />
            </span>
          </div>
        </article>
      </Container>
    </section>
  );
}

export default Experience;