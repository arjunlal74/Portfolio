import { motion } from "framer-motion";
import { GithubIcon, ExternalLink, Clock, Users, Coffee } from "lucide-react";

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

  // Hover animation for buttons
  const buttonHoverAnimation = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  // Stagger animation for list items
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItemAnimation = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 px-8 bg-gradient-to-b overflow-hidden from-black/20 to-black/30 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl font-bold"
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="h-1 bg-teal-400 rounded"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 text-gray-400"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                As a Full Stack Developer with expertise in Laravel and React, I
                bridge the gap between elegant front-end experiences and robust
                back-end systems. My journey in tech has been driven by a
                passion for creating efficient, scalable solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Specializing in MySQL database design and AWS cloud
                infrastructure, I focus on building applications that not only
                meet current needs but are also prepared for future scaling.
              </motion.p>
            </motion.div>

            {/* Journey Timeline */}
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="show"
              className="space-y-6 mt-8"
            >
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  variants={listItemAnimation}
                  className="flex gap-4"
                >
                  <div className="w-24 text-sm text-teal-400 font-medium">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.role}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="#"
                whileHover={buttonHoverAnimation}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-teal-400/10 hover:bg-teal-400/20 
                         text-teal-400 rounded-lg transition-all"
              >
                <GithubIcon className="w-5 h-5" />
                Github
              </motion.a>
              <motion.a
                href="#"
                whileHover={buttonHoverAnimation}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-teal-400/10 hover:bg-teal-400/20 
                         text-teal-400 rounded-lg transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Tech Stack Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white/5 p-6 rounded-lg text-center"
                >
                  <motion.div
                    className="text-teal-400 flex justify-center mb-2"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Grid */}
            <motion.div
              className="grid md:grid-cols-2 grid-cols-1 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {["Frontend Stack", "Backend Stack"].map(
                (stackTitle, stackIndex) => (
                  <motion.div
                    key={stackTitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + stackIndex * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 p-6 rounded-lg"
                  >
                    <h3 className="text-lg font-semibold mb-4">{stackTitle}</h3>
                    <motion.ul
                      variants={containerAnimation}
                      initial="hidden"
                      animate="show"
                      className="space-y-2 text-gray-400"
                    >
                      {(stackIndex === 0
                        ? [
                            "React & Next.js",
                            "Tailwind CSS",
                            "JavaScript/TypeScript",
                          ]
                        : ["Laravel", "MySQL", "AWS Services"]
                      ).map((tech, index) => (
                        <motion.li
                          key={tech}
                          variants={listItemAnimation}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            className="w-2 h-2 bg-teal-400 rounded-full"
                            whileHover={{ scale: 1.5 }}
                          />
                          {tech}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20">
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
                className="w-full h-full border-2 border-teal-400/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [0.8, 0.9, 0.8],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 w-full h-full border-2 border-teal-400/10 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
