import Navbar from "@/components/Navbar";
import DemoHero from "@/components/DemoHero";
import CallSteps from "@/components/CallSteps";
import Footer from "@/components/Footer";

export default function BookDemoPage() {
  return (
    <main className="bg-black">
      <Navbar />
      <DemoHero />
      <CallSteps />
      <Footer />
    </main>
  );
}
