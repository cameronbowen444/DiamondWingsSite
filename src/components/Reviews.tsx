"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
  ShieldCheck,
  Clock,
  Car,
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

const reviews = [
  {
    name: "Marcus T.",
    type: "Corporate Client",
    trip: "Executive airport transfer",
    rating: 5,
    review:
      "The entire experience felt polished and professional. The driver arrived early, the vehicle was spotless, and the ride was quiet enough for me to take a business call on the way.",
  },
  {
    name: "Alyssa R.",
    type: "Airport Transfer",
    trip: "Late-night pickup",
    rating: 5,
    review:
      "After a long flight, this was exactly what I needed. The pickup was smooth, communication was clear, and the car felt private, clean, and comfortable.",
  },
  {
    name: "Daniel K.",
    type: "Private Event",
    trip: "Evening event transportation",
    rating: 5,
    review:
      "The service matched the occasion perfectly. The arrival felt premium, the driver was professional, and everything was handled without stress.",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeReview = reviews[activeIndex];

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="relative overflow-hidden bg-[#08090b] px-4 py-24 text-white md:px-8">
      <div className="absolute left-[-200px] top-20 h-[420px] w-[420px] rounded-full bg-[#f2eadc]/5 blur-3xl" />
      <div className="absolute right-[-180px] bottom-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8c7a3]">
            Client Experience
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-[-0.06em] md:text-6xl">
            Trusted for smooth, private transportation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/55">
            Professional service, clean vehicles, and a calm experience from
            pickup to arrival.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Left trust panel */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-2xl"
          >
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                Service Standard
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-[-0.05em]">
                Built around trust.
              </h3>
            </div>

            <div className="grid gap-4">
              <TrustItem
                icon={<Clock size={20} />}
                title="On-Time Pickups"
                text="Planned around your schedule."
              />

              <TrustItem
                icon={<ShieldCheck size={20} />}
                title="Professional Drivers"
                text="Private, polished, and reliable."
              />

              <TrustItem
                icon={<Car size={20} />}
                title="Premium Vehicles"
                text="Clean, quiet, and comfortable."
              />
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
              <p className="text-sm leading-7 text-white/55">
                Ideal for airport rides, corporate travel, events, and private
                bookings where comfort and presentation matter.
              </p>
            </div>
          </motion.aside>

          {/* Review slider */}
          <div className="relative">
            <button
              onClick={previousReview}
              className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-xl transition hover:border-[#d8c7a3]/50 hover:bg-white/10 md:-left-6"
              aria-label="Previous review"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-xl transition hover:border-[#d8c7a3]/50 hover:bg-white/10 md:-right-6"
              aria-label="Next review"
            >
              <ArrowRight size={20} />
            </button>

            <AnimatePresence mode="wait">
              <motion.article
                key={activeReview.name}
                initial={{
                  opacity: 0,
                  x: 40,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -40,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-white/[0.02] p-8 shadow-[0_35px_100px_rgba(0,0,0,0.42)] backdrop-blur-2xl md:p-10"
              >
                <div className="absolute right-8 top-8 text-white/[0.04]">
                  <Quote size={120} />
                </div>

                <div className="relative z-10 flex min-h-[360px] flex-col justify-between">
                  <div>
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: activeReview.rating }).map(
                          (_, index) => (
                            <Star
                              key={index}
                              size={20}
                              className="fill-[#d8c7a3] text-[#d8c7a3]"
                            />
                          )
                        )}
                      </div>

                      <span className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                        Verified Ride
                      </span>
                    </div>

                    <p className="max-w-3xl text-2xl font-medium leading-[1.55] tracking-[-0.03em] text-white/85 md:text-3xl">
                      “{activeReview.review}”
                    </p>
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-6">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                      <div>
                        <h3 className="text-2xl font-bold tracking-[-0.04em]">
                          {activeReview.name}
                        </h3>

                        <p className="mt-1 text-sm font-semibold text-[#d8c7a3]">
                          {activeReview.type}
                        </p>
                      </div>

                      <div className="rounded-full border border-white/10 bg-black/35 px-5 py-3 text-sm text-white/55">
                        {activeReview.trip}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="mt-7 flex justify-center gap-3">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-10 bg-[#f2eadc]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`View review from ${review.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type TrustItemProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function TrustItem({ icon, title, text }: TrustItemProps) {
  return (
    <div className="flex gap-4 rounded-[1.3rem] border border-white/10 bg-black/25 p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#d8c7a3]">
        {icon}
      </div>

      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="mt-1 text-sm leading-6 text-white/50">{text}</p>
      </div>
    </div>
  );
}