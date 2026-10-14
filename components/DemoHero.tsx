"use client";
import { motion } from "motion/react";
import { useState } from "react";

type Drop = {
  left: string;
  height: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
};

// fixed values (not Math.random) so server and client render identical HTML
const drops: Drop[] = [
  {
    left: "7%",
    height: 24,
    duration: 10,
    delay: -3,
    opacity: 0.6,
    color: "#ffffff",
  },
  {
    left: "9%",
    height: 28,
    duration: 12,
    delay: -8,
    opacity: 0.5,
    color: "#c4b5fd",
  },
  {
    left: "17%",
    height: 20,
    duration: 14,
    delay: -5,
    opacity: 0.4,
    color: "#ffffff",
  },
  {
    left: "26%",
    height: 36,
    duration: 11,
    delay: -1,
    opacity: 0.55,
    color: "#a78bfa",
  },
  {
    left: "36%",
    height: 26,
    duration: 13,
    delay: -9,
    opacity: 0.45,
    color: "#ddd6fe",
  },
  {
    left: "47%",
    height: 32,
    duration: 10,
    delay: -6,
    opacity: 0.6,
    color: "#ffffff",
  },
  {
    left: "53%",
    height: 22,
    duration: 15,
    delay: -11,
    opacity: 0.4,
    color: "#c4b5fd",
  },
  {
    left: "62%",
    height: 40,
    duration: 12,
    delay: -4,
    opacity: 0.55,
    color: "#ddd6fe",
  },
  {
    left: "71%",
    height: 24,
    duration: 9,
    delay: -2,
    opacity: 0.5,
    color: "#ffffff",
  },
  {
    left: "79%",
    height: 30,
    duration: 14,
    delay: -7,
    opacity: 0.5,
    color: "#a78bfa",
  },
  {
    left: "87%",
    height: 44,
    duration: 11,
    delay: -10,
    opacity: 0.65,
    color: "#ffffff",
  },
  {
    left: "93%",
    height: 26,
    duration: 13,
    delay: -5,
    opacity: 0.45,
    color: "#c4b5fd",
  },
];

const rainCss = `
@keyframes demo-fall {
  from { transform: translateY(0); }
  to   { transform: translateY(calc(100cqh + 80px)); }
}
.demo-drop {
  animation-name: demo-fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}
`;

const bullets = [
  {
    bold: "See how it works.",
    text: "Explore what MingoolAI can do as your AI Chief of Staff.",
  },
  {
    bold: "Get real answers.",
    text: "No fluff, just straight answers on fit, pricing, and features.",
  },
  {
    bold: "Decide with confidence.",
    text: "Leave with a clear yes or no. Zero pressure either way.",
  },
];

// placeholder slots copied from the design, replace with real data later
const slots = [
  { day: "Mon", date: 12, time: "10:00am" },
  { day: "Tue", date: 13, time: "11:00am" },
  { day: "Wed", date: 14, time: "2:00pm" },
  { day: "Thu", date: 15, time: "3:00pm" },
  { day: "Fri", date: 16, time: "4:00pm" },
];

function CheckCircle() {
  return (
    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c46ff]">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#7c46ff]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-[#7c46ff]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

function BookingCard() {
  const [selected, setSelected] = useState(2); // Wed by default

  return (
    <div className="relative w-full max-w-[560px]">
      {/* soft purple glow behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4c1d95]/25 blur-[110px]"
      />

      <div className="rounded-3xl border border-[#262626] bg-[#0d0d10] p-6 sm:p-8">
        {/* header */}
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#7c46ff]/15">
            <CalendarIcon />
          </span>
          <div>
            <p className="text-lg font-semibold text-white">Book a demo</p>
            <p className="mt-1 text-sm text-[#6b6b75]">
              With the MingoolAI team
            </p>
          </div>
        </div>

        {/* days */}
        <div className="mt-9 grid grid-cols-5 gap-3">
          {slots.map((s, i) => {
            const active = selected === i;
            return (
              <div key={s.day} className="flex flex-col items-center gap-3">
                <span className="text-sm font-semibold text-[#55555f]">
                  {s.day}
                </span>
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-pressed={active}
                  className={`flex h-20 w-full flex-col items-center justify-center rounded-xl border transition ${
                    active
                      ? "border-[#7c46ff] bg-[#7c46ff] text-white"
                      : "border-[#2a2a30] bg-transparent text-[#a3a3ad] hover:border-[#3d3d45]"
                  }`}
                >
                  <span className="text-xl font-bold leading-none">
                    {s.date}
                  </span>
                  <span className="mt-2 text-[11px] leading-none opacity-80">
                    {s.time}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <hr className="mt-8 border-[#1f1f25]" />

        {/* footer */}
        <div className="mt-5 flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-[#6b6b75]">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Free &amp; quick
          </span>
          <span className="font-medium text-[#8b5cf6]">Pick a slot &rarr;</span>
        </div>
      </div>

      {/* floating badge */}
      <span className="absolute -bottom-5 -right-3 rounded-2xl bg-[#7c46ff] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#7c46ff]/20 sm:-right-6">
        No sales pressure
      </span>
    </div>
  );
}

export default function DemoHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden bg-black px-6 lg:mx-16 pb-24 pt-28 lg:my-[-100px] text-white md:px-10 md:pt-32 lg:px-16 lg:pb-32"
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
            className="demo-drop absolute -top-20 block w-[3px]"
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

      <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* left */}
        <div>
          <span className="inline-block rounded-full border border-white px-5 py-1.5 text-base font-semibold">
            20 min · Zero obligation
          </span>

          {/* Small screens */}
          <h1 className="mt-8 text-3xl font-bold leading-tight tracking-tight sm:hidden">
            Not sure if MingoolAI is right for you?
          </h1>

          {/* Large screens */}
          <h1 className="mt-8 hidden font-bold leading-[1.08] tracking-tight sm:block sm:text-4xl lg:text-7xl">
            Not sure if
            <br />
            MingoolAI
            <br />
            is right for you?
          </h1>

          <ul className="mt-12 max-w-[600px] space-y-6">
            {bullets.map((b) => (
              <li
                key={b.bold}
                className="flex gap-4 text-lg leading-8 text-[#c4c4cc]"
              >
                <CheckCircle />
                <span>
                  <strong className="font-semibold text-white">{b.bold}</strong>{" "}
                  {b.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a
              href="#book"
              className="rounded-full bg-[#7c46ff] px-10 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_-6px_rgba(124,70,255,0.6)] transition hover:bg-[#8d5cff]"
            >
              Book a demo
            </a>
            <span className="flex items-center gap-2 text-base font-medium text-[#8b8b95]">
              <ClockIcon /> 20 min
            </span>
            <span className="flex items-center gap-2 text-base font-medium text-[#8b8b95]">
              <ClockIcon /> Free &amp; quick
            </span>
          </div>
        </div>

        {/* right */}
        <div className="flex justify-center lg:justify-end">
          <BookingCard />
        </div>
      </div>
    </motion.section>
  );
}
