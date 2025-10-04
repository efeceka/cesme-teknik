"use client";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-3">
      {/* WhatsApp */}
      <Link
        href="https://wa.me/905394086760"
        target="_blank"
        aria-label="WhatsApp ile iletişime geç"
        className="group relative bg-[#25D366] hover:bg-[#1EBE5B] text-white 
                   shadow-[0_0_15px_rgba(0,0,0,0.25)] 
                   rounded-full p-3 flex items-center justify-center 
                   transition-all duration-200 hover:scale-110 
                   ring-2 ring-white/90"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">WhatsApp</span>
      </Link>

      {/* Telefon */}
      <Link
        href="tel:05356550910"
        aria-label="Telefonla ara"
        className="group relative bg-[#0F2B4C] hover:bg-[#0c223f] text-white 
                   shadow-[0_0_15px_rgba(0,0,0,0.25)] 
                   rounded-full p-3 flex items-center justify-center 
                   transition-all duration-200 hover:scale-110 
                   ring-2 ring-white/90"
      >
        <Phone className="h-6 w-6" />
        <span className="sr-only">Ara</span>
      </Link>
    </div>
  );
}