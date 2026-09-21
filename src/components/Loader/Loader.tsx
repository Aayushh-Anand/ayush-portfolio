import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const leftArcRef = useRef<HTMLDivElement>(null);
  const rightArcRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const loader = loaderRef.current;
    const content = contentRef.current;
    const name = nameRef.current;
    const role = roleRef.current;
    const progressBar = progressRef.current;
    const percentage = percentageRef.current;
    const status = statusRef.current;
    const indicator = indicatorRef.current;
    const leftArc = leftArcRef.current;
    const rightArc = rightArcRef.current;

    if (
      !loader ||
      !content ||
      !name ||
      !role ||
      !progressBar ||
      !percentage ||
      !status ||
      !indicator ||
      !leftArc ||
      !rightArc
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      /* =========================
         INITIAL STATE
      ========================= */

      gsap.set(name, {
        opacity: 0,
        y: 30,
      });

      gsap.set(role, {
        opacity: 0,
        y: 20,
      });

      gsap.set(progressBar, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(percentage, {
        opacity: 0,
      });

      gsap.set(status, {
        opacity: 0,
        y: 10,
      });

      gsap.set(indicator, {
        opacity: 0,
        scale: 0,
      });

      gsap.set([leftArc, rightArc], {
        opacity: 0,
      });

      /* =========================
         INTRO
      ========================= */

      const intro = gsap.timeline();

      intro
        .to(
          [leftArc, rightArc],
          {
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
          }
        )
        .to(
          name,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.8"
        )
        .to(
          role,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .to(
          [percentage, status],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .to(
          indicator,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.25"
        );

      /* =========================
         PROGRESS
      ========================= */

      const progress = {
        value: 0,
      };

      gsap.to(progress, {
        value: 100,
        duration: 2.8,
        delay: 0.7,
        ease: "power2.inOut",

        onUpdate: () => {
          const value = Math.round(progress.value);

          percentage.textContent = `${String(value).padStart(2, "0")}%`;

          gsap.set(progressBar, {
            scaleX: progress.value / 100,
          });
        },

        onComplete: () => {
          percentage.textContent = "100%";

          status.textContent = "READY.";

          gsap.to(indicator, {
            opacity: 0,
            scale: 0.5,
            duration: 0.3,
            ease: "power2.in",
          });

          /* =========================
             EXIT
          ========================= */

          const exit = gsap.timeline({
            delay: 0.35,
          });

          exit
            .to(content, {
              y: -30,
              opacity: 0,
              duration: 0.55,
              ease: "power3.in",
            })
            .to(
              [leftArc, rightArc],
              {
                opacity: 0,
                duration: 0.4,
                ease: "power2.in",
              },
              "-=0.35"
            )
            .to(
              loader,
              {
                opacity: 0,
                duration: 0.65,
                ease: "power2.inOut",
                onComplete: () => {
                  loader.style.display = "none";
                },
              },
              "-=0.15"
            );
        },
      });

      /* =========================
         ARC MOTION
      ========================= */

      gsap.to(leftArc, {
        rotation: 4,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(rightArc, {
        rotation: -4,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         CENTER INDICATOR
      ========================= */

      gsap.to(indicator, {
        opacity: 0.5,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 overflow-hidden bg-[#08080d] text-white"
      aria-label="Loading portfolio"
    >
      {/* =========================
          BACKGROUND ARCS
      ========================= */}

      <div
        ref={leftArcRef}
        aria-hidden="true"
        className="pointer-events-none absolute -left-70 top-1/2 h-162.5 w-162.5 -translate-y-1/2 rounded-full border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.18)] sm:-left-80 sm:h-187.5 sm:w-187.5"
      />

      <div
        ref={rightArcRef}
        aria-hidden="true"
        className="pointer-events-none absolute -right-75 -top-62.5 h-162.5 w-162.5 rounded-full border border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.18)] sm:-right-87.5 sm:-top-75 sm:h-187.5 sm:w-187.5"
      />

      {/* =========================
          CONTENT
      ========================= */}

      <div
        ref={contentRef}
        className="relative z-10 flex min-h-screen items-center justify-center px-6"
      >
        <div className="w-full max-w-190 text-center">

          {/* NAME */}

          <h1
            ref={nameRef}
            className="whitespace-nowrap text-[clamp(2.6rem,8vw,7rem)] font-semibold leading-none tracking-[-0.07em]"
          >
            AYUSH{" "}
            <span
              className="bg-linear-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent"
            >
              ANAND
            </span>
          </h1>

          {/* ROLE */}

          <p
            ref={roleRef}
            className="mt-5 text-[10px] uppercase tracking-[0.28em] text-white/55 sm:text-xs sm:tracking-[0.35em] md:text-sm"
          >
            AI Engineer × Full Stack Developer
          </p>

          {/* PROGRESS */}

          <div className="mt-12 sm:mt-14">

            <div
              className="h-px w-full overflow-hidden bg-white/10"
            >
              <div
                ref={progressRef}
                className="h-full w-full bg-linear-to-r  from-blue-400 via-indigo-400 to-violet-500 shadow-[0_0_12px_rgba(96,165,250,0.6)]"
              />
            </div>

            <div className="mt-3 flex justify-end">
              <span
                ref={percentageRef}
                className="font-mono text-xs tracking-[0.2em] text-white/45"
              >
                00%
              </span>
            </div>

          </div>

          {/* STATUS */}

          <p
            ref={statusRef}
            className="mt-12 text-[10px] uppercase tracking-[0.45em] text-white/45 sm:text-xs"
          >
            Initializing...
          </p>
        </div>
      </div>

      {/* =========================
          BOTTOM LEFT
      ========================= */}

      <div
        className="absolute bottom-8 left-6 z-10 flex flex-col gap-2 text-[9px] uppercase tracking-[0.4em] text-white/30 sm:bottom-10 sm:left-10 sm:text-[10px]"
      >
        <span>Ideas</span>
        <span>Into</span>
        <span>Impact</span>
      </div>

      {/* =========================
          BOTTOM RIGHT
      ========================= */}

      <div
        className="absolute bottom-8 right-6 z-10 flex flex-col items-end gap-2 text-[9px] uppercase tracking-[0.4em] text-white/30 sm:bottom-10 sm:right-10 sm:text-[10px]"
      >
        <span>Build</span>
        <span>Learn</span>
        <span>Grow</span>
      </div>

      {/* =========================
          CENTER INDICATOR
      ========================= */}

      <div
        ref={indicatorRef}
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 z-10 hidden h-16 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-violet-400 to-transparent sm:block"
      >
        <span
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]"
        />
      </div>
    </div>
  );
}

export default Loader;