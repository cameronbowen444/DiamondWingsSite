"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

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

const locations = [
  "Los Angeles",
  "Beverly Hills",
  "West Hollywood",
  "Hollywood",
  "Santa Monica",
  "Malibu",
  "Calabasas",
  "Hidden Hills",
  "Bel Air",
  "Brentwood",
  "Century City",
  "Downtown LA",
  "Pasadena",
  "Glendale",
  "Burbank",
  "Manhattan Beach",
  "LAX",
  "Private Terminals",
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="relative overflow-hidden bg-[#08090b] px-4 py-20 text-white md:px-8 md:py-24"
    >
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8c7a3]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-5 text-xs font-thin uppercase tracking-[0.28em] text-[#d8c7a3]">
            Served Locations
          </p>

          <h2 className="mx-auto max-w-3xl text-2xl leading-[0.95] tracking-[0.02em] text-white md:text-4xl">
            Luxury chauffeur service across Los Angeles.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Private transportation for airport pickups, city rides, events, and
            premium travel throughout LA.
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-lg border border-white/10 bg-[#0b0c0f]/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#d8c7a3]">
                LA Coverage
              </p>
              <h3 className="mt-2 text-xl tracking-wide text-white md:text-2xl">
                Popular pickup areas
              </h3>
            </div>

            <MapPin className="hidden text-[#d8c7a3] sm:block" size={28} />
          </div>

          <div className="flex flex-wrap gap-3">
            {locations.map((location) => (
              <span
                key={location}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65"
              >
                {location}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-7 text-white/50">
              Need a pickup outside these areas? Send the pickup and destination
              and we’ll confirm availability.
            </p>

            <Link
              href="https://book.mylimobiz.com/v4/diamondwings"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d0a356] px-6 py-3 text-sm text-[#090909] transition hover:bg-white whitespace-nowrap"
            >
              Set up your Ride
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}