import Accordion from './Accordion';
import data from '../data.json';
import { useState } from 'react';

function Faq() {
  const [showIndex, setShowIndex] = useState(-1);

  const handleQnA = (index) => {
    setShowIndex((prev) => {
      if (prev === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  return (
    <div
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>FAQ's</h1>
      {data.faqs.map((d, index) => (
        <Accordion
          key={index}
          faq={d}
          show={showIndex === index}
          handleClick={() => handleQnA(index)}
        />
      ))}
    </div>
  );
}

export default Faq;
