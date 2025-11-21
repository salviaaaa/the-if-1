import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Missions } from "@/components/Missions";
import { Vision } from "@/components/Vision";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="missions">
        <Missions />
      </div>
      <div id="vision">
        <Vision />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
