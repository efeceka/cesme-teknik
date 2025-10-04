"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "905394086760"; // 0539 408 67 60

export default function ContactPage() {
  const [status, setStatus] = useState(null);

  function onSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name?.value?.trim() || "";
    const phone = form.phone?.value?.trim() || "";
    const email = form.email?.value?.trim() || "";
    const area = form.area?.value?.trim() || "";
    const message = form.message?.value?.trim() || "";

    // WhatsApp mesajı (çok satırlı, okunaklı)
    const text = [
      "Merhaba, web sitesinden iletişim talebi:",
      `• Ad Soyad: ${name || "-"}`,
      `• Telefon: ${phone || "-"}`,
      `• E-posta: ${email || "-"}`,
      `• Bölge: ${area || "-"}`,
      `• Mesaj: ${message || "-"}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    setStatus("WhatsApp'a yönlendiriliyorsunuz…");
    // yeni sekmede açmak istersen: window.open(url, "_blank");
    window.location.href = url;
  }

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative bg-[#0F2B4C] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/contact/hero.jpg" // opsiyonel arka plan
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
            <span className="text-xs sm:text-sm tracking-widest text-white/80">İLETİŞİM</span>
          </div>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold leading-[1.1]">
            Hızlıca <span className="text-[#F2C94C]">Ulaşın</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Randevu, teklif veya aklınızdaki sorular için hemen bize yazın ya da arayın.
            Aynı gün içinde dönüş yapmaya çalışıyoruz.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="tel:05394086760"
              className="inline-flex items-center gap-2 rounded-full bg-[#F2C94C] text-[#0F2B4C] font-semibold px-6 py-3 shadow hover:brightness-95 transition"
            >
              <Phone className="h-5 w-5" />
              0539 408 67 60
            </Link>
            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white font-semibold px-6 py-3 hover:bg-white/15 transition"
              target="_blank"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* İLETİŞİM BİLGİLERİ + FORM */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          {/* Bilgi kartları */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.15)]">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F2B4C]/5 ring-1 ring-[#0F2B4C]/10 text-[#0F2B4C]">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900">Telefon</div>
                  <Link href="tel:05394086760" className="text-sm text-gray-700 hover:underline">
                    0539 408 67 60
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.15)]">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F2B4C]/5 ring-1 ring-[#0F2B4C]/10 text-[#0F2B4C]">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900">Adres</div>
                  <p className="text-sm text-gray-700">
                    Çeşme / İzmir
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.15)]">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F2B4C]/5 ring-1 ring-[#0F2B4C]/10 text-[#0F2B4C]">
                  <Clock className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900">Çalışma Saatleri</div>
                  <p className="text-sm text-gray-700">Pzt–Cmt: 07:00–22:00</p>
                  <p className="text-sm text-gray-700">Pazar: Kapalı</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form → WhatsApp yönlendirme */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-[#F2C94C] p-5 sm:p-6 lg:p-7 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.35)]">
              <div className="text-xs tracking-widest font-semibold text-[#0F2B4C]/80">MESAJ GÖNDERİN</div>
              <h3 className="mt-2 text-[#0F2B4C] text-2xl sm:text-3xl font-extrabold leading-tight">
                Kısa Bilgilerinizi Bırakın, Sizi Arayalım
              </h3>
              <p className="mt-2 text-[#0F2B4C]/80 text-sm">
                İletişim numaranızı ve bulunduğunuz bölgeyi yazarsanız planlama daha hızlı olur.
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
                    Gönder butonuna bastığınızda WhatsApp sohbetine yönlendirilirsiniz.
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
      </section>

      {/* HARİTA */}
      <section className="bg-[#F7F7F8] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-[0_12px_40px_-18px_rgba(0,0,0,0.35)]">
            <iframe
  title="Çeşme Teknik - Musalla Mahallesi 1045. Sokak No: 4/2, Çeşme / İzmir"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.2892760205363!2d26.29582097603123!3d38.32409177186663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb78b83b30c5b7%3A0x6d2e65741704e70a!2sMusalla%2C%201045.%20Sk.%20No%3A4%2F2%2C%2035945%20%C3%87e%C5%9Fme%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1738645503521!5m2!1str!2str"
  className="w-full h-[380px] rounded-xl border-0 shadow-md"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </div>
      </section>

      {/* JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Çeşme Teknik",
            telephone: "+90 539 408 67 60",
            email: "...",
            address: {
              "@type": "PostalAddress",
              streetAddress: ".",
              addressLocality: "Çeşme",
              addressRegion: "İzmir",
              addressCountry: "TR",
            },
            sameAs: [`https://wa.me/${WHATSAPP_NUMBER}`],
            openingHours: "Mo-Sa 07:00-22:00",
          }),
        }}
      />
    </div>
  );
}