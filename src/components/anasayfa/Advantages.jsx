"use client";
import Image from "next/image";

const headings = [
  "Uçtan Uca Tesisat Çözümleri",
  "İhtiyaca Özel Planlama",
  "Kalite ve Zamanında Teslim",
  "Robotla Tıkanıklık Açma",
  "Acil Durumda Hızlı Müdahale",
];

export default function Advantages() {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
        {/* SOL: Usta görseli + sarı alıntı kartı */}
        <div className="relative">
          <div className="relative h-[340px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/avantaj.webp" // transparan PNG
              alt="Usta"
              fill
              priority
              sizes="(min-width:1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          {/* Sarı alıntı kartı */}
          <div className="absolute left-6 sm:left-10 -bottom-6 sm:-bottom-8 max-w-[520px] rounded-2xl bg-[#F2C94C] text-[#0F2B4C] shadow-[0_18px_50px_-20px_rgba(0,0,0,0.35)] p-5 sm:p-6">
            <div className="text-3xl leading-none text-[#0F2B4C]/50 select-none">“</div>
            <h4 className="mt-2 font-extrabold">Söz Verdiğimiz Gibi, Eksiksiz.</h4>
            <p className="mt-2 text-sm text-[#0F2B4C]/80">
              Net fiyat, temiz işçilik ve zamanında teslim. İhtiyacınıza uygun çözümü
              planlayıp hızlıca uyguluyoruz.
            </p>
          </div>
        </div>

        {/* SAĞ: Başlıklar (açılır–kapanır yok) */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="inline-block h-[2px] w-10 bg-[#0F2B4C]" />
            <span className="text-xs sm:text-sm tracking-widest font-medium text-[#0F2B4C]/80">
              AVANTAJLARIMIZ
            </span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
            Neleri Farklı Yapıyoruz?
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl">
            Deneyimimizi modern ekipmanlarla birleştiriyor, gereksiz kırma–dökme
            olmadan kalıcı sonuçlar üretiyoruz. Aşağıda öne çıkan başlıklarımızı
            görebilirsiniz.
          </p>

          {/* Sadece başlık listesi */}
          <div className="mt-6 grid grid-cols-1 gap-3">
            {headings.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 sm:px-5 py-4 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_40px_-18px_rgba(0,0,0,0.2)] transition"
              >
                {/* küçük işaret/ikon */}
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0F2B4C]/5 ring-1 ring-[#0F2B4C]/10 text-[#0F2B4C]">
                  {/* basit ok ikonu */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="font-medium text-gray-900">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alt boşluk (kart taşması için) */}
      <div className="h-10" />
    </section>
  );
}