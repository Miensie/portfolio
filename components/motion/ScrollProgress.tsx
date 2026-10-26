"use client";

import { useEffect, useRef } from "react";

/** Fine barre bleue sous la navigation, qui indique la progression de lecture. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px]">
      {/* L'échelle est pilotée uniquement par style.transform (pas de classe scale-*, qui utilise
          la propriété CSS `scale` et se multiplierait avec transform). */}
      <div
        ref={bar}
        style={{ transform: "scaleX(0)" }}
        className="h-full origin-left bg-gradient-to-r from-electric to-electric-soft shadow-[0_0_10px_rgba(96,165,250,0.8)]"
      />
    </div>
  );
}
