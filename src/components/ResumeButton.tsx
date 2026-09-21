import { FileText } from "lucide-react";

function ResumeButton() {
  return (
    <a
      href="/Resume/Ayush Resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-[#08080d]/50 px-4 py-2.5 text-xs font-medium tracking-[0.22em] text-white/55 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md transition-[transform,border-color,background-color,box-shadow,color] duration-400 ease-out hover:-translate-y-2 hover:scale-[1.05] hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_15px_45px_rgba(59,130,246,0.25)] sm:bottom-6 sm:right-6 sm:px-5 sm:py-3 sm:text-sm md:bottom-8 md:right-8"
    >
      <span>RESUME</span>

      <FileText
        size={18}
        strokeWidth={1.5}
        className="transition-transform duration-400 ease-out group-hover:rotate-6 group-hover:scale-110"
        aria-hidden="true"
      />
    </a>
  );
}

export default ResumeButton;