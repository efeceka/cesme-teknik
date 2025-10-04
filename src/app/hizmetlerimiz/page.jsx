import ServicesPage from "@/components/hizmetlerimiz/ServicesPage";

export const metadata = {
  title: "Hizmetlerimiz | Çeşme Teknik",
  description:
    "Çeşme Teknik — Su kaçağı tespiti, tıkanıklık açma, gömme rezervuar tamiri, mutfak gideri açma, kanal görüntüleme ve tüm tesisat çözümleri. Kırmadan-dökmeden profesyonel hizmet.",
  keywords: [
    "Çeşme Teknik hizmetler",
    "Çeşme tesisat",
    "su kaçağı tespiti",
    "tıkanıklık açma",
    "kanal görüntüleme",
    "tesisat tamiri",
    "Çeşme usta",
  ],
  openGraph: {
    title: "Hizmetlerimiz | Çeşme Teknik",
    description:
      "Tesisatla ilgili tüm çözümler bir arada: su kaçağı tespiti, tıkanıklık açma, mutfak gideri açma, gömme rezervuar tamiri ve kanal görüntüleme.",
    url: "https://www.cesmeteknikkanalacma.com/hizmetlerimiz",
    siteName: "Çeşme Teknik",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Çeşme Teknik - Hizmetlerimiz",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hizmetlerimiz | Çeşme Teknik",
    description:
      "Su kaçağı tespiti, tıkanıklık açma, mutfak gideri açma ve tüm tesisat çözümleri için profesyonel destek alın.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://www.cesmeteknikkanalacma.com/hizmetlerimiz",
  },
};

export default function Page() {
  return <ServicesPage />;
}