// components/CallSteps.tsx
"use client";

import { motion } from "motion/react";
import { useState } from "react";

const audiences = [
  "Solo Founders",
  "Indie Hackers",
  "Startup Teams",
  "Consultants",
];

const steps = [
  {
    title: "See how it works.",
    text: "Walk through MingoolAI with us — your morning brief, Gmail labeling, AI Chat, and the roadmap ahead. We'll show you what it looks like inside a real workflow.",
  },
  {
    title: "Get your questions answered.",
    text: "Bring your toughest questions on pricing, features, and fit. We give straight answers — no vague promises, no runaround.",
  },
  {
    title: "Walk away with clarity.",
    text: "By the end, you'll know if MingoolAI fits how you work. And if it doesn't, we'll tell you that too.",
  },
];

function BoltIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#c2410c]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

export default function CallSteps() {
  // middle card is highlighted by default, hovering or tapping another moves it
  const [active, setActive] = useState(1);

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      viewport={{ once: false, amount: 0.15 }}
      id="the-call"
      className="bg-black px-6 pb-28 pt-12 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        {/* built for strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-y border-[#1a1a1a] py-6 text-base font-semibold">
          <span className="text-[#5a5a63]">Built for</span>
          {audiences.map((a) => (
            <span key={a} className="text-[#d4d4d8]">
              {a}
            </span>
          ))}
        </div>

        {/* heading */}
        <div className="mt-16 flex flex-col items-center text-center">
          <span className="inline-block rounded-full border border-white px-5 py-1.5 text-base font-semibold">
            The call
          </span>
          <h2 className="mt-7 text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl">
            What happens on the call
          </h2>
          <p className="mt-6 text-lg text-[#6b6b75]">
            20 minutes. Real answers. Zero obligation.
          </p>
        </div>

        {/* cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-2xl border bg-[#0b0b0d] p-8 transition-colors duration-300 md:p-10 ${
                active === i
                  ? "border-[#4c2fb3] bg-[#0d0b16]"
                  : "border-[#1f1f23] hover:border-[#2b2b30]"
              }`}
            >
              <p
                className={`text-3xl transition-colors duration-300 ${
                  active === i ? "text-[#5b3fd0]" : "text-[#3d2f78]"
                }`}
              >
                {i + 1}.
              </p>
              <h3 className="mt-5 text-xl font-bold text-white md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-5 text-base font-medium leading-8 text-[#6b6b75]">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center">
          <a
            href="#book"
            className="rounded-full bg-[#7c46ff] px-12 py-4 text-lg font-semibold text-white shadow-[0_12px_36px_-6px_rgba(124,70,255,0.65)] transition hover:bg-[#8d5cff]"
          >
            Book your free demo
          </a>
          <p className="mt-7 flex items-center gap-2 text-sm font-medium text-[#6b6b75]">
            <BoltIcon />
            20 min · Pick any open slot
          </p>
        </div>
      </div>
    </motion.section>
  );
}
