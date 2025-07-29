import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
  Logo09,
} from "@/components/views/landing-page/logos-06/logos";
import { Badge } from "../../../ui/badge";
import Marquee from "@/components/ui/marquee";

const Logos06Page = () => {
  return (
    <div className=" flex items-center justify-center px-6 py-3">
      <div className="overflow-hidden">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary mx-auto px-3 py-1 text-xs font-medium tracking-wide uppercase"
          >
            My Toolkit
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            A comprehensive overview of my technical skills, proficiency levels,
            and the tools I use to create exceptional digital experiences.
          </p>
        </div>

        <div className="mt-20 flex items-center justify-center gap-x-14 gap-y-10 max-w-screen-xl">
          <Marquee pauseOnHover className="[--duration:20s] [&_svg]:mr-20 ">
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
            <Logo09 />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Logos06Page;
