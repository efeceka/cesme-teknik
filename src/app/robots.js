// src/app/robots.js
export default function robots() {
  const host = "https://www.cesmeteknikkanalacma.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}