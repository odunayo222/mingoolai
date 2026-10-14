"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book a Demo", href: "/book-a-demo" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <AnnouncementBar />
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 py-6 backdrop-blur-md px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" aria-label="Mingool AI home">
            <Image
              src="/logo-white.webp"
              alt="MingoolAI Logo"
              width={111}
              height={32}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#amy"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-2 text-sm text-white transition hover:bg-white/10"
            >
              Amy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
            </a>

            <a
              href="#get-started"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/80"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] transition-transform duration-300 ease-in-out motion-reduce:transition-none lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        <div className="flex h-full w-full flex-col overflow-y-auto bg-[#0b0b0b] px-6 py-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <Link href="/" onClick={closeMenu} aria-label="Mingool AI home">
              <Image
                src="/logo-white.webp"
                alt="MingoolAI Logo"
                width={111}
                height={32}
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              className="rounded-lg p-2 text-white transition hover:bg-white/10"
              aria-label="Close navigation menu"
              tabIndex={isOpen ? 0 : -1}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-1 flex-col gap-3 pt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                className="rounded-lg px-3 py-4 text-lg text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
            <a
              href="#amy"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-4 py-3 text-center text-white transition hover:bg-white/10"
            >
              Amy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
            </a>

            <a
              href="#get-started"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="rounded-lg bg-violet-600 px-4 py-3 text-center font-medium text-white transition hover:bg-white/80"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
