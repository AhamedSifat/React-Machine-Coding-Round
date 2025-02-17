import ProgressBar from './components/ProgressBar';
import { useState, useEffect } from 'react';

const MAX = 100;
const MIN = 0;

function App() {
  const [value, setValue] = useState(MIN);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev === MAX) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '7px',
        fontFamily: 'sans-serif',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <span
        style={{
          fontWeight: 'bold',
        }}
      >
        Progress Bar
      </span>
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
