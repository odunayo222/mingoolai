"use client";
import { motion } from "motion/react";
import Image from "next/image";

const features = [
  {
    title: "Your morning brief — generated overnight",
    description:
      "Wake up to a daily summary in your inbox. MingoolAI analyzes everything while you sleep and sends you insights: investor follow-ups that need replies, urgent customer questions, partnership inquiries, and what can actually wait.",
  },
  {
    title: "Your inbox doesn't understand context. MingoolAI does.",
    description:
      "Your inbox can't tell a cold pitch from a warm investor intro. MingoolAI flags urgent requests from key people, highlights emails that could cost you money, and filters out noise.",
  },
  {
    title: "Ask your inbox anything. Get instant answers.",
    description:
      '"Did that investor follow up?" "What did the customer say about pricing?" Ask MingoolAI instead of searching hundreds of emails. It knows your entire inbox.',
  },
  {
    title: "One place for everything",
    description:
      "Stop switching between Gmail, Calendar, Drive, and Slack. MingoolAI brings conversations, files, and context into one place.",
  },
  {
    title: "Meet Amy — your ambient meeting layer",
    description:
      "Amy joins your calls across Meet, Zoom, and Teams meetings, catches what matters, and turns it into tasks inside MingoolAI. Not just notes but context that acts.",
  }
];

function BotIcon() {
  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="4" y="8" width="16" height="12" rx="3" />
        <path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 12v4M22 12v4" />
      </svg>
    </div>
  );
}

export default function Features() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.15 }}
      id="features"
      className="w-full bg-black px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-14 lg:gap-16">
        {/* Left column */}
        <div className="flex min-w-0 flex-col items-start">
          <span className="rounded-full border border-white/70 px-3 py-1.5 text-sm font-semibold">
            Features
          </span>

          <h2 className="mt-4 max-w-md text-[clamp(2rem,3.5vw,2.35rem)] font-bold leading-[1.12] tracking-tight">
            Smart Features that work
          </h2>

          <div className="relative mt-5 w-full max-w-md">
            <Image
              src="/features.webp"
              alt="Hands holding a phone displaying an inbox"
              width={600}
              height={650}
              className="h-auto w-full object-contain"
              sizes="(max-width: 767px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex min-w-0 flex-col">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`flex items-start gap-4 py-5 first:pt-0 ${
                index !== features.length - 1 ? "border-b border-white/15" : ""
              }`}
            >
              <BotIcon />

              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold leading-snug tracking-tight sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-[1.7] text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

