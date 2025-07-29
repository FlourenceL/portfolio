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
} from "@/components/logos-06/logos";
import Marquee from "@/components/ui/marquee";

const Logos06Page = () => {
  return (
    <div className=" flex items-center justify-center px-6 py-16">
      <div className="overflow-hidden">
        <p className="text-center text-4xl font-extrabold text-gray-900 mb-6">
          🚀 Skills & Technologies
        </p>
        <p className="text-center text-lg text-gray-600 mb-12">
          A comprehensive overview of my technical skills, proficiency levels,
          and the tools I use to create exceptional digital experiences.
        </p>

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
