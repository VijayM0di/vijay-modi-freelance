import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vijay Modi — AI Systems Freelancer & Portfolio",
  description:
    "Hire Vijay Modi to build production AI systems: Command Centers, Document AI, RAG/agents, computer vision. Portfolio of Supervity, Quantum Bot, and shipped products.",
  metadataBase: new URL("https://freelance-site-cyan.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${manrope.variable} antialiased mesh min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
