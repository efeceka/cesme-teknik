import About from "@/components/hakkimizda/About";

const SITE_URL = "https://www.cesmeteknikkanalacma.com";

export const metadata = {
  title: "Hakkımızda | Çeşme Teknik",
  description:
    "Çeşme Teknik hakkında bilgi alın: 10+ yıl tecrübe, net fiyat, temiz işçilik ve kırmadan–dökmeden kalıcı tesisat çözümleri.",
  alternates: {
    canonical: `${SITE_URL}/hakkimizda`,
  },
  openGraph: {
    title: "Hakkımızda | Çeşme Teknik",
    description:
      "10+ yıllık deneyimimizle su kaçağı tespiti, tıkanıklık açma ve tesisat bakımında güvenilir çözümler sunuyoruz.",
    url: `${SITE_URL}/hakkimizda`,
    siteName: "Çeşme Teknik",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Çeşme Teknik - Hakkımızda",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda | Çeşme Teknik",
    description:
      "Kırmadan–dökmeden profesyonel tesisat çözümleri. Çeşme ve çevresinde güvenilir hizmet.",
    images: ["/og.png"],
  },
};

export default function Page() {
  return <About />;
}