// components/Faq.tsx
"use client";

import { motion } from "motion/react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is MingoolAI?",
    answer:
      "MingoolAI is an AI copilot that helps founders and small teams with meeting summaries, reminders, and productivity automation.",
  },
  {
    question: "How do I sign up?",
    answer: "You can sign up with your Google account directly on our site.",
  },
  {
    question: "Can MingoolAI join my meetings?",
    answer:
      "Yes — MingoolAI can summarise meetings and create action items, but you control what it has access to.",
  },
  {
    question: "What integrations are supported?",
    answer:
      "Currently, Google Calendar and Gmail are supported (with more coming soon).",
  },
  {
    question: "Is my data private?",
    answer:
      "Absolutely. We encrypt and securely store your data. You're always in control of what MingoolAI can access",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel anytime via your account settings. Your access will remain active until the end of your billing cycle.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 shrink-0 text-white transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* points up when closed (as in the design), flips when open */}
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function FaqRow({
  item,
  open,
  onToggle,
  id,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="mt-8 first:mt-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-button`}
        className="flex min-h-8 w-full items-center justify-between gap-4 bg-[#08090d] text-left"
      >
        <span className="text-lg font-semibold tracking-tight md:text-[22px]">
          {item.question}
        </span>
        <Chevron open={open} />
      </button>

      {/* smooth height animation without measuring */}
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-4 text-[15px] leading-relaxed text-[#a3a3a3]">
            {item.answer}
          </p>
        </div>
      </div>

      {/* divider that fades out toward the right */}
      <div className="mt-8 h-px w-[92%] bg-gradient-to-r from-[#2a2a2a] to-transparent" />
    </div>
  );
}

export default function Faq() {
  // one open at a time; set to null so all start closed like the design
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.15 }}
      id="faq"
      className="bg-black px-6 py-20 text-white md:px-11"
    >
      <div className="mx-auto grid max-w-[1130px] gap-10 md:grid-cols-[2fr_3fr] md:gap-8">
        {/* left */}
        <div>
          <span className="inline-block rounded-full border border-white px-3.5 py-1 text-[15px] font-semibold">
            Frequently Asked Questions
          </span>
          <h2 className="mt-8 max-w-[380px] text-2xl font-bold leading-[1.15] tracking-tight md:text-[40px]">
            Questions? We&apos;ve Got Answers.
          </h2>
        </div>

        {/* right */}
        <div>
          {faqs.map((item, i) => (
            <FaqRow
              key={item.question}
              id={`faq-${i}`}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
