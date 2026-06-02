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
    y: 35,
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
      staggerChildren: 0.13,
    },
  },
};

const services = [
  {
    title: "Airport Transfers",
    description:
      "Smooth pickup and drop-off service for LAX, Burbank, private terminals, and surrounding airports.",
    image: airportImg,
    icon: Plane,
    tag: "Airport",
  },
  {
    title: "Weddings & Events",
    description:
      "Elegant transportation for weddings, parties, red carpet events, anniversaries, and special nights.",
    image: weddingImg,
    icon: CalendarHeart,
    tag: "Events",
  },
  {
    title: "Corporate Travel",
    description:
      "Professional private rides for executives, business meetings, conferences, and VIP clients.",
    image: corporateImg,
    icon: BriefcaseBusiness,
    tag: "Business",
  },
  {
    title: "Hourly Chauffeur",
    description:
      "Book a private chauffeur by the hour for flexible, luxury transportation around the city.",
    image: hourlyImg,
    icon: Clock,
    tag: "Hourly",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#08090b] px-4 py-24 text-white md:px-8"
    >
      {/* Background glow */}
      <div className="absolute left-[-160px] top-20 h-96 w-96 rounded-full bg-[#f2eadc]/5 blur-3xl" />
      <div className="absolute bottom-0 right-[-160px] h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d8c7a3]">
              Premium Services
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.05em] md:text-6xl">
              Transportation designed around comfort, privacy, and style.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-md text-sm leading-7 text-white/60 md:text-base"
          >
            From airport transfers to private events, every ride is built to
            feel smooth, professional, and effortless.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <div className="relative h-60 overflow-hidden sm:h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover object-center brightness-110 contrast-105 saturate-110 transition duration-700 group-hover:scale-105"
                  />

                  {/* Light polish only — keeps images clear */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/45 via-transparent to-transparent" />

                  {/* Tiny top shine, not a dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <Icon size={16} className="text-[#d8c7a3]" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                      {service.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold tracking-[-0.04em] text-white">
                    {service.title}
                  </h3>

                  <p className="mb-6 min-h-[96px] text-sm leading-7 text-white/62">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href="https://book.mylimobiz.com/v4/diamondwings"
                      target="_blank"
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-[#f2eadc] px-5 py-3 text-sm font-bold text-[#090909] transition hover:bg-white"
                    >
                      Get Quote
                      <ArrowRight
                        size={16}
                        className="transition group-hover/btn:translate-x-1"
                      />
                    </Link>

                    <a
                      href="tel:8182924112"
                      className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition hover:bg-white/[0.09]"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}