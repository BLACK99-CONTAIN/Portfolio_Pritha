import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Code, Database, Shield, Star } from 'lucide-react';
import dp from '../image/dp.jpg';

const HomeSection = ({ setActiveSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const floatingElements = [
    { icon: Code, delay: '0s', x: '15%', y: '25%', color: 'text-blue-400' },
    { icon: Database, delay: '2s', x: '85%', y: '35%', color: 'text-green-400' },
    { icon: Shield, delay: '4s', x: '10%', y: '75%', color: 'text-red-400' },
    { icon: Sparkles, delay: '1s', x: '90%', y: '70%', color: 'text-yellow-400' },
    { icon: Star, delay: '3s', x: '80%', y: '20%', color: 'text-pink-400' },
  ];

  const skills = ['Python', 'Data Analytics', 'API Security', 'Machine Learning', 'Cybersecurity'];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        
        {/* Animated gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-800/30 via-transparent to-purple-800/30 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/20 via-transparent to-indigo-800/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Interactive mouse gradient */}
        <div 
          className="absolute inset-0 opacity-40 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.4) 0%, rgba(219, 39, 119, 0.2) 25%, transparent 60%)`
          }}
        ></div>

        {/* Parallax background elements */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: `radial-gradient(ellipse at 30% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), 
                        radial-gradient(ellipse at 70% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
          }}
        ></div>

        {/* Animated geometric patterns */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
              }}
            >
              <div 
                className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-purple-300'} rounded-full opacity-${Math.random() > 0.5 ? '60' : '40'}`}
              ></div>
            </div>
          ))}
        </div>

        {/* Grid overlay with animation */}
        <div
          className="absolute inset-0 opacity-10 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animationDelay: '2s'
          }}
        ></div>

        {/* Moving light rays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Floating Tech Icons */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <div
            key={index}
            className="absolute z-5 animate-float-slow opacity-20 hover:opacity-80 transition-all duration-500 cursor-pointer"
            style={{
              left: element.x,
              top: element.y,
              animationDelay: element.delay,
            }}
          >
            <div className="relative">
              <Icon className={`w-8 h-8 ${element.color} drop-shadow-lg`} />
              <div className={`absolute inset-0 ${element.color} blur-md opacity-50`}>
                <Icon className="w-8 h-8" />
              </div>
            </div>
          </div>
        );
      })}

      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-2000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} flex flex-col items-center justify-center min-h-screen pt-20`}>
        
        {/* Enhanced Profile Section - Main Focus */}
        <div className="mb-12 relative flex-shrink-0">
          <div className="relative group">
            {/* Outer rotating ring with gradient */}
            <div className="absolute -inset-6 rounded-full opacity-70 animate-spin-slow bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 to-purple-400 blur-sm"></div>
            
            {/* Middle pulsing glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-60 animate-pulse blur-md"></div>
            
            {/* Inner container */}
            <div className="relative">
              {/* Profile image with advanced effects - Smaller size */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-2 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-900 p-2 overflow-hidden">
                    <img 
                      src={dp}
                      alt="Pritha Adhikari"
                      className="w-50 h-50 object-cover rounded-full border-4 border-white/30 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Floating sparkles around image */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-float opacity-60"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${15 + Math.random() * 70}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Name Section */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative">
            <span className="inline-block animate-fade-in-up text-white drop-shadow-lg">
              Pritha{' '}
            </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                Adhikari
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-lg -z-10"></div>
            </span>
          </h1>
          
          {/* Animated underline */}
          <div className="flex justify-center">
            <div className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-width-expand" style={{ width: '200px' }}></div>
          </div>
        </div>

        {/* Enhanced Subtitle */}
        <div className="mb-10 space-y-3">
          <p className="text-2xl md:text-3xl text-gray-200 animate-slide-up-delay font-light">
            Computer Science Engineering Student
          </p>
          <div className="flex items-center justify-center space-x-3 animate-slide-up-delay-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Data Analyst & Cybersecurity Enthusiast
            </p>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Floating Skills Tags */}
        <div className="mb-12 animate-fade-in-delay">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="group relative px-5 py-2 bg-white/10 backdrop-blur-lg text-white text-sm rounded-full border border-white/20 hover:border-purple-400/50 hover:bg-white/20 transition-all duration-300 cursor-default animate-float"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${3 + Math.random()}s`
                }}
              >
                <span className="relative z-10">{skill}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300"></div>
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up-delay-3">
          <button
            onClick={() => setActiveSection('projects')}
            className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full overflow-hidden transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
            <span className="relative z-10 flex items-center justify-center space-x-2 font-semibold">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
              <span>View My Work</span>
            </span>
          </button>
          
          <button
            onClick={() => setActiveSection('contact')}
            className="group relative px-10 py-4 border-2 border-purple-400 text-purple-300 rounded-full overflow-hidden transition-all duration-500 transform hover:scale-110 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 font-semibold">
              Get In Touch
            </span>
            <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="relative animate-bounce-slow">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-gray-400 text-sm animate-pulse">Explore More</div>
            <div className="relative">
              <ChevronDown className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer animate-bounce" />
              <div className="absolute -inset-3 border border-white/20 rounded-full animate-ping opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(1deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { 
            background-size: 200% 200%; 
            background-position: left center; 
          }
          50% { 
            background-size: 200% 200%; 
            background-position: right center; 
          }
        }
        
        @keyframes width-expand {
          from { width: 0; opacity: 0; }
          to { width: 200px; opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-slow {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-20px); }
          70% { transform: translateY(-15px); }
          90% { transform: translateY(-10px); }
        }
        
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        .animate-gradient-x { animation: gradient-x 4s ease infinite; }
        .animate-width-expand { animation: width-expand 1.5s ease-out 0.8s both; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-bounce-slow { animation: bounce-slow 4s infinite; }
        .animate-slide-up-delay { animation: fade-in-up 1s ease-out 0.4s both; }
        .animate-slide-up-delay-2 { animation: fade-in-up 1s ease-out 0.8s both; }
        .animate-slide-up-delay-3 { animation: fade-in-up 1s ease-out 1.2s both; }
        .animate-fade-in-delay { animation: fade-in-up 1.2s ease-out 1.6s both; }
      `}</style>
    </section>
  );
};

export default HomeSection;