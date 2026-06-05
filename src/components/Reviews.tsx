"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const reviews = [
  {
    name: "Marcus T.",
    type: "Corporate Client",
    review:
      "Professional, quiet, and smooth from pickup to arrival. Exactly what I needed.",
  },
  {
    name: "Alyssa R.",
    type: "Airport Transfer",
    review:
      "Clean vehicle, easy pickup, and a calm ride after a long flight.",
  },
  {
    name: "Daniel K.",
    type: "Private Event",
    review:
      "The service felt premium without being overdone. Everything was handled perfectly.",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeReview = reviews[activeIndex];

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#08090b] px-4 py-20 text-white md:px-8 md:py-24"
    >
      {/* Divider lines like Trusted Transportation */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8c7a3]/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d8c7a3]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-10 max-w-4xl text-center md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-5 text-xs font-thin uppercase tracking-[0.28em] text-[#d8c7a3]">
            Client Experience
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl leading-[0.95] tracking-[0.02em] text-white md:text-4xl">
            Smooth, private, and professional.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/55 md:text-sm">
            Clean vehicles, calm rides, and service that feels effortless from
            pickup to arrival.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b0c0f]/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:rounded-[2rem] md:p-7">
          {/* Thin gold shine */}
          <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#d0a356]/45 to-transparent" />

          <AnimatePresence mode="wait">
            <motion.article
              key={activeReview.name}
              initial={{
                opacity: 0,
                x: 25,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -25,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="rounded-[1.25rem] border border-white/10 bg-black/25 p-6 md:p-8"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-[#d8c7a3]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={17} fill="currentColor" />
                  ))}
                </div>

                <p className="hidden text-xs uppercase tracking-[0.25em] text-white/35 sm:block">
                  Verified Ride
                </p>
              </div>

              <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-white md:text-3xl md:leading-snug">
                “{activeReview.review}”
              </p>

              <div className="mt-8 border-t border-white/10 pt-5 text-center">
                <h3 className="text-lg tracking-wide text-white">
                  {activeReview.name}
                </h3>

                <p className="mt-1 text-sm text-[#d8c7a3]">
                  {activeReview.type}
                </p>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex gap-3">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-9 bg-[#d0a356]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`View review from ${review.name}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={previousReview}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-[#d8c7a3]/50 hover:bg-white/[0.09]"
                aria-label="Previous review"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={nextReview}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-[#d8c7a3]/50 hover:bg-white/[0.09]"
                aria-label="Next review"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs uppercase tracking-[0.22em] text-white/35">
          Airport • Corporate • Events • VIP Travel
        </p>
      </div>
    </section>
  );
}