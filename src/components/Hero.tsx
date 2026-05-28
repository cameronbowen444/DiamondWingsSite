"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react";
import carBg from "@/assets/car1.png";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#08090b] px-4 pb-32 pt-32 text-white md:px-8 md:pb-20 md:pt-36">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={carBg}
          alt="Luxury chauffeur vehicle"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#08090b] via-[#08090b]/80 to-[#08090b]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-[#08090b]/70" />
      </div>

      {/* Decorative glow */}
      <div className="absolute left-[-120px] top-32 h-80 w-80 rounded-full bg-[#f2eadc]/10 blur-3xl" />
      <div className="absolute bottom-10 right-[-120px] h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-[#d8c7a3]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8c7a3]">
              Private Chauffeur Experience
            </p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl"
          >
            Luxury rides with a calm, private feel.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
          >
            Professional chauffeur service for airport transfers, business
            travel, private events, and nights out. Clean vehicles, smooth
            scheduling, and a premium experience from pickup to drop-off.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="https://book.mylimobiz.com/v4/diamondwings"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f2eadc] px-7 py-4 font-bold text-[#090909] shadow-[0_0_45px_rgba(242,234,220,0.18)] transition hover:bg-white"
            >
              Get a Quote
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:8182924112"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-bold text-white backdrop-blur-xl transition hover:bg-white/[0.09]"
            >
              Call Now
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
              <ShieldCheck className="mb-4 text-[#d8c7a3]" size={24} />
              <h3 className="font-bold">Professional</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Reliable private transportation.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
              <Clock className="mb-4 text-[#d8c7a3]" size={24} />
              <h3 className="font-bold">On Time</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Built around your schedule.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
              <Sparkles className="mb-4 text-[#d8c7a3]" size={24} />
              <h3 className="font-bold">Luxury Feel</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Clean, comfortable, premium rides.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}