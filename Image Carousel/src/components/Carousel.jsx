import { useRef, useEffect, useState, useCallback } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import PropTypes from 'prop-types';

function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselBoxRef = useRef(null);
  const intervalRef = useRef(null);

  const updateActiveSlide = useCallback((index) => {
    const slides = carouselBoxRef.current?.children;
    if (slides) {
      [...slides].forEach((slide, i) => {
        slide.setAttribute('data-active', i === index ? 'true' : 'false');
      });
    }
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % children.length;
      updateActiveSlide(newIndex);
      return newIndex;
    });
  }, [children.length, updateActiveSlide]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? children.length - 1 : prevIndex - 1;
      updateActiveSlide(newIndex);
      return newIndex;
    });
  }, [children.length, updateActiveSlide]);

  const handleClick = (index) => {
    updateActiveSlide(index);
    setCurrentIndex(index);
  };

  useEffect(() => {
    updateActiveSlide(currentIndex);
  }, [currentIndex, updateActiveSlide]);

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 2500);
    return () => clearInterval(intervalRef.current);
  }, [handleNext]);

  const stopAutoSlide = () => clearInterval(intervalRef.current);
  const resumeAutoSlide = () => {
    intervalRef.current = setInterval(handleNext, 2500);
  };

  return (
    <div className='carousel'>
      <div
        ref={carouselBoxRef}
        onMouseEnter={stopAutoSlide}
        onMouseLeave={resumeAutoSlide}
        className='box'
      >
        {children}
      </div>

      <MdNavigateNext className='prev' onClick={handleNext} />
      <GrFormPrevious className='next' onClick={handlePrev} />
      <div className='dot-stepper'>
        {children.map((_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;
