import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Floating gradient circles */}
      <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-20 right-10 animate-pulse"></div>

      {/* Spinning loader */}
      <div className="relative flex items-center justify-center mb-8">
        <div className="w-20 h-20 border-4 border-transparent border-t-blue-500 border-l-purple-500 rounded-full animate-spin"></div>
        <div className="absolute w-14 h-14 border-4 border-transparent border-b-pink-500 border-r-blue-500 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
      </div>

      {/* Text */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-2">
        Loading, please wait...
      </h2>
      <p className="text-gray-400 text-sm md:text-base text-center max-w-sm">
        We’re preparing everything just for you. This won’t take long 
      </p>

      {/* Progress bar animation */}
      <div className="relative w-64 h-2 mt-10 bg-gray-700 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-[progress_2s_ease-in-out_infinite]"></div>
      </div>

      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Loading;


