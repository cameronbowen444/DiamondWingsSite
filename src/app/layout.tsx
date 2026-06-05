import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diamond-wings-site.vercel.app"),
  title: {
    default: "Diamond Wings Chauffeur | Luxury Private Transportation",
    template: "%s | Diamond Wings Chauffeur",
  },
  description:
    "Diamond Wings Chauffeur provides luxury private transportation for airport transfers, executive travel, weddings, events, hourly chauffeur service, and premium rides throughout Los Angeles and surrounding areas.",

  keywords: [
    "Diamond Wings Chauffeur",
    "Diamond Wings",
    "luxury chauffeur service",
    "private chauffeur",
    "Los Angeles chauffeur",
    "LA chauffeur service",
    "airport transfer Los Angeles",
    "LAX chauffeur service",
    "Burbank airport transportation",
    "private transportation LA",
    "executive car service",
    "corporate transportation",
    "black car service",
    "luxury SUV service",
    "private driver Los Angeles",
    "wedding transportation",
    "event transportation",
    "hourly chauffeur service",
    "VIP transportation",
    "luxury airport transfer",
  ],

  authors: [{ name: "Diamond Wings Chauffeur" }],
  creator: "Diamond Wings Chauffeur",
  publisher: "Diamond Wings Chauffeur",

  category: "Luxury Transportation",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Diamond Wings Chauffeur | Luxury Private Transportation",
    description:
      "Book premium private chauffeur service for airport transfers, business travel, weddings, events, hourly rides, and luxury transportation throughout Los Angeles.",
    url: "https://diamond-wings-inquiry.vercel.app",
    siteName: "Diamond Wings Chauffeur",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/car3.png",
        width: 1200,
        height: 630,
        alt: "Diamond Wings Chauffeur luxury vehicle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diamond Wings Chauffeur | Luxury Private Transportation",
    description:
      "Luxury chauffeur service for airport transfers, executive travel, private events, weddings, hourly bookings, and VIP transportation in Los Angeles.",
    images: ["/car3.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}