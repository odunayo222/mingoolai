import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import AnotherCTA from "@/components/AnotherCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <Features />
      <CTA />
      <HowItWorks />
      <Pricing />
      <Faq />
      <Testimonials />
      <AnotherCTA />
      <Footer />
    </main>
  );
}
