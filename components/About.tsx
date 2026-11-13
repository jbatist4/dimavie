"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Icon from "@/components/Icon";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const AirbnbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.252 17.814c-.69 0-1.327-.348-1.702-.924L7.2 12.868c-.756-1.128-.492-2.652.588-3.42 1.08-.756 2.556-.492 3.324.588l.948 1.404 2.736-4.08c.768-1.14 2.28-1.428 3.384-.636 1.08.78 1.344 2.28.6 3.408l-4.308 6.39c-.36.564-.996.912-1.704.912l-.012-.62z"/>
  </svg>
);

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="sobre" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 text-ocean font-semibold text-xs tracking-[0.22em] uppercase mb-4">
            <span className="w-6 h-px bg-ocean" />
            {a.eyebrow}
            <span className="w-6 h-px bg-ocean" />
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-brown mb-5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {a.title1}{" "}
            <span
              className="text-ocean"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontStyle: "italic" }}
            >
              {a.titleAccent}
            </span>
          </h2>
          <p className="text-brown-light text-lg max-w-2xl mx-auto leading-relaxed">
            {a.description}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {a.stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-6 rounded-2xl bg-ocean-light border border-ocean-muted"
            >
              <p
                className="text-3xl font-bold text-ocean mb-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {s.value}
              </p>
              <p className="text-xs font-medium text-brown-light uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {a.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
              className="flex gap-5 p-6 rounded-2xl bg-brown-50 border border-sand hover:border-ocean/30 transition-colors duration-300"
            >
              <span className="flex-shrink-0 mt-0.5 text-gold">
                <Icon name={h.icon} className="w-7 h-7" />
              </span>
              <div>
                <h3
                  className="text-lg font-bold text-brown mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {h.title}
                </h3>
                <p className="text-brown-light text-sm leading-relaxed">{h.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amélia Gama */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={fadeUp}
          className="mt-16 flex flex-col sm:flex-row items-center gap-8 p-8 rounded-3xl bg-gold-muted border border-sand-dark"
        >
          <div className="flex-shrink-0">
            <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
              <Image
                src="/images/amelia-perfil.png"
                alt="Amélia Gama — Dimavie Stays"
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-1">{a.founderRole}</p>
            <h3
              className="text-xl font-bold text-brown mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Amélia Gama
            </h3>
            <p className="text-brown-light leading-relaxed max-w-lg">{a.founderBio}</p>
          </div>
        </motion.div>

        {/* Airbnb SuperHost badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeUp}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 p-8 rounded-3xl"
          style={{ background: "linear-gradient(135deg, rgba(46,125,175,0.08) 0%, rgba(155,116,64,0.06) 100%)", border: "1px solid rgba(46,125,175,0.15)" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FF5A5F] flex items-center justify-center text-white">
              <AirbnbIcon />
            </div>
            <div>
              <p className="font-bold text-brown" style={{ fontFamily: "var(--font-serif)" }}>{a.superhostLabel}</p>
              <p className="text-sm text-brown-light">{a.superhostSub}</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-sand-dark" />
          <p className="text-center sm:text-left text-brown-light text-sm max-w-sm leading-relaxed">
            {a.superhostText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
