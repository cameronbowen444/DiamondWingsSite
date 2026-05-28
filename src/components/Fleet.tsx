"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Car,
  Luggage,
  Users,
  Star,
} from "lucide-react";

import sclassImg from "@/assets/fleet/sclass.png";
import navigatorImg from "@/assets/fleet/navigator.png";
import escaladeImg from "@/assets/fleet/escalade.png";
import sprinterImg from "@/assets/fleet/sprinter.png";

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
    name: "Mercedes S-Class",
    category: "Executive Sedan",
    image: sclassImg,
    passengers: 3,
    luggage: 3,
    year: "2024",
    description:
      "A refined executive sedan built for airport transfers, business travel, and private luxury rides.",
    features: ["Quiet cabin", "Executive comfort", "Premium arrival"],
  },
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
    name: "Cadillac Escalade",
    category: "Premium SUV",
    image: escaladeImg,
    passengers: 6,
    luggage: 5,
    year: "2024",
    description:
      "A luxury SUV with a strong presence, ideal for special events, airport service, and private bookings.",
    features: ["Luxury interior", "Large cargo space", "Event ready"],
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
    <section id="fleet" className="relative overflow-hidden bg-[#08090b] px-4 py-24 text-white md:px-8">
      <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#f2eadc]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8c7a3]">
            Executive Fleet
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-[-0.06em] md:text-6xl">
            Sedans, SUVs, and executive vans.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/55">
            Right-sized luxury for airport transfers, corporate travel, private
            events, and VIP transportation.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <button
            onClick={previousFleet}
            className="absolute left-3 top-[38%] z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-xl transition hover:border-[#d8c7a3]/50 hover:bg-white/10 md:-left-6"
            aria-label="Previous vehicle"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={nextFleet}
            className="absolute right-3 top-[38%] z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-xl transition hover:border-[#d8c7a3]/50 hover:bg-white/10 md:-right-6"
            aria-label="Next vehicle"
          >
            <ArrowRight size={20} />
          </button>

          <AnimatePresence mode="wait">
            <motion.article
              key={activeFleet.name}
              initial={{
                opacity: 0,
                x: 35,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -35,
                scale: 0.98,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.035] shadow-[0_35px_100px_rgba(0,0,0,0.42)] backdrop-blur-2xl"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative h-[240px] overflow-hidden sm:h-[320px] lg:h-[430px]">
                  <Image
                    src={activeFleet.image}
                    alt={activeFleet.name}
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#08090b]/65" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#d8c7a3] backdrop-blur-xl">
                    {activeFleet.category}
                  </div>
                </div>

                <div className="flex flex-col justify-center px-6 py-8 md:px-10">
                  <div className="mb-6 flex flex-wrap gap-3">
                    <StatBadge
                      icon={<Users size={15} />}
                      label="Passengers"
                      value={activeFleet.passengers}
                    />

                    <StatBadge
                      icon={<Luggage size={15} />}
                      label="Luggage"
                      value={activeFleet.luggage}
                    />

                    <StatBadge
                      icon={<Car size={15} />}
                      label="Year"
                      value={activeFleet.year}
                    />
                  </div>

                  <h3 className="text-3xl font-bold tracking-[-0.05em] md:text-5xl">
                    {activeFleet.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55 md:text-base">
                    {activeFleet.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {activeFleet.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/70"
                      >
                        <Star size={13} className="text-[#d8c7a3]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="https://book.mylimobiz.com/v4/diamondwings"
                      target="_blank"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f2eadc] px-6 py-3.5 text-sm font-bold text-[#090909] shadow-[0_0_45px_rgba(242,234,220,0.16)] transition hover:bg-white"
                    >
                      Reserve This
                      <ArrowRight size={17} />
                    </Link>

                    <a
                      href="tel:8182924112"
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/[0.09]"
                    >
                      Call Availability
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-7 flex justify-center gap-3">
            {fleets.map((vehicle, index) => (
              <button
                key={vehicle.name}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-10 bg-[#f2eadc]"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
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
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-xl">
      <span className="text-[#d8c7a3]">{icon}</span>
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
        {label}
      </span>
      <strong className="text-xs text-white">{value}</strong>
    </div>
  );
}