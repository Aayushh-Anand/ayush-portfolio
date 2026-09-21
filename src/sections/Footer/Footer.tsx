import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-375">

        {/* ================= TOP FOOTER ================= */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* LEFT — AYUSH */}
          <div className="relative flex items-center justify-start">
            <div className="relative w-fit">

              {/* Big AYUSH */}
              <h2
                className="select-none text-[clamp(5rem,13vw,13rem)] font-bold leading-none tracking-[-0.09em] text-white/8"
              >
                ANAND
              </h2>

              {/* Small AYUSH — centered over big AYUSH */}
              <span
                className="pointer-events-none absolute left-[8%] top-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(1.2rem,2vw,2rem)] font-medium tracking-[0.55em] text-white"
              >
                AYUSH
              </span>

              {/* Subtle blue glow */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[100px]"
              />
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="lg:border-l lg:border-white/10 lg:pl-16">
            <p
              className="max-w-2xl text-xl leading-[1.6] tracking-tight text-white/50 sm:text-2xl lg:text-[2rem] lg:leading-[1.45]"
            >
              Building intelligent digital experiences through{" "}
              <span className="text-blue-400">
                technology
              </span>
              ,{" "}
              <span className="text-blue-400">
                creativity
              </span>
              , and{" "}
              <span className="text-blue-400">
                engineering
              </span>
              .
            </p>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-14 h-px bg-white/10 lg:my-16" />

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="relative flex flex-col gap-8 lg:min-h-16 lg:flex-row lg:items-center">

          {/* LEFT — COPYRIGHT */}
          <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
            <p className="text-xs text-white/50 sm:text-sm">
              © 2026 AYUSH ANAND. All rights reserved.
            </p>
          </div>

          {/* CENTER — BACK TO TOP */}
          <div className="flex justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            <a
              href="#home"
              className="
                group
                flex
                items-center
                gap-4
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/40
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <span>Back to Top</span>

              <span
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-[border-color,background-color] duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/10"
              >
                <ArrowUp
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                />
              </span>
            </a>
          </div>

          {/* RIGHT — AVAILABILITY */}
          <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 sm:text-sm">
              Available for Opportunity
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;