"use client";

import { motion } from "motion/react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Amy", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Waitlist", href: "#" },
];

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "FAQ", href: "#faq" },
  { label: "Cookie Policy", href: "#" },
];

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7M15 13a2 2 0 0 1 4 0v4" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

// simple robot-head logo, swap this for your real logo file if you have one
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="16" cy="4" r="1.5" />
        <path d="M16 5.5V9" />
        <rect x="4" y="9" width="24" height="18" rx="6" />
        <circle cx="12" cy="17" r="2" fill="currentColor" />
        <circle cx="20" cy="17" r="2" fill="currentColor" />
        <path d="M13 22.5h6" />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-white">
        MingoolAI
      </span>
    </div>
  );
}

const socials = [
  { label: "X", href: "#", Icon: XIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
];

function LinkColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-base text-[#cbd5e1] transition hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.15 }}
    >
    <footer className="bg-black px-6 pb-8 pt-24 text-white">
      <div className="mx-auto max-w-[945px]">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* brand */}
          <div>
            <Logo />
            <p className="mt-5 text-base text-[#8fa3bf]">
              Your AI chief of staff.
            </p>

            <div className="mt-5 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1e293b] text-[#e2e8f0] transition hover:bg-[#2a3a52]"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <a
              href="mailto:hello@mingoolai.com"
              className="mt-6 flex items-center gap-2 text-sm text-[#e2e8f0] hover:text-white"
            >
              <MailIcon />
              hello@mingoolai.com
            </a>
            <p className="mt-5 flex items-center gap-2 text-sm text-[#e2e8f0]">
              <PinIcon />
              Beachwood, Ohio, USA
            </p>
          </div>

          {/* link columns */}
          <div className="flex gap-12 md:gap-[38px]">
            <LinkColumn title="Links" items={links} />
            <LinkColumn title="Help & Legal" items={legal} />
          </div>
        </div>

        <div className="mt-14 border-t border-[#1f2430] pt-8 text-center text-sm text-[#8b95a7]">
          &copy; 2026 MingoolAI, Inc. All rights reserved.
        </div>
      </div>
    </footer>
    </motion.section>
  );
}
