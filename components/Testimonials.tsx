// components/Testimonials.tsx
"use client";
import { motion } from "motion/react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

// NOTE: only Priya and Michael come from your screenshot. The rest are
// placeholders, so replace them with your real testimonials.
const rowOne: Testimonial[] = [
  {
    name: "Aisha Bello",
    role: "Founder, Launchpad",
    quote:
      "I used to lose an hour every morning just figuring out what mattered. Now I get it in 10 minutes. Game changer.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, DataFlow AI",
    quote:
      "It's not another inbox tool. It's the first one that actually understands my business context.",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, Buildr",
    quote:
      "No more Sunday night panic scrolling through hundreds of emails. I actually know what I missed now.",
  },
  {
    name: "Daniel Okafor",
    role: "Founder, Stackly",
    quote:
      "The morning brief alone is worth it. I start every day knowing exactly what to tackle first.",
  },
];

const rowTwo: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Solo Founder, Notely",
    quote:
      "Labeling by importance finally means something. My inbox went from chaos to a short list I trust.",
  },
  {
    name: "James Whitfield",
    role: "Indie Hacker",
    quote:
      "I ask it things like 'what did the investor say last week?' and it just knows. Feels like an assistant.",
  },
  {
    name: "Tolu Adeyemi",
    role: "Founder, Paylite",
    quote:
      "Setup took two minutes and it was useful on day one. That almost never happens with new tools.",
  },
  {
    name: "Elena Petrova",
    role: "CEO, Orbit Labs",
    quote:
      "It nudges me when something important is slipping. I've stopped missing follow-ups completely.",
  },
];

// keyframes live here so the marquee doesn't depend on globals.css
const marqueeCss = `
@keyframes mg-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.mg-track {
  animation: mg-scroll 70s linear infinite;
  will-change: transform;
}
.mg-track-reverse {
  animation: mg-scroll 80s linear infinite reverse;
  will-change: transform;
}
.mg-row:hover .mg-track,
.mg-row:hover .mg-track-reverse {
  animation-play-state: paused;
}
`;

function Stars() {
  return (
    <div className="mt-4 flex gap-1.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-3 w-3 text-[#8c8c8c]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="mr-3.5 flex h-[252px] w-[320px] shrink-0 flex-col justify-center rounded-[28px] border border-[#2a2a2a] bg-[#1c1c1c] p-8 sm:w-[400px] md:w-[452px]">
      <h3 className="text-2xl font-semibold tracking-tight text-white">
        {t.name}
      </h3>
      <p className="mt-1.5 text-[15px] text-[#8c8c8c]">{t.role}</p>
      <blockquote className="mt-6 text-sm leading-relaxed text-white">
        {t.quote}
      </blockquote>
      <Stars />
    </figure>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Testimonial[];
  reverse?: boolean;
}) {
  return (
    <div className="mg-row overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex w-max ${reverse ? "mg-track-reverse" : "mg-track"}`}
      >
        {/* two copies so the loop is seamless (it moves by exactly 50%) */}
        {items.map((t) => (
          <Card key={`a-${t.name}`} t={t} />
        ))}
        {items.map((t) => (
          <div key={`b-${t.name}`} aria-hidden="true">
            <Card t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.15 }}
      id="testimonials"
      className="overflow-hidden bg-black py-20 text-white"
    >
      <style dangerouslySetInnerHTML={{ __html: marqueeCss }} />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="inline-block rounded-full border border-white px-3.5 py-1 text-[15px] font-semibold">
          Testimonials
        </span>
        <h2 className="mt-8 text-4xl font-bold leading-[1.15] tracking-tight md:text-[40px]">
          Trusted by 100+ founders in private beta
        </h2>
        <p className="mt-6 text-base text-[#a3a3a3]">
          We&apos;ve been testing with solo founders since November 2025.
          Here&apos;s what they&apos;re saying.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-3.5">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </div>
    </motion.section>
  );
}
