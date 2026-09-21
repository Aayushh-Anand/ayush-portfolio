function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 text-white sm:px-8 lg:px-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-125 w-125 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-125 w-125 rounded-full bg-violet-600/10 blur-[150px]" />

      {/* Main Container */}
      <div className="relative mx-auto grid w-full max-w-350 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">

        {/* Left Content */}
        <div className="w-full max-w-none">

          {/* Label */}
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-white/40">
            AI Engineer × FULL STACK Developer
          </p>

          {/* Name */}
          <h1 className="text-[clamp(4rem,9vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
            AYUSH
            <br />
            <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              ANAND
            </span>
          </h1>

          {/* Description */}
          <p className="mt-10 max-w-xl text-lg leading-8 text-white/55 md:text-xl">
            Building intelligent digital experiences and modern web
            applications.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            {/* View My Work */}
            <a
              href="#projects"
              className="rounded-full bg-linear-to-r from-blue-500 to-violet-500 px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_0_rgba(59,130,246,0)] transition-[background,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:from-blue-500 hover:to-blue-500 hover:shadow-[0_0_28px_rgba(59,130,246,0.35)]"
            >
              View My Work
            </a>

            {/* Contact Me */}
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-[border-color,background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-blue-400/70 hover:bg-blue-500/15 hover:text-blue-100 hover:shadow-[0_0_24px_rgba(59,130,246,0.18)]"
            >
              Contact Me
            </a>
          </div>

        </div>

        {/* Right Visual */}
        <div className="relative hidden min-h-125 items-center justify-center lg:flex">

          <div className="relative flex h-115 w-95 items-center justify-center">

            {/* Outer Ring */}
            <div
              className="absolute h-107.5 w-107.5 rounded-full border border-white/45 shadow-[0_0_35px_rgba(59,130,246,0.08)]"
            />

            {/* Inner Ring */}
            <div
              className="absolute h-85 w-85 rounded-full border border-blue-400/45 shadow-[0_0_30px_rgba(59,130,246,0.12)]"
            />

            {/* Center */}
            <div
              className="relative flex h-40 w-40 items-center justify-center rounded-full border border-blue-400/30 bg-[#08080d]/45 shadow-[0_0_35px_rgba(59,130,246,0.12)] backdrop-blur-sm"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-white/50">
                AI × Web
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-8 left-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/50 sm:left-8 lg:left-12">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        Scroll to explore
      </div>
    </section>
  );
}

export default Home;