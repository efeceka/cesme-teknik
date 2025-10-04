"use client";
import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="relative bg-[#F7F7F8] py-14 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* SOL: Tek büyük görsel */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="/images/whyus.png"
            alt="Çeşme Teknik ekibi çalışırken"
            fill
            sizes="(min-width:1024px) 50vw, 90vw"
            className="object-cover"
            priority
          />
        </div>

       {/* SAĞ: Metin + checklist */}
        <div>
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
            <span className="inline-block h-[2px] w-12 bg-[#0F2B4C]" />
            <span className="text-xs sm:text-sm tracking-widest font-medium text-[#0F2B4C]/80">
            NEDEN BİZİ SEÇMELİSİNİZ?
            </span>
        </div>

        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
            Tesisat İşlerinde <br className="hidden sm:block" /> Doğru Adres
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
            Yılların tecrübesi ve uzman kadromuzla, her türlü tesisat ihtiyacınızı
            güvenle karşılıyoruz. Modern teknolojiler kullanarak hem zamandan
            kazandırıyor hem de kırma–dökme derdi olmadan kalıcı çözümler sunuyoruz.
        </p>

        {/* Checklist kutusu */}
        <div className="mt-6 bg-white rounded-2xl shadow-[0_12px_40px_-16px_rgba(0,0,0,0.18)] p-5 sm:p-6">
            <ul className="space-y-4">
            <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0F2B4C] text-white text-sm">✓</span>
                <p className="text-gray-700">
                En kısa sürede müdahale eden, güvenilir ve deneyimli usta ekibi.
                </p>
            </li>
            <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0F2B4C] text-white text-sm">✓</span>
                <p className="text-gray-700">
                Kaliteli malzeme ve şeffaf fiyat anlayışıyla uzun ömürlü çözümler.
                </p>
            </li>
            </ul>
        </div>
        </div>
      </div>

      {/* Alttaki koyu mavi bölüme temiz geçiş için boşluk */}
      <div className="h-8" />
    </section>
  );
}