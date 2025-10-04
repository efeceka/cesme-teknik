"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  Search,
  ShowerHead,
  Droplets,
  UtensilsCrossed,
  Home,
  LocateFixed,
  Camera,
  ShieldCheck,
  Clock,
  Phone,
} from "lucide-react";

const services = [
  {
    slug: "su-kacagi-tespiti",
    title: "Su Kaçağı Tespiti",
    desc: "Termal kamera ve akustik dinleme ile kırmadan, noktasal tespit.",
    Icon: Droplets,
  },
  {
    slug: "tikaniklik-acma",
    title: "Tıkanıklık Açma",
    desc: "Robot ve kamera destekli profesyonel gider açma.",
    Icon: Search,
  },
  {
    slug: "gomme-klozet-tamiri",
    title: "Gömme/Klozet Tamiri",
    desc: "Rezervuar, sifon ve bağlantı arızalarında hızlı çözüm.",
    Icon: ShowerHead,
  },
  {
    slug: "mutfak-gideri-acma",
    title: "Mutfak Gideri Açma",
    desc: "Yağ ve tortu kaynaklı mutfak tıkanıklıklarına kalıcı müdahale.",
    Icon: UtensilsCrossed,
  },
  {
    slug: "ev-tadilat-hizmetleri",
    title: "Ev Tadilat Hizmetleri",
    desc: "Banyo/mutfak tesisat yenileme ve düzenleme.",
    Icon: Home,
  },
  {
    slug: "kayip-logar-tespiti",
    title: "Kayıp Logar Tespiti",
    desc: "Yeraltı hatlarının hassas konumlandırılması.",
    Icon: LocateFixed,
  },
  {
    slug: "kanal-goruntuleme",
    title: "Kanal Görüntüleme",
    desc: "Borulardaki sorunlar için HD kamera ile detaylı inceleme.",
    Icon: Camera,
  },
  {
    slug: "genel-tesisat",
    title: "Genel Tesisat",
    desc: "Temiz/atıksu hatları, bakım ve onarım işleri.",
    Icon: Wrench,
  },
];

const faqs = [
  {
    q: "Kırmadan su kaçağı tespiti mümkün mü?",
    a: "Evet. Termal kamera ve akustik cihazlarla kaçağı duvar/zemin kırmadan noktasal tespit ediyoruz.",
  },
  {
    q: "Fiyatlandırma nasıl yapılıyor?",
    a: "Keşif sonrası iş kapsamına göre net fiyat veriyoruz; sürpriz maliyet çıkarılmaz.",
  },
  {
    q: "Acil durumlarda aynı gün gelebiliyor musunuz?",
    a: "Çeşme ve çevresinde yoğunluğa bağlı olarak aynı gün müdahale seçeneklerimiz var.",
  },
  {
    q: "İşçilik garantisi veriyor musunuz?",
    a: "Evet. Uygulanan işleme göre değişen sürelerde işçilik garantisi sunuyoruz.",
  },
];

function ServiceCard({ slug, title, desc, Icon }) {
  const RenderIcon = Icon || Wrench;
  return (
    <article className="group rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-[0_8px_28px_-18px_rgba(0,0,0,0.2)] hover:shadow-[0_18px_50px_-20px_rgba(0,0,0,0.25)] transition">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 grid place-items-center rounded-xl bg-[#0F2B4C]/5 ring-1 ring-[#0F2B4C]/10 text-[#0F2B4C]">
          <RenderIcon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <Link
          href={`/hizmetlerimiz/${slug}`}
          className="inline-flex items-center gap-2 text-[#0F2B4C] font-semibold hover:underline"
        >
          Detayları Gör »
        </Link>
        <Link
          href="tel:05394086760"
          className="inline-flex items-center gap-2 rounded-full bg-[#F2C94C] text-[#0F2B4C] px-3 py-1.5 text-xs font-semibold hover:brightness-95 transition"
        >
          <Phone className="h-4 w-4" />
          Hemen Ara
        </Link>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative bg-[#0F2B4C] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/hero.jpg" // opsiyonel arka plan
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-[#0F2B4C]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex items-center gap-3">
            <span className="inline-block h-[2px] w-10 bg-white/50" />
            <span className="text-xs sm:text-sm tracking-widest text-white/80">HİZMETLERİMİZ</span>
          </div>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold leading-[1.1]">
            İhtiyacınıza Uygun <span className="text-[#F2C94C]">Profesyonel Çözümler</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Su kaçağı tespiti, tıkanıklık açma, tadilat ve bakım dâhil tüm tesisat
            işlerinizde, hızlı ve şeffaf süreçlerle kalıcı sonuçlar üretiyoruz.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="tel:05394086760"
              className="inline-flex items-center gap-2 rounded-full bg-[#F2C94C] text-[#0F2B4C] font-semibold px-6 py-3 shadow hover:brightness-95 transition"
            >
              <Phone className="h-5 w-5" />
              Hemen Ara
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

      {/* HİZMET KARTLARI */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* etiketler (opsiyonel) */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {["Kaçak Tespiti", "Tıkanıklık", "Banyo", "Mutfak", "Genel Tesisat"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((item) => (
              <ServiceCard key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* NEDEN BİZ? (şerit) */}
      <section className="bg-[#F7F7F8] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-5 sm:p-6 lg:p-8 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F2B4C]/5 ring-1 ring-[#0F2B4C]/10 text-[#0F2B4C]">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900">Şeffaf Fiyat & Garanti</div>
                  <p className="text-sm text-gray-600">Net fiyatlandırma, işçilik garantisi.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F2B4C]/5 ring-1 ring-[#0F2B4C]/10 text-[#0F2B4C]">
                  <Clock className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900">Hızlı Müdahale</div>
                  <p className="text-sm text-gray-600">Aynı gün çözüm seçenekleri.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F2B4C]/5 ring-1 ring-[#0F2B4C]/10 text-[#0F2B4C]">
                  <Wrench className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900">Kaliteli İşçilik</div>
                  <p className="text-sm text-gray-600">Modern ekipman, temiz uygulama.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-block h-[2px] w-10 bg-[#0F2B4C]" />
            <span className="text-xs sm:text-sm tracking-widest text-[#0F2B4C]/80">SSS</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900">Sık Sorulan Sorular</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.15)]"
              >
                <div className="font-semibold text-gray-900">{f.q}</div>
                <p className="mt-1 text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALT CTA */}
      <section className="bg-white pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#0F2B4C] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.35)]">
            <div>
              <div className="text-xs tracking-widest text-white/70">İLETİŞİME GEÇİN</div>
              <h3 className="text-2xl font-extrabold mt-1">Hangi hizmete ihtiyacınız var?</h3>
              <p className="text-white/80 mt-1">Kısa bilgi verin, aynı gün dönüş yapalım.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-full bg-[#F2C94C] text-[#0F2B4C] font-semibold px-6 py-3 hover:brightness-95 transition"
              >
                Teklif Al »
              </Link>
              <Link
                href="tel:05394086760"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white font-semibold px-6 py-3 hover:bg-white/15 transition"
              >
                <Phone className="h-5 w-5" />
                Ara
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}