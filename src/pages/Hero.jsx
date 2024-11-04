import React from "react";
import { motion } from "framer-motion";
import { Code, Laptop, Terminal, ChevronRight } from "lucide-react";

const Hero = () => {
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
    <section className="min-h-screen flex items-center px-8 overflow-hidden bg-gradient-to-b from-black/20 to-black/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-4 py-2 rounded-full border border-teal-400/20 bg-teal-400/10 text-teal-400 text-sm">
                Available for Work
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl lg:text-7xl font-bold leading-tight"
            >
              Crafting Digital
              <div className="mt-2">
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  Experiences
                </span>
              </div>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-xl leading-relaxed max-w-xl"
            >
              Full-stack developer specializing in building exceptional digital
              experiences. Focused on creating elegant, efficient, and
              user-centered applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8"
            >
              <button
                className="group px-8 py-4 bg-teal-400 text-gray-900 rounded-lg font-medium 
                      hover:bg-teal-300 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Code className="w-5 h-5" />
                View Projects
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                className="group px-8 py-4 border border-teal-400 text-teal-400 rounded-lg font-medium 
                      hover:bg-teal-400/10 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Terminal className="w-5 h-5" />
                Get in Touch
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="flex gap-12 mt-12 pt-12 border-t border-gray-800/50"
            >
              {[
                { value: "4+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "20+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group hover:bg-white/5 p-4 rounded-lg transition-colors"
                >
                  <h3 className="text-3xl font-bold group-hover:text-teal-400 transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
            <div className="w-32 h-32 bg-teal-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-teal-400/20">
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
            <div className="w-20 h-20 bg-teal-400/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-teal-400/20 hover:bg-teal-400/20 transition-colors">
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
            <div className="w-20 h-20 bg-teal-400/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-teal-400/20 hover:bg-teal-400/20 transition-colors">
              <Terminal className="w-10 h-10 text-teal-400" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
