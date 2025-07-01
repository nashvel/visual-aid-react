import React from 'react';

const Navigation = ({ current, total, onPrev, onNext, className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <button 
        onClick={onPrev} 
        disabled={current === 0}
        className={`
          neomorph-button
          px-4 py-2
          font-semibold
          text-gray-800
          disabled:opacity-50
          disabled:cursor-not-allowed
          transition-all
          flex items-center gap-2
        `}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </button>
      <span className="text-gray-700 font-medium">
        Page {current + 1} of {total}
      </span>
      <button 
        onClick={onNext} 
        disabled={current === total - 1}
        className={`
          neomorph-button
          px-4 py-2
          font-semibold
          text-gray-800
          disabled:opacity-50
          disabled:cursor-not-allowed
          transition-all
          flex items-center gap-2
        `}
      >
        Next
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Navigation;
