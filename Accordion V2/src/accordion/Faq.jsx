import Accordion from './Accordion';
import data from '../data.json';
import { useState } from 'react';

function Faq() {
  const [showIndex, setShowIndex] = useState(-1);

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
          handleClick={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
}

export default Faq;
