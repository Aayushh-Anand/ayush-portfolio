import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";


gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
  children: ReactNode;
};

function LenisGSAPSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Keep ScrollTrigger synchronized with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Run Lenis through GSAP's ticker
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Prevent GSAP lag smoothing from interfering with Lenis
    gsap.ticker.lagSmoothing(0);

    // Recalculate ScrollTrigger positions
    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
    };
  }, [lenis]);

  return null;
}

function SmoothScroll({ children }: SmoothScrollProps) {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === "undefined"
      ? true
      : window.innerWidth >= 768
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (!isDesktop) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        anchors: true,
      }}
    >
      <LenisGSAPSync />
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;