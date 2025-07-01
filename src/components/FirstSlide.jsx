import React, { useState, useEffect } from 'react';
import GifEmbed from './GifEmbed';
import PhoneFrame from './PhoneFrame';
import TextPopup from './TextPopup';

const FirstSlide = () => {
  const [showTextPopup, setShowTextPopup] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.phone-frame-container')) {
      setShowTextPopup(false);
    }
  };

  useEffect(() => {
    if (showTextPopup) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showTextPopup]);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
      <div className="w-[350px]">
        <PhoneFrame 
          onTextClick={() => {
            setIsSticky(true);
            setShowTextPopup(true);
          }}
          className="phone-frame-container"
          isSticky={isSticky}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-base font-semibold text-blue-700 mb-1">About Duolingo</p>
              <div className="space-y-1">
                <p className="text-sm text-gray-700">
                  A free language-learning app that teaches users various languages through gamified lessons. It is used by students, travelers, professionals, and anyone who wants to learn or practice a language like Spanish, French, Japanese, and many more. 
                </p>
                <p className="text-sm text-gray-700">
                  <span className="text-base font-bold text-gradient">Key Features:</span>
                  <br />
                  - Level-based system with short quizzes
                  <br />
                  - Pronunciation tasks
                  <br />
                  - Listening activities
                </p>
              </div>
            </div>
          </div>
        </PhoneFrame>
        {showTextPopup && (
          <div className="fixed inset-0 bg-transparent z-40" onClick={() => setShowTextPopup(false)} />
        )}
        <TextPopup
          show={showTextPopup}
          content={
            <>
              <p className="text-sm text-gray-700">
                A free language-learning app that teaches users various languages through gamified lessons. It is used by students, travelers, professionals, and anyone who wants to learn or practice a language like Spanish, French, Japanese, and many more.
              </p>
              <p className="text-sm text-gray-700 mt-4">
                <span className="text-base font-bold">Key Features:</span>
                <ul className="list-disc list-inside mt-2">
                  <li>Level-based system with short quizzes</li>
                  <li>Pronunciation tasks</li>
                  <li>Listening activities</li>
                </ul>
              </p>
            </>
          }
        />
      </div>
      <div className="w-[400px]">
        <div className="neomorph-card">
          <GifEmbed url="https://media.tenor.com/2wQz4j_3B7wAAAAj/duolingo.gif" postid="14942587648261574823" />
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
