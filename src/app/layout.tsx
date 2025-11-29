import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wou Chile – Soluciones digitales a tu medida",
  description:
    "Wou Chile es una empresa especializada en desarrollo web, diseño de software y soluciones digitales para startups, pymes y organizaciones. Creamos experiencias modernas, eficientes y a la medida de cada cliente.",
  openGraph: {
    title: "Wou Chile – Soluciones digitales modernas",
    description:
      "Desarrollamos software, sitios web y soluciones digitales a medida para empresas y startups.",
    url: "https://wouchile.cl",
    siteName: "Wou Chile",
    images: [
      {
        url: "/new-logo.png",
        width: 1200,
        height: 630,
        alt: "Wou Chile - Software y tecnología",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wou Chile – Soluciones digitales modernas",
    description:
      "Desarrollamos software y soluciones web personalizadas para empresas y emprendedores.",
    images: ["/new-logo.png"],
    creator: "@wouchile",
  },
  icons: {
    icon: "/new-logo.png",
    shortcut: "/new-logo.png",
    apple: "/new-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
