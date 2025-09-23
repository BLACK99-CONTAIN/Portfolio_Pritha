import React from 'react';
import { BarChart, Database, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Moving Average Crossover Strategy',
      tech: 'Pine Script',
      period: 'Apr 2025 – Present',
      description: 'Created and backtested an automated trading strategy using Pine Script on TradingView.',
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: 'Diwali Sales Analysis',
      tech: 'Python',
      period: 'April 2025 - May 2025',
      description: 'Analyzed Diwali sales data to identify customer demographics, buying patterns, and product trends.',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Vrinda Store Data Visualization',
      tech: 'Excel',
      period: 'June 2025 - July 2025',
      description: 'Created annual sales report for 2022 to help understand customers and grow sales.',
      icon: <BarChart className="w-6 h-6" />
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group project-card p-8 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-300">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-cyan-300 text-sm">{project.tech}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{project.period}</span>
                <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;