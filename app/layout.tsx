import type { Metadata } from "next";
import { Cherry_Swash, Lora, Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";

import { APP_NAME } from "@/utils/constants";
import "./globals.css";

const cherrySwash = Cherry_Swash({
  variable: "--font-cherry-swash",
  weight: ["400"],
});
const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
});

// Meta data
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
        className={`${cherrySwash.variable} ${lora.variable} ${inter.variable} antialiased flex-center min-h-screen`}
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
