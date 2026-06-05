"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Luggage, Users, Star } from "lucide-react";

import navigatorImg from "@/assets/fleet/navigator.png";
import sprinterImg from "@/assets/fleet/sprinter.png";
import teslaModelSImg from "@/assets/fleet/tesla.png";
import suburbanImg from "@/assets/fleet/suburban.png";

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

const fleets = [
  {
    name: "Lincoln Navigator",
    category: "Luxury SUV",
    image: navigatorImg,
    passengers: 6,
    luggage: 5,
    year: "2024",
    description:
      "Spacious, bold, and comfortable. Perfect for families, VIP guests, events, and premium group rides.",
    features: ["Spacious seating", "VIP presence", "Smooth ride"],
  },
  {
    name: "Mercedes Sprinter",
    category: "Executive Van",
    image: sprinterImg,
    passengers: 12,
    luggage: 10,
    year: "2024",
    description:
      "A premium group transportation option for corporate teams, roadshows, weddings, and private events.",
    features: ["Group travel", "High roof comfort", "Private shuttle"],
  },
  {
    name: "Tesla Model S",
    category: "Luxury Electric Sedan",
    image: teslaModelSImg,
    passengers: 4,
    luggage: 3,
    year: "2024",
    description:
      "A sleek, quiet, and modern luxury sedan perfect for executive rides, airport transfers, date nights, and premium city travel.",
    features: ["All-electric ride", "Quiet cabin", "Executive comfort"],
  },
  {
    name: "Chevy Suburban",
    category: "Premium Full-Size SUV",
    image: suburbanImg,
    passengers: 7,
    luggage: 6,
    year: "2024",
    description:
      "A roomy and reliable full-size SUV built for families, airport pickups, group travel, and comfortable long-distance rides.",
    features: ["Extra cargo room", "Family friendly", "Comfortable seating"],
  },
];

export default function Fleet() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFleet = fleets[activeIndex];

  const nextFleet = () => {
    setActiveIndex((prev) => (prev + 1) % fleets.length);
  };

  const previousFleet = () => {
    setActiveIndex((prev) => (prev - 1 + fleets.length) % fleets.length);
  };

  return (
    <section
      id="fleet"
      className="relative overflow-hidden bg-[#08090b] px-4 py-20 text-white md:px-8 md:py-24"
    >
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8c7a3]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
  className="mx-auto mb-10 max-w-4xl text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeUp}
>
  <p className="mb-5 text-xs font-thin uppercase tracking-[0.28em] text-[#d8c7a3]">
    Executive Fleet
  </p>

  <h2 className="mx-auto max-w-3xl text-3xl leading-[0.95] tracking-[0.02em] text-white md:text-4xl">
    Sedans, SUVs, and executive vans.
  </h2>
</motion.div>

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeFleet.name}
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
              className="overflow-hidden rounded-lg border border-white/10 bg-[#0b0c0f] shadow-[0_22px_70px_rgba(0,0,0,0.38)]"
            >
              <div className="grid md:grid-cols-[1fr_0.9fr]">
                <div className="relative h-[240px] overflow-hidden sm:h-[300px] lg:h-[330px]">
                  <Image
                    src={activeFleet.image}
                    alt={activeFleet.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center brightness-105 contrast-105 saturate-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#d8c7a3] backdrop-blur-xl">
                    {activeFleet.category}
                  </div>
                </div>

                <div className="flex flex-col justify-center px-5 py-6 md:px-7 lg:px-8">
                  <div className="mb-5 flex flex-wrap gap-2">
                    <StatBadge
                      icon={<Users size={14} />}
                      label="Passengers"
                      value={activeFleet.passengers}
                    />

                    <StatBadge
                      icon={<Luggage size={14} />}
                      label="Luggage"
                      value={activeFleet.luggage}
                    />
                  </div>

                  <h3 className="text-2xl leading-tight tracking-wide text-white md:text-3xl">
                    {activeFleet.name}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-white/55">
                    {activeFleet.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeFleet.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/65"
                      >
                        <Star size={12} className="text-[#d8c7a3]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Mobile buttons stay inside the card */}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row md:hidden">
                    <Link
                      href="https://book.mylimobiz.com/v4/diamondwings"
                      target="_blank"
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d0a356] px-6 py-3 text-sm text-[#090909] transition hover:bg-white"
                    >
                      Reserve This
                      <ArrowRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>

                    <a
                      href="tel:8182924112"
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white transition hover:bg-white/[0.09]"
                    >
                      Call Availability
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Mobile arrows stay over the image */}
          <button
            onClick={previousFleet}
            className="absolute left-3 top-[30%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-xl transition hover:border-[#d8c7a3]/50 hover:bg-white/10 md:hidden"
            aria-label="Previous vehicle"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={nextFleet}
            className="absolute right-3 top-[30%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-xl transition hover:border-[#d8c7a3]/50 hover:bg-white/10 md:hidden"
            aria-label="Next vehicle"
          >
            <ArrowRight size={18} />
          </button>

          {/* Desktop controls outside the card */}
          <div className="mt-5 hidden items-center justify-center gap-3 md:flex">
            <button
              onClick={previousFleet}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl transition hover:border-[#d8c7a3]/50 hover:bg-white/[0.09]"
              aria-label="Previous vehicle"
            >
              <ArrowLeft size={18} />
            </button>

            <Link
              href="https://book.mylimobiz.com/v4/diamondwings"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d0a356] px-7 py-3 text-sm text-[#090909] transition hover:bg-white"
            >
              Reserve This
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:8182924112"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm text-white transition hover:bg-white/[0.09]"
            >
              Call Availability
            </a>

            <button
              onClick={nextFleet}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl transition hover:border-[#d8c7a3]/50 hover:bg-white/[0.09]"
              aria-label="Next vehicle"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {fleets.map((vehicle, index) => (
              <button
                key={vehicle.name}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-9 bg-[#d0a356]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`View ${vehicle.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type StatBadgeProps = {
  icon: React.ReactNode;
  label: string;
  value: string | number;
};

function StatBadge({ icon, label, value }: StatBadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-xl">
      <span className="text-[#d8c7a3]">{icon}</span>
      <span className="text-[9px] uppercase tracking-[0.16em] text-white/45">
        {label}
      </span>
      <strong className="text-xs text-white">{value}</strong>
    </div>
  );
}