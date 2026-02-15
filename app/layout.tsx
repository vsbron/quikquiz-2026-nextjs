import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";

import { APP_NAME } from "@/utils/constants";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400"],
  display: "swap",
  preload: true,
});
const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

// Meta data
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN}`),
  title: {
    default: `${APP_NAME} - Test your knowledge!`,
    template: `%s | ${APP_NAME}`,
  },
  description:
    "Challenge yourself with fun quizzes across multiple categories. Answer questions, track your score, and see results instantly.",
  creator: "VSBroN",
  icons: {
    icon: [
      { url: "/favicon2.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_DOMAIN,
    title: `${APP_NAME} - Test your knowledge!`,
    description:
      "Challenge yourself with fun quizzes across multiple categories. Answer questions, track your score, and see results instantly.",
    siteName: APP_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - Test your knowledge!`,
    description:
      "Challenge yourself with fun quizzes across multiple categories. Answer questions, track your score, and see results instantly.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${inter.variable} antialiased max-sm:min-h-screen`}
      >
        <div className="w-full sm:w-150 md:w-180 lg:w-240 xl:w-300 mx-auto sm:mt-10 sm:mb-10 lg:mt-14">
          <Header />
          <Wrapper>
            <main className="pt-4 sm:pt-10 pb-8 sm:pb-16 px-5 sm:px-12 sm:min-h-[70dvh] portrait:min-h-0 xl:min-h-125 flex-center items-stretch! flex-col">
              {children}
            </main>
            <Footer />
          </Wrapper>
        </div>
      </body>
    </html>
  );
}
