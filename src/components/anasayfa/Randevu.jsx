"use client";
import Image from "next/image";
import { useState } from "react";

function Step({ no, title, desc, Icon }) {
  return (
    <div className="text-center text-white/90">
      <div className="relative mx-auto h-24 w-24 rounded-full border-2 border-[#F2C94C]/70 grid place-items-center">
        <div className="absolute -bottom-3 right-1 h-8 w-8 rounded-full bg-[#F2C94C] text-[#0F2B4C] grid place-items-center text-sm font-bold shadow">
          {no}
        </div>
        <Icon className="h-9 w-9 text-white/90" />
      </div>
      <h4 className="mt-4 font-extrabold text-white leading-tight">{title}</h4>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

const icons = {
  date: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
    </svg>
  ),
  contact: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 7h2M11 7h2" />
    </svg>
  ),
  visit: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="7" r="3" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </svg>
  ),
  done: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  ),
};

const WHATSAPP_NUMBER = "905394086760"; // 0539 408 67 60

export default function StepsAndLead() {
  const [status, setStatus] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const name = f.name?.value?.trim() || "";
    const phone = f.phone?.value?.trim() || "";
    const email = f.email?.value?.trim() || "";
    const area = f.area?.value?.trim() || "";
    const message = f.message?.value?.trim() || "";

    const text = [
      "Merhaba, hızlı randevu isteği (web):",
      `• Ad Soyad: ${name || "-"}`,
      `• Telefon: ${phone || "-"}`,
      `• E-posta: ${email || "-"}`,
      `• Bölge: ${area || "-"}`,
      `• Not: ${message || "-"}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    setStatus("WhatsApp'a yönlendiriliyorsunuz…");
    window.location.href = url; // yeni sekme istersen: window.open(url, "_blank");
  }

  return (
    <section className="relative">
      {/* ÜST BLOK */}
      <div className="relative bg-[#0F2B4C]">
        <div className="absolute inset-0">
          <Image
            src="/images/steps/bg.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-[#0F2B4C]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
          <div className="flex items-center justify-center gap-3 text-white/80 text-xs tracking-widest">
            <span className="inline-block h-[2px] w-10 bg-white/40" />
            <span>4 Adımda Kolay Randevu</span>
            <span className="inline-block h-[2px] w-10 bg-white/40" />
          </div>

          <h2 className="mt-3 text-center text-3xl sm:text-4xl font-extrabold text-white">
            Randevu Süreciniz Nasıl İşler?
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Step no="1" title="Uygun Tarihi Belirleyin" desc="Size uygun günü/saat aralığını seçin." Icon={icons.date} />
            <Step no="2" title="Bilgilerinizi İletin" desc="İletişim sayfasından formu doldurun ya da arayın." Icon={icons.contact} />
            <Step no="3" title="Yerinde Keşif Yapalım" desc="Ekip arkadaşımız adresinizde hızlı inceleme yapar." Icon={icons.visit} />
            <Step no="4" title="Çözüm & Teslim" desc="İşi temizce tamamlayıp teslim ederiz." Icon={icons.done} />
          </div>
        </div>
      </div>

      {/* ALT BLOK: birleşik sarı kart (sol görsel + sağ form) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
        <div className="rounded-2xl bg-[#F2C94C] shadow-[0_12px_40px_-18px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Sol görsel */}
            <div className="relative h-56 sm:h-64 lg:h-full min-h-[260px]">
              <Image
                src="/images/form.webp"
                alt="Hızlı randevu için ekip hazır"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#F2C94C]/10 mix-blend-multiply" />
            </div>

            {/* Sağ form */}
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="text-xs tracking-widest font-semibold text-[#0F2B4C]/80">SİZE ULAŞALIM</div>
              <h3 className="mt-2 text-[#0F2B4C] text-2xl sm:text-3xl font-extrabold leading-tight">
                Tek Formla Hızlı Dönüş
              </h3>
              <p className="mt-2 text-[#0F2B4C]/80 text-sm">
                Kısa bilgilerinizi bırakın, size en uygun zamanda dönüş yapalım. Net fiyat, hızlı planlama ve temiz işçilik.
              </p>

              <form onSubmit={onSubmit} className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Adınız Soyadınız"
                  className="h-11 rounded-full px-4 text-sm outline-none border-0 bg-white placeholder:text-gray-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon Numaranız"
                  className="h-11 rounded-full px-4 text-sm outline-none border-0 bg-white placeholder:text-gray-500"
                  inputMode="tel"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-posta (opsiyonel)"
                  className="h-11 rounded-full px-4 text-sm outline-none border-0 bg-white placeholder:text-gray-500"
                />
                <input
                  type="text"
                  name="area"
                  placeholder="Adres / Bölge"
                  className="h-11 rounded-full px-4 text-sm outline-none border-0 bg-white placeholder:text-gray-500"
                />
                <textarea
                  name="message"
                  placeholder="Kısaca sorununuz (opsiyonel)"
                  className="md:col-span-2 min-h-[44px] h-24 rounded-2xl px-4 py-3 text-sm outline-none border-0 bg-white placeholder:text-gray-500 resize-y"
                />

                <div className="md:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <p className="text-xs text-[#0F2B4C]/80">
                    Gönder’e bastığınızda WhatsApp sohbetine yönlendirilirsiniz.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#0F2B4C] text-white h-11 px-6 font-semibold hover:bg-[#0c223f] transition"
                  >
                    WhatsApp ile Gönder »
                  </button>
                </div>

                {status && (
                  <div className="md:col-span-2 text-sm text-[#0F2B4C] font-medium pt-2">
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}