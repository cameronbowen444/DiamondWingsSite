"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react";
import carBg from "@/assets/fleet/escalade.png";
import desktopHero from "@/assets/fleet/hero2.jpg";

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
    <section className="relative overflow-hidden bg-[#08090b] text-white md:min-h-screen md:px-8 md:pb-20 md:pt-36">
      {/* MOBILE IMAGE */}
      <div className="relative h-[52vh] w-full md:hidden">
        <Image
          src={carBg}
          alt="Luxury chauffeur vehicle"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#08090b] to-transparent" />
      </div>

      {/* DESKTOP BACKGROUND IMAGE */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={desktopHero}
          alt="Diamond Wings luxury chauffeur service"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Darken left side for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050607] via-[#050607]/30 to-transparent" />

        {/* Soft top/bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050607]/55 via-transparent to-transparent" />
      </div>

      {/* Decorative glow desktop only */}
      <div className="absolute left-[-120px] top-32 hidden h-80 w-80 rounded-full bg-[#f2eadc]/10 blur-3xl md:block" />
      <div className="absolute bottom-10 right-[-120px] hidden h-96 w-96 rounded-full bg-white/5 blur-3xl md:block" />

      <div className="relative z-10 mx-auto grid max-w-7xl px-4 pb-10 pt-0 md:min-h-[calc(100vh-9rem)] md:px-0 md:pb-0">
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
            <p className="text-xs font-thin uppercase tracking-[0.28em] text-[#d8c7a3]">
              Private Chauffeur Experience
            </p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-3xl leading-[0.95] tracking-[0.20] text-white md:text-5xl"
          >
            Luxury rides with a calm, private feel.
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="https://book.mylimobiz.com/v4/diamondwings"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d0a356] px-4 py-4 text-sm text-[#090909] shadow-[0_0_45px_rgba(242,234,220,0.18)] transition hover:bg-white"
            >
              Get a Quote
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:8186264592"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm text-white backdrop-blur-xl transition hover:bg-white/[0.09]"
            >
              Call Now
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3 md:mt-60"
          >
            <div className="rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
              <ShieldCheck className="mb-2 text-[#d8c7a3]" size={24} />
              <h3>Professional</h3>
              <p className="mt-2 text-xs leading-6 text-white/55">
                Reliable private transportation.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
              <Clock className="mb-2 text-[#d8c7a3]" size={24} />
              <h3>On Time</h3>
              <p className="mt-2 text-xs leading-6 text-white/55">
                Built around your schedule.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
              <Sparkles className="mb-2 text-[#d8c7a3]" size={24} />
              <h3>Luxury Feel</h3>
              <p className="mt-2 text-xs leading-6 text-white/55">
                Clean, comfortable, premium rides.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}