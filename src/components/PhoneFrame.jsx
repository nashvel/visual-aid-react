import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/sticky-note.css';

const PhoneFrame = ({ imageSrc, children, className = '', onTextClick, isSticky }) => {
  const [showAdjuster, setShowAdjuster] = useState(false);
  const [textSize, setTextSize] = useState(14);
  const [textPosition, setTextPosition] = useState(150);
  const [forceUpdate, setForceUpdate] = useState(false);

  const handleTextClick = () => {
    if (typeof onTextClick === 'function') {
      onTextClick();
    }
  };

  const textContent = React.Children.toArray(children).map(child => {
    if (typeof child === 'string') return child;
    return child.props.children;
  }).join('');

  const handleAdjust = () => {
    setShowAdjuster(!showAdjuster);
  };

  const handleSizeChange = (value) => {
    setTextSize(value);
    setForceUpdate(prev => !prev);
  };

  const handlePositionChange = (value) => {
    setTextPosition(value);
    setForceUpdate(prev => !prev);
  };

  return (
    <motion.div
      className={`relative ${className} fade-in`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="phone-frame">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/iphonexr-frame.png"
            alt="iPhone XR Frame"
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="absolute inset-2 overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="App Screenshot"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-4 p-4">
              <div className="relative">
                <button
                  onClick={handleAdjust}
                  className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow z-10"
                  title="Adjust text"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                {showAdjuster && (
                <div className="absolute top-10 right-0 bg-white rounded-lg shadow-lg p-4 w-48 z-20">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Size: {textSize}px</span>
                      <input
                        type="range"
                        min="12"
                        max="24"
                        value={textSize}
                        onChange={(e) => handleSizeChange(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Position: {textPosition}px</span>
                      <input
                        type="range"
                        min="4"
                        max="150"
                        value={textPosition}
                        onChange={(e) => handlePositionChange(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              )}
              </div>
              <div className="relative w-full h-full">
                <div className="absolute inset-0">
                  <div style={{
                    fontSize: `${textSize}px`,
                    paddingTop: `${textPosition}px`,
                    color: '#4B5563',
                    lineHeight: '1.5',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '100%'
                  }} onClick={handleTextClick}>
                    {children}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneFrame;
