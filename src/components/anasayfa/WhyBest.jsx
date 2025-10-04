"use client";
import Image from "next/image";

export default function WhyBest() {
  return (
    <section className="relative bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
        {/* SOL: Metin */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="inline-block h-[2px] w-10 bg-[#0F2B4C]" />
            <span className="text-xs sm:text-sm tracking-widest font-medium text-[#0F2B4C]/80">
              HAKKIMIZDA
            </span>
          </div>

          {/* Başlık */}
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
            Tesisatta <br className="hidden sm:block" /> Güvenin Adresi
          </h2>

          {/* Açıklama */}
          <p className="mt-5 text-gray-700 leading-relaxed">
            Alanında uzman kadromuzla, tesisat problemleriniz için her zaman
            yanınızdayız. Su kaçağı, tıkanıklık, bakım ve onarımda modern
            çözümler üreterek işinizi kolaylaştırıyoruz. En kaliteli malzemeleri
            kullanıyor, her aşamada titizlikle çalışıyoruz.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Deneyim ve teknolojiyle birleşen hizmet anlayışımız sayesinde
            İzmir’de binlerce müşterimizin güvenini kazandık. Acil durumlara
            hızlı müdahale ediyor, uzun ömürlü ve kalıcı çözümler sunuyoruz.
          </p>

          {/* İstatistik kutusu */}
          <div className="mt-8 rounded-2xl overflow-hidden bg-[#F2C94C] grid grid-cols-3 text-center shadow-[0_12px_40px_-16px_rgba(0,0,0,0.25)]">
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

        {/* SAĞ: Görsel */}
        <div className="relative h-72 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/about.webp"
            alt="Çeşme Teknik ekibi"
            fill
            sizes="(min-width:1024px) 50vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}