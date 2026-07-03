import { AboutSection } from "../components/AboutSection";
import { AIWorkflowSection } from "../components/AIWorkflowSection";
import { CaseStudyMethodSection } from "../components/CaseStudyMethodSection";
import { ContactSection } from "../components/ContactSection";
import { DesignSystemSection } from "../components/DesignSystemSection";
import { Footer } from "../components/Footer";
import { FloatingDock } from "../components/FloatingDock";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { PastCommercialWorkSection } from "../components/PastCommercialWorkSection";
import { ProductBuilderSection } from "../components/ProductBuilderSection";
import { SelectedWorkSection } from "../components/SelectedWorkSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SelectedWorkSection />
        <CaseStudyMethodSection />
        <AIWorkflowSection />
        <ProductBuilderSection />
        <DesignSystemSection />
        <PastCommercialWorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingDock />
    </>
  );
}
