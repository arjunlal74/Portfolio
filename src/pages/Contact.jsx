import { Mail, Linkedin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="py-20 px-8 bg-black/20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>

        {/* Minimalistic Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="bg-black/10 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400 transition-colors"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="bg-black/10 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400 transition-colors"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <textarea
                placeholder="Your message"
                rows={4}
                className="bg-black/10 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          <a
            href="#"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
