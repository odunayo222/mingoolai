"use client";
import { motion } from "motion/react";
import Image from "next/image";

type Drop = {
  left: string;
  height: number; // in pixels (px)
  duration: number; // seconds for one full fall
  delay: number; // negative = already mid-fall on page load
  opacity: number;
  color: string;
};

const drops: Drop[] = [
  {
    left: "4%",
    height: 28,
    duration: 9,
    delay: -2,
    opacity: 0.7,
    color: "#c4b5fd",
  },
  {
    left: "10%",
    height: 20,
    duration: 12,
    delay: -7,
    opacity: 0.5,
    color: "#ffffff",
  },
  {
    left: "16%",
    height: 44,
    duration: 10,
    delay: -4,
    opacity: 0.6,
    color: "#a78bfa",
  },
  {
    left: "24%",
    height: 24,
    duration: 14,
    delay: -9,
    opacity: 0.45,
    color: "#ddd6fe",
  },
  {
    left: "33%",
    height: 32,
    duration: 11,
    delay: -1,
    opacity: 0.55,
    color: "#c4b5fd",
  },
  {
    left: "44%",
    height: 22,
    duration: 13,
    delay: -6,
    opacity: 0.4,
    color: "#ffffff",
  },
  {
    left: "54%",
    height: 38,
    duration: 10,
    delay: -3,
    opacity: 0.5,
    color: "#a78bfa",
  },
  {
    left: "63%",
    height: 26,
    duration: 15,
    delay: -11,
    opacity: 0.45,
    color: "#ddd6fe",
  },
  {
    left: "72%",
    height: 30,
    duration: 9,
    delay: -5,
    opacity: 0.6,
    color: "#c4b5fd",
  },
  {
    left: "80%",
    height: 40,
    duration: 12,
    delay: -8,
    opacity: 0.7,
    color: "#ffffff",
  },
  {
    left: "88%",
    height: 24,
    duration: 11,
    delay: -2,
    opacity: 0.5,
    color: "#a78bfa",
  },
  {
    left: "93%",
    height: 46,
    duration: 14,
    delay: -10,
    opacity: 0.65,
    color: "#ddd6fe",
  },
  {
    left: "97%",
    height: 28,
    duration: 10,
    delay: -6,
    opacity: 0.5,
    color: "#c4b5fd",
  },
];

// keyframes live in the component so it doesn't depend on globals.css
const rainCss = `
@keyframes hero-fall {
  from { transform: translateY(0); }
  to   { transform: translateY(calc(100cqh + 80px)); }
}
.hero-drop {
  animation-name: hero-fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}
`;

export default function Hero() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden bg-black px-6 pb-20 pt-16 text-center text-white sm:pt-20"
      >
        <style dangerouslySetInnerHTML={{ __html: rainCss }} />

        {/* falling streaks */}
        <div
          className="pointer-events-none absolute inset-0 [container-type:size]"
          aria-hidden="true"
        >
          {drops.map((d, i) => (
            <span
              key={i}
              className="hero-drop absolute -top-20 block w-[3px] blur-[0.5px]"
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

        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Show Up Prepared. Every <br/> Time.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
            MingoolAI is the AI Chief of Staff that never sleeps — it reads your
            inbox, sits in on your calls, and hands you a clear brief every
            morning so nothing catches you off guard.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="rounded-lg bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
            >
              Try Free for 7 Days
            </button>

            <a
              href="#install"
              className="rounded-lg bg-gradient-to-r from-violet-600 via-blue-500 to-teal-200 px-6 py-3 font-semibold text-white transition hover:brightness-110"
            >
              ✧ Install Amy
            </a>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            $9.99/month · 7-day free trial · Join 100+ beta founders
          </p>
        </div>
      </motion.section>

      <section>
        <Image
          src="/hero-image.webp"
          alt="Hero Image for medium to large screens"
          width={1036}
          height={646}
          className="mx-auto hidden md:block"
        />
        <Image
          src="/mobile-hero-image.webp"
          alt="Hero Image for small screens"
          width={1036}
          height={646}
          className="mx-auto block md:hidden"
        />
      </section>
    </>
  );
}
