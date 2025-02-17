import { useState } from 'react';

function Star({ starCounts }) {
  const [starValues, setStarValues] = useState();
  const [starHovers, setStarHovers] = useState(0);

  console.log(starHovers);

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {new Array(starCounts).fill(0).map((d, index) => (
        <span
          onClick={() => setStarValues(index + 1)}
          onMouseEnter={() => setStarHovers(index + 1)}
          onMouseLeave={() => setStarHovers(0)}
          key={index}
          style={{
            color:
              (starHovers == 0 && index < starValues) || index < starHovers
                ? 'gold'
                : '',
            fontSize: '50px',
            cursor: 'pointer',
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default Star;
