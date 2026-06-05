import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Reviews from "@/components/Reviews";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";
import TrustedCompanies from "@/components/TrustedCompanies";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090b] pb-24 text-white md:pb-0">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Services />
      <Fleet />
      <Locations />
      <Reviews />
      <Footer />
    </main>
  );
}