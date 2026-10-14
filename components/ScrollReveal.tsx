// components/ScrollReveal.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const css = `
.sr-ready {
  transition: opacity 0.35s ease-out, transform 0.35s ease-out;
}
.sr-hidden {
  opacity: 0;
  transform: translateY(90px);
}
@media (prefers-reduced-motion: reduce) {
  .sr-ready { transition: none; }
  .sr-hidden { opacity: 1; transform: none; }
}
`;

function getTargets(): HTMLElement[] {
  return Array.from(
    document.querySelectorAll<HTMLElement>("section, footer"),
  ).filter(
    // skip anything nested inside another section/footer
    (el) => !el.parentElement?.closest("section, footer"),
  );
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;

      getTargets().forEach((el) => {
        el.classList.add("sr-ready");
        const r = el.getBoundingClientRect();

        const inView = r.top < vh * 0.92 && r.bottom > 0;
        const farOut = r.top > vh + 150 || r.bottom < -150;

        if (inView) el.classList.remove("sr-hidden");
        else if (farOut) el.classList.add("sr-hidden");
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // run a few times after load, in case sections render late
    const timers = [100, 400, 1000].map((ms) => window.setTimeout(update, ms));

    return () => {
      timers.forEach(window.clearTimeout);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.querySelectorAll(".sr-ready, .sr-hidden").forEach((el) => {
        el.classList.remove("sr-ready", "sr-hidden");
      });
    };
  }, [pathname]);

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
