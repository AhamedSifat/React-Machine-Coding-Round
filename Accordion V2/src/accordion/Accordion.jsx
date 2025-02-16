function Accordion({ faq, show, handleClick }) {
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
          onClick={handleClick}
        >
          {show ? '-' : '+'}
        </span>
      </h2>
      {show && <p>{faq.answer}</p>}
    </div>
  );
}

export default Accordion;
