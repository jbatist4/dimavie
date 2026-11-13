"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Icon from "@/components/Icon";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const w = t.why;

  return (
    <section id="diferenciais" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 text-gold font-semibold text-xs tracking-[0.22em] uppercase mb-4">
            <span className="w-6 h-px bg-gold" />
            {w.eyebrow}
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-brown mb-5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {w.title1}{" "}
            <span
              className="text-gold"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontStyle: "italic" }}
            >
              {w.titleAccent}
            </span>
          </h2>
          <p className="text-brown-light text-lg max-w-xl mx-auto">
            {w.description}
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {w.reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-7 rounded-3xl bg-white border border-sand hover:border-gold/40 hover:shadow-lg transition-all duration-300 group"
            >
              <span
                className="absolute top-4 right-5 text-5xl font-bold text-sand-dark/40 select-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mb-4 block text-gold">
                <Icon name={r.icon} className="w-7 h-7" />
              </span>
              <h3
                className="font-bold text-brown text-lg mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {r.title}
              </h3>
              <p className="text-brown-light text-sm leading-relaxed">{r.description}</p>
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-ocean to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom wave decoration */}
        <div className="mt-20 flex justify-center opacity-20">
          <svg viewBox="0 0 400 40" fill="none" stroke="#2E7DAF" strokeWidth="1.5" strokeLinecap="round" className="w-full max-w-md">
            <path d="M0 20 C66 5, 133 35, 200 20 C266 5, 333 35, 400 20" />
            <path d="M0 28 C66 13, 133 43, 200 28 C266 13, 333 43, 400 28" />
          </svg>
        </div>
      </div>
    </section>
  );
}
