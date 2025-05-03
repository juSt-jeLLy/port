import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Rajdhani, Press_Start_2P } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: ["400"],
  variable: "--font-press-start-2p",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yagnesh | Blockchain Developer",
  description: "Portfolio of Yagnesh, a Blockchain Developer skilled in building dApps, AI-driven solutions, and smart contracts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rajdhani.variable} ${pressStart2P.variable} antialiased`}
      >
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
