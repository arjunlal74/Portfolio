import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Monitor,
  Server,
  ExternalLink,
  Mail,
  //   GitHub,
  Linkedin,
  Menu,
  X,
  Terminal,
  Laptop,
} from "lucide-react";
import Skills from "./Skills";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="min-h-screen  bg-[radial-gradient(circle_at_15%_30%,rgba(64,84,178,0.06)_0%,transparent_45%),radial-gradient(circle_at_85%_65%,rgba(124,45,179,0.05)_0%,transparent_45%),linear-gradient(180deg,rgba(45,45,45,0.2)_0%,rgba(33,33,33,0.5)_100%)] bg-fixed text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <h3 className="text-xl font-semibold tracking-wider text-teal-400">
            JAMES.DEV
          </h3>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-12 text-sm tracking-wide">
            <li className="group relative cursor-pointer">
              <span className="hover:text-teal-400 transition-colors">
                Home
              </span>
              <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-teal-400 transition-all duration-300"></div>
            </li>
            <li className="group relative cursor-pointer">
              <span className="hover:text-teal-400 transition-colors">
                Projects
              </span>
              <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-teal-400 transition-all duration-300"></div>
            </li>
            <li className="group relative cursor-pointer">
              <span className="hover:text-teal-400 transition-colors">
                Skills
              </span>
              <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-teal-400 transition-all duration-300"></div>
            </li>
            <li className="group relative cursor-pointer">
              <span className="hover:text-teal-400 transition-colors">
                Contact
              </span>
              <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-teal-400 transition-all duration-300"></div>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="flex md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-teal-400" />
            ) : (
              <Menu className="w-6 h-6 text-teal-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu Sidebar */}
        <motion.div
          className={`fixed top-0 right-0 h-screen w-full md:w-auto bg-black/90 backdrop-blur-lg p-8 z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? "0%" : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-8 text-lg tracking-wide">
            <button
              className="flex justify-end p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-6 h-6 text-teal-400" />
            </button>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Projects
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Skills
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full border border-teal-400/20 bg-teal-400/10 text-teal-400 text-sm">
                  Available for Work
                </span>
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Crafting Digital
                <div className="mt-2">
                  <span className="text-teal-400">Experiences</span>
                </div>
              </h1>

              <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
                Full-stack developer specializing in building exceptional
                digital experiences. Focused on creating elegant, efficient, and
                user-centered applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
                <button
                  className="px-8 py-4 bg-teal-400 text-gray-900 rounded-lg font-medium 
                          hover:bg-teal-300 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Code className="w-5 h-5" />
                  View Projects
                </button>
                <button
                  className="px-8 py-4 border border-teal-400 text-teal-400 rounded-lg font-medium 
                          hover:bg-teal-400/10 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Terminal className="w-5 h-5" />
                  Get in Touch
                </button>
              </div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-12 mt-12 pt-12 border-t border-gray-800"
              >
                <div>
                  <h3 className="text-3xl font-bold">4+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">50+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">20+</h3>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Abstract Geometric Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-[600px] h-[600px]"
              >
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-30">
                  <motion.path
                    d="M200,20 L360,100 L360,300 L200,380 L40,300 L40,100 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-teal-400"
                  />
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-teal-400"
                  />
                  <motion.rect
                    x="80"
                    y="80"
                    width="240"
                    height="240"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-teal-400"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Central Laptop Icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="relative z-10"
            >
              <div className="w-32 h-32 bg-teal-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Laptop className="w-16 h-16 text-teal-400" />
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-1/4 right-1/4"
            >
              <div className="w-20 h-20 bg-teal-400/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Code className="w-10 h-10 text-teal-400" />
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute bottom-1/4 left-1/4"
            >
              <div className="w-20 h-20 bg-teal-400/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Terminal className="w-10 h-10 text-teal-400" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 JAMES.DEV. All rights reserved.
          </p>
          <div className="text-sm text-gray-400">Crafted with passion</div>
        </div>
      </footer>

      {/* Decorative Elements */}
      {/* <div className="fixed top-1/2 left-16 w-px h-32 bg-gradient-to-b from-teal-400/50 to-transparent"></div> */}
    </div>
  );
};

export default Home;
