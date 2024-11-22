import localFont from "next/font/local";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonials from "@/components/Testimonials";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import StartJourney from "@/components/StartJourney";


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
        <div className="px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40">
          <StartJourney />
        </div>
      </div>
    </>
  );
}
