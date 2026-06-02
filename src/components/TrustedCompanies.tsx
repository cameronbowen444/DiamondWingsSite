"use client";

import { motion } from "framer-motion";

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

  return (
    <section className="relative overflow-hidden bg-[#08090b] px-4 py-16 text-white md:px-8">
      {/* Divider lines */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Soft glow */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2eadc]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-9 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8c7a3]">
            Trusted Transportation For
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-[-0.05em] text-white md:text-5xl">
            Private rides for executives, production teams, and VIP guests.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Diamond Wings provides luxury chauffeur service for airport
            transfers, business travel, entertainment transportation, private
            events, and high-profile guests throughout Los Angeles with many NDAs signed exclusively.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0e10] py-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {/* Left fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-[#08090b] to-transparent md:w-32" />

          {/* Right fade */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#08090b] to-transparent md:w-32" />

          <motion.div
            className="flex w-max items-center gap-5"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 85,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="group flex h-28 min-w-[210px] items-center justify-center rounded-2xl border border-[#d8c7a3]/15 bg-[#f2eadc] px-8 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#d8c7a3]/40 hover:bg-white md:h-32 md:min-w-[250px]"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-16 max-w-[165px] object-contain transition duration-300 group-hover:scale-105 md:max-h-20 md:max-w-[190px]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}