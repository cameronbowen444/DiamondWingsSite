import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060708] px-4 pb-28 pt-16 text-white md:px-8 md:pb-10">
      <div className="absolute left-[-160px] top-10 h-80 w-80 rounded-full bg-[#f2eadc]/5 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-120px] h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-block">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d8c7a3]">
                Private Chauffeur
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em]">
                Executive Luxury Rides
              </h2>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Luxury chauffeur service for airport transfers, corporate travel,
              private events, and premium rides throughout Los Angeles.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://book.mylimobiz.com/v4/diamondwings"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2eadc] px-6 py-3 text-sm font-bold text-[#090909] transition hover:bg-white"
              >
                Get a Quote
                <ArrowRight size={16} />
              </Link>

              <a
                href="tel:8186264592"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/[0.09]"
              >
                <Phone size={16} className="text-[#d8c7a3]" />
                Call Now
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-white/40">
              Navigate
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#services" className="transition hover:text-[#d8c7a3]">
                  Services
                </a>
              </li>
              <li>
                <a href="#locations" className="transition hover:text-[#d8c7a3]">
                  Locations
                </a>
              </li>
              <li>
                <a href="#fleet" className="transition hover:text-[#d8c7a3]">
                  Fleet
                </a>
              </li>
              <li>
                <a href="#reviews" className="transition hover:text-[#d8c7a3]">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-white/40">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              <li>Airport Transfers</li>
              <li>Corporate Travel</li>
              <li>Weddings & Events</li>
              <li>Hourly Chauffeur</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-white/40">
              Los Angeles Areas
            </h3>

            <div className="grid gap-3 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-[#d8c7a3]" />
                Beverly Hills
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-[#d8c7a3]" />
                West Hollywood
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-[#d8c7a3]" />
                Malibu
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-[#d8c7a3]" />
                LAX & Private Airports
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-7 text-sm text-white/35 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Executive Luxury Rides. All rights
            reserved.
          </p>

          <p className="text-white/30">
            Private chauffeur service throughout Los Angeles.
          </p>
        </div>
      </div>
    </footer>
  );
}