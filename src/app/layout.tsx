import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "#/layout/footer";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const data = {
  title: "Les CuicuiteDays | 12 & 13 Juin 2026",
  description: [
    "Les CuicuiteDays revienne cette année pour une nouvelle édition qui aura lieu les 12 et 13 juin 2026. 📅",
    "Durant ces deux jours vous pourrez retrouver une 10aime d'artistes qui se produiront sur la scène du festival. 🎤",
  ].join(" "),
  siteName: "Les CuicuiteDays | 12 & 13 Juin 2026",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cuicuitedays.fr/"),

  title: {
    template: `%s - ${data.title}`,
    default: data.title,
    absolute: data.title,
  },
  description: data.description,
  applicationName: data.siteName,

  keywords: ["festival", "musique", "concert", "cuicuitedays", "amis", "food trucks", "billetterie", "bressuire", "noirlieu", "deux-sèvres", "nouvelle-aquitaine"],

  openGraph: {
    title: {
      template: `%s - ${data.title}`,
      default: data.title,
      absolute: data.title,
    },
    description: data.description,
    siteName: data.siteName,
    url: "https://cuicuitedays.fr/",
    type: "website",
    images: "https://cuicuitedays.fr/icon.png",
  },

  twitter: {
    title: {
      template: `%s - ${data.title}`,
      default: data.title,
      absolute: data.title,
    },
    description: data.description,
    site: data.siteName,
    images: "https://cuicuitedays.fr/icon.png",
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} antialiased`}>
        {children}

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
