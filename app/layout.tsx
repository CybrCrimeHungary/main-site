import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | CybrCrime',
    default: 'CybrCrime - We believe in a digital future.', // a default is required when creating a template
  },
  description: "Mások rendszert építenek, mi rendet teszünk a digitális káoszban. CybrCrime – igényes kód, stabil háttér.",
  keywords: [
    "webfejlesztés",
    "egyedi weboldal készítés",
    "backend fejlesztés",
    "Laravel fejlesztés",
    "streaming szolgáltatás",
    "Kubernetes üzemeltetés",
    "felhő alapú rendszerek",
    "digitális rendszerek karbantartása",
    "webes alkalmazás fejlesztés",
    "informatikai rendszergazda szolgáltatás",
    "modern webes megoldások",
    "megbízható fejlesztő cég",
    "DevOps szolgáltatás"
  ],
  generator: "CybrCMS",
  applicationName: "CybrCrime bemutatkozó oldal",
  icons: {
    icon: [
      {url: '/logo.png', sizes: 'any'},
      { url: '/icon_white.png', media: '(prefers-color-scheme: dark)' }
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/logo.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
