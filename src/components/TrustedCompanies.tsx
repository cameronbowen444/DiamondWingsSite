"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";

const companies = [
  {
    name: "Netflix",
    logo: "https://cdn.simpleicons.org/netflix/e50914",
  },
  {
    name: "Universal",
    logo: "https://cdn.simpleicons.org/nba/1d428a",
  },
  {
    name: "Live Nation",
    logo: "https://cdn.simpleicons.org/nhl/111111",
  },
  {
    name: "FOX",
    logo: "https://cdn.simpleicons.org/fox/111111",
  },
  {
    name: "NBC",
    logo: "https://cdn.simpleicons.org/nbc/111111",
  },
  {
    name: "Paramount",
    logo: "https://cdn.simpleicons.org/paramountplus/0064ff",
  },
  {
    name: "Sony",
    logo: "https://cdn.simpleicons.org/sony/111111",
  },
  {
    name: "Amazon",
    logo: "https://cdn.simpleicons.org/ufc/d20a0a",
  },
  {
    name: "Apple",
    logo: "https://cdn.simpleicons.org/appletv/111111",
  },
  {
    name: "HBO",
    logo: "https://cdn.simpleicons.org/hbo/111111",
  },
];

export default function TrustedCompanies() {
  const duplicatedCompanies = [...companies, ...companies];

  const x = useMotionValue(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const wrapPosition = (value: number) => {
    if (!sliderRef.current) return value;

    const singleSetWidth = sliderRef.current.scrollWidth / 2;

    if (value <= -singleSetWidth) {
      return value + singleSetWidth;
    }

    if (value >= 0) {
      return value - singleSetWidth;
    }

    return value;
  };

  useAnimationFrame((_, delta) => {
    if (isDragging) return;

    const speed = 0.023;
    const currentX = x.get();
    const nextX = currentX - speed * delta;

    x.set(wrapPosition(nextX));
  });

  return (
    <section
      id="trusted"
      className="relative overflow-hidden bg-[#08090b] px-4 py-20 text-white md:px-8 md:py-24"
    >
      {/* Luxury divider lines */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8c7a3]/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d8c7a3]/20 to-transparent" />

      

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
          <p className="mb-5 text-xs font-thin uppercase tracking-[0.28em] text-[#d8c7a3]">
            Trusted Transportation For
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl leading-[0.95] tracking-[0.02em] text-white md:text-4xl">
            Executives, production, VIP guests
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-md">
            Discreet luxury transportation for FBO pickups, executives,
entertainment clients, private events, and VIP travel in Los Angeles.
          </p>
        </div>

        <div className="relative cursor-grab overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b0c0f]/80 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl active:cursor-grabbing md:rounded-[2rem] md:py-7">
          {/* Thin gold top shine */}
          <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#d0a356]/45 to-transparent" />

          {/* Left fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-[#0b0c0f] to-transparent md:w-32" />

          {/* Right fade */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#0b0c0f] to-transparent md:w-32" />

          <motion.div
            ref={sliderRef}
            style={{ x }}
            drag="x"
            dragMomentum={false}
            dragElastic={0.08}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => {
              x.set(wrapPosition(x.get()));
              setIsDragging(false);
            }}
            className="flex w-max touch-pan-y select-none items-center gap-4 px-4 md:gap-5 md:px-5"
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="group flex h-24 min-w-[175px] items-center justify-center rounded-2xl border border-white/10 bg-[#f2eadc] px-7 shadow-[0_18px_45px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-[#d8c7a3]/50 hover:bg-white md:h-28 md:min-w-[220px] lg:h-30 lg:min-w-[245px]"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  draggable={false}
                  className="pointer-events-none max-h-12 max-w-[135px] object-contain transition duration-300 group-hover:scale-105 md:max-h-16 md:max-w-[170px]"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs uppercase tracking-[0.22em] text-white/35">
          Entertainment • Corporate • Events • VIP Travel
        </p>
      </div>
    </section>
  );
}