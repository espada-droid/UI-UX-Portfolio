
import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

const ContactSection = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const { message } = formData;
  const subject = encodeURIComponent("New message from portfolio");
  const body = encodeURIComponent(message);

  window.location.href = `mailto:jai.pwr.15@gmail.com?subject=${subject}&body=${body}`;

  setIsSubmitted(true);
  setTimeout(() => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  }, 3000);
};



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Create Something
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life 
            through thoughtful design and seamless experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Terminal-inspired Form */}
          <div className={`${
            isDark ? 'bg-card/50' : 'bg-gray-900'
          } rounded-xl p-6 font-mono text-sm text-green-400`}>
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-green-400/20">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-2 opacity-60">contact.terminal</span>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="mb-1">$ enter_name:</div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-none outline-none text-green-400 font-mono"
                    placeholder="_"
                  />
                </div>
                
                <div>
                  <div className="mb-1">$ enter_email:</div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-none outline-none text-green-400 font-mono"
                    placeholder="_"
                  />
                </div>
                
                <div>
                  <div className="mb-1">$ enter_message:</div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-none outline-none text-green-400 font-mono resize-none"
                    placeholder="_"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-green-400/20 text-green-400 px-4 py-2 rounded font-mono hover:bg-green-400/30 transition-all duration-300"
                  >
                    $ send_message
                  </button>
                  {isTyping && (
                    <span className="ml-4 opacity-60 animate-pulse">typing...</span>
                  )}
                </div>
              </form>
            ) : (
              <div className="py-8">
                <div className="text-green-400 mb-2">$ message_sent</div>
                <div className="opacity-60">Thanks! I'll get back to you soon.</div>
                <div className="mt-4 opacity-40">Connection established ✓</div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-4 text-lg">Get In Touch</h3>
              <div className="space-y-3 opacity-70">
                <div>jaiwardhan.panwar@email.com</div>
                <div>+91 9372441598</div>
                <div>Based in India, working globally</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Find Me Online</h3>
              <div className="space-y-2">
                {['LinkedIn', 'Dribbble', 'Behance', 'Twitter'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="block opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300 group"
                  >
                    <span className="font-mono text-sm mr-2">↗</span>
                    {platform}
                  </a>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-xl ${isDark ? 'bg-card/30' : 'bg-gray-100'} mt-8`}>
              <div className="text-sm opacity-60 font-mono">
                // Currently available for freelance projects
                <br />
                // Response time: ~24 hours
                <br />
                <style color='green'>// Status: Open to opportunities</style> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
