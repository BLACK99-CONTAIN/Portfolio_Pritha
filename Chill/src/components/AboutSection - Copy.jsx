import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="p-6 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                Computer Science and Engineering undergraduate skilled in data analytics, Excel dashboards, and API security. 
                Strong foundation in databases, Python, and data visualization. Eager to contribute to data-driven decision-making 
                and secure application development.
              </p>
            </div>
            
            <div className="p-6 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Personal Details</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Date of Birth:</strong> 27th January 2005</p>
                <p><strong>Languages:</strong> English, Hindi, Bengali</p>
                <p><strong>Hobbies:</strong> Drawing, Teaching Students</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Database Management System', 'Computer Networking', 'Cryptography', 'Data Analytics'].map((interest, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Soft Skills</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>PPT and oral presentations to large audiences</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Neat and effective lab and project reports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Strong teamwork abilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;