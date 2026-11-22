import localFont from "next/font/local";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const plexMono = localFont({
  src: [
    {
      path: "./fonts/ibm-plex-mono-latin-400-normal.woff2",
      weight: "400",
    },
    {
      path: "./fonts/ibm-plex-mono-latin-500-normal.woff2",
      weight: "500",
    },
    {
      path: "./fonts/ibm-plex-mono-latin-600-normal.woff2",
      weight: "600",
    },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://fdevsite.cloud";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ferdy Kurnia Panggabean | Full Stack Software Engineer & DevOps",
    template: "%s | Ferdy Kurnia Panggabean",
  },
  description:
    "Portofolio profesional Ferdy Kurnia Panggabean, Full Stack Software Engineer & DevOps yang berpengalaman membangun sistem enterprise (WMS, ERP), SaaS multi-tenant, dan integrasi IoT.",
  keywords: [
    "Ferdy Kurnia Panggabean",
    "Full Stack Software Engineer",
    "DevOps Engineer",
    "Laravel Developer",
    "Web Developer Surabaya",
    "Tailwind CSS",
    "Vue.js",
    "Node.js",
    "fdevsite.cloud",
  ],
  authors: [{ name: "Ferdy Kurnia Panggabean", url: siteUrl }],
  creator: "Ferdy Kurnia Panggabean",
  publisher: "Ferdy Kurnia Panggabean",
  openGraph: {
    title: "Ferdy Kurnia Panggabean | Full Stack Software Engineer & DevOps",
    description:
      "Portofolio profesional Ferdy Kurnia Panggabean, menampilkan pengalamannya membangun sistem enterprise, ERP, SaaS multi-tenant, dan integrasi IoT.",
    url: siteUrl,
    siteName: "Ferdy Kurnia Panggabean Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ferdy Kurnia Panggabean Portfolio Preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ferdy Kurnia Panggabean",
    url: siteUrl,
    email: "kpferdy@gmail.com",
    jobTitle: "Full Stack Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Nuctech Company Limited",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Politeknik Elektronika Negeri Surabaya (PENS)",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surabaya",
      addressCountry: "Indonesia",
    },
    sameAs: [
      "https://linkedin.com/in/ferdy-kurnia-panggabean-4146631b8",
      "https://github.com/ferdykp",
      "https://fdevsite.cloud",
    ],
    knowsAbout: [
      "Laravel",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Node.js",
      "DevOps",
      "Ubuntu Server",
      "Nginx",
      "Docker",
      "Cloudflare Zero Trust",
      "MySQL",
      "PostgreSQL",
      "RESTful API Design",
    ],
  };

  // Default to dark while still honoring a theme the visitor chose before.
  const themeInitScript = `
    (function() {
      try {
        var saved = localStorage.getItem("portfolio-theme-v5");
        document.documentElement.classList.toggle("light", saved === "light");
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
