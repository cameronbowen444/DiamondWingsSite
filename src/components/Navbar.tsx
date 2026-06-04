import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#08090b]/75 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src={logo}
              alt="Luxury Chauffeur Logo"
              className="h-10 w-auto shrink-0 md:h-14"
              priority
            />

            <div className="min-w-0 leading-tight">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d8c7a3] md:text-xs">
                Private Chauffeur
              </p>

              <h1 className="truncate text-sm font-bold tracking-wide text-white md:text-lg">
                Executive Luxury Rides
              </h1>
            </div>
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:8186264592"
              className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-semibold text-white transition hover:border-[#d8c7a3]/60 hover:bg-white/[0.08]"
            >
              <Phone
                size={18}
                className="text-[#d8c7a3] transition group-hover:scale-110"
              />
              <span>Call</span>
              <span className="text-white/70">(818) 626 4592</span>
            </a>

            <Link
              href="https://book.mylimobiz.com/v4/diamondwings"
              target="_blank"
              className="rounded-full bg-[#f2eadc] px-8 py-3 font-bold text-[#090909] shadow-[0_0_35px_rgba(242,234,220,0.18)] transition hover:bg-white hover:shadow-[0_0_45px_rgba(242,234,220,0.28)]"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile sticky bottom buttons */}
      <div className="fixed bottom-0 left-0 z-50 grid w-full grid-cols-2 gap-3 border-t border-white/10 bg-[#08090b]/90 px-4 py-4 backdrop-blur-2xl lg:hidden">
        <a
          href="tel:8186264592"
          className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-4 text-sm font-bold text-white shadow-2xl"
        >
          <Phone size={18} className="text-[#d8c7a3]" />
          Call
        </a>

        <Link
          href="https://book.mylimobiz.com/v4/diamondwings"
          target="_blank"
          className="flex items-center justify-center rounded-full bg-[#f2eadc] px-4 py-4 text-sm font-bold text-[#090909] shadow-2xl"
        >
          Get a Quote
        </Link>
      </div>
    </>
  );
}