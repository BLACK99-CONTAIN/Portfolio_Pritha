import React from 'react';
import { Code, Database, Shield, BarChart } from 'lucide-react';

const SkillsSection = () => {
  const skills = {
    programming: ['C', 'C++', 'Java (DSA)', 'Python', 'HTML'],
    dataTools: ['Excel', 'SQL', 'Oracle DBMS', 'Microsoft Power BI'],
    securityTools: ['Postman', 'Burp Suite', 'OWASP ZAP'],
    concepts: ['Data Visualization', 'API Security', 'Cryptography', 'Networking', 'Operating System']
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="p-8 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-semibold text-white">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.programming.map((skill, index) => (
                  <span key={index} className="skill-tag px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-8 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-semibold text-white">Data Tools</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.dataTools.map((skill, index) => (
                  <span key={index} className="skill-tag px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="p-8 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-semibold text-white">Security Tools</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.securityTools.map((skill, index) => (
                  <span key={index} className="skill-tag px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-medium border border-red-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-8 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <BarChart className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-semibold text-white">Key Concepts</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.concepts.map((skill, index) => (
                  <span key={index} className="skill-tag px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;