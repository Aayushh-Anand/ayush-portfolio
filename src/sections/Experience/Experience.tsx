import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineGlowRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "B.Tech in Artificial Intelligence & Machine Learning",
      category: "World College of Technology And Management",
      time: "2023 – 2027",
      description:"Pursuing a B.Tech in Artificial Intelligence & Machine Learning.",
    },
    {
      title: "Class XII",
      category: "Science (PCM)",
      time: "",
      description:"Completed Class XII with Science (PCM).",
    },
    {
      title: "Class X",
      category: "Seventh Day Adventist Inter College",
      time: "",
      description:"Completed Class X at Seventh Day Adventist Inter College.",
    },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const timelineGlow = timelineGlowRef.current;

    if (!section || !timelineGlow) return;

    const ctx = gsap.context(() => {
      /* =========================
         HEADER ANIMATION
      ========================= */

      gsap.fromTo(
        ".experience-header",
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".experience-header",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =========================
         BASE TIMELINE
      ========================= */

      gsap.fromTo(
        ".experience-line",
        {
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".experience-timeline",
            start: "top 80%",
            once: true,
          },
        }
      );

      /* =========================
         SCROLL-LINKED GLOW
      ========================= */

      gsap.set(timelineGlow, {
        height: "0%",
        opacity: 1,
      });

      gsap.to(timelineGlow, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".experience-timeline",
          start: "top 55%",
          end: "bottom 55%",
          scrub: 0.15,
        },
      });

      /* =========================
         EXPERIENCE ITEMS
      ========================= */

      gsap.fromTo(
        ".experience-item",
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-timeline",
            start: "top 78%",
            once: true,
          },
        }
      );

      /* =========================
         TIMELINE DOTS
      ========================= */

      gsap.fromTo(
        ".experience-dot",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".experience-timeline",
            start: "top 78%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-350">

        {/* =========================
            HEADER
        ========================= */}

        <div className="experience-header mb-14 text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/30">
            02 / Experience
          </p>

          <h2
            className="text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em]"
          >
            My journey &

            <br />

            <span
              className="bg-linear-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent"
            >
              experience
            </span>
          </h2>
        </div>

        {/* =========================
            TIMELINE
        ========================= */}

        <div className="experience-timeline relative">

          {/* Base Timeline */}
          <div
            className="experience-line absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-white/10 md:block"
          />

          {/* Scroll Linked Glow */}
          <div
            ref={timelineGlowRef}
            className="pointer-events-none absolute left-1/2 top-0 hidden w-0.75 -translate-x-1/2 overflow-hidden rounded-full bg-linear-to-b from-blue-400 via-indigo-400 to-violet-500 shadow-[0_0_8px_rgba(96,165,250,0.65),0_0_16px_rgba(139,92,246,0.45)] md:block"
          />

          <div className="flex flex-col">

            {experiences.map((experience, index) => (
              <div
                key={`${experience.title}-${index}`}
                className="experience-item relative grid gap-8 border-t border-white/10 py-10 md:grid-cols-[1fr_120px_1fr] md:gap-12"
              >
            {/* LEFT CONTENT */}
            <div className="md:pr-12 md:text-right">
              <h3
                className="text-2xl font-medium tracking-tight text-white md:text-3xl"
              >
                {experience.title}
              </h3>

              <p
                className="mt-3 text-sm font-medium text-violet-400 md:text-base"
              >
                {experience.category}
              </p>
            </div>

            {/* CENTER TIMELINE */}
            <div className="relative flex items-center justify-center">
              <span
                className="experience-dot absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.9)] md:block"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="md:pl-12">
              {/* TIME */}
              <p
                className="text-lg font-medium tracking-tight text-white/70 md:text-xl"
              >
                {experience.time}
              </p>

              {/* DESCRIPTION */}
              <p
                className="mt-3 max-w-xl text-base leading-7 text-white/45 md:text-lg"
              >
                {experience.description}
              </p>
            </div>
          </div>
        ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;