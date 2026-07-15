import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarketPresence from "@/components/MarketPresence";
import News from "@/components/News";
import Platforms from "@/components/Platforms";
import Stats from "@/components/Stats";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      <Header />
      {/*
        Single source of truth for inter-section gaps:
        desktop 120px (gap-30), mobile 80px (max-lg:gap-20).
        Sections should not add outer vertical padding for spacing.
      */}
      <main className="flex w-full flex-col gap-30 max-lg:gap-20">
        <Hero />
        <Stats />
        <Platforms />
        <MarketPresence />
        <Team />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
