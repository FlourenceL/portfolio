import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample project data with tech-related projects
const projects = [
  {
    id: 1,
    title: "Live chat app",
    category: "Web Development",
    description:
      "A real-time live chat application built with Next.js and WebSockets. Currently in the early stages of development.",
    image:
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Next.js", "Tailwind CSS, Firebase"],
  },
  {
    id: 2,
    title: "Casehub",
    category: "Web Development",
    description:
      "A web app designed for SLSU's Legal Office to track and manage case files.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Next.js", "Nest.js", "MySQL"],
  },
  {
    id: 3,
    title: "IoT BMI & Body Fat Analyzer",
    category: "Thesis Development",
    description:
      "My thesis project for measuring BMI and body fat using IoT sensors and machine learning.",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["React", "Flask", "Firebase", "Ultralytics (YOLO v10)"],
  },
  {
    id: 4,
    title: "MPC API",
    category: "API Development",
    description:
      "API for sending survey data from the frontend to the backend.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Nest.js", "MongoDB"],
  },
  {
    id: 5,
    title: "HRIS",
    category: "Full Stack Development",
    description:
      "A Human Resource Information System for managing employee records, payroll, and HR processes.",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["ASP.NET", "Xamarin", "Microsoft SQL Server"],
  },
  {
    id: 6,
    title: "Gym Management System (GMS)",
    category: "Desktop App Development",
    description:
      "A desktop app for managing gym memberships, tracking workouts, and handling billing operations.",
    image:
      "https://images.unsplash.com/photo-1585503418537-88331351ad99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["VB.Net", "Microsoft SQL Server"],
  },
];

export default function PortfolioProjectStandardGrid() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        {/* Section header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            A selection of my recent software development work, showcasing
            expertise in front-end, back-end, and mobile application
            development.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:border-primary/30 overflow-hidden pt-0 transition-all duration-300 hover:shadow-lg"
            >
              {/* Project image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Category badge visible on hover */}
                <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="bg-primary/90 text-primary-foreground inline-block rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project content */}
              <CardHeader className="">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground mt-2 line-clamp-2">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="">
                <Button variant="secondary">
                  <Link href="#" className="text-primary flex items-center">
                    <span className="text-sm font-medium">View project</span>
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
