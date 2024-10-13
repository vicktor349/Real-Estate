import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Estatein | Home</title>
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <HeroSection />
      </div>
    </>
  );
}
