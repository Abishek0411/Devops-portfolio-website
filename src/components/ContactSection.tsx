
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:abishekram0411@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Abishek0411",
      color: "text-cyber-red hover:text-cyber-blue"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/abishek-s-r",
      color: "text-cyber-blue hover:text-cyber-purple"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/abishek0411",
      color: "text-cyber-purple hover:text-cyber-pink"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:abishekram0411@gmail.com",
      color: "text-cyber-pink hover:text-cyber-green"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-green mb-4 glitch-text" data-text="Connect & Collaborate">
          Connect & Collaborate
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyber-pink to-cyber-yellow mx-auto rounded-full"></div>
        <p className="text-cyber-blue mt-4 font-fira">Let's build something amazing together!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form Terminal */}
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="text-cyber-green font-fira ml-4 text-sm">contact-form@terminal:~</span>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-cyber-green font-fira text-sm mb-2">
                  {'> Enter your name:'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-cyber-gray/30 border border-cyber-green/50 rounded px-3 py-2 text-cyber-green font-fira focus:border-cyber-green focus:outline-none focus:ring-2 focus:ring-cyber-green/20"
                  required
                />
              </div>

              <div>
                <label className="block text-cyber-blue font-fira text-sm mb-2">
                  {'> Enter your email:'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-cyber-gray/30 border border-cyber-blue/50 rounded px-3 py-2 text-cyber-blue font-fira focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20"
                  required
                />
              </div>

              <div>
                <label className="block text-cyber-purple font-fira text-sm mb-2">
                  {'> Enter your message:'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-cyber-gray/30 border border-cyber-purple/50 rounded px-3 py-2 text-cyber-purple font-fira focus:border-cyber-purple focus:outline-none focus:ring-2 focus:ring-cyber-purple/20 resize-none"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="neon-button w-full"
              >
                <span className="mr-2">🚀</span>
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links & Info */}
        <div className="space-y-6">
          {/* Social Links */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-cyber-green font-fira ml-4 text-sm">social-links@terminal:~</span>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3 rounded-lg border border-transparent hover:border-current transition-all duration-300 ${social.color} group`}
                  >
                    <social.icon size={24} className="group-hover:animate-pulse" />
                    <div>
                      <div className="font-orbitron font-bold">{social.name}</div>
                      <div className="text-sm opacity-70 font-fira">@abishek</div>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-cyber-green font-fira ml-4 text-sm">quick-info@terminal:~</span>
            </div>
            
            <div className="p-6 font-fira text-sm">
              <div className="space-y-2">
                <div className="text-cyber-green">{'> whoami'}</div>
                <div className="ml-4 text-gray-300">Abishek S R - Developer</div>
                
                <div className="text-cyber-blue">{'>'}   location</div>
                <div className="ml-4 text-gray-300">📍 Chennai, India</div>
                
                <div className="text-cyber-purple">{'> status'}</div>
                <div className="ml-4 text-gray-300">🟢 Available for opportunities</div>
                
                <div className="text-cyber-yellow">{'> interests'}</div>
                <div className="ml-4 text-gray-300">🚀 AI/ML, Cloud, Full-Stack Development</div>
                
                <div className="text-cyber-pink">{'> fun_fact'}</div>
                <div className="ml-4 text-gray-300">🎾 When not coding, I'm probably playing Tennis!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <div className="inline-block bg-cyber-gray/20 border border-cyber-green/30 rounded-lg p-4 font-fira text-sm">
          <div className="text-cyber-green mb-1">// Built with ❤️ and lots of ☕</div>
          <div className="text-gray-400">
            <span className="text-cyber-purple">const</span> portfolio = {'{'}
            <span className="text-cyber-yellow">built_with</span>: [
            <span className="text-cyber-blue">"React"</span>, 
            <span className="text-cyber-blue">"TypeScript"</span>, 
            <span className="text-cyber-blue">"Tailwind"</span>
            ] {'}'};
          </div>
        </div>
        
        <p className="text-cyber-blue mt-4 font-fira text-sm">
          © 2025 Abishek S R. Crafted in the digital realm. 🌐
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
