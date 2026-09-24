import type { Metadata, Viewport } from "next";
import { Noto_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#070B14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.slogan}`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Pukio Tech",
    "Pukio",
    "desarrollo de software Chiclayo",
    "ingeniería de software Perú",
    "páginas web Chiclayo",
    "desarrollo web Perú",
    "tiendas online eCommerce",
    "software a medida",
    "administración VPS Linux",
    "servidores y DNS",
    "soporte técnico de software",
  ],
  authors: [{ name: "Pukio Tech", url: siteConfig.url }],
  creator: "Pukio Tech",
  publisher: "Pukio Tech",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data (Organization, ProfessionalService, WebSite)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}#org`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        email: siteConfig.email,
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chiclayo",
          addressRegion: "Lambayeque",
          addressCountry: "PE",
        },
        knowsAbout: [
          "Desarrollo de Software",
          "Desarrollo Web",
          "eCommerce",
          "Infraestructura Cloud y VPS",
          "Servidores Linux y DNS",
          "Mantenimiento y Reparación de Software",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "es",
        publisher: { "@id": `${siteConfig.url}#org` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}#service`,
        name: siteConfig.name,
        url: siteConfig.url,
        priceRange: "$$",
        parentOrganization: { "@id": `${siteConfig.url}#org` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Catálogo de Servicios Pukio Tech",
          itemListElement: siteConfig.services.map((srv) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: srv.title,
              description: srv.shortDesc,
            },
          })),
        },
      },
    ],
  };

  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${notoSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('pukio-theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#070B14] text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white dark:selection:text-slate-950 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
