import type { Metadata } from "next";
import { Geist_Mono, Inter, Outfit } from "next/font/google";
import AppProviders from "@/providers/AppProviders";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit-family",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishnanath.S",
  description:
    "Lead Software Engineer crafting high-performance web experiences with the MERN Stack, Django, and Next.js.",
  icons: {
    icon: "/krishna.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
