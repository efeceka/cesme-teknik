"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Menü açıkken scroll'u kilitle
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const navLinks = [
    { href: "/", label: "Anasayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 text-[#0F2B4C] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 py-10">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Çeşme Teknik - Anasayfa">
          <div className="relative h-25 w-[220px] sm:w-[230px]">
            <Image
              src="/images/logo.png"
              alt="Çeşme Teknik Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#0F2B4C]/90 hover:text-[#0F2B4C] hover:underline underline-offset-4 text-sm font-medium transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Sağ CTA (desktop) */}
        <div className="hidden md:block">
          <Link
            href="tel:05394086760"
            className="inline-flex items-center gap-2 rounded-full bg-[#0F2B4C] text-white font-semibold px-4 py-2 text-sm hover:brightness-110 transition"
          >
            <Phone className="h-4 w-4" />
            0539 408 67 60
          </Link>
        </div>

        {/* Mobil Menü Butonu */}
        <button
          className="md:hidden p-2 text-[#0F2B4C]/80 hover:text-[#0F2B4C] transition"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menüyü Aç/Kapat"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* -------- MOBİL DROPDOWN -------- */}
      {/* Arka plan overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-[1px] transition-opacity duration-200 md:hidden
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Menü paneli */}
      <div
        className={`fixed top-16 inset-x-0 z-[70] md:hidden px-4 transition-all duration-200
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden">
            <nav className="p-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-[#0F2B4C]/90 hover:bg-[#0F2B4C]/5 transition"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="px-3 pb-3">
              <Link
                href="tel:05394086760"
                onClick={() => setOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0F2B4C] text-white font-semibold px-4 py-3 text-sm hover:brightness-110 transition"
              >
                <Phone className="h-4 w-4" />
                0539 408 67 60
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}