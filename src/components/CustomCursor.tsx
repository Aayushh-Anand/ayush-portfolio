import { useEffect, useRef } from "react";
import gsap from "gsap";

function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    const glow = glowRef.current;

    if (!ring || !dot || !glow) return;

    let animationFrame = 0;
    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (animationFrame) return;

      animationFrame = requestAnimationFrame(() => {
        gsap.to(dot, {
          x: mouseX,
          y: mouseY,
          duration: 0.08,
          ease: "power2.out",
          overwrite: true,
        });

        gsap.to(ring, {
          x: mouseX,
          y: mouseY,
          duration: 0.25,
          ease: "power3.out",
          overwrite: true,
        });

        gsap.to(glow, {
          x: mouseX,
          y: mouseY,
          duration: 0.45,
          ease: "power3.out",
          overwrite: true,
        });

        animationFrame = 0;
      });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const interactiveElement = target.closest(
        "a, button, [role='button']"
      );

      if (interactiveElement) {
        gsap.to(ring, {
          scale: 1.7,
          duration: 0.3,
          ease: "power3.out",
          overwrite: true,
        });

        gsap.to(dot, {
          scale: 1.4,
          duration: 0.25,
          ease: "power3.out",
          overwrite: true,
        });

        gsap.to(glow, {
          scale: 1.25,
          opacity: 0.9,
          duration: 0.3,
          ease: "power3.out",
          overwrite: true,
        });
      } else {
        gsap.to(ring, {
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
          overwrite: true,
        });

        gsap.to(dot, {
          scale: 1,
          duration: 0.25,
          ease: "power3.out",
          overwrite: true,
        });

        gsap.to(glow, {
          scale: 1,
          opacity: 0.65,
          duration: 0.3,
          ease: "power3.out",
          overwrite: true,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to([ring, dot, glow], {
        opacity: 0,
        duration: 0.25,
      });
    };

    const handleMouseEnter = () => {
      gsap.to([ring, dot, glow], {
        opacity: 1,
        duration: 0.25,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      gsap.killTweensOf([ring, dot, glow]);
    };
  }, []);

  return (
    <>
      {/* =========================
          BLUE AMBIENT GLOW
      ========================= */}

      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-9996 hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[45px] opacity-65 md:block"
      />

      {/* =========================
          OUTER CURSOR RING
      ========================= */}

      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-9998 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400 bg-blue-500/3 shadow-[0_0_12px_rgba(96,165,250,0.45)] md:block"
      />

      {/* =========================
          CENTER DOT
      ========================= */}

      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-9999 hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,1)] md:block"
      />
    </>
  );
}

export default CustomCursor;