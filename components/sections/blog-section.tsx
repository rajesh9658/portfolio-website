"use client";

import { motion } from "@/lib/motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "How to Build a Responsive Website with Next.js and Tailwind",
    excerpt: "Learn the fundamentals of creating responsive layouts using Next.js and Tailwind CSS with this step-by-step guide.",
    date: "May 15, 2023",
    category: "Web Development",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "/blog/responsive-website",
  },
  {
    title: "Understanding React Hooks: A Comprehensive Guide",
    excerpt: "Dive deep into React Hooks and learn how they can simplify your components and state management.",
    date: "Apr 22, 2023",
    category: "React",
    image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "/blog/react-hooks",
  },
  {
    title: "Optimizing Web Performance: Tips and Techniques",
    excerpt: "Discover practical strategies to improve your website's loading speed and overall performance.",
    date: "Mar 10, 2023",
    category: "Performance",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "/blog/web-performance",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 items-center text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Recent Articles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground md:text-xl max-w-[700px]"
          >
            Insights, tutorials, and thoughts on web development and design
          </motion.p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden flex flex-col">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="rounded-full">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button asChild variant="ghost" className="p-0 hover:bg-transparent">
                    <Link href={post.url}>
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}