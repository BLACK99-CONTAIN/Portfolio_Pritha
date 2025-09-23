import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-purple-300 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-pink-300 rounded-full animate-ping mx-auto"></div>
        </div>
        <h2 className="text-white text-xl font-semibold mb-2">Loading Portfolio</h2>
        <div className="flex space-x-1 justify-center">
          {[0, 1, 2].map((i) => (
            <div 
              key={i} 
              className="w-2 h-2 bg-white rounded-full animate-bounce" 
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;