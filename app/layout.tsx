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
        className={`${merriweather.variable} ${lora.variable} ${inter.variable} antialiased max-sm:min-h-screen`}
      >
        <div className="w-full sm:w-150 md:w-180 lg:w-240 xl:w-300 mx-auto sm:mt-10 sm:mb-10 lg:mt-14">
          <Header />
          <Wrapper>
            <div className="pt-10 pb-16 px-12 sm:min-h-[70dvh] flex-center items-stretch! flex-col">
              {children}
            </div>
            <Footer />
          </Wrapper>
        </div>
      </body>
    </html>
  );
}
