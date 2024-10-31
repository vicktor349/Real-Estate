import localFont from "next/font/local";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonials from "@/components/Testimonials";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import Journey from "@/components/Journey";


export default function Home() {
  return (
    <>
      <Head>
        <title>Estatein | Home</title>
      </Head>
      <div>
        <HeroSection />
        <Features />
        <FeaturedProperties />
        <Testimonials />
        <FrequentlyAsked />
        <Journey />
      </div>
    </>
  );
}
