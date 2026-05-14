import "./globals.css";
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { ThemeProviders } from "@/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "GameVault",
  description: "Modern gaming catalog platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${geist.variable}`}>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
