import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Wrench,
  Search,
  ShowerHead,
  Droplets,
  UtensilsCrossed,
  Home,
  LocateFixed,
  Camera,
  Phone,
} from "lucide-react";

/** Tüm hizmetler — görselsiz yapı */
const services = {
  "su-kacagi-tespiti": {
    title: "Su Kaçağı Tespiti",
    desc: "Kırmadan dökmeden, akustik dinleme ve termal temelli yöntemlerle kaçağı noktasal tespit ediyoruz.",
    icon: Droplets,
    bullets: [
      "Termal ve akustik cihazlarla milimetrik tespit",
      "Gereksiz kırma–dökme yok, minimum müdahale",
      "Aynı gün keşif ve net fiyat",
      "Onarım sonrası kaçak testi ve raporlama",
    ],
  },
  "tikaniklik-acma": {
    title: "Tıkanıklık Açma",
    desc: "Robot ve kamera destekli profesyonel gider açma işlemleri ile kalıcı çözüm.",
    icon: Search,
    bullets: [
      "Kamera ile tıkanıklık sebebini anında görüntüleme",
      "Robot cihazlarla kırmadan açma",
      "Koku ve tekrar tıkanmayı önleyici bakım önerileri",
      "Lavabo, tuvalet, mutfak ve ana hat uygulamaları",
    ],
  },
  "gomme-klozet-tamiri": {
    title: "Gömme Rezervuar & Klozet Tamiri",
    desc: "Rezervuar dolmuyor, sürekli akıtıyor veya sifon çalışmıyorsa, hızlı ve temiz onarım sağlıyoruz.",
    icon: ShowerHead,
    bullets: [
      "Tüm marka gömme rezervuar sistemleri",
      "Parça değişimi, conta/bobin/sifon onarımı",
      "Kırmadan kaset içi müdahale yöntemleri",
      "Sızdırmazlık testleri ve garanti",
    ],
  },
  "mutfak-gideri-acma": {
    title: "Mutfak Gideri Açma",
    desc: "Yağ ve tortu kaynaklı tıkanıklıklarda derin temizlik; tekrar etmeyecek şekilde çözüm.",
    icon: UtensilsCrossed,
    bullets: [
      "Yağ tabakası ve tortu temizliği",
      "Kamera ile noktasal teşhis",
      "Koku giderme ve bakım tavsiyeleri",
      "Mutfak, bulaşık giderleri ve kolektör hatları",
    ],
  },
  "ev-tadilat-hizmetleri": {
    title: "Ev Tadilat Hizmetleri",
    desc: "Banyo–mutfak tesisat yenileme, kombi ve hat düzenlemeleri; planlı ve zamanında teslim.",
    icon: Home,
    bullets: [
      "Temiz/atıksu hatlarının yenilenmesi",
      "Isıtma, kombi ve radyatör tesisatı",
      "Malzeme seçimi ve şeffaf metraj",
      "Planlı iş programı ve zamanında teslim",
    ],
  },
  "kayip-logar-tespiti": {
    title: "Kayıp Logar Tespiti",
    desc: "Yeraltı hatlarının güzergâh ve logar konum tespiti; kazı öncesi risk azaltma.",
    icon: LocateFixed,
    bullets: [
      "Hat yönü ve derinlik tayini",
      "Kayıp baca/rogar kapağı tespiti",
      "Projelendirme öncesi keşif",
      "Gereksiz kazıları önleyen raporlama",
    ],
  },
  "kanal-goruntuleme": {
    title: "Kanal Görüntüleme",
    desc: "HD kamera ile boru içi teşhis; çatlak, eğim ve kırık analizleri.",
    icon: Camera,
    bullets: [
      "HD kamera ile detaylı inceleme",
      "Çatlak/kırık/eğim sorunlarının tespiti",
      "Rapor ve çözüm önerileri",
      "Tadilat planlaması için veri sağlama",
    ],
  },
  "genel-tesisat": {
    title: "Genel Tesisat",
    desc: "Temiz ve atıksu tesisatları, bakım, onarım ve yeni kurulumlar — uçtan uca hizmet.",
    icon: Wrench,
    bullets: [
      "Sızıntı, basınç ve debi problemlerinin çözümü",
      "Armatür, vana ve bağlantı elemanları",
      "Yeni hat çekimi ve revizyon",
      "Düzenli bakım ve kontrol",
    ],
  },
};

const SITE_URL = "https://www.cesmeteknikkanalacma.com";

/** SEO */
export async function generateMetadata({ params }) {
  const s = services[params.slug];
  if (!s) {
    return {
      title: "Hizmet Bulunamadı | Çeşme Teknik",
      robots: { index: false, follow: false },
    };
  }
  const url = `${SITE_URL}/hizmetlerimiz/${params.slug}`;
  return {
    title: `${s.title} | Çeşme Teknik`,
    description: s.desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${s.title} | Çeşme Teknik`,
      description: s.desc,
      url,
      siteName: "Çeşme Teknik",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: s.title }],
      locale: "tr_TR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.title} | Çeşme Teknik`,
      description: s.desc,
      images: ["/og.png"],
    },
  };
}

/** Statik üretim için tüm slug'lar */
export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default function ServiceDetailPage({ params }) {
  const service = services[params.slug];
  if (!service) return notFound();

  const Icon = service.icon ?? Wrench;

  return (
    <div className="flex flex-col">
      {/* HERO — görselsiz, degrade arka plan */}
      <section className="relative bg-gradient-to-b from-[#0F2B4C] to-[#163556] text-white">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex items-center justify-center">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 text-[#F2C94C]">
              <Icon className="h-8 w-8" />
            </span>
          </div>

          <h1 className="mt-5 text-center text-3xl sm:text-5xl font-extrabold">{service.title}</h1>
          <p className="mt-3 text-center text-white/80 max-w-2xl mx-auto">{service.desc}</p>

          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="tel:05394086760"
              className="inline-flex items-center gap-2 rounded-full bg-[#F2C94C] text-[#0F2B4C] font-semibold px-6 py-3 shadow hover:brightness-95 transition"
            >
              <Phone className="h-5 w-5" />
              0539 408 67 60
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white font-semibold px-6 py-3 hover:bg-white/15 transition"
            >
              Teklif Al »
            </Link>
          </div>
        </div>
      </section>

      {/* İÇERİK — madde listeleri, görselsiz */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.18)]">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">Neler Yapıyoruz?</h2>

            <ul className="mt-4 space-y-3">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F2B4C] text-white text-[11px]">
                    {i + 1}
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-[#F7F7F8] text-gray-700 text-sm">
              Ücretsiz ön görüşme ve hızlı randevu için bize ulaşın.
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="tel:05394086760"
                className="inline-flex items-center gap-2 rounded-full bg-[#0F2B4C] text-white font-semibold px-6 py-3 hover:bg-[#0c223f] transition"
              >
                <Phone className="h-5 w-5" />
                0539 408 67 60
              </Link>
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center gap-2 rounded-full bg-[#F2C94C] text-[#0F2B4C] font-semibold px-6 py-3 hover:brightness-95 transition"
              >
                ← Tüm Hizmetler
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}