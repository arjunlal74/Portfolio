import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaDatabase,
  FaJsSquare,
  FaVuejs,
  FaLaravel,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiRedis,
} from "react-icons/si";
import {
  Code,
  Monitor,
  Server,
  Database,
  Globe,
  Lock,
  GitBranch,
} from "lucide-react";

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  const technicalIcons = [
    {
      id: "laravel",
      IconComponent: FaLaravel,
      name: "Laravel",
      category: "Backend",
    },
    {
      id: "react",
      IconComponent: FaReact,
      name: "React",
      category: "Frontend",
    },
    {
      id: "typescript",
      IconComponent: SiTypescript,
      name: "TypeScript",
      category: "Language",
    },
    {
      id: "mysql",
      IconComponent: GrMysql,
      name: "MySQL",
      category: "Database",
    },
    {
      id: "mongodb",
      IconComponent: SiMongodb,
      name: "MongoDB",
      category: "Database",
    },
    { id: "aws", IconComponent: FaAws, name: "AWS", category: "Cloud" },
    {
      id: "docker",
      IconComponent: FaDocker,
      name: "Docker",
      category: "DevOps",
    },
    {
      id: "nodejs",
      IconComponent: FaNodeJs,
      name: "Node.js",
      category: "Backend",
    },
    {
      id: "tailwind",
      IconComponent: SiTailwindcss,
      name: "Tailwind",
      category: "Frontend",
    },
  ];

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      description: "Crafting beautiful, responsive user interfaces",
      skills: [
        "React & Next.js for dynamic UIs",
        "TypeScript for type-safe code",
        "Tailwind CSS for styling",
        "Redux for state management",
        "Responsive design principles",
      ],
    },
    {
      name: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      description: "Building robust server-side solutions",
      skills: [
        "Node.js & Express",
        "Laravel PHP framework",
        "RESTful API design",
        "GraphQL implementation",
        "Microservices architecture",
      ],
    },
    {
      name: "Database Management",
      icon: <Database className="w-6 h-6" />,
      description: "Designing and optimizing databases",
      skills: [
        "MySQL optimization",
        "MongoDB for NoSQL needs",
        "Redis caching",
        "Database design patterns",
        "Query optimization",
      ],
    },
    {
      name: "DevOps & Cloud",
      icon: <Globe className="w-6 h-6" />,
      description: "Managing infrastructure and deployment",
      skills: [
        "AWS cloud services",
        "Docker containerization",
        "CI/CD pipelines",
        "Infrastructure as Code",
        "Cloud architecture",
      ],
    },
    {
      name: "Security",
      icon: <Lock className="w-6 h-6" />,
      description: "Implementing robust security measures",
      skills: [
        "OAuth implementation",
        "JWT authentication",
        "HTTPS/SSL",
        "Security best practices",
        "Data encryption",
      ],
    },
    {
      name: "Development Practices",
      icon: <GitBranch className="w-6 h-6" />,
      description: "Following industry best practices",
      skills: [
        "Git version control",
        "Agile methodology",
        "Code review",
        "Testing strategies",
        "Documentation",
      ],
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
            Technical Expertise
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Combining modern technologies with best practices to create scalable
            and efficient solutions
          </motion.p>
        </div>

        {/* Technology Icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {technicalIcons.map(({ id, IconComponent, name, category }) => (
            <motion.div
              key={id}
              className="group relative flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative">
                <IconComponent
                  className={`w-16 h-16 transition-all duration-300 ${
                    hovered === id ? "text-teal-400" : "text-gray-500"
                  }`}
                />
                <div className="absolute -inset-2 bg-teal-400/20 rounded-full blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              </div>
              <div className="mt-4 text-center">
                <span className="block text-sm font-medium text-gray-200">
                  {name}
                </span>
                <span className="text-xs text-gray-500">{category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-xl bg-teal-400/5 hover:bg-teal-400/10 transition-all border border-transparent hover:border-teal-400/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-teal-400/10 text-teal-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-teal-400">
                  {category.name}
                </h3>
              </div>
              <p className="text-gray-400 mb-6">{category.description}</p>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-sm text-gray-300 before:content-['•'] before:text-teal-400 before:mr-2"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
