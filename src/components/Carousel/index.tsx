import React, { useState } from 'react';
// import './Carousel.css';

type CarouselProps = {
  images: string[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [direction, setDirection] = useState<string>('');

  const goToPrevious = () => {
    if (!isAnimating) {
        setDirection('left');
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
          setIsAnimating(false);
        }, 500);
      }
  };

  const goToNext = () => {
    if (!isAnimating) {
        setDirection('right');
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
          setIsAnimating(false);
        }, 500);
      }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left-btn" onClick={goToPrevious}>
      <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div className="carousel-slide">
      <div 
          className={`carousel-image ${isAnimating ? `slide-${direction}` : ''}`}
        >
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
      </div>
      <button className="carousel-button right-btn" onClick={goToNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
