"use client";
import { motion } from "motion/react";
import Image from "next/image";
export default function AboutSection() {
  return (
    <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ once: false , amount: 0.15 }} 
      id="about" className="mx-auto max-w-4xl px-6 py-30 text-white">
      <h2 className="mb-6 text-2xl font-bold leading-tight md:text-4xl">
        Built for founders who can&apos;t afford to miss things.
      </h2>

      <div className="space-y-5 text-base leading-8 text-white/70 md:text-lg">
        <p>
          Your inbox is where deals happen, investors respond, and customers
          reach out. But your inbox treats everything the same, burying
          partnership inquiries in Promotions and investor follow-ups in Spam.
        </p>

        <p>
          MingoolAI is your AI Chief of Staff. It works overnight, analyzing
          your emails and calendar to surface what actually moves your business
          forward. You wake up to a clear morning brief with top priorities,
          urgent messages, and meeting context. Not 200 unread emails.
        </p>

        <p>No more Sunday night panic wondering what you missed.</p>
      </div>

      <Image 
        src="/about-image.webp"
        alt="About MingoolAI"
        width={1200}
        height={1600}
        className="mx-auto mt-10 rounded-lg shadow-lg"
      />
    </motion.section>
  );
}
