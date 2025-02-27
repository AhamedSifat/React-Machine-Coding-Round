import { useState, useEffect, useRef } from 'react';
function CountDownTimer() {
  const [time, setTime] = useState({
    hour: '',
    minute: '',
    second: '',
  });

  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    const copyTime = { ...time };
    copyTime.hour = parseInt(copyTime.hour) || 0;
    copyTime.minute = parseInt(copyTime.minute) || 0;
    copyTime.second = parseInt(copyTime.second) || 0;
    copyTime[e.target.name] = value;
    copyTime.minute += Math.floor(copyTime.second / 60);
    copyTime.second = copyTime.second % 60;
    copyTime.hour += Math.floor(copyTime.minute / 60);
    copyTime.minute = copyTime.minute % 60;
    setTime(copyTime);
  };

  const handleStart = () => {
    if (
      time.hour.length === 0 &&
      time.minute.length === 0 &&
      time.second.length === 0
    ) {
      return;
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime({
      hour: '',
      minute: '',
      second: '',
    });
  };

  useEffect(() => {
    if (isRunning) {
      if (
        time.hour.length === 0 &&
        time.minute.length === 0 &&
        time.second.length === 0
      ) {
        return;
      }
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          const copyPrevTime = { ...prevTime };
          copyPrevTime.second--;
          if (copyPrevTime.second < 0) {
            copyPrevTime.minute--;
            copyPrevTime.second = 59;
            if (copyPrevTime.minute < 0) {
              copyPrevTime.hour--;
              copyPrevTime.minute = 59;
              if (copyPrevTime.hour < 0) {
                clearInterval(intervalRef.current);
                return { hour: '', second: '', minute: '' };
              }
            }
          }
          return copyPrevTime;
        });
      }, 1000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, time.hour.length, time.minute.length, time.second.length]);

  return (
    <div>
      <div>
        <input
          disabled={isRunning}
          type='text'
          placeholder='HH'
          name='hour'
          value={time.hour}
          onChange={handleChange}
        />
        :
        <input
          disabled={isRunning}
          type='text'
          placeholder='MM'
          name='minute'
          value={time.minute}
          onChange={handleChange}
        />
        :
        <input
          disabled={isRunning}
          type='text'
          placeholder='SS'
          name='second'
          value={time.second}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleStart}>{!isRunning ? 'Start' : 'Pause'}</button>
        {isRunning && <button onClick={handleReset}>Reset</button>}
      </div>
    </div>
  );
}

export default CountDownTimer;
