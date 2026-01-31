import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex-center min-h-screen bg-orange-200/60`}
      >
        <div className="max-w-300 w-full">
          <Header />
          <Wrapper>
            <div className="p-6 h-[65dvh] flex-center flex-col">{children}</div>
            <Footer />
          </Wrapper>
        </div>
      </body>
    </html>
  );
}
