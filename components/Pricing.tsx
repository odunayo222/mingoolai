"use client";
import { motion } from "motion/react";
import { useState } from "react";

type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  tagline: string;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "STANDARD",
    monthly: 9.99,
    yearly: 95.88,
    tagline: "AI copilot for solo builders and developers.",
    popular: true,
    features: [
      "Gmail labeling system (auto-organize by importance)",
      "Daily morning brief with top priorities",
      "AI Chat - ask MingoolAI anything",
      "1 connected email account",
    ],
  },
  {
    name: "PRO",
    monthly: 20,
    yearly: 192,
    tagline: "AI copilot for professionals.",
    features: [
      "Everything in Standard, plus:",
      "Smarter daily briefing with deeper context",
      "More powerful AI Chat",
      "Connect multiple email accounts",
      "Priority support",
      "Browser Extension with productivity tracking & nudges",
    ],
  },
];

function CheckBox() {
  return (
    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] border-2 border-[#8c8c8c] bg-[#2a2a2a]">
      <svg
        viewBox="0 0 24 24"
        className="h-3 w-3 text-[#c4c4c4]"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label="Bill yearly"
        onClick={onChange}
        className={`relative h-6 w-[38px] rounded-full border-2 transition-colors ${
          checked
            ? "border-[#7c46ff] bg-[#7c46ff]/30"
            : "border-[#3a3a3a] bg-[#262626]"
        }`}
      >
        <span
          className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 transition-all ${
            checked
              ? "left-[16px] border-white bg-[#7c46ff]"
              : "left-[2px] border-[#5a5a5a] bg-[#1c1c1c]"
          }`}
        />
      </button>
      <span className="text-[15px] text-[#a3a3a3]">Bill yearly</span>
    </div>
  );
}

function CornerShape() {
  return (
    <svg
      viewBox="0 0 140 120"
      className="pointer-events-none absolute right-0 top-0 h-[120px] w-[140px] overflow-visible text-[#262626]"
      aria-hidden="true"
    >
      <rect
        x="30"
        y="-40"
        width="140"
        height="140"
        rx="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
        transform="rotate(-12 100 30)"
      />
      <circle cx="75" cy="30" r="15" fill="currentColor" />
      <circle cx="127" cy="17" r="14" fill="currentColor" />
    </svg>
  );
}

function PricingCard({
  plan,
  active,
  onSelect,
}: {
  plan: Plan;
  active: boolean;
  onSelect: () => void;
}) {
  // each card owns its own billing toggle, so they never affect each other
  const [yearly, setYearly] = useState(false);

  const price = yearly ? plan.yearly : plan.monthly;
  const period = yearly ? "/year" : "/month";
  const formattedPrice = Number.isInteger(price)
    ? price.toString()
    : price.toFixed(2);

  return (
    <div
      onClick={onSelect}
      className={`relative cursor-pointer overflow-hidden rounded-3xl border bg-[#1c1c1c] p-6 transition-colors ${
        active ? "border-[#6a45e8]" : "border-[#2a2a2a] hover:border-[#3a3a3a]"
      }`}
    >
      <CornerShape />

      <div className="relative flex items-center justify-between">
        <h3 className="text-[17px] font-semibold tracking-wide">{plan.name}</h3>
        {plan.popular && (
          <span className="rounded-full bg-[#0b5fc4] px-3 py-1 text-[11px] font-semibold leading-none">
            Popular
          </span>
        )}
      </div>

      <p className="relative mt-3 text-[40px] font-medium leading-none">
        ${formattedPrice}
        <span className="ml-0.5 text-base font-normal">{period}</span>
      </p>

      <p className="relative mt-4 text-sm text-[#a3a3a3]">{plan.tagline}</p>

      <div className="relative mt-5">
        <Toggle checked={yearly} onChange={() => setYearly((v) => !v)} />
      </div>

      <hr className="relative my-5 border-[#2a2a2a]" />

      <button
        className={`relative mt-6 w-full rounded-md py-[11px] text-[15px] font-semibold transition ${
          active
            ? "bg-[#7c46ff] text-white hover:bg-[#8d5cff]"
            : "border border-[#3a3a3a] bg-[#1c1c1c] text-white hover:bg-[#262626]"
        }`}
      >
        Get Started
      </button>

      <ul className="relative mt-6 space-y-[14px]">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-[15px] text-[#a8a8a8]"
          >
            <CheckBox />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  // only one card is active at a time (Standard by default)
  const [activePlan, setActivePlan] = useState<string>("STANDARD");

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.15 }}
      id="pricing"
      className={`bg-black px-4 text-white ${showHeader ? "py-20" : "pb-20 pt-0"}`}
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        {showHeader && (
          <>
            <span className="rounded-full border border-white px-4 py-1 text-[15px] font-semibold">
              Pricing
            </span>

            <h2 className="mt-8 text-3xl font-semibold tracking-tight md:text-[40px] md:leading-tight">
              Plans that work around you
            </h2>

            <p className="mt-5 max-w-[260px] text-sm leading-relaxed text-[#a3a3a3]">
              Starting at $9.99/month. No hidden fees, no upgrades required.
            </p>
          </>
        )}

        <div
          className={`grid w-full gap-5 text-left md:grid-cols-2 ${
            showHeader ? "mt-12" : "mt-0"
          }`}
        >
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              active={activePlan === plan.name}
              onSelect={() => setActivePlan(plan.name)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
