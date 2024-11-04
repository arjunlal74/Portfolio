import React from "react";
import { motion } from "framer-motion";
import {
  GithubIcon,
  ExternalLink,
  Clock,
  Users,
  Coffee,
  ChevronRight,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Clock className="w-5 h-5" />,
      value: "4+",
      label: "Years of Experience",
    },
    {
      icon: <Users className="w-5 h-5" />,
      value: "50+",
      label: "Projects Delivered",
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      value: "1000+",
      label: "Cups of Coffee",
    },
  ];

  const journey = [
    {
      year: "2020-Present",
      role: "Full Stack Developer",
      description: "Specializing in Laravel, React, and AWS deployments",
    },
    {
      year: "2018-2020",
      role: "Backend Developer",
      description: "Focused on MySQL database optimization and API development",
    },
  ];

  // Unique sliding reveal animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const slideInVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  // Fade up variants for stats
  const fadeUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center px-8 overflow-hidden bg-gradient-to-br from-black/20 via-black/30 to-teal-900/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center relative"
        >
          {/* Animated background line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 w-px bg-gradient-to-b from-transparent via-teal-400/50 to-transparent"
          />

          <div className="space-y-8 pl-8">
            <motion.div variants={slideInVariants} className="inline-block">
              <span className="px-6 py-3 rounded-full border border-teal-400/20 bg-teal-400/10 text-teal-400 text-sm font-medium relative">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute -left-1 -top-1 w-3 h-3 bg-teal-400/30 rounded-full"
                />
                About Me
              </span>
            </motion.div>

            <motion.div variants={slideInVariants} className="space-y-4">
              <p className="text-gray-400 text-xl leading-relaxed">
                As a Full Stack Developer with expertise in Laravel and React, I
                bridge the gap between elegant front-end experiences and robust
                back-end systems. My journey in tech has been driven by a
                passion for creating efficient, scalable solutions.
              </p>
              <p className="text-gray-400 text-xl leading-relaxed">
                Specializing in MySQL database design and AWS cloud
                infrastructure, I focus on building applications that not only
                meet current needs but are also prepared for future scaling.
              </p>
            </motion.div>

            {/* Journey Timeline with slide animations */}
            <motion.div variants={containerVariants} className="space-y-6">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  variants={slideInVariants}
                  className="relative group"
                >
                  <div className="p-6 rounded-lg border border-teal-400/20 bg-teal-400/5 hover:bg-teal-400/10 transition-all duration-300">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="absolute -bottom-px left-0 h-px bg-gradient-to-r from-teal-400/50 to-transparent"
                    />
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-xl group-hover:text-teal-400 transition-colors">
                        {item.role}
                      </h3>
                      <span className="text-teal-400 text-sm bg-teal-400/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with unique hover effects */}
            <motion.div
              variants={slideInVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-gradient-to-r from-teal-400 to-teal-500 text-gray-900 rounded-lg font-medium 
                        relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-300 to-teal-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  <GithubIcon className="w-5 h-5" />
                  Github Profile
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 border border-teal-400 text-teal-400 rounded-lg font-medium 
                        relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-teal-400/10"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Download Resume
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content with Unique Grid Animation */}
        <div className="relative hidden lg:block">
          {/* Stats Grid with Stagger Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                whileHover={{ scale: 1.02, translateX: 10 }}
                className="group bg-teal-400/5 border border-teal-400/20 p-6 rounded-lg 
                         hover:bg-teal-400/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-teal-400/10 rounded-lg group-hover:bg-teal-400/20 transition-colors"
                  >
                    {stat.icon}
                  </motion.div>
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 * index }}
                      className="text-2xl font-bold group-hover:text-teal-400 transition-colors"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack with Floating Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {["Frontend Stack", "Backend Stack"].map(
              (stackTitle, stackIndex) => (
                <motion.div
                  key={stackTitle}
                  variants={fadeUpVariants}
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    translateX: stackIndex % 2 === 0 ? 10 : -10,
                  }}
                  className="bg-teal-400/5 border border-teal-400/20 p-6 rounded-lg 
                         hover:bg-teal-400/10 transition-all duration-300
                         relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <h3 className="text-xl font-semibold mb-4 text-teal-400">
                    {stackTitle}
                  </h3>
                  <ul className="space-y-3">
                    {(stackIndex === 0
                      ? [
                          "React & Next.js",
                          "Tailwind CSS",
                          "JavaScript/TypeScript",
                        ]
                      : ["Laravel", "MySQL", "AWS Services"]
                    ).map((tech, techIndex) => (
                      <motion.li
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * techIndex }}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-3 text-gray-400"
                      >
                        <motion.div
                          whileHover={{ scale: 1.5 }}
                          className="w-2 h-2 bg-teal-400 rounded-full"
                        />
                        {tech}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </motion.div>

          {/* Unique Background Animation */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{
                rotateZ: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-[600px] h-[600px]"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
                <motion.path
                  d="M200,50 L350,150 L350,250 L200,350 L50,250 L50,150 Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  className="text-teal-400"
                />
                <motion.path
                  d="M200,80 L320,160 L320,240 L200,320 L80,240 L80,160 Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  className="text-teal-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
