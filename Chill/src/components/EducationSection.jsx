import React from 'react';
import { BookOpen, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Sister Nivedita University, West Bengal',
      period: '2022 - 2026 (Expected)',
      status: 'Currently pursuing 7th Semester',
      grades: [
        { sem: '6th', sgpa: '8.24' },
        { sem: '5th', sgpa: '9.04' },
        { sem: '4th', sgpa: '8.52' },
        { sem: '3rd', sgpa: '8.80' },
        { sem: '2nd', sgpa: '8.59' },
        { sem: '1st', sgpa: '9.02' }
      ]
    },
    {
      degree: 'Higher Secondary (WBCHSE)',
      institution: 'Khila Gopi Mohan Siksha Sadan, Howrah',
      period: '2020 – 2022',
      percentage: '90.2%'
    },
    {
      degree: 'Secondary [WBBSE]',
      institution: 'Khila Girls High School, Howrah',
      period: '2020',
      percentage: '88%'
    }
  ];

  const certifications = [
    { name: 'Generative AI', provider: 'Coursera (Google Cloud)', date: 'July 2025' },
    { name: 'Applied Machine Learning in Python', provider: 'University of Michigan', date: 'May 2025' },
    { name: 'SQL', provider: 'University of Colorado Boulder', date: 'May 2025' },
    { name: 'Relational Database Design', provider: 'University of Colorado Boulder', date: 'May 2025' },
    { name: 'Algorithms, Part I', provider: 'Princeton University', date: 'May 2025' },
    { name: 'People and Soft Skills Assessment', provider: 'IBM', date: 'Jan 2025' },
    { name: 'Data Analyst Bootcamp', provider: 'Udemy', date: 'March 2025' }
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Education</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="p-8 glass-effect rounded-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
                  <p className="text-yellow-300 text-lg mb-2">{edu.institution}</p>
                  <p className="text-gray-300 mb-4">{edu.period}</p>
                  {edu.status && <p className="text-purple-300 mb-4">{edu.status}</p>}
                  {edu.percentage && (
                    <div className="inline-block px-4 py-2 bg-green-500/20 text-green-300 rounded-full">
                      Score: {edu.percentage}
                    </div>
                  )}
                  {edu.grades && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Semester-wise SGPA:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {edu.grades.map((grade, i) => (
                          <div key={i} className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <div className="text-gray-300 text-sm">{grade.sem} Semester</div>
                            <div className="text-white font-semibold text-lg">{grade.sgpa}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Certifications & <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Courses</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h4 className="font-semibold text-white">{cert.name}</h4>
                </div>
                <p className="text-gray-300 text-sm mb-2">{cert.provider}</p>
                <p className="text-green-300 text-sm font-medium">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;