import { Code, Monitor, Server } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaDatabase,
  FaJsSquare,
  FaVuejs,
  FaLaravel,
  FaAws,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  const icons = [
    { id: "laravel", IconComponent: FaLaravel, name: "Laravel" },
    { id: "react", IconComponent: FaReact, name: "React" },
    { id: "Mysql", IconComponent: GrMysql, name: "MySQL" },
    { id: "aws", IconComponent: FaAws, name: "AWS" },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      description:
        "Crafting beautiful, responsive user interfaces with React & Next.js",
    },
    {
      name: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      description:
        "Building robust server-side solutions with Node.js & Python",
    },
    {
      name: "API Development",
      icon: <Code className="w-6 h-6" />,
      description:
        "Designing and implementing RESTful APIs and GraphQL services",
    },
  ];

  return (
    <section className="py-20 px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Expertise</h2>

        {/* **************************************************************** ICONS SECTION****************************************************** */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-28 my-20">
          {icons.map(({ id, IconComponent, name }) => (
            <motion.div
              key={id}
              className="flex flex-col items-center cursor-pointer"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <IconComponent
                className={`w-24 h-24 transition-colors ${
                  hovered === id ? "text-teal-400" : "text-gray-500"
                }`}
              />
              <span
                className={`mt-2 text-sm font-medium transition-opacity duration-300 ${
                  hovered === id ? "opacity-100" : "opacity-0"
                }`}
              >
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ******************************************************************ICONS SECTION END**************************************************** */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
            >
              <div className="text-teal-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
