// components/AnnouncementBar.tsx
"use client";

import { useEffect, useRef, useState } from "react";

function SparklesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
      <path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7L19 15z" />
      <path d="M5 16l.5 1.2 1.2.5-1.2.5L5 19.4l-.5-1.2-1.2-.5 1.2-.5L5 16z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

// keeps the (sticky) navbar sitting just below the fixed banner
const css = `
nav.sticky {
  top: var(--announcement-h, 0px) !important;
}
`;

function BarContent({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative w-full border-b border-white/10 bg-[#24104f] sm:bg-gradient-to-r sm:from-[#2a1259] sm:via-[#10142b] sm:to-[#1b3a34]">
      {/* ---------- small screens ---------- */}
      <div className="px-3 py-3 sm:hidden">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#4a2fb8]">
            <SparklesIcon />
          </span>

          <p className="flex-1 text-sm font-semibold leading-tight text-white">
            Meet Amy, your new Meeting Assistant!
          </p>

          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss announcement"
            className="shrink-0 rounded-md p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <CloseIcon />
          </button>
        </div>

        <a
          href="#install"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-[#7c46ff] py-2.5 text-sm font-semibold text-white transition hover:bg-[#8d5cff]"
        >
          Add to Chrome
          <DownloadIcon />
        </a>
      </div>

      {/* ---------- sm and up ---------- */}
      <div className="hidden sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-14 py-3 text-center">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#4a2fb8]">
            <SparklesIcon />
          </span>

          <p className="text-sm font-semibold text-white">
            Introducing MingoolAI Amy: Automatically capture insights and
            decisions from meetings.
          </p>

          <a
            href="#install"
            className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold text-[#7ee8b0] transition hover:text-[#a6f5cb]"
          >
            Add to Chrome
            <DownloadIcon />
          </a>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss announcement"
          className="absolute right-6 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  const barRef = useRef<HTMLDivElement>(null);

  // publish the banner's height so the navbar can sit right below it
  useEffect(() => {
    const root = document.documentElement;

    if (!open || !barRef.current) {
      root.style.setProperty("--announcement-h", "0px");
      return;
    }

    const el = barRef.current;
    const setHeight = () =>
      root.style.setProperty("--announcement-h", `${el.offsetHeight}px`);

    setHeight();
    const ro = new ResizeObserver(setHeight);
    ro.observe(el);

    return () => {
      ro.disconnect();
      root.style.setProperty("--announcement-h", "0px");
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* invisible copy: reserves the banner's height in the page flow */}
      <div aria-hidden="true" className="invisible pointer-events-none">
        <BarContent onClose={() => {}} />
      </div>

      {/* the real banner: fixed to the top of the screen */}
      <div
        ref={barRef}
        role="region"
        aria-label="Announcement"
        className="fixed inset-x-0 top-0 z-50"
      >
        <BarContent onClose={() => setOpen(false)} />
      </div>
    </>
  );
}
