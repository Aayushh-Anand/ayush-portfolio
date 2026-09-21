import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
  ];

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
      <nav
        className="relative mx-auto flex w-full max-w-300 items-center justify-between rounded-full border border-white/10
bg-white/4 px-5 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-6 lg:px-7"
      >
        {/* Subtle Glass Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-linear-to-r from-blue-500/4 via-transparent to-violet-500/4"
        />

        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavigation}
          className="relative z-20 text-base font-semibold tracking-tight text-white"
        >
          AYUSH <span className="text-blue-500">ANAND</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact */}
        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-white transition-[border-color,background-color] duration-300 hover:border-blue-400/40 hover:bg-white/5 lg:block"
        >
          Let's Connect
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03]text-white transition-[border-color,background-color] duration-300 hover:border-blue-400/40 hover:bg-white/5 lg:hidden"
        >
          {isMenuOpen ? (
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-0 -z-10 overflow-hidden rounded-4xl border border-white/10 bg-[#0a0a10]/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 lg:hidden ${
            isMenuOpen
              ? "pointer-events-auto max-h-130 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-7 pt-20 sm:px-7 sm:pt-24">
            {/* Mobile Navigation */}
            <div className="flex flex-col">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavigation}
                  className="border-b border-white/10 py-4 text-lg font-medium text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <span className="mr-4 font-mono text-xs text-white/30">
                    0{index + 1}
                  </span>

                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Contact */}
            <a
              href="#contact"
              onClick={handleNavigation}
              className="mt-7 flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition-[border-color,background-color] duration-300 hover:border-blue-400/50 hover:bg-blue-500/10"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;