import localFont from "next/font/local";
import MotionDirector from "./components/MotionDirector";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

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
    default: "Ferdy Kurnia Panggabean | Software Engineer",
    template: "%s | Ferdy Kurnia Panggabean",
  },
  description:
    "Software engineer building digital products, internal systems, and infrastructure.",
  keywords: [
    "Ferdy Kurnia Panggabean",
    "Full Stack Software Engineer",
    "DevOps Engineer",
    "Laravel Developer",
    "Web Developer Jakarta",
    "Tailwind CSS",
    "Vue.js",
    "Node.js",
    "fdevsite.cloud",
  ],
  authors: [{ name: "Ferdy Kurnia Panggabean", url: siteUrl }],
  creator: "Ferdy Kurnia Panggabean",
  publisher: "Ferdy Kurnia Panggabean",
  openGraph: {
    title: "Ferdy Kurnia Panggabean | Software Engineer",
    description:
      "Selected products and systems built across software, operations, and infrastructure.",
    url: siteUrl,
    siteName: "Ferdy Kurnia Panggabean Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/profile_ai.jpg",
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
      addressLocality: "Jakarta",
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

  const themeInitScript = `
    (function() {
      try {
        var saved = localStorage.getItem("portfolio-theme-v5");
        document.documentElement.classList.toggle("dark", saved === "dark");
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
        <a className="skip-link" href="#main">Skip to content</a>
        <Navbar />
        <MotionDirector />
        {children}
        <Footer />
      </body>
    </html>
  );
}
