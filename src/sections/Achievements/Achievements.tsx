import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

  const achievements = [
    {
      number: "01",
      title: "Introduction to Generative AI",
      organization: "Google Cloud & Simplilearn",
      date: "September 2025",
      description:
        "Completed an introduction to Generative AI covering foundational concepts and applications of generative artificial intelligence.",
      link: "/Certificates/Google Cloud Generative AI.pdf",
      direction: "left",
    },
    {
      number: "02",
      title: "5G PHY Layer Engineering",
      organization: "IIT Delhi",
      date: "December 2023",
      description:
        "Completed a certification focused on 5G PHY Layer Engineering and the fundamentals of next-generation wireless communication systems.",
      link: "/Certificates/Certificate_AYUSH IIT Delhi.pdf",
      direction: "right",
    },
    {
      number: "03",
      title: "SkillsBuild Orientation",
      organization: "IBM SkillsBuild",
      date: "October 2025",
      description:
        "Completed the Edunet - SkillsBuild Orientation program through IBM SkillsBuild.",
      link: "/Certificates/Completion Certificate _ SkillsBuild ORIENTATION IBM.pdf",
      direction: "left",
    },
    {
      number: "04",
      title: "More Coming Soon",
      organization: "Achievement",
      date: "",
      description:
        "More certifications, achievements, and milestones will be added here.",
      link: "/Certificates/More Coming Soon.pdf",
      direction: "right",
    },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* =========================
         SECTION LABEL
      ========================= */

      gsap.fromTo(
        ".achievements-label",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".achievements-label",
            start: "top 85%",
            once: true,
          },
        }
      );

      /* =========================
         MAIN HEADING
      ========================= */

      gsap.fromTo(
        ".achievements-heading",
        {
          opacity: 0,
          y: 90,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".achievements-heading",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =========================
         ACHIEVEMENT CARDS
      ========================= */

      gsap.utils
        .toArray<HTMLElement>(".achievement-card")
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

          /* Card reveal */

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
              duration: 1.05,
              ease: "power4.out",
            }
          );

          /* Number */

          tl.fromTo(
            card.querySelector(".achievement-number"),
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

          /* Main content */

          tl.fromTo(
            card.querySelector(".achievement-content"),
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

          /* Date */

          const date = card.querySelector<HTMLElement>(
            ".achievement-date"
          );

          if (date) {
            tl.fromTo(
              date,
              {
                opacity: 0,
                y: 15,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: "power3.out",
              },
              "-=0.4"
            );
          }

          /* Button */

          tl.fromTo(
            card.querySelector(".achievement-action"),
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
            "-=0.25"
          );
        });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative overflow-hidden px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20"
    >
      {/* =========================
          BACKGROUND GLOW
      ========================= */}

      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-350">

        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-16">
          <p
            className="achievements-label mb-5 text-xs uppercase tracking-[0.35em] text-white/30"
          >
            05 / Achievements
          </p>

          <h2
            className="achievements-heading text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em]"
          >
            Things I've{" "}
            <span
              className="bg-linear-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent"
            >
              Achieved.
            </span>
          </h2>
        </div>

        {/* =========================
            ACHIEVEMENT LIST
        ========================= */}

        <div className="flex flex-col gap-12 lg:gap-20">

          {achievements.map((achievement) => (
            <article
              key={achievement.number}
              data-direction={achievement.direction}
              className={`achievement-card group relative w-[88%] overflow-hidden rounded-2xl border border-white/10 bg-white/2.5 p-7 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/30 hover:bg-white/4.5 sm:p-9 lg:p-12
                ${
                  achievement.direction === "right"
                    ? "ml-auto"
                    : "mr-auto"
                }
              `}
            >

              {/* =========================
                  TOP META
              ========================= */}

              <div
                className="achievement-number mb-10 flex items-center justify-between"
              >
                <span
                  className="font-mono text-sm tracking-[0.2em] text-white/30"
                >
                  {achievement.number}
                </span>

                {achievement.date && (
                  <span
                    className="achievement-date text-xs uppercase tracking-[0.25em] text-white/30"
                  >
                    {achievement.date}
                  </span>
                )}
              </div>

              {/* =========================
                  CONTENT
              ========================= */}

              <div
                className="achievement-content grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-16"
              >

                {/* LEFT */}

                <div>
                  <h3
                    className="text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-white"
                  >
                    {achievement.title}
                  </h3>

                  <p
                    className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-violet-400"
                  >
                    {achievement.organization}
                  </p>
                </div>

                {/* RIGHT */}

                <div className="flex flex-col justify-end">

                  <p
                    className="max-w-xl text-base leading-[1.8] text-white/45 md:text-lg"
                  >
                    {achievement.description}
                  </p>

                </div>

              </div>

              {/* =========================
                  ACTION
              ========================= */}

              <div
                className="achievement-action mt-10 border-t border-white/10 pt-7"
              >
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-white/60 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/5 hover:text-white"
                >
                  View Certificate

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Achievements;