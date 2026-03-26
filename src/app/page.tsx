import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LeadMagnet } from "@/components/LeadMagnet";
import { MarketInsights } from "@/components/MarketInsights";
import { MarketMetrics } from "@/components/MarketMetrics";
import { Navbar } from "@/components/Navbar";
import { Opportunities } from "@/components/Opportunities";
import { SocialProofBar } from "@/components/SocialProofBar";
import { SpecializationMatrix } from "@/components/SpecializationMatrix";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProofBar />
        <SpecializationMatrix />
        <MarketMetrics />
        <MarketInsights />
        <Testimonials />
        <LeadMagnet />
        <Opportunities />
      </main>
      <Footer />
    </>
  );
}
