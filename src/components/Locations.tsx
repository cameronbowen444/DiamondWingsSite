"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  MapPin,
  Building2,
  Plane,
  Palmtree,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

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

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const featuredAreas = [
  {
    area: "Beverly Hills",
    description:
      "Private luxury transportation for shopping, fine dining, hotels, and exclusive events.",
    icon: Sparkles,
    vibe: "VIP Arrivals",
  },
  {
    area: "West Hollywood",
    description:
      "Stylish black car service for nightlife, restaurants, lounges, and private events.",
    icon: Palmtree,
    vibe: "Nightlife",
  },
  {
    area: "Malibu",
    description:
      "Comfortable coastal rides for dinners, beachside events, private homes, and scenic transfers.",
    icon: Palmtree,
    vibe: "Coastal Luxury",
  },
  {
    area: "Downtown LA",
    description:
      "Executive rides for business meetings, hotels, events, conferences, and corporate travel.",
    icon: Building2,
    vibe: "Business Travel",
  },
];

const servedLocations = [
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
  "Redondo Beach",
  "Long Beach",
];

const airportRoutes = [
  "LAX Airport",
  "Hollywood Burbank Airport",
  "Van Nuys Airport",
  "Long Beach Airport",
  "Private Jet Terminals",
  "Hotel Airport Transfers",
];

export default function Locations() {
  return (
    <section id="locations" className="relative overflow-hidden bg-[#08090b] px-4 py-24 text-white md:px-8">
      <div className="absolute left-[-180px] top-28 h-[420px] w-[420px] rounded-full bg-[#f2eadc]/5 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-160px] h-[440px] w-[440px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8c7a3]">
              Served Locations
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-[-0.06em] md:text-6xl">
              Luxury chauffeur service throughout Los Angeles.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base leading-8 text-white/55"
          >
            From private airport pickups to evenings in Beverly Hills, Malibu,
            West Hollywood, and Downtown LA, every ride is planned with the area,
            timing, and experience in mind.
          </motion.p>
        </motion.div>

        {/* Featured area cards */}
        <motion.div
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          {featuredAreas.map((location) => {
            const Icon = location.icon;

            return (
              <motion.article
                key={location.area}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-white/[0.02] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
              >
                <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-[#f2eadc]/5 blur-2xl transition group-hover:bg-[#f2eadc]/10" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/35 text-[#d8c7a3]">
                      <Icon size={22} />
                    </div>

                    <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                      {location.vibe}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-[-0.04em]">
                    {location.area}
                  </h3>

                  <p className="mt-4 min-h-[112px] text-sm leading-7 text-white/55">
                    {location.description}
                  </p>

                  <Link
                    href="https://book.mylimobiz.com/v4/diamondwings"
                    target="_blank"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#d8c7a3] transition group-hover:text-white"
                  >
                    Request service
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Location lists */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-2xl md:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d8c7a3]">
                  LA Coverage
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-[-0.05em]">
                  Popular service areas
                </h3>
              </div>

              <span className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                Los Angeles County
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {servedLocations.map((location) => (
                <div
                  key={location}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/70"
                >
                  <MapPin size={15} className="text-[#d8c7a3]" />
                  {location}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-7 backdrop-blur-2xl md:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="mb-7">
              <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full border border-white/10 bg-black/35 text-[#d8c7a3]">
                <Plane size={24} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d8c7a3]">
                Airport & Private Travel
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-[-0.05em]">
                Premium airport routes
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Designed for smooth pickups, luggage support, direct transfers,
                and a more private arrival experience.
              </p>
            </div>

            <div className="grid gap-3">
              {airportRoutes.map((route) => (
                <div
                  key={route}
                  className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/70"
                >
                  <CheckCircle2 size={16} className="text-[#d8c7a3]" />
                  {route}
                </div>
              ))}
            </div>

            <Link
              href="https://book.mylimobiz.com/v4/diamondwings"
              target="_blank"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f2eadc] px-7 py-4 font-bold text-[#090909] transition hover:bg-white"
            >
              Plan My Ride
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-8 text-center backdrop-blur-2xl md:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d8c7a3]">
            Not seeing your area?
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-[-0.05em] md:text-4xl">
            Tell us your pickup and destination — we’ll help plan the right
            transportation experience.
          </h3>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="https://book.mylimobiz.com/v4/diamondwings"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-[#f2eadc] px-7 py-4 font-bold text-[#090909] transition hover:bg-white"
            >
              Get a Quote
            </Link>

            <a
              href="tel:8186264592"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 font-bold text-white transition hover:bg-white/[0.09]"
            >
              Call for Service Area
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}