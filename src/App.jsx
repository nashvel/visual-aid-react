import React, { useState, useEffect } from 'react';
import { slidesData } from './data/data.jsx';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import ImageModal from './components/ImageModal';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev < slidesData.length - 1 ? prev + 1 : prev));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleImageClick = (e) => {
      if (e.target.tagName === 'IMG' && e.target.closest('.gallery-item-container')) {
        setModalImage(e.target.src);
      }
    };
    document.addEventListener('click', handleImageClick);
    return () => document.removeEventListener('click', handleImageClick);
  }, [currentSlide]);

  // Add a wrapper div to identify gallery images
  const slides = slidesData.map((slide, index) => {
    if (slide.title === 'App Screenshots') {
        const originalContent = slide.content;
        slide.content = <div className="gallery-item-container">{originalContent}</div>;
    }
    return <Slide key={index} data={slide} isActive={index === currentSlide} />;
  });

  return (
    <div className="font-sans bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <header className="bg-blue-700 text-white py-6 px-4 text-center shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold">Duolingo Usability Analysis</h1>
        <p className="text-md md:text-lg mt-1">A Visual Aid for App Evaluation</p>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-4">
        {slides[currentSlide]}
      </main>

      <div className="py-4">
        <Navigation 
          current={currentSlide} 
          total={slidesData.length} 
          onPrev={goToPrevSlide} 
          onNext={goToNextSlide} 
        />
      </div>

      <footer className="text-center p-4 text-sm text-gray-500">
        <p>Analysis by VJ</p>
      </footer>

      <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
}

export default App;
