import React from "react";
import { motion } from "framer-motion";
import { Heart, Code, Coffee, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-8 border-t border-teal-400/10 bg-[#222222]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              JAMES.DEV
            </h3>
            <p className="text-sm text-gray-400">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2 rounded-lg bg-teal-400/5 hover:bg-teal-400/10 text-gray-400 hover:text-teal-400 transition-all duration-300 transform hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center gap-2 pt-6 border-t border-teal-400/10 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-teal-400" />
            <span>with</span>
            <Heart className="w-4 h-4 text-teal-400" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-teal-400" />
          </div>
          <a
            href="#top"
            className="text-gray-400 hover:text-teal-400 transition-colors ml-2"
          >
            Back to top ↑
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
