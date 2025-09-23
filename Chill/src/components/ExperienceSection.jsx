import React from 'react';
import { Shield, BarChart, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experience = [
    {
      title: 'Cybersecurity Intern',
      company: 'Employabilitylife',
      period: 'Mar 2025 - Present',
      description: 'Performed vulnerability assessments on APIs using tools like Postman, Burp Suite, and OWASP ZAP, leading to improved endpoint security.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Data Analyst Intern',
      company: 'Cognifyz Technologies',
      period: 'Oct 2024 – Nov 2024',
      description: 'Built dynamic dashboards using Excel PivotTables, charts, and conditional formatting for reduced manual reporting effort by 40% through automation.',
      icon: <BarChart className="w-6 h-6" />
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Work <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="p-8 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                    {exp.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-orange-300 text-lg mb-2">{exp.company}</p>
                  <p className="text-gray-400 mb-4 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;