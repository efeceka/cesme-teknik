"use client";
import Link from "next/link";
import {
  Wrench,
  Search,
  ShowerHead,
  Droplets,
  UtensilsCrossed,
  Home,
  LocateFixed,
} from "lucide-react";

const services = [
  {
    title: "Genel Tesisat Hizmeti",
    desc: "Ev ve işyerleri için tüm sıhhi tesisat çözümleri.",
    no: "01",
    Icon: Wrench,
  },
  {
    title: "Tıkanıklık Açma & Bulma",
    desc: "Robot ve kamera ile nokta atışı tespit & açma.",
    no: "02",
    Icon: Search,
  },
  {
    title: "Gömme & Klozet Tamiri",
    desc: "Klozet ve banyo armatürleri onarım & yenileme.",
    no: "03",
    Icon: ShowerHead,
  },
  {
    title: "Su Kaçağı Tespiti",
    desc: "Kırmadan, termal kamera ile kaçak tespiti.",
    no: "04",
    Icon: Droplets,
  },
  {
    title: "Mutfak Gideri Açma",
    desc: "Yağ ve tortu kaynaklı gider tıkanıklıklarına çözüm.",
    no: "05",
    Icon: UtensilsCrossed,
  },
  {
    title: "Ev Tadilat Hizmetleri",
    desc: "Banyo & mutfak tesisat tadilatı ve yenileme.",
    no: "06",
    Icon: Home,
  },
  {
    title: "Kayıp Logar Tespiti",
    desc: "Yeraltı hatlarının noktasal konumlandırılması.",
    no: "07",
    Icon: LocateFixed,
  },
];

function ServiceCard({ title, desc, no, Icon }) {
  return (
    <div className="relative rounded-2xl bg-white shadow-[0_6px_30px_-10px_rgba(0,0,0,0.15)] p-5 sm:p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.2)]">
      {/* İsteğe bağlı köşe ışıması (aktif etmek için yorumdan çıkar) */}
      {/* <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_70%_30%,rgba(15,43,76,0.08),transparent_60%)]" /> */}

      <div className="relative">
        <h3 className="font-bold text-gray-900 leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>

        <div className="mt-5 flex items-end justify-between">
          {/* ikon kutusu */}
          <div className="text-[#0F2B4C]">
            <div className="h-12 w-12 rounded-xl bg-[#0F2B4C]/5 ring-1 ring-[#0F2B4C]/10 grid place-items-center">
              <Icon className="h-6 w-6" />
            </div>
          </div>

          <div className="text-5xl font-semibold text-gray-300/80 select-none">
            {no}
          </div>
        </div>
      </div>

      {/* alt ortada + butonu */}
      <button
        type="button"
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-[#0F2B4C] text-white grid place-items-center text-xl shadow-md hover:scale-105 transition"
        aria-label="Detay"
      >
        +
      </button>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık satırı */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-block h-[2px] w-12 bg-[#0F2B4C]" />
              <span className="text-xs sm:text-sm tracking-widest font-medium text-[#0F2B4C]/80">
                TESİSAT HİZMETLERİ
              </span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
              Kaliteli Hizmet Sunmaya <br className="hidden sm:block" />
              Devam Ediyoruz!
            </h2>
          </div>

          <p className="text-gray-600 max-w-xl">
            Sıhhi tesisat işlemlerinizde her zaman yanınızdayız; kırmadan su
            kaçağı tespiti, tıkanıklık açma ve daha fazlası için güvenilir çözümler
            sunuyoruz.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}

          {/* Sarı CTA kartı */}
          <div className="rounded-2xl bg-[#F2C94C] p-6 shadow-[0_6px_30px_-10px_rgba(0,0,0,0.15)] flex flex-col justify-between">
            <p className="font-extrabold text-[#0F2B4C] text-lg leading-snug">
              2000'den bu yana tesisat sektöründe
              <br /> en iyisi olmaya devam ediyoruz!
            </p>
            <div className="mt-5">
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center gap-2 rounded-full bg-[#0F2B4C] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#0c223f] transition"
              >
                Hizmetlerimiz »
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}