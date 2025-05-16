"use client";

import { motion } from "@/lib/motion";
import { staggerContainer, fadeIn } from "@/lib/motion";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "CSS/Tailwind", level: 90 },
  { name: "UI/UX Design", level: 70 },
  { name: "GraphQL", level: 65 },
  { name: "AWS", level: 60 },
];

const technologies = [
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "VS Code", icon: "/icons/vscode.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 items-center text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground md:text-xl max-w-[700px]"
          >
            The technologies and tools I work with
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 md:gap-16"
        >
          {/* Skill Bars */}
          <motion.div 
            variants={fadeIn('right', 0.2, 0.6)}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Technical Proficiency</h3>
            
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Technology Icons */}
          <motion.div 
            variants={fadeIn('left', 0.2, 0.6)}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border hover:border-primary hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-2 bg-primary/10 rounded-full p-2">
                    {/* We'll use placeholders for icons since we don't have actual SVGs */}
                    <div className="text-primary font-mono text-xs">{tech.name.substring(0, 2)}</div>
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}