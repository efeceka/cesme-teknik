"use client";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Clock, ShieldCheck, Wrench, PhoneCall, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative bg-[#0F2B4C] text-white">
        {/* bg görsel (opsiyonel) */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0F2B4C]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center gap-3">
            <span className="inline-block h-[2px] w-10 bg-white/50" />
            <span className="text-xs sm:text-sm tracking-widest text-white/80">HAKKIMIZDA</span>
          </div>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold leading-[1.1]">
            Çeşme Teknik: <span className="text-[#F2C94C]">Güvenilir Tesisat Çözümleri</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            10+ yıllık tecrübemizle, modern ekipman ve şeffaf fiyat anlayışıyla kırmadan–dökmeden
            kalıcı çözümler üretiyoruz.
          </p>
          <div className="mt-6">
            <Link
              href="tel:05394086760"
              className="inline-flex items-center gap-2 rounded-full bg-[#F2C94C] text-[#0F2B4C] font-semibold px-6 py-3 shadow hover:brightness-95 transition"
            >
              <PhoneCall className="h-5 w-5" />
              Hemen Ara
            </Link>
          </div>
        </div>
      </section>

      {/* GİRİŞ (metin + görsel) */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              İşimizi; <span className="text-[#0F2B4C]">tecrübe, teknoloji</span> ve <span className="text-[#0F2B4C]">şeffaflık</span> ile yapıyoruz.
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Çeşme ve çevresinde su kaçağı tespiti, tıkanıklık açma, tadilat & bakım gibi
              tesisat ihtiyaçlarınızda yanınızdayız. Gelişmiş cihazlarla gereksiz kırma–dökme olmadan,
              net planlama ve temiz işçilikle ilerliyoruz.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Randevu süreçlerimiz hızlı, fiyatlarımız nettir. Her işin sonunda memnuniyetinizi ölçer,
              uzun ömürlü çözümler sunarız.
            </p>

            {/* Değerler mini listesi */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <li className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.15)]">
                <div className="flex items-center gap-2 text-[#0F2B4C] font-semibold">
                  <ShieldCheck className="h-5 w-5" /> Güven
                </div>
                <p className="mt-1 text-sm text-gray-600">Şeffaf süreç & garanti.</p>
              </li>
              <li className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.15)]">
                <div className="flex items-center gap-2 text-[#0F2B4C] font-semibold">
                  <Clock className="h-5 w-5" /> Hız
                </div>
                <p className="mt-1 text-sm text-gray-600">Aynı gün çözüm seçenekleri.</p>
              </li>
              <li className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.15)]">
                <div className="flex items-center gap-2 text-[#0F2B4C] font-semibold">
                  <Wrench className="h-5 w-5" /> Ustalık
                </div>
                <p className="mt-1 text-sm text-gray-600">Kaliteli malzeme & işçilik.</p>
              </li>
            </ul>
          </div>

          <div className="relative h-72 sm:h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/form.webp"
              alt="Çeşme Teknik ekip"
              fill
              sizes="(min-width:1024px) 50vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* İSTATİSTİK ŞERİDİ */}
      <section className="bg-[#F7F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-2xl bg-[#F2C94C] grid grid-cols-3 text-center overflow-hidden shadow-[0_12px_40px_-16px_rgba(0,0,0,0.25)]">
            <div className="p-5 sm:p-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0F2B4C]">10+</div>
              <div className="mt-1 text-sm font-medium text-[#0F2B4C]/80">Yıl Tecrübe</div>
            </div>
            <div className="p-5 sm:p-6 border-x border-[#0F2B4C]/20">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0F2B4C]">10B+</div>
              <div className="mt-1 text-sm font-medium text-[#0F2B4C]/80">Tamamlanan İş</div>
            </div>
            <div className="p-5 sm:p-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0F2B4C]">10/10</div>
              <div className="mt-1 text-sm font-medium text-[#0F2B4C]/80">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* MİSYON & VİZYON */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 p-6 bg-white shadow-[0_10px_30px_-16px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-2 text-[#0F2B4C]">
                <BadgeCheck className="h-5 w-5" />
                <h3 className="font-bold text-gray-900">Misyonumuz</h3>
              </div>
              <p className="mt-2 text-gray-700">
                İhtiyaçlarınıza en uygun çözümü hızlıca planlayıp, kaliteli işçilikle
                güvenle teslim etmek. Her işte şeffaf fiyat, net süreç ve kalıcı sonuç.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-6 bg-white shadow-[0_10px_30px_-16px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-2 text-[#0F2B4C]">
                <Sparkles className="h-5 w-5" />
                <h3 className="font-bold text-gray-900">Vizyonumuz</h3>
              </div>
              <p className="mt-2 text-gray-700">
                Çeşme’de tesisat denince akla gelen ilk marka olmak; modern teknoloji
                ve güçlü ekip yapısıyla standartları sürekli yükseltmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZAMAN ÇİZELGESİ / NASIL ÇALIŞIRIZ */}
      <section className="bg-[#F7F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3">
            <span className="inline-block h-[2px] w-10 bg-[#0F2B4C]" />
            <span className="text-xs sm:text-sm tracking-widest text-[#0F2B4C]/80">SÜRECİMİZ</span>
          </div>
          <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900">
            Nasıl Çalışıyoruz?
          </h3>

          <ol className="mt-6 space-y-4">
            {[
              { t: "Talep ve Ön Görüşme", d: "Kısa bir telefon ya da form ile ihtiyacınızı öğreniriz." },
              { t: "Keşif ve Planlama", d: "Adresinizde durumu analiz edip çözüm yolunu belirleriz." },
              { t: "Uygulama", d: "Gereksiz kırma–dökme olmadan temiz ve hızlı uygulama yaparız." },
              { t: "Teslim ve Bilgilendirme", d: "İşi teslim eder, bakım/önlem önerileri sunarız." },
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="h-8 w-8 shrink-0 grid place-items-center rounded-full bg-[#0F2B4C] text-white text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{s.t}</div>
                  <div className="text-sm text-gray-600">{s.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ALT CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl bg-[#0F2B4C] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-xs tracking-widest text-white/70">İLETİŞİM</div>
              <h4 className="text-2xl font-extrabold mt-1">Sorularınız mı var? Hemen konuşalım.</h4>
              <p className="text-white/80 mt-1">Size en uygun zaman için randevu oluşturalım.</p>
            </div>
            <Link
              href="tel:05394086760"
              className="inline-flex items-center gap-2 rounded-full bg-[#F2C94C] text-[#0F2B4C] font-semibold px-6 py-3 shadow hover:brightness-95 transition self-start md:self-auto"
            >
              <PhoneCall className="h-5 w-5" />
             0539 408 67 60
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}