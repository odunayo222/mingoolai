"use client"; 
import { motion } from "motion/react";

type Drop = {
  left: string;
  height: number; // px
  duration: number; // s
  delay: number; // s (negative = already mid-fall on load)
  opacity: number;
  color: string;
};

// fixed values (not Math.random) so server and client render the same HTML
const drops: Drop[] = [
  {
    left: "4%",
    height: 28,
    duration: 9,
    delay: -2,
    opacity: 0.7,
    color: "#a99bff",
  },
  {
    left: "9%",
    height: 20,
    duration: 12,
    delay: -7,
    opacity: 0.5,
    color: "#ffffff",
  },
  {
    left: "15%",
    height: 40,
    duration: 10,
    delay: -4,
    opacity: 0.6,
    color: "#8b7bff",
  },
  {
    left: "22%",
    height: 24,
    duration: 14,
    delay: -9,
    opacity: 0.45,
    color: "#c9c2ff",
  },
  {
    left: "30%",
    height: 32,
    duration: 11,
    delay: -1,
    opacity: 0.55,
    color: "#a99bff",
  },
  {
    left: "41%",
    height: 22,
    duration: 13,
    delay: -6,
    opacity: 0.4,
    color: "#ffffff",
  },
  {
    left: "52%",
    height: 36,
    duration: 10,
    delay: -3,
    opacity: 0.5,
    color: "#8b7bff",
  },
  {
    left: "61%",
    height: 26,
    duration: 15,
    delay: -11,
    opacity: 0.45,
    color: "#c9c2ff",
  },
  {
    left: "71%",
    height: 30,
    duration: 9,
    delay: -5,
    opacity: 0.6,
    color: "#a99bff",
  },
  {
    left: "79%",
    height: 38,
    duration: 12,
    delay: -8,
    opacity: 0.7,
    color: "#ffffff",
  },
  {
    left: "86%",
    height: 24,
    duration: 11,
    delay: -2,
    opacity: 0.5,
    color: "#8b7bff",
  },
  {
    left: "90%",
    height: 42,
    duration: 14,
    delay: -10,
    opacity: 0.65,
    color: "#c9c2ff",
  },
  {
    left: "95%",
    height: 28,
    duration: 10,
    delay: -6,
    opacity: 0.5,
    color: "#a99bff",
  },
];

// keyframes live here so the animation doesn't depend on globals.css
const rainCss = `
@keyframes pr-fall {
  from { transform: translateY(-80px); }
  to   { transform: translateY(560px); }
}
.pr-drop {
  animation-name: pr-fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}
`;

export default function PricingHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }} 
    className="relative overflow-hidden bg-black px-6 pb-8 pt-10 text-white md:pt-10">
      <style dangerouslySetInnerHTML={{ __html: rainCss }} />

      {/* falling streaks */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {drops.map((d, i) => (
          <span
            key={i}
            className="pr-drop absolute -top-20 block w-px"
            style={{
              left: d.left,
              height: `${d.height}px`,
              opacity: d.opacity,
              animationDuration: `${d.duration}s`,
              animationDelay: `${d.delay}s`,
              background: `linear-gradient(to bottom, transparent, ${d.color})`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="inline-block rounded-full border border-white px-4 py-1 text-[15px] font-semibold">
          Simple plans, no hidden costs
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-[64px]">
          One plan. Everything included.
        </h1>

        <p className="mt-6 text-sm text-[#a3a3a3] md:text-[15px]">
          Starting at $9.99/month. No hidden fees, no upgrades required.
        </p>
      </div>
    </motion.section>
  );
}
