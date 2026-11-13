"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const WavesIcon = () => (
  <svg viewBox="0 0 60 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-12 h-4">
    <path d="M0 10 C10 3, 20 17, 30 10 C40 3, 50 17, 60 10" />
  </svg>
);

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-cream overflow-hidden"
    >
      {/* Ocean gradient blobs */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 10%, rgba(46,125,175,0.10) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 10% 90%, rgba(155,116,64,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Decorative wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none h-32 opacity-[0.04]">
        <div className="animate-wave flex whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <svg key={i} viewBox="0 0 300 60" fill="none" stroke="#2E7DAF" strokeWidth="2" className="w-[300px] h-[60px] flex-shrink-0">
              <path d="M0 30 C50 10, 100 50, 150 30 C200 10, 250 50, 300 30" />
            </svg>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 md:order-1"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-3 text-ocean font-semibold text-xs tracking-[0.22em] uppercase mb-7"
          >
            <WavesIcon />
            {h.tagline}
          </motion.span>

          <h1
            className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-brown leading-[1.12] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {h.title1}{" "}
            <span
              className="text-ocean"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              {h.titleAccent}
            </span>{" "}
            {h.title2}
          </h1>

          <p className="text-brown-light text-lg leading-relaxed mb-10 max-w-md">
            {h.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#hospedagens"
              className="inline-flex items-center justify-center bg-ocean text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-lg hover:bg-ocean-dark hover:shadow-xl hover:-translate-y-0.5"
              style={{ boxShadow: "0 8px 24px rgba(46,125,175,0.30)" }}
            >
              {h.viewProperties}
            </a>
            <a
              href={`https://wa.me/5583982002424?text=${encodeURIComponent("Olá! Vi o site da Dimavie e gostaria de fazer uma reserva.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-ocean text-ocean hover:bg-ocean/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base hover:-translate-y-0.5"
            >
              {h.whatsapp}
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
              </div>
              <span className="text-sm text-brown-light font-medium">{h.superhost}</span>
            </div>
            <div className="w-px h-4 bg-sand-dark" />
            <span className="text-sm text-brown-light">CRECI-PB 16953</span>
            <div className="w-px h-4 bg-sand-dark" />
            <span className="text-sm text-brown-light">{h.properties}</span>
          </div>
        </motion.div>

        {/* Visual — mosaic of property thumbnails */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-full max-w-[420px]">
            <div
              className="absolute animate-float-slow"
              style={{
                inset: "-8%",
                background: "linear-gradient(135deg, rgba(46,125,175,0.15) 0%, rgba(155,116,64,0.10) 100%)",
                borderRadius: "55% 45% 40% 60% / 50% 40% 60% 50%",
              }}
            />

            <div className="relative grid grid-cols-2 gap-3">
              <div className="col-span-2 h-48 rounded-2xl overflow-hidden shadow-xl relative">
                <Image
                  src="/images/properties/jacuzzi-privativa-resort/capa-jacuzzi-privativa.avif"
                  alt="Jacuzzi Privativa — Pé Na Areia — Resort"
                  fill
                  className="object-cover"
                  priority
                  sizes="420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <p className="text-[10px] font-medium tracking-widest uppercase opacity-80">Resort · Pé Na Areia</p>
                  <p className="text-sm font-bold" style={{ fontFamily: "var(--font-serif)" }}>Jacuzzi Privativa</p>
                </div>
              </div>
              <div className="h-32 rounded-2xl overflow-hidden shadow-lg relative">
                <Image
                  src="/images/properties/tambau-vista-mar.avif"
                  alt="Tambaú Vista Mar"
                  fill
                  className="object-cover"
                  sizes="210px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-3 text-white">
                  <p className="text-[10px] font-medium opacity-80">Tambaú</p>
                  <p className="text-xs font-semibold" style={{ fontFamily: "var(--font-serif)" }}>Vista Mar</p>
                </div>
              </div>
              <div className="h-32 rounded-2xl overflow-hidden shadow-lg relative">
                <Image
                  src="/images/properties/frente-mar-vista-espetacular/capa-frente-mar-vista-espetacular.avif"
                  alt="Frente ao Mar — Vista Espetacular"
                  fill
                  className="object-cover"
                  sizes="210px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-3 text-white">
                  <p className="text-[10px] font-medium opacity-80">Frente ao Mar</p>
                  <p className="text-xs font-semibold" style={{ fontFamily: "var(--font-serif)" }}>Vista Espetacular</p>
                </div>
              </div>
            </div>

            <div className="animate-float absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 border border-sand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gold flex-shrink-0">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              <div>
                <p className="text-[10px] text-brown-light leading-none mb-0.5">Airbnb</p>
                <p className="text-xs font-semibold text-brown leading-none">SuperHost</p>
              </div>
            </div>

            <div className="animate-float-delayed absolute -top-4 -right-4 bg-ocean text-white rounded-2xl shadow-xl px-4 py-3 text-center">
              <p className="text-[10px] font-medium leading-none mb-0.5 opacity-90">10+</p>
              <p className="text-sm font-bold leading-none">Imóveis</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-brown-light/50">
          {h.explore}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-brown-light/30 to-transparent" />
      </motion.div>
    </section>
  );
}
