import React from 'react';

const Navigation = ({ current, total, onPrev, onNext }) => {
  return (
    <div className="flex items-center justify-center mt-8">
      <button 
        onClick={onPrev} 
        disabled={current === 0}
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        &#8592; Previous
      </button>
      <span className="mx-6 text-lg font-semibold text-gray-700">
        Page {current + 1} of {total}
      </span>
      <button 
        onClick={onNext} 
        disabled={current === total - 1}
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Next &#8594;
      </button>
    </div>
  );
};

export default Navigation;
