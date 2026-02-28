import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leoraksha - National Cyber Awareness",
  description: "India's most trusted cyber awareness and citizen protection ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="gov-top-bar"></div>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Header />
          <div style={{ flex: 1 }}>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
