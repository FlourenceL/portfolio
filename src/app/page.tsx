import { Navbar } from "@/components/views/landing-page/navbar";
import PortfolioHeroSplitLayout from "@/components/views/landing-page/hero";
import Logos06Page from "@/components/logos-06/logos-06";
import SkillsDisplay from "@/components/views/landing-page/skills-display";
import PortfolioProjectStandardGrid from "@/components/views/landing-page/projects-display";
import Timeline from "@/components/timeline-01/timeline-01";
import { Contact2 } from "@/components/views/landing-page/contact2";
import FooterSimple from "@/components/views/landing-page/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <PortfolioHeroSplitLayout />
      <Logos06Page />
      <SkillsDisplay />
      <PortfolioProjectStandardGrid />
      <Timeline />
      <Contact2 />
      <FooterSimple />
    </>
  );
}
