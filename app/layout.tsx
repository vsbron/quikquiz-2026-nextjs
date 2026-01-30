import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { APP_NAME } from "@/utils/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: `Test your knowledge with ${APP_NAME} - a fun, interactive quiz app built with Next.js. Choose a category, answer questions, and see your results instantly.`,
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
        <div className="w-full min-h-screen flex place-items-center">
          <div className="max-w-300 w-full mx-auto rounded-md border border-stone-300 shadow-sm">
            <Header />
            <div className="p-6 min-h-80">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
