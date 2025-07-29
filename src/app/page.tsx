import PortfolioHeroSplitLayout from "@/components/views/landing-page/hero";
import Logos06Page from "@/components/views/landing-page/logos-06/logos-06";
import SkillsDisplay from "@/components/views/landing-page/skills-display";
import PortfolioProjectStandardGrid from "@/components/views/landing-page/projects-display";
import Timeline from "@/components/views/timeline-01/timeline-01";
import { Contact2 } from "@/components/views/landing-page/contact2";
import FooterSimple from "@/components/views/landing-page/footer";
import { Navbar5 } from "@/components/navbar5";

export default function Home() {
  return (
    <>
      <Navbar5 />
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
