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
import Nav from "../components/Nav";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen  bg-[radial-gradient(circle_at_15%_30%,rgba(64,84,178,0.06)_0%,transparent_45%),radial-gradient(circle_at_85%_65%,rgba(124,45,179,0.05)_0%,transparent_45%),linear-gradient(180deg,rgba(45,45,45,0.2)_0%,rgba(33,33,33,0.5)_100%)] bg-fixed text-gray-100">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      {/* <Projects /> */}

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
