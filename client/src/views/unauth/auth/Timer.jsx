import { useState, useEffect } from 'react';

export default function Timer ({ duration, activity, rounds }) {
  // console.log('using timer ', rounds)
  const [ timeLeft, setTimeLeft ] = useState(null);
  const [ roundsLeft, setRoundsLeft ] = useState(null);

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

  useEffect(() => {
    setTimeLeft(duration)
  }, [duration])

  // useEffect(() => {
  //   // exit early when we reach 0
  //   if (!roundsLeft) {
  //       return   
  //   }
  //   // save intervalId to clear the interval when the
  //   // component re-renders
  //   const intervalId = setInterval(() => {
  //     setTimeLeft(roundsLeft - 1);
  //   }, 1000);

  //   // clear interval on re-render to avoid memory leaks
  //   return () => clearInterval(intervalId);
  // }, [roundsLeft]);

  useEffect(() => {
    setRoundsLeft(rounds)
  }, [rounds])

  return (
    <div className='flex flex-col items-center'>
      <div>
        {activity}
      </div>
      <div>
        ROUNDS : {roundsLeft}
      </div>
      <div className='text-8xl'>
        {timeLeft}
      </div>
    </div>
  );
}
