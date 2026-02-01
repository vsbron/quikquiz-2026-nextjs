import type { Metadata } from "next";
import { Lora, Inter, Merriweather } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";

import { APP_NAME } from "@/utils/constants";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
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
        className={`${merriweather.variable} ${lora.variable} ${inter.variable} flex-center--desk antialiased min-h-screen`}
      >
        <div className="w-full sm:max-w-150 md:max-w-180 lg:max-w-240 xl:max-w-300 max-sm:min-h-screen">
          <Header />
          <Wrapper>
            <div className="p-6 sm:h-[65dvh] sm:max-h-150 flex-center flex-col max-sm:mb-auto">
              {children}
            </div>
            <Footer />
          </Wrapper>
        </div>
      </body>
    </html>
  );
}
