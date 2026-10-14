"use client";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      viewport={{ once: false, amount: 0.15 }}
      className="border-t border-white/10 bg-black px-5 py-10 sm:px-8 sm:py-12"
    >
      <div className="relative mx-auto flex min-h-[340px] max-w-6xl items-end justify-between gap-8 overflow-hidden rounded-[26px] bg-[#783BFF] px-8 py-12 text-white sm:min-h-[390px] sm:px-12 sm:py-16 lg:px-20">
        {/* Decorative robot illustration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 top-[-25px] h-56 w-80 rotate-[-14deg] rounded-[60px] border-[22px] border-white/10 sm:right-[15%] sm:top-[-45px] sm:h-64 sm:w-80 lg:right-[18%]"
        >
          <div className="absolute left-[20%] top-[35%] h-12 w-12 rounded-full bg-white/10 sm:h-14 sm:w-14" />
          <div className="absolute right-[20%] top-[35%] h-12 w-12 rounded-full bg-white/10 sm:h-14 sm:w-14" />
        </div>

        {/* Text content */}
        <div className="relative z-10 max-w-lg">
          <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Ready to start your day
            <br className="hidden sm:block" /> with clarity?
          </h2>

          <p className="mt-3 max-w-md text-sm font-medium leading-6 text-white/95 sm:text-base">
            MingoolAI reads your emails and calendar overnight so you wake up
            with clarity, priorities, and a plan for the day.
          </p>
        </div>

        {/* CTA button */}
        <a
          href="#get-started"
          className="relative z-10 shrink-0 rounded-md bg-white px-7 py-4 text-sm font-semibold text-[#783BFF] transition-colors hover:bg-neutral-100"
        >
          Get started
        </a>
      </div>
    </motion.section>
  );
}

