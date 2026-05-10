import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CLIENT, SITE } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${CLIENT.nom} — ${CLIENT.titre} Le Vigan Cévennes`,
    template: `%s | ${CLIENT.nom} — ${CLIENT.titre} Le Vigan Cévennes`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE.nom,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Marina Reidt Lebleu — Diététicienne Nutritionniste",
  description: SITE.description,
  url: SITE.url,
  telephone: CLIENT.telephoneRaw,
  email: CLIENT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLIENT.adresse,
    addressLocality: CLIENT.ville,
    postalCode: CLIENT.codePostal,
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "43.9935",
    longitude: "3.6065",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "45€ – 55€",
  medicalSpecialty: "Dietitian",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "43.9935",
      longitude: "3.6065",
    },
    geoRadius: "50000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
