"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Icon from "@/components/Icon";

const WHATSAPP_NUMBER = "5583982002424";

const hrefs = [
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de fazer uma reserva na Dimavie. Podem me ajudar?")}`,
  "https://www.instagram.com/dimaviestays/",
];

const colors = [
  "bg-[#25D366] hover:bg-[#1da851]",
  "bg-gradient-to-r from-[#E1306C] to-[#833AB4] hover:from-[#C1256A] hover:to-[#6B2FA0]",
];

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section id="contato" className="py-24 bg-brown overflow-hidden relative">
      {/* Wave top separator */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[60px] block">
          <path d="M0 60 C360 0, 1080 60, 1440 0 L1440 0 L0 0 Z" fill="#FAF8F5" />
        </svg>
      </div>

      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-5"
        style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(46,125,175,1) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-3 text-ocean-light font-semibold text-xs tracking-[0.22em] uppercase mb-4">
            <span className="w-6 h-px bg-ocean-light" />
            {c.eyebrow}
            <span className="w-6 h-px bg-ocean-light" />
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {c.title1}{" "}
            <span
              className="text-gold-light"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontStyle: "italic" }}
            >
              {c.titleAccent}
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            {c.description}
          </p>
        </motion.div>

        {/* Contact options */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {c.options.map((option, i) => (
            <motion.a
              key={option.title}
              href={hrefs[i]}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <span className="mb-4 text-gold-light">
                <Icon name={option.icon} className="w-9 h-9" />
              </span>
              <h3
                className="text-white font-bold text-lg mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {option.title}
              </h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">{option.description}</p>
              <span className={`text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all ${colors[i]}`}>
                {option.cta}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Big WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center p-10 rounded-3xl"
          style={{ background: "linear-gradient(135deg, rgba(46,125,175,0.15) 0%, rgba(155,116,64,0.12) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-white/80 text-sm uppercase tracking-widest mb-3 font-medium">{c.ctaEyebrow}</p>
          <h3
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {c.ctaTitle}
          </h3>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            {c.ctaDescription}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de fazer uma reserva na Dimavie Stays. Podem me ajudar?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#1da851] transition-colors shadow-lg text-base"
            style={{ boxShadow: "0 8px 24px rgba(37,211,102,0.25)" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            {c.ctaButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
