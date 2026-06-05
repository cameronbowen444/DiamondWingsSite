"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "#fleet" },
  { name: "Locations", href: "#locations" },
  { name: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#08090b]/80 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src={logo}
              alt="Diamond Wings Chauffeur Logo"
              className="h-10 w-auto shrink-0 md:h-12 lg:h-14"
              priority
            />

            <div className="min-w-0 leading-tight">
              <p className="text-[10px] font-thin uppercase tracking-[0.28em] text-[#d8c7a3] md:text-[10px] lg:text-xs">
                Private Chauffeur
              </p>

              <h1 className="truncate text-sm font-semibold tracking-wide text-white md:text-sm lg:text-lg">
                Executive Luxury Rides
              </h1>
            </div>
          </Link>

          {/* Desktop / tablet links - show immediately at md */}
          <div className="hidden flex-1 items-center justify-center gap-4 md:flex lg:gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px]  uppercase tracking-[0.16em] text-white/65 transition hover:text-[#d8c7a3] lg:text-xs lg:tracking-[0.2em]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop quote button only */}
          <div className="hidden items-center md:flex">
            <Link
              href="https://book.mylimobiz.com/v4/diamondwings"
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d0a356] px-2 py-3 text-xs text-[#090909] shadow-[0_0_45px_rgba(242,234,220,0.16)] transition hover:bg-white lg:gap-3 lg:px-6 lg:text-sm whitespace-nowrap"
            >
              Get Quote
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl transition hover:bg-white/[0.08] md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen side nav */}
      <div
        className={`fixed inset-0 z-[60] bg-[#08090b] text-white transition duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[#d0a356]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 flex min-h-screen flex-col px-5 pb-6 pt-5">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex min-w-0 items-center gap-3"
            >
              <Image
                src={logo}
                alt="Diamond Wings Chauffeur Logo"
                className="h-11 w-auto shrink-0"
                priority
              />

              <div className="min-w-0 leading-tight">
                <p className="text-[10px] font-thin uppercase tracking-[0.28em] text-[#d8c7a3]">
                  Private Chauffeur
                </p>

                <h2 className="truncate text-sm font-semibold tracking-wide text-white">
                  Executive Luxury Rides
                </h2>
              </div>
            </Link>

            <button
              onClick={closeMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl transition hover:bg-white/[0.08]"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mt-14 flex flex-1 flex-col justify-between">
            <nav className="space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <span className="text-2xl  tracking-wide text-white transition group-hover:text-[#d8c7a3]">
                    {link.name}
                  </span>

                  <span className="text-xs uppercase tracking-[0.25em] text-white/35">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-10 grid gap-3">
              <a
                href="tel:8186264592"
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-4 text-sm  text-white backdrop-blur-xl"
              >
                <Phone size={18} className="text-[#d8c7a3]" />
                Call Now
              </a>

              <Link
                href="https://book.mylimobiz.com/v4/diamondwings"
                target="_blank"
                onClick={closeMenu}
                className="group flex items-center justify-center gap-3 rounded-full bg-[#d0a356] px-5 py-4 text-sm  text-[#090909] shadow-[0_0_45px_rgba(242,234,220,0.16)]"
              >
                Get a Quote
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}