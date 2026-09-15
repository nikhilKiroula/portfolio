import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import {
  Braces,
  Cloud,
  Database,
  GitBranch,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
  Code2
} from "lucide-react";

import type { IconType } from "react-icons";

import Container from "../../components/common/Container";

interface SkillItem {
  name: string;
  icon?: IconType;
}

/* Main skill categories based on the technologies listed in the resume. */
const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    icon: Code2,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    title: "Backend",
    description: "Building APIs and server-side application logic.",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: Server },
      { name: "JWT Authentication", icon: ShieldCheck },
      { name: "Middleware", icon: GitBranch },
      { name: "MVC Architecture", icon: Braces },
    ],
  },
  {
    title: "Database",
    description: "Managing application data and database operations.",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: Database },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Tools and platforms I use to build and ship projects.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Netlify", icon: SiNetlify },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: Cloud },
    ],
  },
];

/* Additional technologies that do not need a full category card. */
const additionalSkills = [
  {
    label: "Cloud & Media",
    value: "Cloudinary",
    icon: Cloud,
  },
  {
    label: "File Uploads",
    value: "Multer",
    icon: GitBranch,
  },
  {
    label: "AI Integration",
    value: "OpenAI SDK",
    icon: Sparkles,
  },
  {
    label: "Programming",
    value: "JavaScript + TypeScript",
    icon: Braces,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Decorative background glow adds depth without affecting the layout. */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/3
          h-80
          w-80
          rounded-full
          bg-[var(--color-primary)]
          opacity-[0.05]
          blur-[120px]
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
            02 — Skills
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
            Technologies I work with{" "}
            <span className="text-[var(--color-text-secondary)]">
              to build products.
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
            A collection of technologies, tools, and concepts I use across
            frontend, backend, databases, and deployment.
          </p>
        </div>

        {/* Main skill categories. */}
        <div
          className="
            mt-14
            grid
            gap-4
            sm:grid-cols-2
            lg:mt-16
            lg:grid-cols-4
          "
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <article
                key={category.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[var(--color-primary)]
                  hover:shadow-[var(--shadow-primary)]
                  sm:p-6
                "
              >
                {/* Category icon. */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-bg)]
                    text-[var(--color-primary-hover)]
                    transition-all
                    duration-300
                    group-hover:border-[var(--color-primary)]
                  "
                >
                  <CategoryIcon size={19} />
                </div>

                <h3
                  className="
                    mt-5
                    text-lg
                    font-semibold
                    tracking-tight
                    text-[var(--color-text)]
                  "
                >
                  {category.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-[var(--color-text-muted)]
                  "
                >
                  {category.description}
                </p>

                {/* Technology badges with their real brand icons. */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill: SkillItem) => {
                    const SkillIcon = skill.icon;

                    return (
                      <span
                        key={skill.name}
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          rounded-lg
                          border
                          border-[var(--color-border)]
                          bg-[var(--color-bg)]
                          px-2.5
                          py-1.5
                          text-xs
                          font-medium
                          text-[var(--color-text-secondary)]
                          transition-all
                          duration-200
                          hover:border-[var(--color-primary)]
                          hover:text-[var(--color-text)]
                        "
                      >
                        {SkillIcon && (
                          <SkillIcon
                            size={13}
                            className="shrink-0"
                            aria-hidden="true"
                          />
                        )}

                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>

        {/* Additional skills and technologies. */}
        <div
          className="
            mt-4
            grid
            gap-3
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {additionalSkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.label}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  px-4
                  py-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[var(--color-primary)]
                "
              >
                <Icon
                  size={18}
                  className="
                    shrink-0
                    text-[var(--color-primary-hover)]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <div className="min-w-0">
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {skill.label}
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
                    {skill.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Skills;