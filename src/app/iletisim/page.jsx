import ContactPage from "@/components/iletisim/ContactPage";

export const metadata = {
  title: "İletişim | Çeşme Teknik",
  description:
    "Randevu, teklif ve sorularınız için Çeşme Teknik ile iletişime geçin. Telefon: 0539 408 67 60 • Adres: Musalla Mahallesi 1045. Sokak No: 4/2, Çeşme / İzmir.",
  keywords: [
    "Çeşme Teknik iletişim",
    "tesisatçı iletişim",
    "su kaçağı iletişim",
    "Çeşme tesisat ustası",
    "Çeşme tıkanıklık açma",
  ],
  openGraph: {
    title: "İletişim | Çeşme Teknik",
    description:
      "Çeşme Teknik ile iletişime geçin — Musalla Mahallesi 1045. Sokak No: 4/2, Çeşme / İzmir. Telefon: 0539 408 67 60",
    url: "https://www.cesmeteknikkanalacma.com/iletisim",
    siteName: "Çeşme Teknik",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Çeşme Teknik - İletişim",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | Çeşme Teknik",
    description:
      "Randevu, teklif veya sorularınız için hemen bize ulaşın. 0539 408 67 60 • Musalla Mah. 1045. Sk. No: 4/2, Çeşme / İzmir",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://www.cesmeteknikkanalacma.com/iletisim",
  },
};

export default function Page() {
  return <ContactPage />;
}