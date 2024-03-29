import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[#f9f9f9] dark:bg-[#1f2c47] transition`}
      >
        <Providers>
          <div
            style={{ transition: "0.5s" }}
            className="light:bg-slate-100 dark:bg-[#1f2c47] transition"
          >
            <Header />
            <main className="mt-[85px] sm:mt-28 md:mt-32">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
