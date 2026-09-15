import {
  ArrowUpRight,
  Cloud,
  FileText,
  PlaySquare,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiGithub ,
  SiReact,
  SiRazorpay,
  SiRender,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { BsOpenai } from "react-icons/bs";

import Container from "../../components/common/Container";

const projects = [
  {
    title: "ShopAI",
    type: "Full-Stack E-Commerce",
     liveUrl: "https://shopaitest.netlify.app/",
     liveLabel: "Live Demo",
  githubUrl: "https://github.com/nikhilKiroula/ShopAI",
    description:
      "A full-stack e-commerce platform with customer and admin interfaces, product discovery, cart, wishlist, checkout, order management, and admin analytics.",
    featured: true,
    icon: ShoppingCart,
    technologies: [
  { name: "React.js", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Razorpay", icon: SiRazorpay },
  { name: "Netlify", icon: SiNetlify },
  { name: "Render", icon: SiRender },
],
    highlights: [
      "49 REST API endpoints",
      "JWT authentication & role-based access",
      "Razorpay payment integration",
      "Cloudinary media management",
    ],
  },
  {
    title: "Resume Builder",
    type: "Full-Stack Application",
    liveUrl: null,
    liveLabel: "Live Demo",
  githubUrl: "https://github.com/nikhilKiroula/resume-builder",
    description:
      "A full-stack resume builder with a drag-and-drop editor, multiple templates, public resume sharing, resume management, and AI-powered content enhancement.",
    icon: FileText,
    technologies: [
      { name: "React.js", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "JavaScript", icon: SiJavascript },
      { name: "OpenAI SDK", icon: BsOpenai },
    ],
    highlights: [
      "22 REST API endpoints",
      "JWT access & refresh tokens",
      "6 resume templates",
      "AI content enhancement",
    ],
  },
  {
    title: "VideoTube Backend",
    type: "REST API Backend",
     liveUrl: null,
     liveLabel: "Live Demo",
  githubUrl: "https://github.com/nikhilKiroula/backend",
    description:
      "A RESTful backend supporting video, comments, likes, subscriptions, playlists, tweets, watch history, and user workflows.",
    icon: PlaySquare,
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Cloudinary", icon: Cloud },
       { name: "Postman", icon: SiPostman },
    ],
    highlights: [
      "41 REST API endpoints",
      "JWT & ownership authorization",
      "MVC architecture & reusable middleware",
      "Aggregation & pagination",
    ],
  },
  {
    title: "GoGreenRaven",
    type: "Client Website",
    liveUrl: "https://gogreenraven.com/",
    liveLabel: "Live Website",
  githubUrl: "https://github.com/nikhilKiroula/GreenRaven",
    description:
      "A responsive client website built with reusable UI components and focused on delivering a clean production-ready frontend experience.",
    icon: Sparkles,
    technologies: [
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    highlights: [
      "Responsive UI",
      "Reusable components",
      "Production deployment",
      "Team collaboration & debugging",
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Decorative glow adds subtle depth to the section background. */}
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
            03 — Projects
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
            Things I've built{" "}
            <span className="text-[var(--color-text-secondary)]">
              along the way.
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
            A selection of full-stack applications and backend systems built
            while working with modern web technologies.
          </p>
        </div>

        {/* Project grid. */}
        <div
          className="
            mt-14
            grid
            gap-4
            sm:grid-cols-2
    lg:mt-16
    lg:grid-cols-12
          "
        >
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <article
                key={project.title}
              className={`
  group
  relative
  self-start
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
  ${
    index === 0
      ? "lg:col-span-7"
      : index === 1
        ? "lg:col-span-5"
        : index === 2
          ? "lg:col-span-5 "
          : "lg:col-span-7"
  }
`}
              >
                {/* Project header. */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
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
                      <ProjectIcon size={20} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-[0.16em]
                          text-[var(--color-text-muted)]
                        "
                      >
                        {project.type}
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
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project number gives the cards a structured visual hierarchy. */}
                  <span
                    className="
                      font-mono
                      text-xs
                      text-[var(--color-text-muted)]
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                <div
                  className={`
                    mt-6
                    ${project.featured ? "lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-10" : ""}
                  `}
                >
                  <div>
                    <p
                      className="
                        max-w-2xl
                        text-sm
                        leading-7
                        text-[var(--color-text-secondary)]
                        sm:text-base
                      "
                    >
                      {project.description}
                    </p>

                    {/* Technology logos. */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => {
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
                              px-2.5
                              py-1.5
                              text-xs
                              font-medium
                              text-[var(--color-text-secondary)]
                            "
                          >
                            <TechnologyIcon
                              size={13}
                              className="shrink-0"
                              aria-hidden="true"
                            />

                            {technology.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project highlights. */}
                  <div
                    className={`
                      mt-6
                      border-t
                      border-[var(--color-border)]
                      pt-5
                      ${project.featured ? "lg:mt-0 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0" : ""}
                    `}
                  >
                    <p
                      className="
                        font-mono
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-[var(--color-text-muted)]
                      "
                    >
                      Highlights
                    </p>

                    <ul className="mt-3 space-y-2.5">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="
                            flex
                            items-start
                            gap-2.5
                            text-sm
                            leading-6
                            text-[var(--color-text-secondary)]
                          "
                        >
                          <span
                            className="
                              mt-2
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-[var(--color-primary)]
                            "
                          />

                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Project actions. Actual URLs will be added later. */}
<div
  className="
    mt-6
    flex
    flex-col
    gap-2
    border-t
    border-[var(--color-border)]
    pt-5
    sm:flex-row
  "
>
  {/* Live demo link is shown only when a live project URL exists. */}
  {project.liveUrl ? (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        border
        border-[var(--color-primary)]
        bg-[var(--color-primary)]
        px-4
        py-2.5
        text-sm
        font-medium
        text-white
        transition-all
        duration-200
        hover:bg-[var(--color-primary-hover)]
        hover:shadow-[var(--shadow-primary)]
      "
    >
      {project.liveLabel}
      <ArrowUpRight
        size={15}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  ) : (
    <span
      className="
        inline-flex
        cursor-not-allowed
        items-center
        justify-center
        gap-2
        rounded-lg
        border
        border-[var(--color-border)]
        bg-[var(--color-bg)]
        px-4
        py-2.5
        text-sm
        font-medium
        text-[var(--color-text-muted)]
        opacity-60
      "
    >
      {project.liveLabel}
      <ArrowUpRight size={15} />
    </span>
  )}

  {/* GitHub link opens the project's repository in a new tab. */}
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      justify-center
      gap-2
      rounded-lg
      border
      border-[var(--color-border)]
      bg-[var(--color-bg)]
      px-4
      py-2.5
      text-sm
      font-medium
      text-[var(--color-text-secondary)]
      transition-all
      duration-200
      hover:border-[var(--color-primary)]
      hover:text-[var(--color-text)]
    "
  >
    <SiGithub size={15} />
    GitHub
  </a>
</div>              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Projects;