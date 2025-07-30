import {
  Code,
  Database,
  Figma,
  FileCode,
  Github,
  Globe,
  Layers,
  Lightbulb,
  Palette,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Technical Skills with proficiency levels
const technicalSkills = [
  { name: "JavaScript/TypeScript", proficiency: 89 },
  { name: "React & React Native", proficiency: 89 },
  { name: "Node.js & Express", proficiency: 87 },
  { name: "Next.js", proficiency: 89 },
  { name: "HTML/CSS/SASS", proficiency: 95 },
  { name: ".Net", proficiency: 79 },
  { name: "SQL Databases", proficiency: 88 },
  { name: "NoSQL Databases", proficiency: 79 },
  { name: "Laravel", proficiency: 80 },
  { name: "Nest.js", proficiency: 89 },
];

// Tools categorized by type
const tools = [
  {
    category: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    items: [
      { name: "Angular", icon: <FileCode /> },
      { name: "Next.js", icon: <FileCode /> },
      { name: "Vue.js", icon: <FileCode /> },
      { name: "TypeScript", icon: <FileCode /> },
      { name: "React", icon: <Code /> },
      { name: "Tailwind CSS", icon: <Palette /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5" />,
    items: [
      { name: "Node.js", icon: <Server /> },
      { name: "Express.js", icon: <Server /> },
      { name: "Nest.js", icon: <Server /> },
      { name: "MongoDB", icon: <Database /> },
      { name: "MySQL", icon: <Database /> },
      { name: "MicrosoftSQL Server", icon: <Database /> },
    ],
  },
  // {
  //   category: "DevOps & Tools",
  //   icon: <Terminal className="h-5 w-5" />,
  //   items: [
  //     { name: "Git & GitHub", icon: <Github /> },
  //     { name: "Docker", icon: <Terminal /> },
  //     { name: "AWS", icon: <Server /> },
  //     { name: "CI/CD", icon: <Terminal /> },
  //     { name: "Jest", icon: <Terminal /> },
  //     { name: "Figma", icon: <Figma /> },
  //   ],
  // },
  {
    category: "Mobile",
    icon: <Smartphone className="h-5 w-5" />,
    items: [
      { name: "Ionic", icon: <Smartphone /> },
      { name: "Xamarin", icon: <Smartphone /> },
      { name: "React Native", icon: <Smartphone /> },
      { name: "Android", icon: <Smartphone /> },
      { name: "iOS", icon: <Smartphone /> },
      { name: "SQLite", icon: <Database /> },
    ],
  },
];

export default function SkillsDisplay() {
  // Function to determine skill level label
  const getSkillLevel = (proficiency: number) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Advanced";
    if (proficiency >= 70) return "Proficient";
    if (proficiency >= 50) return "Intermediate";
    return "Beginner";
  };

  // Function to get color class based on proficiency
  const getColorClass = (proficiency: number) => {
    if (proficiency >= 90) return "text-green-500";
    if (proficiency >= 80) return "text-blue-500";
    if (proficiency >= 70) return "text-indigo-500";
    if (proficiency >= 50) return "text-amber-500";
    return "text-gray-500";
  };

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        <Tabs defaultValue="skills" className="max-w-4x mx-auto">
          <TabsList className="grid h-fit w-full grid-cols-1 md:grid-cols-2">
            <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            <TabsTrigger value="tools">Tools & Technologies</TabsTrigger>
          </TabsList>

          {/* Technical Skills Tab */}
          <TabsContent value="skills" className="mt-6">
            <div className="bg-card rounded-xl border p-6">
              <h3 className="mb-4 text-xl font-semibold">
                <Lightbulb className="text-primary mr-2 inline h-5 w-5" />
                Skill Proficiency Levels
              </h3>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{skill.name}</p>
                      <span
                        className={cn(
                          "text-sm font-semibold",
                          getColorClass(skill.proficiency)
                        )}
                      >
                        {getSkillLevel(skill.proficiency)}
                      </span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Tools & Technologies Tab */}
          <TabsContent value="tools" className="mt-6">
            <div className="bg-card rounded-xl border p-6">
              <h3 className="mb-6 text-xl font-semibold">
                <Terminal className="text-primary mr-2 inline h-5 w-5" />
                Tools & Technologies
              </h3>

              <div className="grid gap-8 sm:grid-cols-2">
                {tools.map((toolCategory) => (
                  <div
                    key={toolCategory.category}
                    className="space-y-4 rounded-lg border p-4"
                  >
                    <h4 className="flex items-center gap-2 font-medium">
                      {toolCategory.icon}
                      {toolCategory.category}
                    </h4>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {toolCategory.items.map((tool) => (
                        <div
                          key={tool.name}
                          className="bg-muted/40 hover:border-muted flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm transition-colors"
                        >
                          <span className="text-primary">{tool.icon}</span>
                          {tool.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
