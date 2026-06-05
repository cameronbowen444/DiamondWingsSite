"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Plane,
  CalendarHeart,
  BriefcaseBusiness,
  Clock,
  ArrowRight,
} from "lucide-react";

import airportImg from "@/assets/services/airport.png";
import weddingImg from "@/assets/services/wedding.png";
import corporateImg from "@/assets/services/corporate.png";
import hourlyImg from "@/assets/services/hourly.png";

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

const services = [
  {
    title: "Airport Transfers",
    description:
      "Smooth, reliable transportation for airport arrivals, departures, and premium travel days.",
    image: airportImg,
    icon: Plane,
    tag: "Airport",
  },
  {
    title: "Events & Special Nights",
    description:
      "Elegant private transportation for weddings, celebrations, nights out, and special occasions.",
    image: weddingImg,
    icon: CalendarHeart,
    tag: "Events",
  },
  {
    title: "Executive Travel",
    description:
      "Professional chauffeur service for meetings, corporate travel, VIP guests, and business schedules.",
    image: corporateImg,
    icon: BriefcaseBusiness,
    tag: "Business",
  },
  {
    title: "Hourly Chauffeur",
    description:
      "Flexible hourly service for a private driver, multiple stops, and luxury transportation around the city.",
    image: hourlyImg,
    icon: Clock,
    tag: "Hourly",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#08090b] px-4 py-20 text-white md:px-8 md:py-24"
    >
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8c7a3]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-4xl text-center md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="mb-5 text-xs font-thin uppercase tracking-[0.28em] text-[#d8c7a3]">
              Premium Services
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl leading-[0.95] tracking-[0.02em] text-white md:text-4xl">
              Luxury transportation for all rides.
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          {services.map((service, index) => {
            return (
              <Link
                key={service.title}
                href="https://book.mylimobiz.com/v4/diamondwings"
                target="_blank"
                className="block"
              >
                <motion.article
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="group relative min-h-[390px] cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-[#0b0c0f] shadow-[0_22px_70px_rgba(0,0,0,0.38)]"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center brightness-95 contrast-105 saturate-105 transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/15 to-transparent" />

                  <div className="absolute left-5 top-5 text-xs uppercase tracking-[0.28em] text-[#d8c7a3]/80">
                    0{index + 1}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="mb-5 text-xl leading-tight tracking-wide text-white md:text-2xl">
                      {service.title}
                    </h3>

                    {/* <div className="flex items-center gap-3">
                    <Link
                      href="https://book.mylimobiz.com/v4/diamondwings"
                      target="_blank"
                      className="group/btn inline-flex  items-center justify-center gap-2 rounded-xl bg-[#bda06e] px-5 py-3 text-sm  text-[#090909] transition hover:bg-white whitespace-nowrap"
                    >
                      Get Quote
                      <ArrowRight
                        size={16}
                        className="transition group-hover/btn:translate-x-1"
                      />
                    </Link>

                    <a
                      href="tel:8186264592"
                      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm  text-white backdrop-blur-xl transition hover:bg-white/[0.12]"
                    >
                      Call
                    </a>
                  </div> */}
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
