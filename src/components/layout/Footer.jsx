"use client";
import Link from "next/link";

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-white/80 hover:text-white transition inline-flex items-center gap-2"
  >
    <span className="h-[3px] w-[3px] rounded-full bg-white/40" />
    {children}
  </Link>
);

const Icon = {
  map: (props) => (
    <svg viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l4.5 2 5.5-2v18l-5.5 2L12 20l-6 2L1 20V2l5 2 6-2z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  mail: (props) => (
    <svg viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  phone: (props) => (
    <svg viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92V21a1 1 0 0 1-1.09 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3 3.09 1 1 0 0 1 4 2h4.09A1 1 0 0 1 9 2.72l1.32 3a1 1 0 0 1-.27 1.18l-1.9 1.55a16 16 0 0 0 6 6l1.55-1.9a1 1 0 0 1 1.18-.27l3 1.32A1 1 0 0 1 22 16.92z" />
    </svg>
  ),
  clock: (props) => (
    <svg viewBox="0 0 24 24" {...props} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0F2B4C] text-white">
      {/* Üst CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold">Çeşme Teknik</h3>
          <p className="text-white/70 text-sm mt-1">
            İzmir ve çevresinde kırmadan-dökmeden hızlı ve profesyonel tesisat hizmeti.
          </p>
        </div>

        <Link
          href="tel:05394086760"
          className="inline-flex items-center gap-2 rounded-full bg-[#F2C94C] text-[#0F2B4C] font-semibold px-5 py-2.5 shadow hover:brightness-95 transition self-start md:self-auto"
        >
          Randevu Talep Et »
        </Link>
      </div>

      {/* Ana içerik */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Hakkında */}
        <div>
          <h4 className="font-semibold">Hakkımızda</h4>
          <p className="mt-3 text-white/80 text-sm leading-relaxed">
            Deneyimli ekibimizle su kaçağı tespiti, tıkanıklık açma, tadilat ve bakım
            işlemlerinde güvenilir çözümler sunuyoruz. Müşteri memnuniyeti odaklıyız.
          </p>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h4 className="font-semibold">Hızlı Linkler</h4>
          <div className="mt-3 grid gap-2 text-sm">
            <NavLink href="/">Anasayfa</NavLink>
            <NavLink href="/hakkimizda">Hakkımızda</NavLink>
            <NavLink href="/hizmetlerimiz">Hizmetlerimiz</NavLink>
            <NavLink href="/iletisim">İletişim</NavLink>
          </div>
        </div>

        {/* Hizmetler */}
        <div>
          <h4 className="font-semibold">Hizmetler</h4>
          <div className="mt-3 grid gap-2 text-sm">
            <NavLink href="/hizmetlerimiz/su-kacagi-tespiti">Su Kaçağı Tespiti</NavLink>
            <NavLink href="/hizmetlerimiz/tikaniklik-acma">Tıkanıklık Açma</NavLink>
            <NavLink href="/hizmetlerimiz/gomme-klozet-tamiri">Gömme/Klozet Tamiri</NavLink>
            <NavLink href="/hizmetlerimiz/mutfak-gideri-acma">Mutfak Gideri Açma</NavLink>
            <NavLink href="/hizmetlerimiz/ev-tadilat-hizmetleri">Ev Tadilat Hizmetleri</NavLink>
          </div>
        </div>

        {/* İletişim */}
        <div>
          <h4 className="font-semibold">İletişim</h4>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Icon.map className="h-5 w-5 text-white/80 mt-0.5" />
              <span className="text-white/80">Çeşme / İzmir</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon.phone className="h-5 w-5 text-white/80 mt-0.5" />
              <Link href="tel:05394086760" className="text-white/80 hover:text-white transition">
                0539 408 67 60
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <Icon.clock className="h-5 w-5 text-white/80 mt-0.5" />
              <span className="text-white/80">Pzt–Cmt: 07:00–22:00 • Pazar: Kapalı</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Alt Telif Bandı */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs sm:text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Çeşme Teknik. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}