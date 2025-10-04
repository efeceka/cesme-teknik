"use client";
import Image from "next/image";
import Link from "next/link";
import { Wrench, BadgeCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-x-hidden bg-[#0F2B4C] min-h-[560px] pb-24 sm:pb-20">
      {/* Lacivert alan */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start
                      px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-6 lg:pb-10">
        {/* SOL: Metin */}
        <div className="text-white text-center lg:text-left">
          {/* Eyebrow */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <span className="inline-block h-[2px] w-10 bg-white/60" />
            <span className="text-white/80 text-sm tracking-wide">Çeşme Teknik</span>
          </div>

          {/* Başlık */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
            Tesisat Sorunlarınızı <span className="text-[#F2C94C]">Hızla</span>
            <br /> Çözüyoruz!
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
            Ev ya da iş yerinizdeki tesisat sıkıntılarını, gelişmiş cihazlarımızla
            kırma–dökme olmadan çözüyoruz. Net fiyat, temiz işçilik ve hızlı sonuç:
            Çeşme ve çevresinde güvenle yanınızdayız.
          </p>

          <div className="mt-8">
            <Link
              href="tel:05394086760"
              className="inline-flex items-center gap-2 rounded-full bg-[#F2C94C] text-[#0F2B4C] font-semibold px-6 py-3 shadow-md hover:shadow-lg transition mx-auto lg:mx-0"
            >
              Bize Ulaşın! <span className="text-xl">»</span>
            </Link>
          </div>
        </div>

        {/* SAĞ: Görsel */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[550px] flex items-end overflow-visible">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero2.png"
              alt="Çeşme Teknik Usta"
              fill
              priority
              sizes="(min-width:1024px) 50vw, 90vw"
              className="
                object-contain object-bottom
                pointer-events-none select-none
                scale-150 sm:scale-[1.3] md:scale-[1.2] lg:scale-[1.5]
                origin-bottom
              "
            />
          </div>
        </div>
      </div>

      {/* Beyaz zemin kıvrımı */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white rounded-t-[24px]" />

      {/* Overlap kartlar */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] sm:bottom-[-10px] md:bottom-6 w-full max-w-6xl px-4 sm:px-6 lg:px-8 z-30">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_.9fr] gap-6">
          {/* Kart 1 */}
          <div className="rounded-2xl bg-white shadow-xl p-5 sm:p-6 flex items-start gap-4">
            <div className="shrink-0 mt-1 text-[#0F2B4C]">
              <Wrench className="h-10 w-10 opacity-90" />
            </div>
            <div>
              <h3 className="font-semibold text-[#0F2B4C]">Kırmadan dökmeden çözüm</h3>
              <p className="text-sm text-gray-600">
                Termal kamera ve robot ekipmanlarla hızlı tespit, temiz uygulama.
              </p>
            </div>
          </div>

          {/* Kart 2 */}
          <div className="rounded-2xl bg-[#F2C94C] shadow-xl p-5 sm:p-6 flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="shrink-0 mt-1 text-[#0F2B4C]">
                <BadgeCheck className="h-10 w-10 opacity-90" />
              </div>
              <div>
                <p className="font-extrabold text-[#0F2B4C]">2000'den beri güvenilir hizmet</p>
                <p className="text-sm text-[#0F2B4C]/80 -mt-1">Memnuniyet odaklı çalışma</p>
              </div>
            </div>

            <Link
              href="/hakkimizda"
              className="self-center rounded-full bg-[#0F2B4C] text-white px-4 py-2 text-sm font-semibold hover:bg-[#0c223f] transition"
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}