// src/app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/common/FloatingButtons";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_NAME = "Çeşme Teknik";
const SITE_URL = "https://www.cesmeteknikkanalacma.com";
const PHONE_DISPLAY = "0539 408 67 60";
const PHONE_INTL = "+905394086760";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} | Çeşme Tesisat Hizmetleri`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Çeşme Teknik: Su kaçağı tespiti, tıkanıklık açma, klozet & rezervuar tamiri, kanal görüntüleme ve tesisat tadilat/bakım hizmetleri. Kırmadan-dökmeden, hızlı ve garantili çözüm.",
  keywords: [
    "Çeşme tesisat",
    "Çeşme Teknik Kanal Açma",
    "su kaçağı tespiti",
    "tıkanıklık açma",
    "klozet tamiri",
    "kanal görüntüleme",
    "tesisatçı Çeşme",
    "Çeşme Teknik",
    "izmir tesisat",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  category: "HomeImprovement",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Çeşme Tesisat Hizmetleri`,
    description:
      "Çeşme ve çevresinde kırmadan-dökmeden profesyonel tesisat çözümleri. Hızlı keşif, net fiyat, temiz işçilik.",
    images: [
      {
        url: "/og.png", // 1200x630 önerilir
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Çeşme Tesisat`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Çeşme Tesisat Hizmetleri`,
    description:
      "Su kaçağı tespiti, tıkanıklık açma, tadilat ve bakım dâhil profesyonel tesisat hizmetleri.",
    images: ["/og.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  themeColor: "#0F2B4C",
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  other: {
    "geo.region": "TR-35",
    "geo.placename": "Çeşme",
    "geo.position": "38.323;26.302",
    ICBM: "38.323, 26.302",
  },
};

export default function RootLayout({ children }) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/images/logo.png`,
    telephone: PHONE_INTL,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Musalla Mahallesi 1045 Sokak No: 4/2",
      addressLocality: "Çeşme",
      addressRegion: "İzmir",
      addressCountry: "TR",
    },
    areaServed: ["Çeşme", "İzmir"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    sameAs: [`https://wa.me/${PHONE_INTL.replace("+", "")}`],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE_INTL,
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["tr"],
      },
    ],
  };

  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* JSON-LD (SEO) */}
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Header />
        {children}
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}