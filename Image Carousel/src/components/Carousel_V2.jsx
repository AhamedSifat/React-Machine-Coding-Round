import { useRef, useEffect, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import PropTypes from 'prop-types';

function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselBoxRef = useRef();
  const intervalRef = useRef(null);

  useEffect(() => {
    const carouselBox = carouselBoxRef.current;
    const silder = carouselBox.children;
    silder[currentIndex].setAttribute('data-active', 'true');

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const carouselBox = carouselBoxRef.current;
        const silder = carouselBox.children;

        const nextIndex = prevIndex === silder.length - 1 ? 0 : prevIndex + 1;

        silder[prevIndex].classList.remove('show');
        silder[prevIndex].classList.add('hide');

        silder[nextIndex].classList.remove('hide');
        silder[nextIndex].classList.add('show');

        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const carouselBox = carouselBoxRef.current;
      const silder = carouselBox.children;

      const nextIndex = prevIndex === 0 ? children.length - 1 : prevIndex - 1;

      silder[prevIndex].classList.remove('show');
      silder[prevIndex].classList.add('hide');

      silder[nextIndex].classList.remove('hide');
      silder[nextIndex].classList.add('show');

      return nextIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const carouselBox = carouselBoxRef.current;
      const silder = carouselBox.children;

      const nextIndex = prevIndex === silder.length - 1 ? 0 : prevIndex + 1;

      silder[prevIndex].classList.remove('show');
      silder[prevIndex].classList.add('hide');

      silder[nextIndex].classList.remove('hide');
      silder[nextIndex].classList.add('show');

      return nextIndex;
    });
  };

  const handleClick = (index) => {
    setCurrentIndex((prevIndex) => {
      const carouselBox = carouselBoxRef.current;
      const silder = carouselBox.children;

      const nextIndex = index;

      silder[prevIndex].classList.remove('show');
      silder[prevIndex].classList.add('hide');

      silder[nextIndex].classList.remove('hide');
      silder[nextIndex].classList.add('show');

      return nextIndex;
    });
  };

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const carouselBox = carouselBoxRef.current;
        const silder = carouselBox.children;

        const nextIndex = prevIndex === silder.length - 1 ? 0 : prevIndex + 1;

        silder[prevIndex].classList.remove('show');
        silder[prevIndex].classList.add('hide');

        silder[nextIndex].classList.remove('hide');
        silder[nextIndex].classList.add('show');

        return nextIndex;
      });
    }, 3000);
  };

  return (
    <div className='carousel'>
      <div
        ref={carouselBoxRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='box'
      >
        {children}
      </div>

      <GrFormPrevious className='next' onClick={handlePrev} />
      <MdNavigateNext className='prev' onClick={handleNext} />

      <div className='dot-stepper'>
        {Array.from({ length: children.length }).map((_, index) => (
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
