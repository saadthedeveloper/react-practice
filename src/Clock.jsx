import { useState, useEffect } from 'react';
import ClockStyle from './ClockStyle';

function ClockLogic() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    // store the interval ID
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup function clears the interval
    return () => clearInterval(interval);
  }, []); // empty dependency array = run once on mount

  return <ClockStyle time={time} />;
}

export default ClockLogic;
