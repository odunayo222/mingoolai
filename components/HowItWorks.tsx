"use client";
import { motion } from "motion/react";
import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Connect & sleep",
    description:
      "MingoolAI reads your emails overnight, learning what matters to your business.",
    image: "/step1.png",
    alt: "Phone showing an email integration screen",
    layout: "first",
  },
  {
    number: "2",
    title: "MingoolAI Analyzes",
    description:
      "AI identifies urgent emails, important people, and buried opportunities. Organizes by business value, not arrival time.",
    image: "/step2.png",
    alt: "Email, calendar, and task icons surrounded by a glowing orbit",
    layout: "second",
  },
  {
    number: "3",
    title: "Clarity by Morning",
    description:
      "Your morning brief shows top priorities and urgent requests. Check it in 5 minutes, not 2 hours.",
    image: "/step3.png",
    alt: "Phone displaying a morning briefing",
    layout: "third",
  },
];

function BotIcon() {
  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white sm:h-12 sm:w-12"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 sm:h-7 sm:w-7"
      >
        <rect x="4" y="8" width="16" height="12" rx="3" />
        <path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 12v4M22 12v4" />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.15 }}
      id="how-it-works"
      className="w-full border-t border-white/10 bg-black px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <span className="inline-flex rounded-full border border-white/70 px-4 py-1.5 text-sm font-semibold">
          How It Works
        </span>

        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Set it up once. MingoolAI works while you sleep.
        </h2>

        <p className="mt-4 max-w-4xl text-sm leading-6 text-neutral-400 sm:text-base">
          Connect your Gmail and Calendar. MingoolAI analyzes everything
          overnight and delivers your morning brief by 7 AM. No maintenance
          required.
        </p>

        {/* Steps grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {steps.map((step) => (
            <article
              key={step.number}
              className={`relative isolate overflow-hidden rounded-2xl border border-white/5 bg-[#1c1c1c] p-6 sm:p-8 ${
                step.layout === "third"
                  ? "min-h-[380px] md:col-span-2 md:min-h-[400px]"
                  : "min-h-[350px] sm:min-h-[380px]"
              }`}
            >
              {/* Large faded step number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-10 z-0 text-6xl font-medium leading-none text-white/15 sm:right-8 sm:text-7xl"
              >
                {step.number}
              </span>

              {/* Text content */}
              <div
                className={`relative z-10 ${
                  step.layout === "second"
                    ? "max-w-[68%] sm:max-w-[65%]"
                    : "max-w-[62%] sm:max-w-[58%]"
                }`}
              >
                <h3 className="text-lg font-bold leading-snug sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
                  {step.description}
                </p>
              </div>

              {/* Illustration area */}
              <div
                className={`pointer-events-none absolute z-0 ${
                  step.layout === "first"
                    ? "bottom-0 left-[16%] h-[65%] w-[65%]"
                    : step.layout === "second"
                      ? "bottom-[5%] left-[8%] h-[55%] w-[84%]"
                      : "bottom-0 right-[3%] h-[85%] w-[52%]"
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes={
                    step.layout === "third"
                      ? "(max-width: 767px) 80vw, 45vw"
                      : "(max-width: 767px) 85vw, 40vw"
                  }
                  className="object-contain object-bottom"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Productivity tool integrations */}
      <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:mt-12">
        <p className="text-center text-sm text-white sm:text-base">
          Integrates with your productivity tools
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-10">
          <Image
            src="https://www.mingoolai.com/_next/static/media/logos_google-gmail.15393433.svg"
            alt="Gmail"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />

          <Image
            src="/logos_google-meet.webp"
            alt="Google Meet"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />

          <Image
            src="/logos_google-calendar.webp"
            alt="Google Calendar"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />

          <Image
            src="/logos_google-drive.webp"
            alt="Google Drive"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />

          <Image
            src="/skill-icons_instagram.webp"
            alt="Instagram"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />

          <Image
            src="/logos_whatsapp-icon.webp"
            alt="WhatsApp"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        </div>
      </div>
    </motion.section>
  );
}

