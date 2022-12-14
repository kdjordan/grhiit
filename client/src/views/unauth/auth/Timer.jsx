import { useState, useEffect } from 'react';

export default function Timer ({ duration }) {
  const [timeLeft, setTimeLeft] = useState(null);

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
    console.log('new timer ', intervalId)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(duration)
  }, [duration])

  return (
    <div>
      {timeLeft}
    </div>
  );
}
