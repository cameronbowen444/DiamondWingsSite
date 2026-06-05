import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "#fleet" },
  { name: "Locations", href: "#locations" },
  { name: "Reviews", href: "#reviews" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050607] px-4 pb-28 pt-14 text-white md:px-8 md:pb-10 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={logo}
                alt="Diamond Wings Chauffeur Logo"
                className="h-12 w-auto"
              />

              <div>
                <p className="text-[10px] font-thin uppercase tracking-[0.28em] text-[#d8c7a3]">
                  Private Chauffeur
                </p>

                <h2 className="mt-1 text-xl tracking-wide text-white md:text-3xl">
                  Executive Luxury Rides
                </h2>
              </div>
            </Link>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
              Discreet luxury transportation for airport pickups, executives,
              private events, and VIP travel throughout Los Angeles.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="https://book.mylimobiz.com/v4/diamondwings"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d0a356] px-6 py-3 text-sm text-[#090909] transition hover:bg-white"
            >
              Get a Quote
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:8186264592"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white transition hover:bg-white/[0.09]"
            >
              <Phone size={16} className="text-[#d8c7a3]" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Full-width divider line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-0">
        <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.22em] text-white/40 transition hover:text-[#d8c7a3]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Executive Luxury Rides
          </p>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <p className="mt-5 text-center text-xs uppercase tracking-[0.22em] text-white/25">
        Los Angeles • Beverly Hills • Malibu • LAX • Private Travel
      </p>
    </footer>
  );
}