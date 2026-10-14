"use client";
import { motion } from "motion/react";

export default function AnotherCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.15 }}
      id="cta"
      className="relative mx-auto my-40 flex h-[50vh] w-full flex-col items-center justify-center gap-5 text-center text-white lg:h-[70vh]"
    >
      {/* background image + black fade at top and bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[linear-gradient(to_bottom,rgb(0,0,0)_0%,rgba(0,0,0,0.4)_10%,rgb(0,0,0)_100%),url('/cta-bg.png')]"
      />

      {/* text */}
      <div className="z-10 flex w-full max-w-[620px] flex-col gap-2 p-5 md:w-3/5 lg:p-0">
        <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[64px]">
          Wake up knowing exactly what matters.
        </h2>
        <p className="leading-6 text-[#9a9aa5]">
          Join 100+ founders already using MingoolAI to run leaner and move
          faster.
        </p>
      </div>

      {/* button */}
      <a
        href="https://app.mingoolai.com/login"
        className="z-10 inline-flex h-12 items-center justify-center rounded-md bg-[#7c46ff] px-8 text-sm font-semibold text-white transition-all hover:bg-[#7c46ff]/90"
      >
        Start Your 7-Day Free Trial
      </a>
    </motion.section>
  );
}
