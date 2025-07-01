import React from 'react';

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fadeIn"
      onClick={onClose}
    >
      <span 
        className="absolute top-4 right-6 text-white text-4xl font-bold cursor-pointer"
        onClick={onClose}
      >
        &times;
      </span>
      <img 
        src={src} 
        alt="Enlarged screenshot" 
        className="max-w-[90%] max-h-[90%] object-contain"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the image
      />
    </div>
  );
};

export default ImageModal;
