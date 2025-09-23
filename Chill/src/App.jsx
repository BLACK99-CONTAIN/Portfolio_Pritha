import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        {activeSection === 'home' && <HomeSection setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'education' && <EducationSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'experience' && <ExperienceSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
      
      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Pritha Adhikari. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/pritha-adhikari-55804a318/" 
               target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Pritha27-Contain" 
               target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:adhikaripritha7@gmail.com" 
               className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;