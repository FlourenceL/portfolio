import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Liteclerk Corporation",
    period: "June 2025 - Present",
    description:
      "Contribute to projects including the HRIS and its mobile application by developing features, enhancing user experience, and resolving system bugs. Quickly adapted to .NET frameworks, demonstrating strong problem-solving skills and delivering improvements that optimize system performance and usability.",
    technologies: [
      "C#",
      "ASP.Net Core",
      "Xamarin",
      "MicrosoftSQL Server",
      "Vue.js",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Liteclerk Corporation",
    period: "January 2025 - April 2025",
    description:
      "Completed a 600-hour On-the-Job Training in full-stack development, contributing to key projects such as JKS and MPC API. Played an active role in improving system functionality and streamlining project workflows. Recognized for quickly adapting to complex tasks and demonstrating significant growth as a software developer.",
    technologies: ["Angular", "Laravel", "Nest.js", "Next.js", "MongoDB"],
  },
];

export default function Timeline() {
  return (
    <div className="max-w-screen-sm mx-auto py-12 md:py-20 px-6">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Work Experience
        </h2>
      </div>
      <div className="relative ml-3">
        {/* Timeline line */}
        <div className="absolute left-0 top-4 bottom-0 border-l-2" />

        {experiences.map(
          ({ company, description, period, technologies, title }, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-base sm:text-lg font-semibold">
                    {company}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
