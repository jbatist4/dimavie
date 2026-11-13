"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Lang } from "@/lib/i18n";

const langOptions: { code: Lang; flag: string; label: string }[] = [
  { code: "pt", flag: "🇧🇷", label: "PT" },
  { code: "en", flag: "🇺🇸", label: "EN" },
  { code: "es", flag: "🇪🇸", label: "ES" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#sobre", label: t.nav.about },
    { href: "#hospedagens", label: t.nav.properties },
    { href: "#diferenciais", label: t.nav.highlights },
    { href: "#contato", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="#inicio" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Dimavie Stays"
            width={180}
            height={64}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-brown hover:text-ocean transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#hospedagens"
              className="bg-ocean text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-ocean-dark transition-colors"
            >
              {t.nav.bookNow}
            </a>
          </li>

          {/* Language switcher */}
          <li className="flex items-center gap-1 border border-sand rounded-full px-2 py-1">
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLang(opt.code)}
                className={`text-xs font-semibold px-1.5 py-0.5 rounded-full transition-colors ${
                  lang === opt.code
                    ? "bg-ocean text-white"
                    : "text-brown-light hover:text-brown"
                }`}
                aria-label={opt.label}
              >
                {opt.flag} {opt.label}
              </button>
            ))}
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-brown"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-5 h-0.5 bg-current mb-1 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current mb-1 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-sand px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-brown font-medium text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#hospedagens"
            className="bg-ocean text-white px-4 py-2 rounded-full text-sm font-semibold text-center"
            onClick={() => setOpen(false)}
          >
            {t.nav.bookNow}
          </a>

          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 pt-1 border-t border-sand">
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => { setLang(opt.code); setOpen(false); }}
                className={`flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                  lang === opt.code
                    ? "bg-ocean text-white border-ocean"
                    : "text-brown-light border-sand hover:border-ocean/40"
                }`}
              >
                {opt.flag} {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
