import Switch from './components/Switch';
import { useState } from 'react';
import './App.css';

function App() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Switch isOn={isOn} onToggle={handleToggle} />
    </div>
  );
}

export default App;
