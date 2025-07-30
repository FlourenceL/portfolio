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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

// Sample project data with tech-related projects
const projects = [
  {
    id: 1,
    title: "Live chat app",
    category: "Personal Project",
    description:
      "A real-time live chat application built with Next.js and WebSockets. Currently in the early stages of development.",
    longDescription: `Even though popular messaging platforms like Messenger, Instagram, and X dominate the market, I wanted to build my own live chat application as a way to truly understand and practice real-time communication systems.\n This project allows me to dive deeper into live data transmission, explore advanced WebSocket implementations, and experiment with WebRTC for audio and video calling. 
Currently, the project is in its early development phase since my main focus is on professional work projects. However, my long-term vision is to develop a fully functional messaging platform with one-on-one and group chats, real-time notifications, and seamless live calling features. This project not only strengthens my technical skills but also pushes me to think critically about scalability, user experience, and reliable data handling in real-time applications.`,
    image:
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Next.js", "Tailwind CSS, Firebase"],
  },
  {
    id: 2,
    title: "Casehub",
    category: "Personal Project",
    description:
      "A web application built during my OJT for SLSU’s Legal Office to digitally manage and track case files. Focused on clean CRUD operations, responsive UI, and secure authentication to deliver a client-ready solution.",
    longDescription: `During my On-the-Job Training, I challenged myself to go beyond basic requirements and truly apply professional software development practices. To do this, I built Casehub—a web application designed for the Legal Office of SLSU, which previously had no digital system for tracking case files.

I approached this project as if SLSU were my first real client, focusing on creating a reliable CRUD system with a strong emphasis on database efficiency and delivering the best possible user experience. On the frontend, my biggest challenge was ensuring responsiveness and crafting an intuitive UI. On the backend, I focused on implementing secure authentication and authorization, including guard mechanisms to protect sensitive data.

This project not only strengthened my technical skills but also taught me how to think like a professional developer, balancing clean code, usability, and real-world client needs.`,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Next.js", "Nest.js", "MySQL"],
  },
  {
    id: 3,
    title: "IoT BMI & Body Fat Analyzer",
    category: "Personal Project",
    description:
      "My thesis project for measuring BMI and body fat using IoT sensors and machine learning.",
    longDescription: `This thesis project marked the beginning of my journey as a software developer and is what made me realize my passion for building software. I took on the challenge of leading the software development, designing the entire system workflow, and figuring out how the front end and back end should communicate. At that time, APIs were completely new to me, so I spent countless hours researching and experimenting to understand how everything connects.

One of the most challenging parts was training a custom object detection model, something I had never done before. I dedicated days and nights to research and testing, determined to make the software work because my teammates depended on me. In the end, this project became a turning point in my career, teaching me leadership, problem-solving, and the resilience needed to bring a complex IoT-based system to life.`,
    image: "/iot-image.jpg",
    tags: ["React", "Flask", "Firebase", "Ultralytics (YOLO v10)"],
  },
  {
    id: 4,
    title: "JKS (Japanese Shotorenmei Philippines)",
    category: "Work Project",
    description:
      "A fullstack web application for managing karate training schedules, member registrations, and event tracking.",
    longDescription: `JKS (Japan Karate Shotorenmei Philippines) is a real-world project where we developed a full-stack web application to manage karate training schedules, member registrations, and event tracking. My main contribution was on the frontend, where I focused on making the website fully responsive and user-friendly.

This project was a valuable experience as it exposed me to professional development practices and collaboration within a real-world client project, helping me refine my frontend skills while working with Angular and Laravel.`,
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Angular", "Laravel", "MySQL"],
  },
  {
    id: 5,
    title: "MPC API",
    category: "Work Project",
    description:
      "API for sending survey data from the frontend to the backend.",
    longDescription: `During my OJT, I volunteered to take on the challenge of designing and developing the MPC API. This project became a major learning experience, teaching me the fundamentals and best practices of API development. I spent significant time researching, reading blogs, and studying how to build scalable and maintainable APIs.

The project was a success—I collaborated closely with a senior frontend developer, ensuring smooth integration and reliable data communication between the backend and frontend. This experience strengthened my backend skills and gave me confidence in designing real-world APIs that meet professional standards.`,
    image: "/mpc-swagger.jpg",
    tags: ["Nest.js", "MongoDB"],
  },
  {
    id: 6,
    title: "HRIS",
    category: "Work Project",
    description:
      "A Human Resource Information System for managing employee records, payroll, and HR processes.",
    longDescription: `HRIS was a .NET-based project that initially pushed me far outside my comfort zone. I had little experience with .NET frameworks and tools, and at first, I didn’t enjoy working with them. However, I knew that staying in my comfort zone wouldn’t help me grow as a developer.

I embraced the challenge and worked hand-in-hand with a senior developer, which accelerated my growth tremendously. Through this mentorship and collaboration, I learned how to effectively work with .NET, improved my database design and software architecture skills, and further strengthened my knowledge in API development and writing efficient database queries.

This project broadened my perspective as a full-stack developer and taught me how to quickly adapt to new technologies while delivering high-quality solutions.”`,
    image: "/hris.jpg",
    tags: ["ASP.NET", "Xamarin", "Microsoft SQL Server"],
  },
  {
    id: 7,
    title: "Gym Management System (GMS)",
    category: "Personal Project",
    description:
      "A desktop app for managing gym memberships, tracking workouts, and handling billing operations.",
    longDescription: `GMS was my very first software development project, created during my second year in college when I had no prior knowledge of programming or building applications. I was grouped with classmates who were also new to development, and I knew I didn’t want to just stand by and be carried through the project.

Instead, I stepped up as the team leader, taking full responsibility for driving the project forward. I spent months learning the fundamentals of software development, studying database design, and seeking guidance from senior students on how to structure and build a functional application.

This project became the foundation of my journey as a developer—it was where I learned leadership, teamwork, and the determination to figure things out from scratch to deliver a working solution.`,
    image: "/GMS-image.png",
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
            Work and Personal Projects
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

              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="secondary"
                      className="text-primary flex items-center"
                    >
                      <span className="text-sm font-medium">Read more</span>
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl w-full mx-auto max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription className="text-base leading-relaxed block space-y-3">
                        {project.longDescription
                          .split("\n")
                          .map((line, index) => (
                            <span key={index} className="block">
                              {line}
                            </span>
                          ))}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
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
                      <div className="mt-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={500}
                          height={300}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
