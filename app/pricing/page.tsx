// app/pricing/page.tsx
import PricingHero from "@/components/PricingHero";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AnotherCTA from "@/components/AnotherCTA";
// import Navbar from "@/components/Navbar"; // add your existing navbar here

export default function PricingPage() {
  return (
    <main className="bg-black">
        <Navbar />
        <PricingHero />
        <Pricing showHeader={false} />
        <AnotherCTA />
        <Footer />
    </main>
  );
}
