import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Domain portofolio sesuai CV Anda
const siteUrl = "https://fdevsite.cloud";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ferdy Kurnia Panggabean | Full Stack Software Engineer & DevOps",
    template: "%s | Ferdy Kurnia Panggabean",
  },
  description:
    "Portofolio profesional Ferdy Kurnia Panggabean, Full Stack Software Engineer & DevOps yang berpengalaman dalam Laravel, Tailwind CSS, Vue.js, Node.js, dan infrastruktur Cloud/DevOps.",
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
    title: "Ferdy Kurnia Panggabean | Full Stack Software Engineer & DevOps",
    description:
      "Portofolio profesional Ferdy Kurnia Panggabean, menampilkan pengalamannya membangun sistem enterprise, ERP, IoT integration, dan DevOps deployment.",
    url: siteUrl,
    siteName: "Ferdy Kurnia Panggabean Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Pastikan Anda menyimpannya di folder /public/og-image.png
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
  // Schema Structured Data (Person) untuk Google Search Knowledge Graph
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

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
