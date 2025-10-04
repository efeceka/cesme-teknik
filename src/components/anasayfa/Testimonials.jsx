"use client";
import Image from "next/image";
import Link from "next/link";

function QuoteCard({ text, name, role, avatar, className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-white/98 backdrop-blur shadow-[0_18px_50px_-20px_rgba(0,0,0,0.35)] p-5 sm:p-6 ${className}`}
    >
      {/* dekoratif sarı tırnak */}
      <div className="text-5xl leading-none text-[#F2C94C] select-none -mt-6 mb-1">”</div>

      <p className="text-gray-700">{text}</p>

      <div className="mt-4 flex items-center gap-3">
        <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-white">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative">
      <div className="relative bg-[#0F2B4C] py-12 sm:py-16">
        {/* arka plan */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0F2B4C]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* SOL: Başlık */}
            <div className="text-white">
              <div className="flex items-center gap-3">
                <span className="inline-block h-[2px] w-10 bg-white/50" />
                <span className="text-xs sm:text-sm tracking-widest font-medium text-white/80">
                  REFERANSLAR
                </span>
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
                Müşterilerimiz ne diyor?
              </h2>

              <p className="mt-4 text-white/80 max-w-lg">
                Hizmetimizi deneyimleyen müşterilerimizin yorumları. Kalite ve güvenin farkını onların sözlerinden dinleyin.
              </p>

              <Link
                href="/iletisim"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F2C94C] text-[#0F2B4C] px-5 py-2.5 font-semibold hover:brightness-95 transition"
              >
                MÜŞTERİ TEMSİLCİSİ »
              </Link>
            </div>

            {/* SAĞ: Kartlar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <QuoteCard
                text="Su kaçağı problemimizi çok kısa sürede çözdüler. İş bittikten sonra temizlik konusunda da dikkatliydiler."
                name="Sevgi Ç."
                role="Ev Sahibi"
                avatar="/images/p3.webp"
                className="sm:translate-y-2"
              />
              <QuoteCard
                text="Randevuya tam vaktinde geldiler, fiyat konusunda da şeffaf davrandılar. Gönül rahatlığıyla tavsiye ederim."
                name="Ahmet D."
                role="Mühendis"
                avatar="/images/p1.webp"
                className="sm:-translate-y-2"
              />
              <QuoteCard
                text="Mutfağımızdaki tıkanıklık kısa sürede açıldı ve bir daha tekrar etmedi. İşlerinde gerçekten profesyoneller."
                name="Serkan Z."
                role="Öğrenci"
                avatar="/images/p2.webp"
                className="sm:translate-y-1"
              />
              <QuoteCard
                text="Banyo tadilatı sürecinde oldukça titiz çalıştılar. Sonuç beklediğimizden de iyi oldu."
                name="Ercan B."
                role="Yönetici"
                avatar="/images/p4.webp"
                className="sm:-translate-y-1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-8" />
    </section>
  );
}