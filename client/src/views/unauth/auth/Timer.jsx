import React, { useState, useEffect } from 'react';

export default function Timer ({ duration, togglePlay }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) {
        return   
    }

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div>
      {timeLeft}
    </div>
  );
}
