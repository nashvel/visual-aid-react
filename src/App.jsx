import React, { useState, useEffect } from 'react';
import { slidesData } from './data/data.jsx';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import ImageModal from './components/ImageModal';
import PhoneFrame from './components/PhoneFrame';
import Navbar from './components/Navbar';
import './styles/styles.css';

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
      const imageSources = ["1st.jpg", "2nd.jpg", "3rd.jpg", "4th.jpg"];
      slide.content = (
        <div className="flex flex-wrap justify-center gap-4">
          {imageSources.map((imgSrc, i) => (
            <PhoneFrame key={i} imageSrc={`/images/${imgSrc}`} className="w-[200px] h-[450px]" />
          ))}
        </div>
      );
    }
    return <Slide key={index} data={slide} isActive={index === currentSlide} />;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="container">
          {slides[currentSlide]}
        </div>
      </main>

      <div className="py-8">
        <Navigation 
          current={currentSlide} 
          total={slidesData.length} 
          onPrev={goToPrevSlide} 
          onNext={goToNextSlide} 
          className="flex justify-center gap-4"
        />
      </div>

      <footer className="text-center py-4 text-sm text-gray-500">
      </footer>

      <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
}

export default App;
