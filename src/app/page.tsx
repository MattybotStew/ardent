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
      <Hero />
      <Stats />
      <Platforms />
      <MarketPresence />
      <Team />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
