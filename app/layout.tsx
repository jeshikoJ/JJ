import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, Caveat } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { LanguageProvider } from "@/lib/i18n";
import { SITE_URL, PERSON, assetUrl } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-script",
});

const DESCRIPTION =
  "DevOps Engineer & Cloud Architect specializing in AWS infrastructure automation, CI/CD pipeline design, Terraform, Docker, Kubernetes, and system reliability engineering. Based in Chennai, Tamil Nadu.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jeshiko J — DevOps Engineer & Cloud Architect",
    template: "%s",
  },
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: assetUrl("/favicon.ico"), sizes: "32x32", type: "image/x-icon" },
      { url: assetUrl("/icon.png"), sizes: "512x512", type: "image/png" },
    ],
    shortcut: assetUrl("/favicon.ico"),
    apple: assetUrl("/apple-touch-icon.png"),
  },
  openGraph: {
    title: "Jeshiko J — DevOps Engineer & Cloud Architect",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Jeshiko J — Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeshiko J — DevOps Engineer & Cloud Architect",
    description: DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON.name,
  jobTitle: PERSON.jobTitle,
  email: `mailto:${PERSON.email}`,
  telephone: PERSON.phone,
  address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", addressCountry: "IN" },
  url: SITE_URL,
  sameAs: PERSON.sameAs,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${caveat.variable}`}
    >
      <body>
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
