import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiNodedotjs,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiNumpy,
  SiTailwindcss,
  SiPandas,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiJupyter,
  SiFigma,
  SiPostman,
  SiGsap,
} from "react-icons/si";

import {
  Code2,
  Terminal,
  Cloud,
  Monitor,
  Palette,
  BriefcaseBusiness,
  Brain,
  Waves,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: Code2 },
    { name: "Bash", icon: Terminal },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Node.js", icon: SiNodedotjs },

    { name: "Django", icon: SiDjango },
    { name: "Flask", icon: SiFlask },
    { name: "FastAPI", icon: SiFastapi },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "OpenCV", icon: SiOpencv },
    { name: "NumPy", icon: SiNumpy },

    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Pandas", icon: SiPandas },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Redis", icon: SiRedis },

    { name: "GSAP", icon: SiGsap },
    { name: "Lenis", icon: Waves },

    { name: "Docker", icon: SiDocker },
    { name: "Azure", icon: Cloud },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "AWS", icon: Cloud },

    { name: "VS Code", icon: Monitor },
    { name: "Vercel", icon: SiVercel },
    { name: "Jupyter", icon: SiJupyter },
    { name: "Figma", icon: SiFigma },

    { name: "Postman", icon: SiPostman },
    { name: "Photoshop", icon: Palette },
    { name: "Hugging Face", icon: Brain },
    { name: "MS Office", icon: BriefcaseBusiness },
    
  ];

  const rows = [10, 8, 6, 5, 4, 3, 2, 1];

  useLayoutEffect(() => {
      const section = sectionRef.current;

      if (!section) return;

      const ctx = gsap.context(() => {
        /* =========================
          SECTION LABEL
        ========================= */

        gsap.fromTo(
          ".skills-label",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              once: true,
            },
          }
        );

        /* =========================
          SKILLS MAIN REVEAL
        ========================= */

        const skillsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
        });

        /* TECH STACK */

        skillsTimeline.fromTo(
          ".skills-heading",
          {
            opacity: 0,
            y: 45,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
          }
        );

        /* DESKTOP ROWS */

        skillsTimeline.fromTo(
          ".skill-row",
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.06,
            ease: "power3.out",
          },
          "-=0.45"
        );

        /* ALL SKILL CARDS */

        skillsTimeline.fromTo(
          ".skill-card",
          {
            opacity: 0,
            y: 20,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            stagger: 0.025,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }, section);

      return () => ctx.revert();
    }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20"
    >
      {/* =========================
          BACKGROUND GLOW
      ========================= */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-[180px]"
      />

      <div
        className="pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-350">

        {/* =========================
            HEADER
        ========================= */}

        <div className="skills-header mb-14">

          <p
            className="skills-label mb-5 text-xs uppercase tracking-[0.35em] text-white/40"
          >
            03 / Skills
          </p>

          <h2
            className="skills-heading text-center text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em]"
          >
            <span
              className="bg-linear-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent"
            >
              TECH STACK
            </span>
          </h2>

        </div>

       {/* =========================
              SKILL GRID
          ========================= */}

          {/* MOBILE / TABLET GRID */}
          <div className="skills-grid-mobile grid grid-cols-5 gap-2 sm:gap-3 xl:hidden">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="`skill-card group flex h-18 w-full min-w-0 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/2.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/6 sm:h-20.5"
                >
                  <Icon
                      size={30}
                      aria-hidden="true"
                      className="mb-2 text-white/70 transition-colors duration-300 group-hover:text-white"
                    />

                  <span
                    className="w-full truncate px-1 text-center text-[9px] font-medium text-white/45 transition-colors duration-300 group-hover:text-white/80 sm:text-[10px]"
                  >
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>


          {/* DESKTOP INVERTED TRIANGLE */}
          <div className="skills-grid hidden flex-col items-center gap-3 xl:flex 2xl:gap-4">
            {rows.map((_, rowIndex) => {
              const rowSkills = skills.slice(
                rows
                  .slice(0, rowIndex)
                  .reduce((total, size) => total + size, 0),
                rows
                  .slice(0, rowIndex + 1)
                  .reduce((total, size) => total + size, 0)
              );

              return (
                <div
                  key={rowIndex}
                  className="skill-row flex justify-center gap-3 lg:gap-4"
                >
                  {rowSkills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="skill-card group flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/2.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/6 2xl:h-29 2xl:w-29"
                      >
                        <Icon
                            size={38}
                            aria-hidden="true"
                            className="mb-3 text-white/70 transition-colors duration-300 group-hover:text-white"
                          />

                        <span
                          className="text-center text-[10px] font-medium text-white/45 transition-colors duration-300 group-hover:text-white/80 lg:text-xs"
                        >
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
}

export default Skills;