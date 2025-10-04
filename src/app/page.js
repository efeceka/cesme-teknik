import Advantages from "@/components/anasayfa/Advantages";
import Hero from "@/components/anasayfa/Hero";
import StepsAndLead from "@/components/anasayfa/Randevu";
import ServicesSection from "@/components/anasayfa/ServicesSection";
import Testimonials from "@/components/anasayfa/Testimonials";
import WhyBest from "@/components/anasayfa/WhyBest";
import WhyUs from "@/components/anasayfa/WhyUs";

export const metadata = {
  title: "Çeşme Teknik | Çeşme Tesisat Hizmetleri",
  description:
    "Çeşme Teknik — Su kaçağı tespiti, tıkanıklık açma, klozet tamiri, kanal görüntüleme ve tadilat/bakım dâhil profesyonel tesisat hizmetleri. Kırmadan-dökmeden, hızlı ve garantili çözüm.",
  keywords: [
    "Çeşme tesisat",
    "su kaçağı tespiti",
    "tıkanıklık açma",
    "klozet tamiri",
    "kanal görüntüleme",
    "tesisatçı Çeşme",
    "Çeşme Teknik",
  ],
  openGraph: {
    title: "Çeşme Teknik | Çeşme Tesisat Hizmetleri",
    description:
      "Çeşme ve çevresinde kırmadan-dökmeden profesyonel tesisat çözümleri. Hızlı keşif, net fiyat, temiz işçilik.",
    url: "https://www.cesmeteknikkanalacma.com",
    siteName: "Çeşme Teknik",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Çeşme Teknik - Profesyonel Tesisat Hizmetleri",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Çeşme Teknik | Çeşme Tesisat Hizmetleri",
    description:
      "Su kaçağı tespiti, tıkanıklık açma, tadilat ve bakım dâhil profesyonel tesisat hizmetleri.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://www.cesmeteknikkanalacma.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUs />
      <StepsAndLead />
      <WhyBest />
      <Testimonials />
      <Advantages />
    </>
  );
}