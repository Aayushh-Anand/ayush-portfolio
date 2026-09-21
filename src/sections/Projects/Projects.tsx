import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      number: "01",
      title: "Project One",
      category: "AI / Full Stack",
      description:
        "A modern digital product focused on solving a real-world problem through intelligent technology and thoughtful user experience.",
      technologies: ["React", "FastAPI", "Python", "MongoDB"],
      direction: "left",
      github: "#",
      live: "#",
    },
    {
      number: "02",
      title: "Project Two",
      category: "Full Stack",
      description:
        "A full-stack application combining a polished frontend with scalable backend architecture and database integration.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
      direction: "right",
      github: "#",
      live: "#",
    },
    {
      number: "03",
      title: "Project Three",
      category: "AI / Machine Learning",
      description:
        "An intelligent application built around machine learning, automation, and a clean digital experience.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      direction: "left",
      github: "#",
      live: "#",
    },
    {
      number: "04",
      title: "Project Four",
      category: "Web Application",
      description:
        "A product-oriented web experience designed with performance, usability, and modern engineering principles in mind.",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
      direction: "right",
      github: "#",
      live: "#",
    },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* =========================
         HEADER ANIMATION
      ========================= */

      gsap.fromTo(
        ".projects-label",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-label",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".projects-heading",
        {
          opacity: 0,
          y: 90,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".projects-heading",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =========================
         PROJECT REVEAL
      ========================= */

      gsap.utils
        .toArray<HTMLElement>(".project-card")
        .forEach((card) => {
          const direction = card.dataset.direction;

          const fromX = direction === "right" ? 120 : -120;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              once: true,
            },
          });

          tl.fromTo(
            card,
            {
              opacity: 0,
              x: fromX,
              y: 40,
              scale: 0.96,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 1.1,
              ease: "power4.out",
            }
          );

          tl.fromTo(
            card.querySelector(".project-number"),
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.7"
          );

          tl.fromTo(
            card.querySelector(".project-content"),
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.55"
          );

          tl.fromTo(
            card.querySelectorAll(".project-tech"),
            {
              opacity: 0,
              y: 12,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.06,
              ease: "power3.out",
            },
            "-=0.45"
          );

          tl.fromTo(
            card.querySelector(".project-actions"),
            {
              opacity: 0,
              y: 15,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.3"
          );
        });

      /* =========================
         CURSOR FOLLOW
      ========================= */

      if (window.matchMedia("(min-width: 768px)").matches) {
        const cards =
          gsap.utils.toArray<HTMLElement>(".project-card");

        cards.forEach((card) => {
          const content =
            card.querySelector<HTMLElement>(".project-inner");

          if (!content) return;

          let animationFrame = 0;
          let mouseX = 0;
          let mouseY = 0;

          const handleMove = (event: MouseEvent) => {
            mouseX = event.clientX;
            mouseY = event.clientY;

            if (animationFrame) return;

            animationFrame = requestAnimationFrame(() => {
              const rect = card.getBoundingClientRect();

              const relativeX = mouseX - rect.left;
              const relativeY = mouseY - rect.top;

              const centerX = rect.width / 2;
              const centerY = rect.height / 2;

              const moveX = ((relativeX - centerX) / centerX) * 8;
              const moveY = ((relativeY - centerY) / centerY) * 5;

              gsap.to(content, {
                x: moveX,
                y: moveY,
                duration: 0.35,
                ease: "power3.out",
                overwrite: true,
              });

              animationFrame = 0;
            });
          };

          const handleEnter = () => {
            gsap.to(content, {
              scale: 1.008,
              duration: 0.4,
              ease: "power3.out",
            });
          };

          const handleLeave = () => {
            gsap.to(content, {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.55,
              ease: "power3.out",
              overwrite: true,
            });
          };

          card.addEventListener("mousemove", handleMove);
          card.addEventListener("mouseenter", handleEnter);
          card.addEventListener("mouseleave", handleLeave);

          (
            card as HTMLElement & {
              _cursorCleanup?: () => void;
            }
          )._cursorCleanup = () => {
            card.removeEventListener("mousemove", handleMove);
            card.removeEventListener("mouseenter", handleEnter);
            card.removeEventListener("mouseleave", handleLeave);
          };
        });
      }
    }, section);

    return () => {
      gsap.utils
        .toArray<HTMLElement>(".project-card")
        .forEach((card) => {
          const element = card as HTMLElement & {
            _cursorCleanup?: () => void;
          };

          element._cursorCleanup?.();
          delete element._cursorCleanup;
        });

      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-175 w-175 -translate-x-1/2 rounded-full bg-blue-600/6 blur-[180px]"
      />

      <div className="relative mx-auto w-full max-w-350">

        {/* HEADER */}

        <div className="projects-header mb-16">
          <p
            className="projects-label mb-5 text-xs uppercase tracking-[0.35em] text-white/30"
          >
            04 / Projects
          </p>

          <h2
            className="projects-heading text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em]"
          >
            Things I've{" "}
            <span
              className="bg-linear-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent"
            >
              Built.
            </span>
          </h2>
        </div>

        {/* PROJECTS */}

        <div className="flex flex-col gap-12 lg:gap-20">

          {projects.map((project) => (
            <article
              key={project.number}
              data-direction={project.direction}
              className={`project-card group relative w-[88%] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]p-7 backdrop-blur-sm transition-all duration-500hover:border-blue-400/30 hover:bg-white/4.5 sm:p-9 lg:p-12
                ${
                  project.direction === "right"
                    ? "ml-auto"
                    : "mr-auto"
                }
              `}
            >

              {/* CURSOR MOVING CONTENT */}

              <div className="project-inner">

                {/* NUMBER */}

                <div
                  className="project-number mb-10 flex items-center justify-between"
                >
                  <span
                    className="font-mono text-sm tracking-[0.2em] text-white/30"
                  >
                    {project.number}
                  </span>

                  <span
                    className="text-xs uppercase tracking-[0.25em] text-white/25"
                  >
                    {project.category}
                  </span>
                </div>

                {/* CONTENT */}

                <div
                  className="project-content grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16"
                >

                  <div>
                    <h3
                      className="text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-white"
                    >
                      {project.title}
                    </h3>

                    <p
                      className="mt-8 max-w-2xl text-base leading-[1.8] text-white/45 md:text-lg"
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-end">

                    <p
                      className="mb-5 text-xs uppercase tracking-[0.25em] text-white/25"
                    >
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="project-tech rounded-full border border-white/10 px-4 py-2 text-xs text-white/50 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/70"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* ACTIONS */}

                <div
                  className="project-actions mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-7"
                >

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-white/60 transition-all duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white"
                  >
                    <FaGithub size={15} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group/live inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-blue-400"
                  >
                    Live

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
                    />
                  </a>

                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;