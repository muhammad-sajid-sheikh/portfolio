import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ResponsiveNav from "./responsivenav";
import ScrollToTop from "@/components/helper/scrollToTop";
import AnimatedCursor from "react-animated-cursor"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Muhammad Sajid | Web Developer & AI / Agentic AI Enthusiast",
  description:
    "Portfolio of Muhammad Sajid — Web Developer, Digital Marketing Professional, and GIAIC student specializing in AI and Agentic AI development.",
  keywords: [
    "Muhammad Sajid",
    "Sajid Sheikh",
    "Web Developer",
    "Next.js Developer",
    "AI Developer",
    "Agentic AI",
    "GIAIC",
    "Digital Marketing",
  ],
  authors: [{ name: "Muhammad Sajid" }],
  openGraph: {
    title: "Muhammad Sajid | Web Developer & AI / Agentic AI Enthusiast",
    description:
      "Portfolio of Muhammad Sajid — Web Developer, Digital Marketing Professional, and GIAIC student specializing in AI and Agentic AI development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="hidden md:block">
          <AnimatedCursor innerSize={8} outerSize={35} innerScale={2} outerScale={2} outerAlpha={0} innerStyle={{
            backgroundColor:"white"
          }}
          outerStyle={{
            border: "3px solid white",
          }}
          />
        </div>
        <ResponsiveNav/>
        {children}
        <ScrollToTop/>

      </body>

    </html>
  );
}