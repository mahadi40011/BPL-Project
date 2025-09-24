import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-blue-600 font-semibold  rounded-full px-3 py-1">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loading;


