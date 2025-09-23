import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get In <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect!</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, collaborations, 
                or just having a chat about technology and data science. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <a href="mailto:adhikaripritha7@gmail.com" 
                 className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">adhikaripritha7@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center space-x-4 p-4 glass-effect rounded-xl">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-300">+91 9907095650</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 glass-effect rounded-xl">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">Karunamoyee, Sector 3, Bidhannagar, 700091</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/pritha-adhikari-55804a318/" 
                   target="_blank" rel="noopener noreferrer"
                   className="flex-1 flex items-center justify-center space-x-2 p-4 bg-blue-600/20 border border-blue-600/30 rounded-xl hover:bg-blue-600/30 transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                  <span className="text-blue-400 group-hover:text-blue-300">LinkedIn</span>
                </a>
                
                <a href="https://github.com/Pritha27-Contain" 
                   target="_blank" rel="noopener noreferrer"
                   className="flex-1 flex items-center justify-center space-x-2 p-4 bg-gray-600/20 border border-gray-600/30 rounded-xl hover:bg-gray-600/30 transition-all duration-300 group">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-gray-300" />
                  <span className="text-gray-400 group-hover:text-gray-300">GitHub</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="p-8 glass-effect rounded-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input type="text" 
                       className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                       placeholder="Your Name" />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input type="email" 
                       className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                       placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input type="text" 
                       className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                       placeholder="Subject" />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea rows="5" 
                          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none"
                          placeholder="Your message here..."></textarea>
              </div>
              
              <button type="submit" 
                      className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;