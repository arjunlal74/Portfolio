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
import Hero from "./Hero";
import Footer from "../components/Footer";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Decorative Elements */}
      {/* <div className="fixed top-1/2 left-16 w-px h-32 bg-gradient-to-b from-teal-400/50 to-transparent"></div> */}
    </div>
  );
};

export default Home;
