"use client";

import { motion } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, GraduationCap, Briefcase, User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 items-center text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground md:text-xl max-w-[700px]"
          >
            My journey, experience, and what drives me as a developer
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Who I Am</h3>
              <p className="text-muted-foreground">
                I'm a passionate web developer with over 1.5 years of experience building modern, responsive, and user-friendly websites and applications. I focus on creating clean, efficient code and intuitive user experiences.
              </p>
              <p className="text-muted-foreground">
I began my journey as a self-taught developer, experimenting with HTML and CSS to build simple web pages. Driven by curiosity and a growing passion for technology, I pursued formal education in Computer Science (MCA). Since then, I've worked on various real-world projects—collaborating with teams and clients to turn ideas into responsive, user-friendly web applications.              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new technologies. I believe in continuous learning and pushing the boundaries of what's possible on the web.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">Rajesh Padhi</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">rajeshpadhi2000@gmail.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Bengaluru, India</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="font-medium">Open to opportunities</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 order-1 md:order-2"
          >
            <h3 className="text-2xl font-bold mb-6">Experience & Education</h3>
            
            {/* <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Full Stack Developer</h4>
                    <p className="text-muted-foreground">Self-working</p>
                    <div className="flex items-center mt-1 text-sm text-muted-foreground">
                      <CalendarDays className="h-3.5 w-3.5 mr-1" />
                      <span>2020 - Present</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card> */}
            
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Web Developer Intern</h4>
                    <p className="text-muted-foreground">Codecart</p>
                    <div className="flex items-center mt-1 text-sm text-muted-foreground">
                      <CalendarDays className="h-3.5 w-3.5 mr-1" />
                      <span>May 2023 - July 2023</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">MCA in Computer Science</h4>
                    <p className="text-muted-foreground">F M University</p>
                    <div className="flex items-center mt-1 text-sm text-muted-foreground">
                      <CalendarDays className="h-3.5 w-3.5 mr-1" />
                      <span>2022 - 2024</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}