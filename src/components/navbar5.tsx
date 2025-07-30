"use client";

import { MenuIcon } from "lucide-react";
import PortfolioHeroSplitLayout from "./views/landing-page/hero";
import Logos06Page from "./views/landing-page/logos-06/logos-06";
import SkillsDisplay from "./views/landing-page/skills-display";
import PortfolioProjectStandardGrid from "./views/landing-page/projects-display";
import Timeline from "./views/timeline-01/timeline-01";
import { Contact2 } from "./views/landing-page/contact2";
import FooterSimple from "./views/landing-page/footer";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar5 = () => {
  return (
    <>
      <section className="py-4 sticky top-0 z-50 bg-black shadow-md">
        <div className="container">
          <nav className="flex items-center justify-center">
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="#home" className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#skills" className={navigationMenuTriggerStyle()}>
                    Skills
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="#projects"
                    className={navigationMenuTriggerStyle()}
                  >
                    Projects
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="#experiences"
                    className={navigationMenuTriggerStyle()}
                  >
                    Experiences
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="lg:hidden ml-auto mr-4">
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="icon">
                    <MenuIcon className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="top" className="max-h-screen overflow-auto">
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col p-4">
                    <div className="flex flex-col gap-6">
                      <Link href="#home" className="font-medium">
                        Home
                      </Link>
                      <Link href="#skills" className="font-medium">
                        Skills
                      </Link>
                      <Link href="#projects" className="font-medium">
                        Projects
                      </Link>
                      <Link href="#experiences" className="font-medium">
                        Experiences
                      </Link>
                    </div>
                    <div className="mt-6 flex flex-col gap-4"></div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </section>
      <section id="home">
        <PortfolioHeroSplitLayout />
      </section>
      <section id="skills">
        <Logos06Page />
      </section>
      <SkillsDisplay />
      <section id="projects">
        <PortfolioProjectStandardGrid />
      </section>
      <section id="experiences">
        <Timeline />
      </section>
      <section id="contact">
        <Contact2 />
      </section>
      <FooterSimple />
    </>
  );
};

export { Navbar5 };
