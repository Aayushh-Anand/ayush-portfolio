import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const focusAreas = [
    "Artificial Intelligence",
    "AI Engineering",
    "Full Stack Development",
    "Product Engineering",
    "Creative Technology",
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // Section label
      gsap.fromTo(
        ".about-label",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-label",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Main heading
      gsap.fromTo(
        ".about-heading",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-heading",
            start: "top 82%",
            once: true,
          },
        }
      );

      // Right side content
      gsap.fromTo(
        ".about-right",
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-right",
            start: "top 82%",
            once: true,
          },
        }
      );

      // Focus tags
      gsap.fromTo(
        ".focus-tag",
        {
          opacity: 0,
          y: 25,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".focus-tags",
            start: "top 85%",
            once: true,
          },
        }
      );

      // My Approach
      gsap.fromTo(
        ".about-approach",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-approach",
            start: "top 88%",
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
      id="about"
      className="relative overflow-hidden  px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-350">

        {/* Section Label */}
        <div className="about-label mb-10 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.3em] text-white/60">
            01
          </span>

          <span className="h-px w-10 bg-white/60" />

          <span className="text-xs uppercase tracking-[0.3em] text-white/60">
            About
          </span>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

          {/* Left */}
          <div className="about-heading">
            <h2
                className="text-[clamp(2.5rem,12vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.06em] sm:text-[clamp(3.5rem,7vw,7.5rem)]"
              >
              I BUILD

              <br />

              <span className="text-white/20">
                INTELLIGENT
              </span>

              <br />

              DIGITAL

              <br />

              <span
                className="bg-linear-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent"
              >
                EXPERIENCES.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="about-right flex flex-col justify-end gap-12 lg:pb-2">

            {/* Who I Am */}
            <div>
              <p className="max-w-xl wrap-break-words text-base leading-[1.8] text-white/60 md:text-xl">
                Who I Am
              </p>

              <p className="max-w-xl wrap-break-words text-base leading-[1.8] text-white/60 md:text-lg">
                I'm Ayush Anand — an AI & ML engineering student focused on
                full-stack development, artificial intelligence, and building
                modern digital products.
              </p>

              <p className="mt-5 max-w-xl text-base leading-[1.8] text-white/60 md:text-lg">
                I enjoy turning ideas into functional experiences by combining
                engineering, design, and intelligent technologies.
              </p>
            </div>

            {/* Areas of Focus */}
            <div className="border-t border-white/10 pt-7">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/80">
                Areas of Focus
              </p>

              <div className="focus-tags flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="focus-tag rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/50 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/4 hover:text-white/80"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* My Approach */}
        <div className="about-approach mt-16 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-[0.3fr_0.7fr] md:gap-10">
          <span className="text-xs uppercase tracking-[0.25em] text-white/80">
            My Approach
          </span>

          <p className="max-w-3xl text-base leading-[1.8] text-white/80 md:text-lg">
            My approach is simple: understand the problem, design the right
            solution, and build it with technology that creates meaningful
            value.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;