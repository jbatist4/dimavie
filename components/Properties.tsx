"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const BedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M2 4v16M2 8h20v12M2 12h20" />
    <path d="M7 8v4M17 8v4" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

interface Property {
  id: number;
  title: string;
  location: string;
  city: string;
  bedrooms: string;
  highlight: string;
  airbnbUrl: string;
  image: string;
  images?: string[];
  tag?: string;
}

const properties: Property[] = [
  {
    id: 11,
    title: "Jacuzzi Privativa — Pé Na Areia — Resort",
    location: "Intermares, Cabedelo, PB",
    city: "Intermares, Cabedelo, PB",
    bedrooms: "1 quarto",
    highlight: "Jacuzzi privativa com pé na areia",
    airbnbUrl: "https://www.airbnb.com.br/rooms/1704331983879988232",
    image: "/images/properties/jacuzzi-privativa-resort/capa-jacuzzi-privativa.avif",
    images: ["/images/properties/jacuzzi-privativa-resort/capa-jacuzzi-privativa.avif", ...["1.avif","2.avif","3.avif","4.avif","5.avif","6.avif","7.avif","8.avif","9.avif","10.avif","11.avif","12.avif","13.avif","14.avif","15.avif","16.avif","17.avif","18.avif","19.avif","20.avif","21.avif","22.avif","23.avif","24.avif","25.avif","26.avif","27.avif","28.avif","29.jpeg","30.avif","31.avif","32.avif"].map(f => `/images/properties/jacuzzi-privativa-resort/${f}`)],
    tag: "Jacuzzi Privativa",
  },
  {
    id: 12,
    title: "Frente ao Mar — Vista Espetacular",
    location: "Intermares, Cabedelo, PB",
    city: "Intermares, Cabedelo, PB",
    bedrooms: "2 quartos",
    highlight: "Vista espetacular para o mar",
    airbnbUrl: "https://www.airbnb.com.br/rooms/1521153956220258492",
    image: "/images/properties/frente-mar-vista-espetacular/capa-frente-mar-vista-espetacular.avif",
    images: ["/images/properties/frente-mar-vista-espetacular/capa-frente-mar-vista-espetacular.avif", ...["1.avif","2.avif","3.avif","4.avif","5.avif","6.avif","7.avif","8.avif","9.avif","10.avif","11.avif","12.avif","13.avif","14.avif","15.jpeg","16.avif","17.avif","18.avif","19.avif","20.avif","21.avif","22.avif","23.avif","24.avif","25.jpeg","26.avif"].map(f => `/images/properties/frente-mar-vista-espetacular/${f}`)],
    tag: "Destaque",
  },
  {
    id: 13,
    title: "Resort Beira-Mar — Varanda Gourmet",
    location: "Ponta de Campina, Cabedelo, PB",
    city: "Ponta de Campina, Cabedelo, PB",
    bedrooms: "3 quartos",
    highlight: "Varanda gourmet com vista para o mar",
    airbnbUrl: "https://www.airbnb.com.br/rooms/1600061650333114092",
    image: "/images/properties/varanda-gourmet/capa-varanda-gourmet.avif",
    images: ["/images/properties/varanda-gourmet/capa-varanda-gourmet.avif", ...Array.from({ length: 37 }, (_, i) => `/images/properties/varanda-gourmet/${i + 1}.avif`)],
    tag: "Resort",
  },
  {
    id: 14,
    title: "Praia de Tambaú — Beira Mar",
    location: "Tambaú",
    city: "Tambaú, João Pessoa, PB",
    bedrooms: "2 quartos",
    highlight: "Direto na Praia de Tambaú",
    airbnbUrl: "https://www.airbnb.com.br/rooms/1583603102654853195",
    image: "/images/properties/praia-tambau/capa-praia-de-tambau.avif",
    images: ["/images/properties/praia-tambau/capa-praia-de-tambau.avif", ...Array.from({ length: 11 }, (_, i) => `/images/properties/praia-tambau/${i + 1}.avif`)],
  },
  {
    id: 2,
    title: "Refúgio Climatizado Beira-Mar",
    location: "Intermares, Cabedelo, PB",
    city: "Intermares, Cabedelo, PB",
    bedrooms: "2 quartos",
    highlight: "Acesso direto à praia",
    airbnbUrl: "https://airbnb.com/h/bc311",
    image: "/images/properties/beiramar-intermares/capa-beiramar-intermares.avif",
    images: ["/images/properties/beiramar-intermares/capa-beiramar-intermares.avif", ...[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map(i => `/images/properties/beiramar-intermares/${i}.avif`)],
  },
  {
    id: 3,
    title: "Tambaú Frente ao Mar",
    location: "Tambaú",
    city: "Tambaú, João Pessoa, PB",
    bedrooms: "2 quartos",
    highlight: "Vista mar privilegiada",
    airbnbUrl: "https://airbnb.com/h/zeda1501",
    image: "/images/properties/tambauvista/capa-tambauvista.avif",
    images: ["/images/properties/tambauvista/capa-tambauvista.avif", ...[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27].map(i => `/images/properties/tambauvista/${i}.avif`)],
  },
  {
    id: 8,
    title: "Conforto em Família Beira-Mar",
    location: "Intermares, Cabedelo, PB",
    city: "Intermares, Cabedelo, PB",
    bedrooms: "2 quartos",
    highlight: "Ideal para famílias",
    airbnbUrl: "http://airbnb.com/h/dimavieluxor",
    image: "/images/properties/familia-beiramar/capa-familia-beiramar.avif",
    images: ["/images/properties/familia-beiramar/capa-familia-beiramar.avif", ...["1.avif","2.avif","3.avif","4.avif","5.avif","6.avif","7.avif","8.avif","9.avif","10.avif","11.avif","12.avif","13.avif","14.avif","15.avif","16.avif","17.avif","18.jpeg","19.avif","20.avif","21.avif"].map(f => `/images/properties/familia-beiramar/${f}`)],
  },
  {
    id: 9,
    title: "Beira-Mar com varanda",
    location: "Intermares, Cabedelo, PB",
    city: "Intermares, Cabedelo, PB",
    bedrooms: "2 quartos",
    highlight: "Frente ao mar para famílias",
    airbnbUrl: "http://airbnb.com/h/dimaviechaves",
    image: "/images/properties/familia-beiramar-frentemar/capa-familia-beiramar-frentemar.avif",
    images: ["/images/properties/familia-beiramar-frentemar/capa-familia-beiramar-frentemar.avif", ...[1,2,3,4,5,6,7,8,9,10,11,12].map(i => `/images/properties/familia-beiramar-frentemar/${i}.avif`)],
    tag: "Família",
  },
  {
    id: 15,
    title: "Resort Frente ao Mar",
    location: "Intermares, Cabedelo, PB",
    city: "Cabedelo, PB",
    bedrooms: "3 quartos",
    highlight: "Resort frente ao mar em Cabedelo",
    airbnbUrl: "https://www.airbnb.com.br/rooms/1526017361743856322",
    image: "/images/properties/resort-frente-ao-mar/capa-resort-frente-ao-mar.avif",
    images: ["/images/properties/resort-frente-ao-mar/capa-resort-frente-ao-mar.avif", ...Array.from({ length: 25 }, (_, i) => `/images/properties/resort-frente-ao-mar/${i + 1}.avif`)],
    tag: "Resort",
  },
];

const locationColors: Record<string, string> = {
  Intermares: "bg-ocean-light text-ocean",
  "Intermares, Cabedelo, PB": "bg-ocean-light text-ocean",
  Bessa: "bg-gold-muted text-gold-dark",
  Tambaú: "bg-ocean-muted text-ocean-dark",
  "Beira-Mar": "bg-sand text-brown-light",
  "Frente Mar": "bg-ocean-light text-ocean-dark",
  "Vista Mar": "bg-ocean-light text-ocean",
  Resort: "bg-gold-muted text-gold-dark",
  "Ponta de Campina, Cabedelo, PB": "bg-gold-muted text-gold-dark",
  Flat: "bg-sand text-brown-light",
};

function PropertyCard({ property, index }: { property: Property; index: number }) {
  const { t } = useLanguage();
  const locColor = locationColors[property.location] ?? "bg-sand text-brown-light";
  const gallery = property.images ?? [property.image];
  const [current, setCurrent] = useState(0);

  const prev = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((c) => (c - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const next = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((c) => (c + 1) % gallery.length);
  }, [gallery.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-sand/60"
    >
      {/* Image / Gallery */}
      <div className="relative h-52 bg-gradient-to-br from-ocean-light to-ocean-muted overflow-hidden">
        <Image
          src={gallery[current]}
          alt={`${property.title} — ${t.properties.photoOf} ${current + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        {property.tag && (
          <div className="absolute top-3 left-3 bg-ocean text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide shadow z-10">
            {property.tag}
          </div>
        )}
        {gallery.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors"
              aria-label="Foto anterior"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors"
              aria-label="Próxima foto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
            <div className="absolute bottom-2 right-3 z-10 bg-black/50 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
              {current + 1} / {gallery.length}
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3
            className="font-bold text-brown text-base leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {property.title}
          </h3>
          <span className={`flex-shrink-0 text-[10px] font-semibold px-2 py-1 rounded-full ${locColor}`}>
            {property.location}
          </span>
        </div>

        <p className="text-brown-light text-xs mb-4 leading-relaxed">{property.highlight}</p>

        <div className="flex items-center gap-4 mb-4 text-xs text-brown-light">
          <span className="flex items-center gap-1.5">
            <BedIcon />
            {property.bedrooms.replace("quartos", t.properties.bedrooms)}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPinIcon />
            {property.city}
          </span>
        </div>

        <a
          href={property.airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-ocean text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-ocean-dark transition-colors duration-200"
        >
          {t.properties.viewAirbnb}
          <ExternalLinkIcon />
        </a>
      </div>
    </motion.div>
  );
}

export default function Properties() {
  const { t } = useLanguage();
  const p = t.properties;

  return (
    <section id="hospedagens" className="py-24 bg-brown-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-3 text-ocean font-semibold text-xs tracking-[0.22em] uppercase mb-4">
            <span className="w-6 h-px bg-ocean" />
            {p.eyebrow}
            <span className="w-6 h-px bg-ocean" />
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-brown mb-5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {p.title1}{" "}
            <span
              className="text-ocean"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontStyle: "italic" }}
            >
              {p.titleAccent}
            </span>
          </h2>
          <p className="text-brown-light text-lg max-w-xl mx-auto">
            {p.description}
          </p>
        </motion.div>

        {/* Properties grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-brown-light mb-4">
            {t.contact.ctaDescription}
          </p>
          <a
            href={`https://wa.me/5583982002424?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre as hospedagens da Dimavie.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1da851] transition-colors shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            {t.contact.ctaButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
