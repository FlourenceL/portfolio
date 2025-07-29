import { Navbar } from "@/components/views/landing-page/navbar";
import PortfolioHeroSplitLayout from "@/components/views/landing-page/hero";
import Logos06Page from "@/components/logos-06/logos-06";

export default function Home() {
  return (
    <>
      <Navbar />
      <PortfolioHeroSplitLayout />
      <Logos06Page />
    </>
  );
}
