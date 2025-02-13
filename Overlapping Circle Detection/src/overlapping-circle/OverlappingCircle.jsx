import './style.css';
import Circle from './Circle';
import { useEffect, useState } from 'react';

function OverlappingCircle() {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  function getRandomHexColor() {
    const randomInt = Math.floor(Math.random() * 16777216);
    const hexString = randomInt.toString(16).padStart(6, '0');
    return `#${hexString}`;
  }

  function handleDocumentClick(e) {
    const { clientX, clientY } = e;
    const newCircle = { clientX, clientY };

    setCircles((prevCircles) => {
      const clonedCircles = structuredClone(prevCircles);
      const newColor = getRandomHexColor();

      clonedCircles.forEach((c) => {
        const x1 = c.clientX;
        const y1 = c.clientY;

        const x2 = newCircle.clientX;
        const y2 = newCircle.clientY;

        const xDiff = x2 - x1;
        const yDiff = y2 - y1;

        const distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
        const RADIUS_SUM = 200; // each circle is of size 200.

        if (distance < RADIUS_SUM) {
          newCircle.color = newColor;
          c.color = newColor;
        }
      });

      return [...clonedCircles, newCircle];
    });
  }

  return (
    <div>
      {circles.map((coord, index) => (
        <Circle
          key={index}
          clientX={coord.clientX}
          color={coord.color}
          clientY={coord.clientY}
        />
      ))}
    </div>
  );
}

export default OverlappingCircle;
