import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/context/LanguageContext";

const SITE_URL = "https://dimavie.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dimavie Stays | Hospedagem à Beira-Mar na Paraíba",
  description:
    "Aluguel por temporada na Paraíba com a Dimavie. Apartamentos beira-mar em Intermares, Bessa e Tambaú, João Pessoa. SuperHost Airbnb. Perfeito para famílias e grupos. Reserve já!",
  keywords: [
    "hospedagem joão pessoa",
    "aluguel temporada paraíba",
    "airbnb joão pessoa",
    "apartamento beira-mar joão pessoa",
    "hospedagem intermares",
    "hospedagem bessa",
    "hospedagem tambaú",
    "dimavie",
    "dimavie stays",
    "superhost airbnb paraíba",
    "aluguel temporada joão pessoa",
    "apartamento frente mar paraíba",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dimavie Stays | Hospedagem à Beira-Mar na Paraíba",
    description:
      "Aluguel por temporada na Paraíba. Apartamentos beira-mar em João Pessoa. SuperHost Airbnb. Perfeito para famílias e grupos.",
    url: SITE_URL,
    type: "website",
    locale: "pt_BR",
    siteName: "Dimavie Stays",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dimavie Stays – Hospedagem à Beira-Mar na Paraíba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimavie Stays | Hospedagem à Beira-Mar na Paraíba",
    description: "Aluguel por temporada na Paraíba. Apartamentos beira-mar em João Pessoa. SuperHost Airbnb.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Dimavie Stays",
  description:
    "Aluguel por temporada na Paraíba. Apartamentos beira-mar em João Pessoa para famílias e grupos.",
  url: SITE_URL,
  telephone: "+5583982002424",
  address: {
    "@type": "PostalAddress",
    addressLocality: "João Pessoa",
    addressRegion: "PB",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.instagram.com/dimaviestays/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
