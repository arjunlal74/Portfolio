import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "A full-featured online shopping platform with real-time inventory.",
    },
    {
      title: "Portfolio Generator",
      tech: ["Next.js", "Tailwind", "Prisma"],
      description: "Dynamic portfolio creation tool for developers.",
    },
    {
      title: "Task Management",
      tech: ["TypeScript", "Redux", "Express"],
      description:
        "Collaborative task management system with real-time updates.",
    },
  ];

  return (
    <section className="py-20 px-8 bg-[#222222]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs py-1 px-3 rounded-full bg-teal-400/10 text-teal-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ExternalLink className="absolute bottom-8 right-8 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-teal-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
