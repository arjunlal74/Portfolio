import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket, Code } from "lucide-react";

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      icon: <Rocket className="w-6 h-6" />,
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "A full-featured online shopping platform with real-time inventory.",
      links: {
        demo: "https://demo.com",
        github: "https://github.com",
      },
    },
    {
      title: "Portfolio Generator",
      icon: <Code className="w-6 h-6" />,
      tech: ["Next.js", "Tailwind", "Prisma"],
      description: "Dynamic portfolio creation tool for developers.",
      links: {
        demo: "https://demo.com",
        github: "https://github.com",
      },
    },
    {
      title: "Task Management",
      icon: <Rocket className="w-6 h-6" />,
      tech: ["TypeScript", "Redux", "Express"],
      description:
        "Collaborative task management system with real-time updates.",
      links: {
        demo: "https://demo.com",
        github: "https://github.com",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="min-h-screen py-20 px-8 bg-[#222222]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A selection of projects that showcase my expertise in building
            scalable and innovative solutions
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-xl bg-teal-400/5 hover:bg-teal-400/10 transition-all border border-transparent hover:border-teal-400/20"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Project Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-teal-400/10 text-teal-400">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-teal-400">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="text-gray-400 mb-6">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs py-1 px-3 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex items-center gap-4 text-gray-400">
                <a
                  href={project.links.demo}
                  className="p-2 rounded-lg bg-teal-400/5 hover:bg-teal-400/10 hover:text-teal-400 transition-all duration-300 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href={project.links.github}
                  className="p-2 rounded-lg bg-teal-400/5 hover:bg-teal-400/10 hover:text-teal-400 transition-all duration-300 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 delay-75"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-2 bg-teal-400/20 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
