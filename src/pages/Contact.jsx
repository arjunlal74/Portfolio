import {
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(formData);
    setSending(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@james.dev",
      link: "mailto:hello@james.dev",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Location",
      value: "San Francisco, CA",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
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
            className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent py-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something Together
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind? Looking to partner or work together? Reach
            out through the form below or connect with me directly.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-xl bg-teal-400/5 hover:bg-teal-400/10 transition-all border border-transparent hover:border-teal-400/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 rounded-lg bg-teal-400/10 text-teal-400">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-teal-400">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-teal-400/5 border border-teal-400/20 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400 transition-colors text-gray-200"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Your Email</label>
                  <input
                    type="email"
                    className="w-full bg-teal-400/5 border border-teal-400/20 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400 transition-colors text-gray-200"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Subject</label>
                <input
                  type="text"
                  className="w-full bg-teal-400/5 border border-teal-400/20 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400 transition-colors text-gray-200"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-teal-400/5 border border-teal-400/20 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400 transition-colors resize-none text-gray-200"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-teal-400/10 border border-teal-400/20 text-teal-400 font-medium py-3 rounded-lg transition-all duration-300 hover:bg-teal-400/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {sending ? (
                  <>
                    Sending <Send className="w-4 h-4 animate-pulse" />
                  </>
                ) : (
                  <>
                    Send Message{" "}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="group p-8 rounded-xl bg-teal-400/5 hover:bg-teal-400/10 transition-all border border-transparent hover:border-teal-400/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-teal-400/10 text-teal-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-teal-400">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-teal-400/10 text-teal-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-200 hover:text-teal-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-200">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="pt-6 border-t border-teal-400/20">
                  <h4 className="text-sm text-gray-400 mb-4">
                    Connect on Social
                  </h4>
                  <div className="flex gap-4">
                    {[Mail, Linkedin, Globe].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="p-2 rounded-lg bg-teal-400/5 hover:bg-teal-400/10 text-gray-400 hover:text-teal-400 transition-all duration-300 transform hover:scale-110"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="group p-8 rounded-xl bg-teal-400/5 hover:bg-teal-400/10 transition-all border border-transparent hover:border-teal-400/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <h4 className="text-xl font-semibold text-teal-400">
                  Currently Available
                </h4>
              </div>
              <p className="mt-4 text-gray-400">
                Open for freelance projects and full-time opportunities. Let's
                discuss how we can work together.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
