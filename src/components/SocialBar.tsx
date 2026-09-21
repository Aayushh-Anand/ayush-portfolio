import {
  SiGithub,
  SiInstagram,
} from "react-icons/si";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function SocialBar() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Aayushh-Anand",
      icon: SiGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aayushh-anand/",
      icon: FaLinkedinIn,
    },
    {
      name: "X",
      href: "https://x.com/AnandAyushh",
      icon: FaXTwitter,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/aayushh.anand/",
      icon: SiInstagram,
    },
  ];

  return (
    <div
      className="fixed bottom-5 left-5 z-50 flex items-center gap-5 rounded-full border border-white/10 bg-[#08080d]/50 px-4 py-3 backdrop-blur-md md:bottom-auto md:left-auto md:right-7 md:top-1/2 md:-translate-y-1/2 md:flex-col md:gap-7 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none"
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="text-white/70 transition-[transform,color] duration-300 hover:-translate-y-1 hover:text-blue-400 md:hover:-translate-x-1 md:hover:translate-y-0">
            <Icon
              size={22}
              aria-hidden="true"
            />
          </a>
        );
      })}
    </div>
  );
}

export default SocialBar;