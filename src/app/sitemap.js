// src/app/sitemap.js
const SITE = "https://www.cesmeteknikkanalacma.com"; // kanonik alan adınla birebir

const serviceSlugs = [
  "su-kacagi-tespiti",
  "tikaniklik-acma",
  "gomme-klozet-tamiri",
  "mutfak-gideri-acma",
  "ev-tadilat-hizmetleri",
  "kayip-logar-tespiti",
  "kanal-goruntuleme",
  "genel-tesisat",
];

export default function sitemap() {
  const now = new Date().toISOString();

  const base = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/hakkimizda`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/hizmetlerimiz`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const services = serviceSlugs.map((slug) => ({
    url: `${SITE}/hizmetlerimiz/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...base, ...services];
}