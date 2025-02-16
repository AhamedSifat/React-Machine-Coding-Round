import { useState } from 'react';

function Accordion({ faq }) {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        border: '2px solid black',
        padding: '3px',
        marginBottom: '10px',
      }}
    >
      <h2
        style={{
          position: 'relative',
        }}
      >
        {faq.question}{' '}
        <span
          style={{
            position: 'absolute',
            right: '2rem',
            cursor: 'pointer',
          }}
          onClick={() => setShow(!show)}
        >
          {show ? '-' : '+'}
        </span>
      </h2>
      <div
        style={{
          maxHeight: show ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'all 0.3s ease-out',
          opacity: show ? 1 : 0,
        }}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}

export default Accordion;
