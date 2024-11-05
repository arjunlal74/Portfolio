import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { id: "home", text: "Home" },
    { id: "projects", text: "Projects" },
    { id: "skills", text: "Skills" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <h3 className="text-xl font-semibold tracking-wider text-teal-400">
          JAMES.DEV
        </h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-sm tracking-wide">
          {navLinks.map(({ id, text }) => (
            <motion.li
              key={id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredLink(id)}
              onMouseLeave={() => setHoveredLink(null)}
              whileHover={{ scale: 1.1 }}
            >
              <span className="relative hover:text-teal-400 transition-colors">
                {text}
                <div
                  className={`absolute -inset-2 bg-teal-400/20 rounded-full blur-xl transition-opacity ${
                    hoveredLink === id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </span>
            </motion.li>
          ))}
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
        className="fixed top-0 right-0 h-screen w-full md:w-auto bg-black/90 backdrop-blur-lg p-8 z-40"
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
          {navLinks.map(({ id, text }) => (
            <motion.a
              key={id}
              href="#"
              className="relative group"
              whileHover={{ scale: 1.1 }}
              onMouseEnter={() => setHoveredLink(id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className="hover:text-teal-400 transition-colors">
                {text}
              </span>
              <div
                className={`absolute -inset-2 bg-teal-400/20 rounded-full blur-xl transition-opacity ${
                  hoveredLink === id ? "opacity-100" : "opacity-0"
                }`}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
